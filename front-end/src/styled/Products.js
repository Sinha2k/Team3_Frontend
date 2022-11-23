import styled from "styled-components";

const Products = styled.div`
  margin-left: 110px;
  margin-right: 40px;
  .loading-page {
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .products-page-title {
    margin: 1.875rem 0;
    h1 {
      font-size: 2.25rem;
      line-height: 1.33333;
      overflow-wrap: break-word;
    }
  }
  .products-page-body {
    .filter-products {
      display: flex;
      flex-direction: column;
      .filter-information {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        text-align: center;
        div {
          display: flex;
          align-items: center;
          span {
            color: #929292;
            font-size: 0.75rem;
            white-space: nowrap;
            margin-inline-end: 0.75rem;
          }
          .text-toggle {
            display: flex;
            align-items: center;
            .active {
              border-color: #111;
              z-index: 2;
              position: relative;
            }
            div {
              background: transparent;
              cursor: pointer;
              text-align: center;
              color: #111;
              font-weight: 700;
              line-height: 1.5;
              font-size: 0.75rem;
              padding: 0 0.75rem;
              border: 1px solid #dfdfdf;
              min-height: 1.875rem;
              &:nth-child(1) {
                border-radius: 4px 0px 0px 4px;
              }
              &:nth-child(2) {
                border-radius: 0px 4px 4px 0px;
                margin-inline-start: -1px;
              }
            }
          }
        }
      }
      .filter-bar {
        padding-top: 1.75rem;
        padding-bottom: 1.75rem;
        position: sticky;
        top: 0;
        display: block;
        float: left;
        z-index: 99;
        background: #fff;
        border-bottom: 1px solid #dfdfdf;
        .active {
          .anticon {
            transform: rotate(180deg);
          }
        }
        .filter-bar-button {
          padding-inline-end: 1rem;
          flex-direction: row;
          line-height: 1.3333333333;
          min-height: 2.5rem;
          padding: 0 1.5rem;
          text-align: center;
          display: inline-flex;
          border-radius: 64px;
          cursor: pointer;
          outline: 0;
          vertical-align: top;
          color: #111;
          background: #f5f5f5;
          border: 1px solid transparent;
          justify-content: center;
          align-items: center;
          margin-right: 1rem;
          &:hover {
            background: #dfdfdf;
          }
          span {
            font-size: 0.75rem;
            font-weight: 700;
            &:nth-child(1) {
              margin-right: 10px;
            }
            &:nth-child(2) {
              font-size: 1rem;
            }
          }
        }
      }
    }
    .display-options-filter {
      padding: 2.2rem 0 1.25rem 0;
      width: 100%;
      overflow-x: auto;
      overflow-y: hidden;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      button {
        margin: 0 0.75rem 0.75rem 0;
        padding-inline-start: 1rem;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.3333333333;
        min-height: 2.5rem;
        padding: 0 1.5rem;
        border: 1px solid #111;
        background: #f5f5f5;
        border-radius: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .anticon {
          margin-right: 10px;
        }
        &:hover {
          background: #dfdfdf;
        }
        &:last-child {
          border-color: #f5f5f5;
        }
      }
    }
    .products-list-display {
      display: grid;
      grid-template-columns: repeat(4, 253px);
      grid-gap: 2rem;
      margin-top: 3rem;
      border-bottom: 1px solid #dfdfdf;
      padding-bottom: 3rem;
    }
  }
  .product-page-footer {
    margin-top: 2.5rem;
    margin-bottom: 7rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    align-items: center;
    .show-quantity {
      width: 200px;
      border-bottom: 2px solid #dfdfdf;
      padding-bottom: 1rem;
      span {
        margin-bottom: 0.875rem;
      }
    }
    div {
      &:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
        span {
          width: calc(200px - 8rem);
          padding: 0 4rem;
          min-height: 2.5rem;
          border-radius: 64px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #111;
          cursor: pointer;
          font-weight: 700;
          &:hover {
            text-decoration: underline;
          }
          div {
            transform: translateY(-5px);
          }
        }
      }
    }
  }
`;

export default Products;
