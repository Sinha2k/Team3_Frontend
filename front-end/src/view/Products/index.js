import React, { useState } from "react";
import ProductsStyle from "../../styled/Products";
import Filters from "../../data/Filter";
import Products from "../../data/Products";
import { Wrapper as PopperWrapper } from "../../component/util/Popper/index";
import Sort from "../../component/Filter/Sort";
import Size from "../../component/Filter/Size";
import Color from "../../component/Filter/Color";
import Price from "../../component/Filter/Price";
import ProductCard from "../../component/util/ProductCard";
import Loading from "../../component/Loading";

import Tippy from "@tippyjs/react/headless";
import { CloseOutlined, DownOutlined } from "@ant-design/icons";

const ProductsPage = () => {
  const [active, setActive] = useState("product");

  const [filter, setFilter] = useState("");

  const [loading, setLoading] = useState(false);

  const [filterValue, setFilterValue] = useState({
    sort: active,
    size: [],
    color: "",
    instock: false,
    price: [],
    categories: "",
    material: [],
  });

  let propsArray = [
    "size",
    "color",
    "instock",
    "price",
    "categories",
    "material",
  ];

  const removeOption = (item) => {
    let props = item.key;
    if (["size", "price", "material", "color"].includes(props)) {
      let array = filterValue[props];
      const element = array.find((el) => el === item.value);
      array = array.filter((e) => e !== element);
      setFilterValue({ ...filterValue, [props]: array });
    } else {
      setFilterValue({ ...filterValue, [props]: "" });
    }
  };

  const handleClearAll = () => {
    setFilterValue({
      sort: active,
      size: [],
      color: "",
      instock: false,
      price: [],
      categories: "",
      material: [],
    });
  };

  const displayOptions = () => {
    let array = [];
    propsArray.forEach((props) => {
      if (filterValue[props] && filterValue[props].length > 0) {
        if (typeof filterValue[props] === "object") {
          filterValue[props].forEach((item) =>
            array.push({ key: props, value: item })
          );
        } else {
          array.push({ key: props, value: filterValue[props] });
        }
      } else if (props === "instock" && filterValue[props] === true) {
        array.push({ key: props, value: true });
      }
    });

    return array.map((item, index) => {
      switch (item.key) {
        case "size":
          return (
            <button onClick={() => removeOption(item)} key={index}>
              <CloseOutlined />
              <span>
                {item.value.name} {item.value.minimum} - {item.value.maximum} "
              </span>
            </button>
          );
        case "instock":
        case "color":
          return (
            <button onClick={() => removeOption(item)} key={index}>
              <CloseOutlined />
              <span>{item.key === "instock" ? "Còn hàng" : item.value}</span>
            </button>
          );
        case "price":
          return (
            <button onClick={() => removeOption(item)} key={index}>
              <CloseOutlined />
              <span>
                $ {item.value.min} - {item.value.max}
              </span>
            </button>
          );
        case "material":
        case "categories":
          return (
            <button onClick={() => removeOption(item)} key={index}>
              <CloseOutlined />
              <span>
                {item.key === "material"
                  ? `Chất liệu - ${item.value}`
                  : `Thể loại - ${item.value}`}
              </span>
            </button>
          );
        default:
          return null;
      }
    });
  };

  const handleShowmore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <ProductsStyle>
      <div className="products-page-title">
        <h1>Tất cả sản phẩm</h1>
      </div>
      <div className="products-page-body">
        <div className="filter-products">
          <div className="filter-information">
            <div>
              <span>100 sản phẩm</span>
              <div className="text-toggle">
                <div
                  className={`${active === "product" ? "active" : ""}`}
                  onClick={() => setActive("product")}
                >
                  Sản phẩm
                </div>
                <div
                  className={`${active === "room" ? "active" : ""}`}
                  onClick={() => setActive("room")}
                >
                  Phòng
                </div>
              </div>
            </div>
          </div>
          <div className="filter-bar">
            {Filters.map((item) => (
              <Tippy
                key={item.id}
                interactive={true}
                offset={[40, 10]}
                visible={filter === item.name}
                placement="bottom"
                render={(attrs) => {
                  switch (item.name) {
                    case "Sắp xếp":
                    case "Thể loại":
                      return (
                        <div {...attrs}>
                          <PopperWrapper>
                            <Sort
                              setFilterValue={setFilterValue}
                              filterValue={filterValue}
                              type={item.name}
                              value={item.value}
                            />
                          </PopperWrapper>
                        </div>
                      );
                    case "Kích thước":
                      return (
                        <div {...attrs}>
                          <PopperWrapper>
                            <Size
                              filterValue={filterValue}
                              setFilterValue={setFilterValue}
                              value={item.value}
                            />
                          </PopperWrapper>
                        </div>
                      );
                    case "Màu sắc":
                      return (
                        <div {...attrs}>
                          <PopperWrapper>
                            <Color
                              setFilterValue={setFilterValue}
                              filterValue={filterValue}
                              value={item.value}
                            />
                          </PopperWrapper>
                        </div>
                      );
                    case "Giá":
                    case "Chất liệu":
                      return (
                        <div {...attrs}>
                          <PopperWrapper>
                            <Price
                              setFilterValue={setFilterValue}
                              filterValue={filterValue}
                              type={item.name}
                              value={item.value}
                            />
                          </PopperWrapper>
                        </div>
                      );
                    default:
                      return <div {...attrs}></div>;
                  }
                }}
              >
                <button
                  style={
                    filter === item.name
                      ? { borderColor: "#111", background: "#dfdfdf" }
                      : {}
                  }
                  className={`filter-bar-button ${
                    filter === item.name ? "active" : ""
                  }`}
                  onClick={() => {
                    if (!filter || filter !== item.name) {
                      setFilter(item.name);
                      if (item.name === "Còn hàng") {
                        setFilterValue({ ...filterValue, instock: true });
                      }
                    } else {
                      setFilter("");
                      if (item.name === "Còn hàng") {
                        setFilterValue({ ...filterValue, instock: false });
                      }
                    }
                  }}
                  key={item.id}
                >
                  <span
                    style={
                      item.name === "Còn hàng" ? { marginRight: "0px" } : {}
                    }
                  >
                    {item.name}
                  </span>
                  {item.name !== "Còn hàng" && <DownOutlined />}
                </button>
              </Tippy>
            ))}
          </div>
        </div>
        {displayOptions().length > 0 && (
          <div className="display-options-filter">
            {displayOptions()}
            <button onClick={() => handleClearAll()}>
              <span>Clear all</span>
            </button>
          </div>
        )}
        <div className="products-list-display">
          {Products.map((item) => (
            <ProductCard product={item} />
          ))}
        </div>
      </div>
      <div className="product-page-footer">
        <div className="show-quantity">
          <span>Showing 16 of 1000</span>
        </div>
        <div>
          {/* <span>Show more</span> */}
          <span onClick={() => handleShowmore()}>
            {!loading ? (
              "Show more"
            ) : (
              <Loading width="7px" height="7px" background="#484848" />
            )}
          </span>
        </div>
      </div>
    </ProductsStyle>
  );
};

export default ProductsPage;
