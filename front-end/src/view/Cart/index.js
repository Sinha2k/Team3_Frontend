import React from "react";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import styled from "styled-components";

import CartStyled from "../../styled/Cart";
import truck from "../../assets/svgIcons/truck.svg";
import atlanta from "../../assets/svgIcons/atlanta.svg";
import Cart from "../../data/Cart";
import CartItem from "../../component/util/CartItem";
import momo from "../../assets/images/momo.JPG";
import visa from "../../assets/images/visa.JPG";
import vnpay from "../../assets/images/vnpay.JPG";
import zalopay from "../../assets/images/zalopay.JPG";
import productsList from "../../data/Products";
import ProductCard from "../../component/util/ProductCard";

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
  const [method, setMethod] = useState("");
  const [productCard, setProductCard] = useState();

  return (
    <>
      <CartStyled>
        <div className="cart-container">
          <h1>Giỏ hàng</h1>
          <div className="cart-desc">
            Bạn đang có {Cart?.length} sản phẩm trong giỏ hàng
          </div>
          <ul className="method">
            <li>
              <button
                className={`${method === "Delivery" && "active"}`}
                onClick={() => setMethod("Delivery")}
              >
                <div>
                  <img src={truck} alt="" />
                  <span>Giao hàng tận nhà</span>
                </div>
              </button>
            </li>
            <li>
              <button
                className={`${method === "Pick up" && "active"}`}
                onClick={() => setMethod("Pick up")}
              >
                <div>
                  <img src={atlanta} alt="" />
                  <span>Nhận tại cửa hàng</span>
                </div>
              </button>
            </li>
          </ul>
          <div className="product-list-cart">
            {Cart.map((item) => (
              <CartItem type="cart" key={item.id} cart={item} />
            ))}
          </div>
        </div>
        <div className="checkout-container">
          <h2>Hóa đơn thanh toán</h2>
          <div className="checkout-detail">
            <div>
              <span>Giá trị đơn hàng</span>
              <span>
                $
                {Cart.reduce((prev, item) => {
                  return prev + item.product.price * item.quantity;
                }, 0)}
              </span>
            </div>
            <div>Khuyến mãi và chiết khấu</div>
            <div>Vận chuyển</div>
            <div>
              <span>Tổng cộng</span>
              <span>
                $
                {Cart.reduce((prev, item) => {
                  return prev + item.product.price * item.quantity;
                }, 0)}
              </span>
            </div>
          </div>
          <div className="checkout-method">
            {[momo, visa, zalopay, vnpay].map((item, index) => (
              <img key={index} alt="" src={item} />
            ))}
          </div>
          <button className="checkout-button">Thanh toán ngay</button>
          <div className="discount-code">
            <p>Bạn có mã khuyến mãi?</p>
            <span>
              Nếu bạn có mã khuyến mãi, mã thẻ thành viên,... nhập mã vào đây để
              nhận được mức giá ưu đãi
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
