import styled from "styled-components";

const Homepage = styled.div`
  margin-left: 110px;
  margin-right: 40px;
  section {
    h2 {
      font-size: 1.5rem;
      line-height: 1.45;
      margin-top: 0;
      margin-bottom: 0px;
    }
    margin-top: 4rem;
    .pub-teaser-header {
      display: flex;
      position: relative;
      margin-bottom: 2rem;
      .pub-teaser-info {
        h2 {
          font-size: 1.5rem;
          line-height: 1.45;
          margin-top: 0;
          margin-bottom: 0px;
        }
        p {
          color: #484848;
          margin-top: 10px;
          margin-bottom: 0;
        }
      }
      a {
        text-decoration: none;
        color: black;
        position: relative;
        right: 0;
        bottom: 0;
        font-size: 0.75rem;
        background: none;
        border: 1px solid #111;
        padding: 0.7rem 1.5rem;
        position: absolute;
        line-height: 1.333333;
        font-weight: bold;
        text-align: center;
        border-radius: 64px;
        cursor: pointer;
        outline: 0;
        vertical-align: top;
      }
    }
    .pub-teaser-body {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(5, 120px);
      /* grid-template-rows: repeat(7, minmax(0, 1fr)); */
      grid-auto-flow: dense;
      grid-gap: 1.25rem;
      /* height: calc(100vw * 1.66 - 2.5rem); */
      /* min-height: 28.3125rem; */
      /* max-height: calc(100vh - 3.25rem); */
      grid-auto-rows: 300px;
      div {
        position: relative;
        cursor: pointer;
        img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
        span {
          .pub-teaser {
            position: absolute;
            transform: translateX(-1rem) translateY(-1rem) scale(0.999);
            padding: 0;
            width: 2rem;
            height: 2rem;
            border: 2px solid transparent;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 64px;
            line-height: 0.5;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
              border-color: rgba(255, 255, 255, 0.5);
              &::after {
                transform: scale(0.6);
              }
            }
            &::after {
              content: "";
              height: 0.8rem;
              width: 0.8rem;
              background: white;
              border-radius: 50%;
            }
          }
        }
        &:nth-child(1) {
          grid-row: span 5;
          grid-column: span 2;
          img {
            width: 100%;
          }
          span {
            .pub-teaser {
              &:nth-child(1) {
                top: 75.9131%;
                left: 51.7%;
              }
              &:nth-child(2) {
                top: 65.8675%;
                left: 88.5%;
              }
              &:nth-child(3) {
                top: 26.37%;
                left: 16.3%;
              }
              &:nth-child(4) {
                top: 35.6165%;
                left: 45.2%;
              }
              &:nth-child(5) {
                top: 57.6484%;
                left: 59.7%;
              }
            }
          }
        }
        &:nth-child(2) {
          grid-row: span 2;
          grid-column: span 1;
          span {
            .pub-teaser {
              top: 53.4%;
              left: 52.3%;
            }
          }
        }
        &:nth-child(3) {
          grid-row: span 3;
          grid-column: span 1;
          span {
            .pub-teaser {
              &:nth-child(1) {
                top: 79.3211%;
                left: 31.9%;
              }
              &:nth-child(2) {
                top: 69.8143%;
                left: 69.3%;
              }
            }
          }
        }
        &:nth-child(4) {
          grid-row: span 3;
          grid-column: span 1;
          span {
            .pub-teaser {
              &:nth-child(1) {
                top: 63.7099%;
                left: 64%;
              }
              &:nth-child(2) {
                top: 31.3866%;
                left: 23.3%;
              }
              &:nth-child(3) {
                top: 27.5839%;
                left: 61.3%;
              }
              &:nth-child(4) {
                top: 66.0115%;
                left: 19.9%;
              }
              &:nth-child(5) {
                top: 90.4291%;
                left: 35.6%;
              }
            }
          }
        }
        &:nth-child(5) {
          grid-row: span 2;
          grid-column: span 1;
          span {
            .pub-teaser {
              &:nth-child(1) {
                top: 42.3945%;
                left: 58.7%;
              }
              &:nth-child(2) {
                top: 77.353%;
                left: 32.3%;
              }
              &:nth-child(3) {
                top: 41.0602%;
                left: 27.8%;
              }
            }
          }
        }
      }
    }
    .categories-grid {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 20px;
      .category-card {
        display: flex;
        flex-direction: column;
        cursor: pointer;
        align-items: center;
        text-align: center;
        padding: 1rem;
        width: 10.75rem;
        &:hover {
          span {
            text-decoration: underline;
          }
        }
        img {
          width: 87%;
          height: 87%;
          object-fit: contain;
        }
        span {
          padding-top: 0.5rem;
          text-align: center;
          font-weight: 400;
          color: #484848;
          font-size: 0.875rem;
        }
      }
    }
    .filter-bar {
      width: 100%;
      overflow-x: scroll;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 3rem;
      padding-bottom: 20px;
      &::-webkit-scrollbar {
        height: 0.125rem;
        border-radius: 10px;
        background-color: #fff;
        cursor: pointer;
      }
      &::-webkit-scrollbar-track {
        background-color: #dfdfdf;
        cursor: pointer;
      }
      &::-webkit-scrollbar-thumb {
        background: #484848;
        border-radius: 25px;
        cursor: pointer;
        &:hover {
          background-color: #111;
        }
      }
      .active {
        border-color: #111;
      }
      span {
        line-height: 1.3333333333;
        height: 2.5rem;
        padding: 0 1.5rem;
        font-size: 0.75rem;
        margin-right: 0.75rem;
        color: #111;
        background: #f5f5f5;
        flex-shrink: 0;
        font-weight: bold;
        text-align: center;
        display: inline-flex;
        border-radius: 64px;
        cursor: pointer;
        outline: 0;
        vertical-align: top;
        justify-content: center;
        align-items: center;
        border: 1px solid #f5f5f5;
        &:hover {
          background: #dfdfdf;
        }
      }
    }

    .rooms-grid {
      display: grid;
      margin-top: 3rem;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      gap: 1.25rem;
      grid-auto-rows: 100px;
      .room-card {
        position: relative;
        cursor: pointer;
        min-width: 1px;
        min-height: 1px;
        display: flex;
        width: 100%;
        height: 100%;
        grid-column: span 2;
        grid-row: span 4;
        &:nth-child(2) {
          grid-column: span 2;
          grid-row: span 3;
        }
        img {
          object-fit: fill;
          height: 100%;
          width: 100%;
          border-radius: 0.5rem;
        }
        span {
          position: absolute;
          right: 1rem;
          bottom: 1rem;
          color: #fff;
          font-size: 1.2rem;
          background-color: rgba(17, 17, 17, 0.6);
          text-align: center;
          display: inline-flex;
          border-radius: 64px;
          padding: 10px;
        }
      }
    }

    .load-more {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 3rem;
      span {
        font-size: 0.75rem;
        color: white;
        background: black;
        height: 2.5rem;
        padding: 0 1.5rem;
        text-align: center;
        display: flex;
        align-items: center;
        font-weight: 700;
        border-radius: 64px;
        cursor: pointer;
        &:hover {
          background: rgba(51, 51, 51, 1);
        }
        div {
          width: calc(106.5px - 3rem);
          transform: translateY(-5px);
        }
      }
    }
  }
  .carousel {
    margin-top: 3rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      a {
        margin: 0;
        padding: 0;
        position: relative;
        text-decoration: none;
        color: #111;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 231px;
          object-fit: cover;
        }
        span {
          margin: 0;
          min-height: 2.5rem;
          min-width: fit-content;
          max-width: 50%;
          text-align: center;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0 1.5rem;
          background: #fff;
          border: 1px solid #dfdfdf;
          border-radius: 64px;
          position: absolute;
          bottom: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          &:hover {
            background: #f5f5f5;
          }
        }
      }
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
        height: 14px;
        width: 14px;
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
  .instagram {
    img {
      width: 352px;
      height: 352px;
      object-fit: cover;
    }
  }
  .services-container {
    margin-top: 3rem;
    margin-bottom: 3.5rem;
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.571;
    background: rgba(245, 245, 245, 1);
    .service-items {
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: flex-start;
      background: rgba(245, 245, 245, 1);
      padding: 32px;
      text-align: center;
      h3 {
        margin-top: 8px;
        margin-bottom: -10px;
      }
      p {
        margin-top: 15px;

        color: #484848;
      }
      a {
        color: #111;
        margin-top: -5px;
        color: #484848;
      }
    }
  }
  .introduction {
    background: #fff;
    .service-items {
      background-color: #fff;
      align-items: flex-start;
      text-align: left;
      justify-content: center;
      width: 32%;
      padding: 0;
      h3 {
        color: rgba(72, 72, 72, 1);
        font-weight: 700;
      }
    }
  }
  .service-button {
    text-decoration: none;
    color: white;
    span {
      min-height: 2.5rem;
      padding: 0 1.5rem;
      background: #111;
      border-radius: 64px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 0.875rem;
      font-weight: 700;
      &:hover {
        background: rgba(51, 51, 51, 1);
      }
    }
  }
`;

export default Homepage;
