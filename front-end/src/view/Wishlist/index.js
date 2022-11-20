import React from "react";
import { useState } from "react";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import Slider from "react-slick";
import styled from "styled-components";

import CartStyled from "../../styled/Cart";
import Cart from "../../data/Cart";
import truck from "../../assets/svgIcons/truck.svg";
import atlanta from "../../assets/svgIcons/atlanta.svg";
import CartItem from "../../component/util/CartItem";
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

const Wishlist = () => {
  const [method, setMethod] = useState("");
  const [productCard, setProductCard] = useState();

  return (
    <>
      <CartStyled>
        <div className="cart-container">
          <h1>Ưa thích</h1>
          <div className="cart-desc">
            Quản lý sản phẩm ưa thích của bạn tại đây
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
              <CartItem type="wish-list" key={item.id} cart={item} />
            ))}
          </div>
        </div>
        <div className="checkout-container">
          <h2
            style={{ borderBottom: "1px solid #dfdfdf", paddingBottom: "1rem" }}
          >
            Danh sách mong muốn
          </h2>
          <div className="checkout-detail">
            <div style={{ fontWeight: "700" }}>
              <span>Tổng tiền</span>
              <span>
                $
                {Cart.reduce((prev, item) => {
                  return prev + item.product.price * item.quantity;
                }, 0)}
              </span>
            </div>
            <div style={{ fontWeight: "700" }}>
              <span>Tổng khối lượng</span>
              <span>1.25kg</span>
            </div>
            <button>
              <span>
                <span>Thêm tất cả sản phẩm vào giỏ hàng</span>
                <ArrowRightOutlined />
              </span>
            </button>
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

export default Wishlist;
