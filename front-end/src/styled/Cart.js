import styled from "styled-components";

const cartStyle = styled.div`
  margin-left: 110px;
  margin-right: 40px;
  margin-top: 6rem;
  display: flex;
  .cart-container {
    width: 55%;
    .cart-desc {
      font-weight: 700;
      margin-bottom: 1.5rem;
    }
    .method {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      width: 100%;
      li {
        display: flex;
        margin-bottom: 1rem;
        min-height: 5.5rem;
        flex: 1 1;
        .active {
          border: 2px solid #0058a3;
          &:hover {
            border-color: #0058a3;
          }
        }
        button {
          align-items: center;
          background: none;
          border: 1px solid rgba(223, 223, 223, 1);
          cursor: pointer;
          display: flex;
          flex: 1 1;
          min-height: 3.25rem;
          padding: 1.25rem 1.5rem;
          text-decoration: none;
          font-size: 0.875rem;
          color: #484848;
          border-radius: 0.25rem;
          div {
            display: flex;
            align-items: center;
            span {
              margin-left: 1rem;
              font-weight: 700;
            }
          }
          &:hover {
            border-color: rgba(146, 146, 146, 1);
          }
        }
      }
    }

    .product-list-cart {
      div {
        &:last-child {
          border: 0;
        }
      }
    }
  }
  .checkout-container {
    width: 35%;
    height: fit-content;
    margin-left: 5%;
    padding: 1rem 1.5rem;
    border-radius: 20px;
    box-shadow: -2px -2px 15px 10px rgba(0, 0, 0, 0.05);
    h2 {
      margin-top: 1rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    .checkout-detail {
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-weight: 600;
        margin-bottom: 8px;
        &:nth-child(3) {
          border-bottom: 1px solid #dfdfdf;
          padding-bottom: 1rem;
        }
        span {
          &:nth-child(2) {
            color: #484848;
          }
        }
      }
      button {
        outline: none;
        border: 0;
        background: #0058a3;
        color: #fff;
        border-radius: 5px;
        padding: 0.7rem;
        width: 100%;
        font-weight: 700;
        font-size: 1rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        cursor: pointer;
        display: inline-block;
        justify-content: center;
        align-items: center;
        &:hover {
          background: #004f93;
        }
        .anticon {
          background: #fff;
          padding: 0.4rem;
          border-radius: 50%;
          color: #111;
          margin-left: 1rem;
        }
      }
    }
    .checkout-method {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 2rem;
      img {
        height: 35px;
        margin-right: 15px;
        cursor: pointer;
      }
    }
    .checkout-button {
      width: 100%;
      border-radius: 64px;
      display: inline-block;
      background: #111;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 700;
      padding: 1rem 0;
      cursor: pointer;
      &:hover {
        background: rgba(51, 51, 51, 1);
      }
    }

    .discount-code {
      margin-top: 2rem;
      p {
        font-weight: 700;
      }
      span {
        font-size: 0.875rem;
        color: #484848;
      }
      div {
        width: 100%;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        color: #484848;
        input {
          outline: none;
          border: 1px solid rgba(223, 223, 223, 1);
          background: 0;
          border-radius: 0.25rem;
          font-size: 1rem;
          color: #484848;
          padding: 0.5rem;
          width: 70%;
          &:focus-within {
            border-color: #929292;
          }
        }
        button {
          border-radius: 50px;
          font-size: 0.875rem;
          padding: 0.5rem 1.5rem;
          outline: none;
          background: 0;
          border: 1px solid #dfdfdf;
          cursor: pointer;
          margin-left: 20px;
          display: inline-block;
          justify-content: center;
          align-items: center;
          &:hover {
            border-color: #929292;
          }
        }
      }
    }
    .checkout-more {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      padding-bottom: 2rem;
      span {
        color: #484848;
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        text-decoration: underline;
        cursor: pointer;
        width: fit-content;
      }
    }
  }
`;

export default cartStyle;
