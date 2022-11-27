import React, { useEffect } from "react";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import CartStyled from "../../styled/Cart";
import truck from "../../assets/svgIcons/truck.svg";
import atlanta from "../../assets/svgIcons/atlanta.svg";
// import Cart from "../../data/Cart";
import CartItem from "../../component/util/CartItem";
import momo from "../../assets/images/momo.JPG";
import visa from "../../assets/images/visa.JPG";
import vnpay from "../../assets/images/vnpay.JPG";
import zalopay from "../../assets/images/zalopay.JPG";
import ProductCard from "../../component/util/ProductCard";
import Loading from "../../component/Loading";
import Modal from "../../component/Modal";
import { checkout } from "../../redux-toolkit/reducer/cartSliceReducer";
import { getAllProduct } from "../../redux-toolkit/reducer/productSliceReducer";

const Style = styled.div`
  margin-left: 110px;
  margin-right: 40px;
  margin-top: 6rem;
  position: relative;
  h2 {
    font-size: 1.5rem;
    line-height: 1.45;
    letter-spacing: -0.0042em;
    margin-bottom: 2rem;
  }
  &:hover {
    .btn-arrow {
      visibility: visible;
    }
  }
  .btn-arrow {
    width: 100%;
    visibility: hidden;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 45%;
    .anticon {
      color: #fff;
      height: 18px;
      width: 18px;
      padding: 8px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #111;
      z-index: 20;
      cursor: pointer;
    }
  }
`;

const CartPage = () => {
  const [productCard, setProductCard] = useState();
  const [visible, setVisible] = useState(false);
  let initialState = {
    note: "",
    payment_type: "Thanh toán khi nhận hàng",
    address: "",
  };
  const [orderInfor, setOrderInfor] = useState(initialState);

  const Cart = useSelector((state) => state.cart.cart);
  const totalCart = useSelector((state) => state.cart.totalCart);
  const loadingPage = useSelector((state) => state.cart.status);
  const loadingCheckout = useSelector((state) => state.cart.statusCheckout);
  const productsList = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    setVisible(true);
  };

  const handleChangeText = (e) => {
    const { value, name } = e.target;
    setOrderInfor({ ...orderInfor, [name]: value });
  };

  const handleCheckoutSubmit = () => {
    if (totalCart > 0) {
      dispatch(checkout(orderInfor));
      if (loadingCheckout === "success") {
        setOrderInfor(initialState);
      }
    } else {
      window.alert("Bạn chưa có sản phẩm nào trong giỏ hàng");
    }
  };

  const renderChildren = () => (
    <>
      <h2>Điền thông tin sau</h2>
      <TextareaAutosize
        aria-label="minimum height"
        onChange={(e) => handleChangeText(e)}
        name="address"
        value={orderInfor.address}
        minRows={6}
        required={true}
        placeholder="Nhập địa chỉ tại đây..."
        style={{ width: "100%", marginBottom: "2rem", padding: "10px" }}
      />
      <TextareaAutosize
        aria-label="minimum height"
        onChange={(e) => handleChangeText(e)}
        name="note"
        value={orderInfor.note}
        minRows={6}
        required={true}
        placeholder="Nhập ghi chú về đơn hàng..."
        style={{ width: "100%", padding: "10px" }}
      />
    </>
  );

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <>
      <CartStyled>
        {loadingPage === "loading" ? (
          <div className="loading-page">
            <Loading width="20px" height="20px" background="#0058a3" />
          </div>
        ) : (
          <>
            <div className="cart-container">
              <h1>Giỏ hàng</h1>
              <div className="cart-desc">
                Bạn đang có {Cart?.length} sản phẩm trong giỏ hàng
              </div>
              <ul className="method">
                <li>
                  <button
                    className={`${
                      orderInfor.payment_type === "Thanh toán khi nhận hàng" &&
                      "active"
                    }`}
                    onClick={() =>
                      setOrderInfor({
                        ...orderInfor,
                        payment_type: "Thanh toán khi nhận hàng",
                      })
                    }
                  >
                    <div>
                      <img src={truck} alt="" />
                      <span>Thanh toán khi nhận hàng</span>
                    </div>
                  </button>
                </li>
                <li>
                  <button
                    className={`${
                      orderInfor.payment_type === "Thanh toán ngay" && "active"
                    }`}
                    onClick={() =>
                      setOrderInfor({
                        ...orderInfor,
                        payment_type: "Thanh toán ngay",
                      })
                    }
                  >
                    <div>
                      <img src={atlanta} alt="" />
                      <span>Thanh toán ngay</span>
                    </div>
                  </button>
                </li>
              </ul>
              {Cart?.length > 0 ? (
                <div className="product-list-cart">
                  {Cart.map((item) => (
                    <CartItem type="cart" key={item.id} cart={item} />
                  ))}
                </div>
              ) : (
                <span>
                  Sản phẩm trong giò hàng của bạn sẽ được hiển thị tại đây.
                </span>
              )}
            </div>
            <div className="checkout-container">
              <h2>Hóa đơn thanh toán</h2>
              <div className="checkout-detail">
                <div>
                  <span>Giá trị đơn hàng</span>
                  <span>${totalCart}</span>
                </div>
                <div>Khuyến mãi và chiết khấu</div>
                <div>Vận chuyển</div>
                <div>
                  <span>Tổng cộng</span>
                  <span>${totalCart}</span>
                </div>
              </div>
              <div className="checkout-method">
                {[momo, visa, zalopay, vnpay].map((item, index) => (
                  <img key={index} alt="" src={item} />
                ))}
              </div>
              <button
                onClick={() => handleCheckout()}
                className="checkout-button"
              >
                Thanh toán ngay
              </button>
              <div className="discount-code">
                <p>Bạn có mã khuyến mãi?</p>
                <span>
                  Nếu bạn có mã khuyến mãi, mã thẻ thành viên,... nhập mã vào
                  đây để nhận được mức giá ưu đãi
                </span>
                <div>
                  <input />
                  <button>Gửi</button>
                </div>
              </div>
              <div className="checkout-more">
                <span>
                  Hoàn trả sản phẩm nếu khách hàng không ưng trong vòng 1 tháng
                </span>
                <span>Bảo mật mua hàng</span>
              </div>
            </div>
            <Modal
              visible={visible}
              setVisible={setVisible}
              children={renderChildren()}
              footer={true}
              option={"Check out"}
              handleSubmit={handleCheckoutSubmit}
            />
          </>
        )}
      </CartStyled>
      <Style>
        <h2>Sản phẩm bạn có thể thích</h2>
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
      </Style>
    </>
  );
};

export default CartPage;
