import React from "react";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";

import cartimg from "../../../assets/svgIcons/cart.svg";

const CartStyle = styled.div`
  border-bottom: 1px solid #dfdfdf;
  color: #484848;
  display: flex;
  font-size: 0.875rem;
  line-height: 1.571;
  padding: 2.5rem 0;
  .image-container {
    margin-right: 1rem;
    cursor: pointer;
    img {
      height: 8.75rem;
      min-width: 8.75rem;
    }
  }
  .information-container {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(1, fit-content(70px) [row-start] 40px [row-end]);
    line-height: 1.57;
    width: 100%;
    grid-row-gap: 1.25rem;
    ul {
      color: #484848;
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      li {
        padding: 0;
        margin: 0;
        color: #484848;
        min-height: 0px;
        &:nth-child(1) {
          font-size: 1rem;
          line-height: 1.625;
          text-transform: uppercase;
          font-weight: 700;
          a {
            text-decoration: none;
            color: #484848;
            padding: 0;
            margin: 0;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        &:nth-child(3),
        &:nth-child(4) {
          span {
            margin-right: 5px;
          }
        }
      }
    }

    .product-controls {
      min-height: 2.5rem;
      display: grid;
      grid-column: 1/3;
      align-items: center;
      grid-row: 2;
      grid-template-columns: 5.3125rem max-content auto;
      font-size: 0.875rem;
      color: #484848;
      button {
        outline: none;
        border-radius: 64px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        margin-inline-end: 0.5rem;
        background: #fff;
        padding: 0 0.5rem;
        min-height: 2.5rem;
        background: #0058a3;
        margin-left: 1.25rem;
        &:hover {
          background: #004f93;
        }
      }
      .control_quantity {
        align-self: center;
        grid-column: 1;
        max-width: 5.625rem;
        position: relative;
        select {
          border-radius: 50px;
          font-size: 16px;
          padding: 0.78125rem 2.8125rem 0.78125rem 1.5rem;
          transform: scale(0.75);
          transform-origin: left center;
          width: 125%;
          appearance: none;
          background: #fff;
          border: 1px solid #dfdfdf;
          color: #111;
          display: block;
          font-weight: 400;
          line-height: 1.625;
          margin: 0;
          outline: 0;
          text-align: left;
          text-align-last: left;
          text-indent: 0;
          cursor: pointer;
          &:hover {
            border-color: #929292;
          }
        }
        .anticon {
          height: 2rem;
          width: 1.25rem;
          display: inline-block;
          vertical-align: middle;
          pointer-events: none;
          position: absolute;
          right: 1rem;
          top: 1.2rem;
        }
      }

      div {
        &:nth-child(2),
        &:nth-child(3) {
          margin-left: 1.25rem;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .product-price {
      text-align: right;
      white-space: nowrap;
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;

const CartItem = ({ cart, type }) => {
  return (
    <CartStyle>
      <div className="image-container">
        <img alt="" src={cart?.product?.attachment} />
      </div>
      <div className="information-container">
        <ul className="product-information">
          <li>
            <a href={`/furnituno/product/${cart.product.id}`}>
              {cart.product.name}
            </a>
          </li>
          <li>
            <span>{cart.product.description}</span>
          </li>
          <li>
            <span>{cart.product.color}</span>
            <span>-</span>
            <span>{cart.product.material}</span>
          </li>
          <li>
            {["Chiều dài", "Chiều rộng", "Chiều sâu", "Chiều cao"].map(
              (item, index) => (
                <span key={index}>
                  {cart.product.size[item]} {index === 3 ? "cm" : "x"}
                </span>
              )
            )}
          </li>
        </ul>
        <div className="product-controls">
          <div className="control_quantity">
            <select>
              <optgroup>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </optgroup>
            </select>
            <DownOutlined />
          </div>
          {type === "cart" ? (
            <>
              <div>Xóa sản phẩm</div>
              <div>Thêm vào ưa thích</div>
            </>
          ) : (
            <>
              <button>
                <img alt="" src={cartimg} />
              </button>
              <div>Xóa</div>
            </>
          )}
        </div>
        <div className="product-price">${cart.product.price}</div>
      </div>
    </CartStyle>
  );
};

export default CartItem;
