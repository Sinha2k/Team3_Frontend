import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavbarFurnitunoStyle from "../../styled/NavbarFurnituno";
import truck from "../../assets/svgIcons/truck.svg";
import shopping_bag from "../../assets/svgIcons/shopping_bag.svg";
import heart from "../../assets/svgIcons/heart.svg";
import zip_code from "../../assets/svgIcons/zip-code.svg";
import atlanta from "../../assets/svgIcons/atlanta.svg";
import logo from "../../assets/images/logo.png";
import { Wrapper as PopperWrapper } from "../../component/util/Popper/index";

import {
  CameraOutlined,
  CloseOutlined,
  GlobalOutlined,
  LoadingOutlined,
  MenuOutlined,
  RightOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { getAllCart } from "../../redux-toolkit/reducer/cartSliceReducer";
import Tippy from "@tippyjs/react/headless";
import { searchProduct } from "../../redux-toolkit/reducer/productSliceReducer";

const NavbarFurnituno = () => {
  const [appear, setAppear] = useState(false);

  const [navbar, setNavbar] = useState("");

  const [sliderBar, setSliderBar] = useState(false);

  const [keyword, setKeyword] = useState("");

  const [y, setY] = useState(window.scrollY);

  const numOfProduct = useSelector((state) => state.cart.numOfProduct);
  const productListSearch = useSelector(
    (state) => state.product.productListSearch
  );
  const loadingSearch = useSelector((state) => state.product.statusSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);

  // useEffect(() => {
  //   if (keyword) {
  //     dispatch(searchProduct(keyword));
  //   }
  // }, [keyword, dispatch]);

  const appearNavbar = (e) => {
    if (window.scrollY > 500) {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setNavbar("active");
      } else if (y < window.scrollY) {
        if (navbar) {
          setNavbar("hide");
        }
      }
      setY(window.scrollY);
    } else {
      setNavbar("");
    }
  };

  window.addEventListener("scroll", (e) => appearNavbar(e));

  const handleOnChangeSearch = (e) => {
    setKeyword(e.target.value);
  };

  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY2OTM1NDAxOSwiZXhwIjo5NjY5MzU1ODE5fQ.Yzmfh6R2sJT0idfd75ok-lvxLVgvTLNxVnjF5e07xVq8VLBoFXj6Uvo35IJFB40BnSxQzZPzlIm7ylWFjsCZbQ";

  useEffect(() => {
    localStorage.setItem("token", token);
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (keyword) {
        dispatch(searchProduct(keyword));
      }
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [keyword, dispatch]);

  return (
    <NavbarFurnitunoStyle>
      <div className="menu-hambuger-container">
        <div className="menu-hambuger-inner">
          <div className="menu-hambuger">
            <span>
              <MenuOutlined onClick={() => setAppear(true)} />
            </span>
            <span>Menu</span>
          </div>
        </div>
      </div>

      <header
        className={`${
          window.scrollY > 500
            ? navbar === "active"
              ? "active"
              : navbar === "hide"
              ? "hide"
              : ""
            : ""
        }`}
      >
        <div className="header-container">
          <div className="header-container-inner">
            <div className="header-container-main">
              <div className="header-logo">
                <a href="/furnituno">
                  <img alt="" src={logo} />
                </a>
              </div>
              <div className="header-search">
                <Tippy
                  visible={keyword ? true : false}
                  interactive={true}
                  offset={[0, 8]}
                  placement="bottom"
                  render={(attrs) => {
                    return (
                      <div
                        className="search-list"
                        style={{ width: "570px" }}
                        {...attrs}
                      >
                        <PopperWrapper style={{ padding: "0" }}>
                          {productListSearch?.length > 0 ? (
                            productListSearch?.map((item) => (
                              <a href={`/furnituno/product/${item.productId}`}>
                                <div className="search-card">
                                  <span key={item.productId}>
                                    {item.nameProduct}
                                  </span>
                                  <img alt="" src={item.image} />
                                </div>
                              </a>
                            ))
                          ) : (
                            <div
                              style={{
                                cursor: "default",
                                padding: "10px 20px",
                              }}
                              className="search-card"
                            >
                              <span>Không tìm thấy kết quả phù hợp</span>
                            </div>
                          )}
                        </PopperWrapper>
                      </div>
                    );
                  }}
                >
                  <div className="search-field">
                    <span style={{ left: "30px" }}>
                      <SearchOutlined />
                    </span>
                    <input
                      onChange={handleOnChangeSearch}
                      placeholder="Bạn đang cần tìm gì?"
                    />
                    {loadingSearch === "loading" && (
                      <span style={{ right: "70px" }}>
                        <LoadingOutlined />
                      </span>
                    )}
                    <span style={{ right: "40px" }}>
                      <CameraOutlined />
                    </span>
                  </div>
                </Tippy>
              </div>
              <ul className="header-icons">
                <li onClick={() => setSliderBar(true)}>
                  <span>
                    <UserOutlined />
                  </span>
                  <span>Đăng nhập hoặc đăng kí</span>
                </li>
                <li>
                  <span>
                    <img alt="" src={truck} />
                  </span>
                </li>
                <li>
                  <a href="/furnituno/wish-list">
                    <span>
                      <img alt="" src={heart} />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/furnituno/cart">
                    <span>
                      <img alt="" src={shopping_bag} />
                      <span>{numOfProduct}</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="navbar">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/furnituno/all-products">Sản phẩm</a>
            </li>
            <li>
              <a href="/">Vật dụng trong nhà</a>
            </li>
            <li>
              <a href="/">Phòng</a>
            </li>
            <li>
              <a href="/">Thiết kế</a>
            </li>
            <li>
              <a href="/">Giao dịch</a>
            </li>
          </ul>
          <div className="navigation-container">
            <div className="nav-item">
              <img alt="" src={atlanta} />
              <span>Việt Nam</span>
            </div>
            <div className="nav-item">
              <img alt="" src={zip_code} />
              <span>Nhập mã ZIP </span>
            </div>
          </div>
        </nav>
      </div>

      <div
        onClick={() => {
          setAppear(false);
          setSliderBar(false);
        }}
        className={`sidebar-layer ${appear || sliderBar ? "appear" : ""}`}
      ></div>
      <aside className={`${appear ? "appear" : ""}`}>
        <div className="sidebar-top">
          <span>
            <CloseOutlined onClick={() => setAppear(false)} />
          </span>
          <div className="sidebar-logo">
            <a href="/furnituno">
              <img
                style={{ width: "170px", height: "80px" }}
                alt=""
                src={logo}
              />
            </a>
          </div>
        </div>
        <div className="sidebar-body">
          <nav>
            <ul>
              {[
                "Sản phẩm",
                "Vật dụng trong nhà",
                "Phòng",
                "Thiết kế",
                "Giao dịch",
              ].map((item, index) => (
                <li key={index}>
                  <a href={`/furnituno/${item}`}>{item}</a>
                </li>
              ))}
            </ul>
            <ul>
              {["Thông tin mới", "Ý tưởng", "Quà tặng", "Cộng đồng"].map(
                (item, index) => (
                  <li key={index}>
                    <a href={`/furnituno/${item}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
            <ul>
              {[
                "Hồ sơ",
                "Đơn hàng",
                "Vị trí cửa hàng",
                "Dịch vụ khách hàng",
              ].map((item, index) => (
                <li key={index}>
                  <a href={`/furnituno/${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="side-button">
          <a href="/furnituno">
            <GlobalOutlined />
            <span>Quốc gia</span>
          </a>
        </div>
      </aside>

      <div
        style={{
          transform: `${sliderBar ? "translate(0px)" : "translate(480px)"}`,
        }}
        className="function-slider"
      >
        <section className="slider-header">
          <CloseOutlined onClick={() => setSliderBar(false)} />
          <div className="header-content">
            <h2>Hola</h2>
            <a href="/login">
              <span>Đăng nhập</span>
            </a>
          </div>
          <div className="header-link">
            <a href="/sign-up">
              <span>Tạo tài khoản Furnituno</span>
              <RightOutlined />
            </a>
          </div>
        </section>
        <section className="slider-body">
          <ul>
            {[
              "Thiết kế của tôi",
              "Lịch sử mua hàng",
              "Danh sách mua sắm",
              "Kế hoạch",
              "Theo dõi đơn hàng",
            ].map((item, index) => (
              <li key={index}>
                <a href={`/ikea/${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </NavbarFurnitunoStyle>
  );
};

export default NavbarFurnituno;
