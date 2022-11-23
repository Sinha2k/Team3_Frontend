import styled from "styled-components";

const ProductDetail = styled.div`
  margin-left: 110px;
  margin-right: 40px;
  margin-top: 6rem;
  .loading-page {
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product-detail-container {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-column-gap: 1.25rem;
    .gallery-product-image {
      margin: 0;
      grid-row: 3;
      grid-column-end: span 8;
      .gallery-body {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 2rem;
        scroll-snap-type: x mandatory;
        img {
          scroll-snap-align: start;
          scroll-snap-stop: always;
          flex: none;
          margin-left: 0.625rem;
          margin-right: 0.625rem;
          width: calc((100% / 2) - 1.25rem);
          margin-bottom: 1.25rem;
        }
      }
      .gallery-button {
        display: block;
        margin: 0 auto 0 auto;
        border: 0;
        background: transparent;
        border-radius: 64px;
        cursor: pointer;
        outline: 0;
        &:hover {
          span {
            text-decoration: underline;
          }
        }
        span {
          min-height: 2.5rem;
          padding: 0 1.5rem;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          border: 1px solid rgba(17, 17, 17, 1);
          border-radius: 64px;
          font-weight: 700;
        }
      }
    }
    .product-detail-content {
      grid-column-start: 9;
      grid-column-end: span 4;
      padding: 0 2.5rem;
      grid-row-start: 3;
      grid-row-end: span 2;
      align-self: flex-start;
      .product-detail-information {
        .product-name-desc {
          margin-bottom: 0.5rem;
          h1 {
            font-size: 2.25rem;
            line-height: 1.3333333333;
            letter-spacing: -0.039375rem;
            color: #111;
            font-weight: 700;
            display: flex;
            flex-direction: column;
            margin-top: 0;
            margin-bottom: 0;
            span {
              font-size: 1.05rem;
              line-height: 1.45;
              letter-spacing: -0.0042em;
              &:nth-child(1) {
                font-weight: 700;
                text-transform: uppercase;
              }
              &:nth-child(2) {
                font-weight: 400;
              }
            }
          }
        }
        .product-price {
          display: flex;
          padding: 0 0 0.375rem 0;
          align-items: center;
          margin-top: -5px;
          span {
            font-size: 1rem;
            display: inline-block;
            font-weight: bold;
            color: #000;
            vertical-align: text-top;
            text-align: start;
            margin-right: 2px;
            &:nth-child(2) {
              line-height: 1.1875;
              font-size: 1.7rem;
              margin-top: 2px;
            }
          }
        }
        button {
          margin-bottom: 0.75rem;
          padding: 0;
          background: 0;
          border: none;
          outline: none;
          font-size: 0.75rem;
          display: flex;
          margin-top: 0.8rem;
          align-items: center;
          cursor: pointer;
          &:hover {
            span {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .financial-service {
      margin-bottom: 1.5rem;
      a {
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.5;
        color: rgba(72, 72, 72, 1);
      }
    }
    .sold-separately {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      line-height: 1.5;
      margin-bottom: 1.5rem;
      color: rgba(72, 72, 72, 1);
      img {
        margin-right: 5px;
      }
    }
    .picker-product-color {
      border-top: 1px solid rgba(223, 223, 223, 1);
      button {
        background: 0;
        outline: none;
        border: 0;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        padding: 1.25rem 0;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        min-height: 5.625rem;
        color: #484848;
        text-decoration: none;
        span {
          text-align: left;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          &:nth-child(1) {
            width: 92%;
          }
          span {
            font-size: 0.875rem;
            line-height: 1.571;
            &:nth-child(1) {
              color: #111;
              font-weight: 700;
              margin-bottom: 3px;
            }
          }
        }
      }
      .display-option-color {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        align-items: center;
        margin-bottom: 0.5rem;
        img {
          border-radius: 0.25rem;
          margin-bottom: 0.5rem;
          position: relative;
          height: 4.375rem;
          width: 4.375rem;
          margin-right: 0.5rem;
          padding: 0 0.25rem;
          flex-shrink: 0;
          cursor: pointer;
          border: 1px solid transparent;
          &:hover {
            border-color: rgba(146, 146, 146, 1);
          }
        }
      }
    }
    .section-container-header {
      display: flex;
      margin: 0.5rem 0;
      justify-content: space-between;
      align-items: center;
      h2 {
        color: #111;
        font-size: 0.875rem;
        line-height: 1.571;
        font-weight: 700;
      }
      a {
        font-weight: 400;
        color: #484848;
        font-size: 0.875rem;
        &:hover {
          color: #111;
        }
      }
    }
    .item-availability-group {
      border: solid 1px rgb(223, 223, 223, 1);
      border-radius: 0.5rem;
      padding: 0.25rem 1rem;
      margin-bottom: 1rem;
      font-size: 0.875rem;
      .availability-item {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        color: rgb(72, 72, 72, 1);
        &:nth-child(2) {
          border-top: 1px solid rgb(223, 223, 223, 1);
          border-bottom: 1px solid rgb(223, 223, 223, 1);
        }
        div {
          padding: 0 0.75rem;
          display: flex;
          flex-direction: column;
          div {
            padding: 0;
            color: #111;
            margin-bottom: 3px;
            display: flex;
            flex-direction: row;
            align-items: center;
            span {
              width: 0.4em;
              height: 0.4em;
              min-width: 0.75rem;
              min-height: 0.75rem;
              border-radius: 64px;
              background: #0a8a00;
              margin-left: 5px;
            }
          }
        }
      }
    }

    .product-detail-button {
      margin-top: 2rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      button {
        position: relative;
        font-size: 0.875rem;
        background: none;
        border: 0;
        padding: 0;
        line-height: 1.4285714286;
        font-weight: bold;
        text-align: center;
        display: inline-flex;
        border-radius: 64px;
        cursor: pointer;
        outline: 0;
        vertical-align: top;
      }
      .add-to-bag {
        margin-right: 1rem;
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        flex-direction: column;
        button {
          background: #0058a3;
          color: white;
          &:hover {
            background: #004f93;
          }
          .addCart-button {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            min-height: 3.5rem;
            padding: 0 2rem;
            width: 100%;
            div {
              transform: translateY(-5px);
            }
            span {
              margin-right: 5px;
              padding: 0;
            }
          }
        }
      }
      .add-to-wishlist {
        span {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 3.5rem;
          width: 100%;
          border: 1px solid rgba(17, 17, 17, 1);
          padding: 0 1rem;
          border-radius: 64px;
        }
      }
    }

    .total-affordability {
      margin-top: 1rem;
      border: 1px solid #dfdfdf;
      border-radius: 8px;
      padding: 1.5rem;
      h2 {
        font-size: 1rem;
        color: #0077c1;
        margin-bottom: 1rem;
        margin-top: 0;
      }
      ul {
        margin-bottom: 1rem;
        margin-left: 0;
        padding: 0;
        li {
          display: flex;
          list-style: none;
          color: #484848;
          align-items: flex-start;
          .anticon {
            font-size: 0.65rem;
            margin-right: 5px;
            margin-top: 3px;
          }
          span {
            margin-top: 0;
            padding: 0;
            font-size: 0.875rem;
            line-height: 1.571;
          }
        }
      }
      a {
        text-decoration: underline;
        font-weight: 400;
        color: #484848;
        font-size: 0.875rem;
        &:hover {
          color: #111;
        }
      }
    }
  }

  .related-product {
    margin-top: 6rem;
    position: relative;
    width: 100%;
    .products-list {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(4, 276px);
      grid-column-gap: 10px;
    }
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
  }

  .modal-body {
    .product-variation {
      display: flex;
      flex-direction: column;
      h2 {
        margin-top: 0;
        font-size: 1.5rem;
        line-height: 1.45;
        letter-spacing: -0.0042em;
        margin-bottom: 1.5rem;
      }
      color: rgba(17, 17, 17, 1);
      .display-options-variation {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .variation-item {
          border-radius: 0.25rem;
          margin-bottom: 1rem;
          padding: 1.25rem 1.5rem;
          min-height: 3rem;
          display: flex;
          align-items: center;
          cursor: pointer;
          justify-content: space-between;
          border: 1px solid rgba(223, 223, 223, 1);
          &:hover {
            border-color: rgba(146, 146, 146, 1);
          }
          span {
            font-size: 0.875rem;
            line-height: 1.571;
            font-weight: 700;
            &:nth-child(2) {
              margin-left: 10rem;
              font-weight: 500;
            }
          }
          img {
            width: 50px;
            height: 50px;
            object-fit: cover;
          }
        }
      }
      .product-reviews {
        margin-bottom: 1.5rem;
        h1 {
          font-size: 2.25rem;
          line-height: 1.333;
          letter-spacing: -0.0063em;
          font-weight: 700;
          color: #111;
          margin-top: 0;
          margin-bottom: 0;
        }
        div {
          display: flex;
          align-items: center;
          .numOfRev {
            line-height: normal;
            font-size: 0.75rem;
            color: #484848;
            position: relative;
          }
        }
      }
      .write-review {
        font-size: 0.75rem;
        margin-bottom: 2.5rem;
        line-height: 1.3333333333;
        color: #fff;
        font-weight: bold;
        text-align: center;
        display: inline-flex;
        border-radius: 64px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: 0;
        vertical-align: top;
        border: 0;
        min-height: 2.5rem;
        padding: 0 1.5rem;
        background: #111;
        &:hover {
          background: rgba(51, 51, 51, 1);
        }
      }
      .sort-filter-reviews {
        border-bottom: 1px solid #dfdfdf;
        border-top: 1px solid #dfdfdf;
        padding-top: 2rem;
        padding-bottom: 2rem;
        h3 {
          margin-top: 0;
          color: #111111;
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 700;
        }
        .reviews-statistic {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .reviews-statis-item {
            display: flex;
            align-items: center;
            margin-bottom: 1.25rem;
            button {
              padding-right: 0.75rem;
              margin-right: 0.625rem;
              padding-left: 1.25rem;
              height: 2.5rem;
              position: relative;
              font-size: 0.875rem;
              line-height: 1.4285714286;
              font-weight: bold;
              text-align: center;
              display: inline-flex;
              cursor: pointer;
              outline: 0;
              vertical-align: top;
              border-radius: 64px;
              justify-content: center;
              align-items: center;
              min-height: 3.5rem;
              color: #111;
              background: #f5f5f5;
              border: 1px solid #f5f5f5;
              &:hover {
                background: #dfdfdf;
              }
              .anticon {
                font-size: 1.1rem;
              }
              span {
                font-weight: 700;
                &:nth-child(1) {
                  margin-right: 0.3rem;
                }
              }
            }
            .statis-chart {
              margin-right: 0.625rem;
              width: 15rem;
              background-color: #dfdfdf;
              height: 1.5rem;
              position: relative;
              div {
                position: absolute;
                top: 0;
                left: 0;
                background-color: #003e72;
                height: 100%;
              }
            }
            .statis-quantity {
              min-width: 3.75rem;
              text-align: end;
              color: #484848;
              font-size: 0.875rem;
              line-height: 1.571;
            }
          }
        }

        .active {
          .anticon {
            transform: rotate(180deg);
          }
        }

        button {
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

      .display-reviews-list {
        .display-header {
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
          font-size: 1.5rem;
          line-height: 1.45;
          letter-spacing: -0.0042em;
          color: #111;
          font-weight: 700;
        }
        .reviews-grid {
          .review-card {
            border-bottom: 1px solid #dfdfdf;
            margin-top: 2rem;
            padding-bottom: 2rem;
            .review-card-author {
              align-items: center;
              display: flex;
              justify-content: space-between;
              padding-bottom: 0.75rem;
              .fa {
                font-size: 0.9rem;
              }
              .review-name-time {
                display: flex;
                span {
                  color: #484848;
                  font-size: 0.75rem;
                  line-height: 1.5;
                  &:nth-child(2) {
                    margin-left: 5px;
                    margin-right: 5px;
                  }
                }
              }
            }
            .review-content {
              margin-bottom: 0.5rem;
              color: #484848;
              font-size: 0.95rem;
              line-height: 1.5;
            }
          }
        }
      }

      .reviews-pagination {
        display: flex;
        align-items: center;
        margin-top: 4rem;
        .pagination-text {
          font-size: 0.75rem;
        }
        .disabled {
          color: #929292;
          cursor: default;
          background: #dfdfdf;
          border-color: #dfdfdf;
        }
        button {
          font-size: 0.75rem;
          line-height: 1.3333333333;
          margin-left: 0.5rem;
          background: none;
          border: 1px solid #111;
          font-weight: bold;
          text-align: center;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          outline: none;
          vertical-align: top;
          cursor: pointer;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          &:hover {
            border-width: 2px;
          }
          span {
            font-size: 1rem;
          }
        }
      }

      .rating-bar {
        width: 100%;
        display: flex;
        justify-content: space-between;
        label {
          width: 20%;
          display: flex;
          justify-content: center;
          &:last-child {
            width: 0;
          }
        }
        input {
          margin-right: 20px;
        }
      }
      textarea {
        margin-top: 2rem;
        resize: vertical;
        padding: 0.5rem;
        line-height: 1.625;
        max-width: 100%;
        min-height: 6rem;
        outline: none;
        font-size: 1rem;
        border: 1px solid #484848;
        border-radius: 4px;
        &:focus-within {
          border-color: #0058a3;
          border-width: 2px;
        }
      }
      .words-limit {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
        color: #484848;
        span {
          font-size: 0.75rem;
          margin-left: 0;
        }
      }
    }
  }
`;

export default ProductDetail;
