import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CheckOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  StarFilled,
} from "@ant-design/icons";
import Slider from "react-slick";
import Tippy from "@tippyjs/react/headless";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";

import ProductDetailStyle from "../../styled/ProductDetail";
// import productsList from "../../data/Products";
import Rating from "../../component/util/Rating";
import infor from "../../assets/svgIcons/infor.svg";
import truck from "../../assets/svgIcons/truck.svg";
import atlanta from "../../assets/svgIcons/atlanta.svg";
import heart from "../../assets/svgIcons/heart.svg";
import ProductCard from "../../component/util/ProductCard";
import Modal from "../../component/Modal";
import { Wrapper as PopperWrapper } from "../../component/util/Popper/index";
import Sort from "../../component/Filter/Sort";
import Reviews from "../../data/Reviews";
import Review from "../../component/Review";
import Loading from "../../component/Loading";
import {
  getAllProduct,
  getProductById,
} from "../../redux-toolkit/reducer/productSliceReducer";

const ProductDetail = () => {
  const [detailProduct, setDetailProduct] = useState();
  const [colorChoose, setColorChoose] = useState();
  const [sizeChoose, setSizeChoose] = useState();
  const [materialChoose, setMaterialChoose] = useState();
  const [productCard, setProductCard] = useState();
  const [visible, setVisible] = useState(false);
  const [sortReviews, setSortReviews] = useState(false);
  const [writeReview, setWriteReview] = useState(false);
  const [key, setKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const product = useSelector((state) => state.product.product);
  const productsList = useSelector((state) => state.product.productList);
  const loadingPage = useSelector((state) => state.product.status);
  const dispatch = useDispatch();

  const params = useParams();

  const reviews_statistic = [
    { rating: 1, percent: 23, quantity: 13 },
    { rating: 2, percent: 12, quantity: 7 },
    { rating: 3, percent: 42, quantity: 25 },
    { rating: 4, percent: 53, quantity: 34 },
    { rating: 5, percent: 84, quantity: 56 },
  ];

  const renderChildren = () => {
    switch (key) {
      case "color":
      case "size":
        return (
          <div className="product-variation">
            <h2>Choose {key}</h2>
            <div className="display-options-variation">
              {key === "color"
                ? detailProduct[key].map((item) => (
                    <div
                      style={
                        colorChoose === item.color
                          ? {
                              borderColor: "#111",
                              justifyContent: "flex-start",
                              position: "relative",
                            }
                          : {
                              justifyContent: "flex-start",
                              position: "relative",
                            }
                      }
                      onClick={() => setColorChoose(item.color)}
                      className="variation-item"
                    >
                      <img alt="" src={item.image} />
                      <span style={{ marginLeft: "20px" }}>{item.color}</span>
                      <span
                        style={{
                          fontWeight: "400",
                          right: "1rem",
                          position: "absolute",
                        }}
                      >
                        Còn{" "}
                        {detailProduct?.stock
                          ?.filter((st) => st.color === item.color)
                          .reduce((prev, itm) => {
                            return prev + itm.stock;
                          }, 0)}
                      </span>
                    </div>
                  ))
                : detailProduct[key].map((item) => (
                    <div
                      style={
                        materialChoose === item || sizeChoose === item
                          ? { borderColor: "#111" }
                          : {}
                      }
                      onClick={() =>
                        key === "size"
                          ? setSizeChoose(item)
                          : setMaterialChoose(item)
                      }
                      className="variation-item"
                    >
                      <span>{item}</span>
                      {/* {item.subPrice > 0 && <span>+ $ {item.subPrice}</span>} */}
                      <span>
                        Còn{" "}
                        {detailProduct?.stock
                          ?.filter((st) => st.size === item)
                          .reduce((prev, itm) => {
                            return prev + itm.stock;
                          }, 0)}
                      </span>
                    </div>
                  ))}
            </div>
          </div>
        );
      default:
        return writeReview ? (
          <Review />
        ) : (
          <div className="product-variation">
            <h2 style={{ marginTop: "4rem", marginBottom: "2.5rem" }}>
              Reviews
            </h2>
            <div className="product-reviews">
              <h1>{detailProduct?.rating}</h1>
              <div>
                <Rating value={detailProduct?.rating} />
                <span className="numOfRev">{detailProduct?.numOfReviews}</span>
              </div>
            </div>
            <button
              onClick={() => setWriteReview(true)}
              className="write-review"
            >
              Viết đánh giá
            </button>
            <div className="sort-filter-reviews">
              <h3>Lọc đánh giá</h3>
              <div className="reviews-statistic">
                {reviews_statistic.map((item, index) => (
                  <div key={index} className="reviews-statis-item">
                    <button>
                      <span>{item.rating}</span>
                      <StarFilled />
                    </button>
                    <div className="statis-chart">
                      <div style={{ width: `${item.percent}%` }}></div>
                    </div>
                    <div className="statis-quantity">{item.quantity}</div>
                  </div>
                ))}
              </div>
              <Tippy
                interactive={true}
                visible={sortReviews}
                offset={[20, 10]}
                render={(attrs) => (
                  <div {...attrs}>
                    <PopperWrapper>
                      <Sort
                        type="Sắp xếp"
                        value={[
                          "Most recent",
                          "Oldest",
                          "Highest rated",
                          "Lowest rated",
                        ]}
                      />
                    </PopperWrapper>
                  </div>
                )}
              >
                <button
                  onClick={() => setSortReviews(!sortReviews)}
                  className={`${sortReviews ? "active" : ""}`}
                >
                  <span>Sắp xếp theo</span>
                  <DownOutlined />
                </button>
              </Tippy>
            </div>
            <div className="display-reviews-list">
              <div className="display-header">Mới nhất</div>
              <div className="reviews-grid">
                {Reviews.map((item) => (
                  <div key={item.id} className="review-card">
                    <div className="review-card-author">
                      <Rating value={item.rate} />
                      <div className="review-name-time">
                        <span>{item.user_name}</span>
                        <span>-</span>
                        <span>{moment(item.created_date).format("L")}</span>
                      </div>
                    </div>
                    <div className="review-content">{item.comment}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reviews-pagination">
              <span className="pagination-text">
                Showing {Reviews.length} of 100
              </span>
              <button className="disabled">
                <LeftOutlined />
              </button>
              <button>
                <RightOutlined />
              </button>
            </div>
          </div>
        );
    }
  };

  const handleOpenModal = (keyValue) => {
    setVisible(true);
    setKey(keyValue);
  };

  const addCartSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  useEffect(() => {
    if (params) {
      // setDetailProduct(
      //   productsList.find((item) => item.id.toString() === params.id)
      // );
      dispatch(getProductById(params.id));
    }
  }, [params, dispatch]);

  useEffect(() => {
    if (product) {
      setDetailProduct(product);
      if (product?.size?.length > 0 && product?.color?.length > 0) {
        setColorChoose(product?.color[0].color);
        setMaterialChoose(product?.material);
        setSizeChoose(product?.size[0]);
      }
    }
  }, [product]);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <ProductDetailStyle>
      {loadingPage === "loading" ? (
        <div className="loading-page">
          <Loading width="20px" height="20px" background="#0058a3" />
        </div>
      ) : (
        <>
          <div className="product-detail-container">
            <div className="gallery-product-image">
              <div className="gallery-body">
                <img alt="" src={detailProduct?.image} />
                {detailProduct?.gallery?.map((item, index) => (
                  <img key={index} alt="" src={item} />
                ))}
              </div>
              <button className="gallery-button">
                <span>Xem thêm hình ảnh</span>
              </button>
            </div>
            <div className="product-detail-content">
              <div className="product-detail-information">
                <div className="product-name-desc">
                  <h1>
                    <span>{detailProduct?.name}</span>
                    <span>{detailProduct?.description}</span>
                  </h1>
                </div>
                <div className="product-price">
                  <span>$</span>
                  <span>{Math.floor(detailProduct?.price)}</span>
                  <span>
                    .
                    {detailProduct?.price * 100 -
                      Math.floor(detailProduct?.price) * 100}
                  </span>
                </div>
                <button onClick={() => handleOpenModal("Đánh giá")}>
                  <Rating value={detailProduct?.rate} />
                  <span>({detailProduct?.num_of_reviews})</span>
                </button>
              </div>
              <div className="financial-service">
                <a href="/furnituno">
                  Kiếm 5% phần thưởng tại Furnituno bằng Thẻ tín dụng Furnituno
                  Visa. Chi tiết
                </a>
              </div>
              <div className="sold-separately">
                <img alt="" src={infor} />
                <span>Không bao gồm các phụ kiện.</span>
              </div>
              <div className="picker-product-color">
                <button onClick={() => handleOpenModal("color")}>
                  <span>
                    <span>Chọn màu</span>
                    <span>{colorChoose}</span>
                  </span>
                  <RightOutlined />
                </button>
                <div className="display-option-color">
                  {detailProduct?.color?.map((item, index) => (
                    <img
                      style={
                        colorChoose === item.color
                          ? { borderColor: "black" }
                          : {}
                      }
                      key={index}
                      onClick={() => setColorChoose(item.color)}
                      alt=""
                      src={item.image}
                    />
                  ))}
                </div>
              </div>
              <div className="picker-product-color">
                <button onClick={() => handleOpenModal("size")}>
                  <span>
                    <span>Chọn kích thước</span>
                    <span>{sizeChoose}</span>
                  </span>
                  <RightOutlined />
                </button>
              </div>
              <div className="picker-product-color">
                <button>
                  <span>
                    <span>Chọn chất liêu</span>
                    <span>{materialChoose}</span>
                  </span>
                  <RightOutlined />
                </button>
              </div>
              <div className="section-container-header">
                <h2>Làm thế nào để nhận</h2>
                <a href="/furnituno">Change store</a>
              </div>
              <div className="item-availability-group">
                <div className="availability-item">
                  <img alt="" src={truck} />
                  <div>
                    <div>
                      <strong>Vận chuyển</strong>
                    </div>
                    <span>
                      <u>Nhập zip code của bạn để giao hàng</u>
                    </span>
                  </div>
                </div>
                <div className="availability-item">
                  <img alt="" src={atlanta} />
                  <div>
                    <div>
                      <strong>Lấy hàng</strong>
                      <span></span>
                    </div>
                    <span>
                      Lấy hàng tại <u>Hà Nội</u>
                    </span>
                  </div>
                </div>
                <div className="availability-item">
                  <img alt="" src={atlanta} />
                  <div>
                    <div>
                      <strong>Cửa hàng</strong>
                      <span></span>
                    </div>
                    <span>
                      Còn hàng tại <u>Hà Nội</u>
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-detail-button">
                <div className="add-to-bag">
                  <button onClick={() => addCartSubmit()}>
                    <span className="addCart-button">
                      {!loading ? (
                        !success ? (
                          "Thêm vào giỏ hàng"
                        ) : (
                          <>
                            <CheckOutlined />
                            Thành công
                          </>
                        )
                      ) : (
                        <Loading width="7px" height="7px" background="#fff" />
                      )}
                    </span>
                  </button>
                </div>
                <button className="add-to-wishlist">
                  <span>
                    <img alt="" src={heart} />
                  </span>
                </button>
              </div>
              <div className="total-affordability">
                <h2>Lợi ích gia đình Furnituno</h2>
                <ul>
                  <li>
                    <CheckOutlined />
                    <span>Giao hàng chiết khấu cho các giao dịch</span>
                  </li>
                  <li>
                    <CheckOutlined />
                    <span>Giảm giá 5% tại cửa hàng</span>
                  </li>
                </ul>
                <a href="/furnituno">Tìm hiểu thêm</a>
              </div>
            </div>
          </div>
          <div className="related-product">
            <h2>Xem thêm các sản phẩm</h2>
            {productsList?.length <= 4 ? (
              <div className="products-list">
                {productsList.map((item) => (
                  <ProductCard product={item} />
                ))}
              </div>
            ) : (
              <>
                {" "}
                <Slider
                  ref={(c) => setProductCard(c)}
                  infinite={false}
                  slidesToShow={4.3}
                  slidesToScroll={3}
                >
                  {productsList.map((item) => (
                    <ProductCard product={item} />
                  ))}
                </Slider>
                <div className="btn-arrow">
                  <LeftOutlined onClick={() => productCard.slickPrev()} />
                  <RightOutlined onClick={() => productCard.slickNext()} />
                </div>
              </>
            )}
          </div>
          <Modal
            visible={visible}
            setVisible={setVisible}
            children={renderChildren()}
            footer={key === "Đánh giá" && writeReview}
            setWriteReview={setWriteReview}
          />
        </>
      )}
    </ProductDetailStyle>
  );
};

export default ProductDetail;
