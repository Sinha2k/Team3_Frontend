import React from "react";
import styled from "styled-components";
import cart from "../../../assets/svgIcons/cart.svg";
import heart from "../../../assets/svgIcons/heart.svg";
import Rating from "../Rating";

const CardStyle = styled.div`
  a {
    text-decoration: none;
    .product-card {
      max-width: 25rem;
      position: relative;
      &:hover {
        h3 {
          text-decoration: underline;
        }
      }
      .product-card-attachment {
        img {
          width: 100%;
        }
      }
      .product-card-body {
        span {
          color: #484848;
          font-size: 0.875rem;
          line-height: 1.571;
          font-weight: 400;
          letter-spacing: 0;
          margin-bottom: 0.5rem;
        }
        .highlight {
          color: #ca5008;
          font-weight: 700;
        }
        h3 {
          font-size: 0.875rem;
          line-height: 1.571;
          display: block;
          font-weight: 700;
          text-transform: uppercase;
          color: #111;
          margin: 0;
          padding: 0;
        }
        .product-price {
          display: flex;
          padding: 0 0 0.375rem 0;
          align-items: center;
          margin-top: 5px;
          span {
            font-size: 0.6875rem;
            display: inline-block;
            font-weight: bold;
            color: #000;
            vertical-align: text-top;
            text-align: start;
            margin-right: 2px;
            &:nth-child(2) {
              line-height: 1.1875;
              font-size: 1.375rem;
              margin-top: 2px;
            }
          }
        }
      }
      .product-card-footer {
        display: flex;
        align-items: center;
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
          &:nth-child(1) {
            background: #0058a3;
            &:hover {
              background: #004f93;
            }
          }
          &:nth-child(2) {
            &:hover {
              background: #f5f5f5;
            }
          }
        }
      }
      .product-available {
        margin-top: 1.5rem;
        display: flex;
        align-items: center;
        span {
          font-size: 0.875rem;
          line-height: 1.571;
          color: #484848;
          &:nth-child(1) {
            background: #0a8a00;
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }
    }
  }
`;

const ProductCard = ({ product }) => {
  return (
    <CardStyle>
      <a href={`/furnituno/product/${product.productId}`}>
        <div className="product-card">
          <div className="product-card-attachment">
            <img alt="" src={product.image} />
          </div>
          <div className="product-card-body">
            <span className="highlight">New</span>
            <h3>{product.nameProduct}</h3>
            <span>{product.description}</span>
            <div className="product-price">
              <span>$</span>
              <span>{Math.floor(product.price)}</span>
              <span>
                .{product.price * 100 - Math.floor(product.price) * 100}
              </span>
            </div>
            <div style={{ display: "flex", marginBottom: "5px" }}>
              <Rating value={product.rate} />
              <span style={{ marginLeft: "10px" }}>
                ({product.numOfReviews})
              </span>
            </div>
          </div>
          <div className="product-card-footer">
            <button>
              <img alt="" src={cart} />
            </button>
            <button>
              <img alt="" src={heart} />
            </button>
          </div>
          <div className="product-available">
            <span></span>
            <span>Còn hàng tại kho Thẩm Quyến</span>
          </div>
        </div>
      </a>
    </CardStyle>
  );
};

export default ProductCard;
