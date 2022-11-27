import styled from "styled-components";

const NavbarIKEA = styled.div`
  .menu-hambuger-container {
    display: block;
    position: sticky;
    width: 100%;
    z-index: 200;
    pointer-events: none;
    .menu-hambuger-inner {
      position: absolute;
      left: 10px;
      right: 3rem;
      display: flex;
      align-items: flex-start;
      .menu-hambuger {
        position: fixed;
        pointer-events: all;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 90px;
        width: 90px;
        span {
          cursor: pointer;
          &:nth-child(1) {
            padding: 6px;
            border-radius: 50%;
          }
          &:nth-child(1):hover {
            background-color: rgba(245, 245, 245, 1);
          }
        }
        /* span {
          font-size: 0.75rem;
        } */
        /* @media (min-width: 75em) {
          display: grid;
          grid-column-gap: 1.25rem;
          grid-template-columns: repeat(13, minmax(0, 1fr));
        } */
      }
    }
  }
  .active {
    transform: translateY(0);
    position: fixed;
    top: 0;
    z-index: 100;
  }
  .hide {
    transform: translateY(-90px);
    position: fixed;
    top: 0;
    z-index: 100;
  }
  header {
    display: block;
    background-color: #fff;
    transition: 1s;
    .header-container {
      max-width: 112rem;
      margin: 0 auto;
      padding: 0 1.25rem;
      box-sizing: border-box;
      .header-container-inner {
        .header-container-main {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: calc(100vw - 150px);
          height: 90px;
          padding-left: 90px;
          padding-right: 20px;
          /* border-bottom: solid 1px #dfdfdf;
          padding-bottom: 1rem; */
          .header-logo {
            flex-shrink: 0;
            /* order: 2; */
            display: block;
            padding-top: 0.9375rem;
            padding-bottom: 0.9375rem;
            a {
              img {
                width: 120px;
                height: 40px;
              }
            }
          }
          .header-search {
            width: 50%;
            padding-left: 40px;
            .search-list {
              a {
                text-decoration: none;
                color: black;
                &:nth-child(1) {
                  div {
                    border-top-left-radius: 12px;
                    border-top-right-radius: 12px;
                  }
                }
                &:nth-last-child() {
                  div {
                    border-bottom-left-radius: 12px;
                    border-bottom-right-radius: 12px;
                  }
                }
                .search-card {
                  cursor: pointer;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 10px 20px;
                  &:hover {
                    background: whitesmoke;
                  }
                  img {
                    width: 50px;
                  }
                }
              }
            }
            .search-field {
              position: relative;
              flex: 1 1 auto;
              width: 100%;
              display: flex;
              align-items: center;
              span {
                cursor: pointer;
                color: black;
                position: absolute;
                display: flex;
                align-items: center;
              }
              input {
                padding: 0.8rem 0;
                padding-inline-start: 3.25rem;
                padding-inline-end: 3.375rem;
                display: block;
                width: 100%;
                margin: 0 auto;
                font-size: 1rem;
                line-height: 1.5;
                background-color: #f5f5f5;
                border: 2px solid transparent;
                border-radius: 50em;
                outline: 0;
                appearance: none;
                &:hover {
                  background-color: #dfdfdf;
                }
                &:focus-within {
                  border: 2px solid #0058a3;
                  background-color: #fff;
                }
              }
            }
          }
          .header-icons {
            display: flex;
            flex-direction: row;
            order: 5;
            margin-right: -0.625rem;
            list-style: none;
            justify-content: center;
            align-items: center;
            padding-left: 20px;
            li {
              list-style: none;
              margin-left: 10px;
              &:nth-child(2),
              &:nth-child(3),
              &:nth-child(4) {
                margin-left: 10px;
                cursor: pointer;
                span {
                  display: flex;
                  align-items: center;
                  padding: 10px;
                  border-radius: 50%;
                  &:hover {
                    background-color: rgba(245, 245, 245, 1);
                  }
                }
              }
              &:nth-child(4) {
                span {
                  position: relative;
                  span {
                    position: absolute;
                    top: 2px;
                    right: 3px;
                    padding: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    color: white;
                    background-color: #0058a3;
                    font-size: 0.65rem;
                    &:hover {
                      background-color: #0058a3;
                    }
                  }
                }
              }
              &:nth-child(1) {
                color: black;
                font-weight: 600;
                line-height: 1.3333333333;
                padding: 10px 17px;
                border-radius: 50em;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                .anticon-user {
                  margin-right: 5px;
                }
                &:hover {
                  background-color: rgba(245, 245, 245, 1);
                }
              }
            }
          }
        }
      }
    }
  }
  .navbar {
    width: 100%;
    box-sizing: border-box;
    padding-left: 110px;
    padding-right: 40px;
    nav {
      /* width: calc(100vw - 130px); */
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: solid 1px #dfdfdf;
      .nav-list {
        margin: 0;
        list-style: none;
        display: flex;
        align-items: center;
        padding-left: 0px;
        li {
          list-style: none;
          a {
            display: block;
            padding: 0.625rem 0.9375rem;
            font-size: 0.875rem;
            font-weight: 700;
            color: #111;
            text-decoration: none;
            /* background-color: rgb(245 245 245); */
            &:hover {
              text-decoration: underline;
            }
          }
          &:nth-child(1) {
            a {
              padding-left: 0px;
            }
          }
        }
      }
      .navigation-container {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
        font-weight: 700;
        .nav-item {
          display: flex;
          align-items: center;
          margin-left: 20px;
          cursor: pointer;
          img {
            margin-right: 5px;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .sidebar-layer {
    display: block;
    position: fixed;
    z-index: 7999;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000;
    opacity: 0.25;
    pointer-events: all;
    will-change: opacity;
    display: none;
    transition: 0.3s ease-in-out;
  }
  .appear {
    transform: translateX(0px);
    display: block;
  }
  aside {
    transition: 0.3s ease-in-out;
    position: fixed;
    transform: translateX(-480px);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 480px;
    z-index: 8000;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    overflow-y: auto;
    overflow-x: hidden;
    /* transform: translateX(0);
    transition: transform 200ms 0s; */
    .sidebar-top {
      padding: 1.25rem 1.875rem;
      display: flex;
      flex-direction: row;
      flex-shrink: 0;
      align-items: center;
      position: sticky;
      top: 0;
      background-color: #fff;
      z-index: 1;
      justify-content: flex-start;
      span {
        margin-left: 18px;
        .anticon {
          padding-left: 0px;
          cursor: pointer;
        }
      }
      .sidebar-logo {
        padding-left: 70px;
        padding-top: 7px;
        padding-bottom: 7px;
      }
    }
    .sidebar-body {
      padding-left: 150px;
      padding-right: 32px;
      nav {
        ul {
          padding: 0;
          margin-top: 0;
          li {
            list-style: none;
            a {
              text-decoration: none;
              color: #111;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          &:nth-child(1) {
            font-size: 2.25rem;
            letter-spacing: -0.04rem;
            font-weight: 700;
            li {
              margin-bottom: 1.5rem;
            }
          }
          &:nth-child(2) {
            font-size: 0.875rem;
            font-weight: 700;
            li {
              margin-bottom: 1.5rem;
            }
          }
          &:nth-child(3) {
            font-size: 0.875rem;
            padding-top: 1rem;
            font-weight: 400;
            li {
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .side-button {
      padding: 2rem 1rem 1.5rem 140px;
      a {
        text-decoration: none;
        color: #111;
        color: #484848;
        padding: 0.625rem 1.25rem 0.625rem 1.25rem;
        border-radius: 20px;
        border: 1px solid #dfdfdf;
        font-size: 0.75rem;
        font-weight: 700;
        line-height: 1.5;
        white-space: nowrap;
        &:hover {
          color: #111;
          border-color: #929292;
        }
        .anticon {
          font-size: 1rem;
          margin-right: 5px;
          transform: translateY(2px);
        }
      }
    }
  }
  .function-slider {
    transition: 0.3s ease-in-out;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 480px;
    background: #fff;
    z-index: 9001;
    overflow-y: auto;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    text-align: left;
    transform: translateX(480px);
    .slider-header {
      background: #0058a3;
      color: #fff;
      position: relative;
      .anticon-close {
        position: absolute;
        top: 1.5625rem;
        right: 2.3125rem;
        font-size: 1rem;
        line-height: 1.3333333333;
        font-weight: bold;
        text-align: center;
        color: #111;
        padding: 0.75rem;
        display: inline-flex;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
        &:hover {
          background: #f5f5f5;
        }
      }
      .header-content {
        padding: 7.5rem 3rem 2.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2 {
          font-size: 2.25rem;
          line-height: 1.333;
          letter-spacing: -0.0063em;
          margin-right: 0.5rem;
          margin: 0;
        }
        a {
          text-decoration: none;
          color: #111;
          span {
            font-size: 0.75rem;
            line-height: 1.3333333333;
            background: #fff;
            border-radius: 64px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 0 1.5rem;
            font-weight: 700;
            min-height: 2.5rem;
            &:hover {
              background: #f5f5f5;
            }
          }
        }
      }
      .header-link {
        padding: 1.25rem 3rem;
        border-top: 1px solid #007cc1;
        a {
          text-decoration: none;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          &:hover {
            text-decoration: underline;
          }
          .anticon {
            font-size: 1rem;
            line-height: 1.3333333333;
            font-weight: bold;
            text-align: center;
            color: #111;
            padding: 0.75rem;
            display: inline-flex;
            border-radius: 50%;
            background: #fff;
            cursor: pointer;
            &:hover {
              background: #f5f5f5;
            }
          }
        }
      }
    }
    .slider-body {
      padding: 2.5rem 3rem;
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          margin: 0;
          margin-bottom: 1.25rem;
          a {
            text-decoration: none;
            color: #111;
            font-weight: 400;
            font-size: 0.875rem;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

export default NavbarIKEA;
