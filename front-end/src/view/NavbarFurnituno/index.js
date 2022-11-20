import React, { useState } from "react";
import NavbarFurnitunoStyle from "../../styled/NavbarFurnituno";
import truck from "../../assets/svgIcons/truck.svg";
import shopping_bag from "../../assets/svgIcons/shopping_bag.svg";
import heart from "../../assets/svgIcons/heart.svg";
import zip_code from "../../assets/svgIcons/zip-code.svg";
import atlanta from "../../assets/svgIcons/atlanta.svg";
import logo from "../../assets/images/logo.png";

import {
  CameraOutlined,
  CloseOutlined,
  GlobalOutlined,
  MenuOutlined,
  RightOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";

const NavbarFurnituno = () => {
  const [appear, setAppear] = useState(false);

  const [navbar, setNavbar] = useState("");

  const [sliderBar, setSliderBar] = useState(false);

  const [y, setY] = useState(window.scrollY);

  const appearNavbar = (e) => {
    if (window.scrollY > 500) {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setNavbar("active");
      } else if (y < window.scrollY) {
        if (navbar) {
          setNavbar("hide");
        }
      }
      setY(window.scrollY);
    } else {
      setNavbar("");
    }
  };

  window.addEventListener("scroll", (e) => appearNavbar(e));

  return (
    <NavbarFurnitunoStyle>
      <div className="menu-hambuger-container">
        <div className="menu-hambuger-inner">
          <div className="menu-hambuger">
            <span>
              <MenuOutlined onClick={() => setAppear(true)} />
            </span>
            <span>Menu</span>
          </div>
        </div>
      </div>

      <header
        className={`${
          window.scrollY > 500
            ? navbar === "active"
              ? "active"
              : navbar === "hide"
              ? "hide"
              : ""
            : ""
        }`}
      >
        <div className="header-container">
          <div className="header-container-inner">
            <div className="header-container-main">
              <div className="header-logo">
                <a href="/furnituno">
                  <img alt="" src={logo} />
                </a>
              </div>
              <div className="header-search">
                <div className="search-field">
                  <span style={{ left: "30px" }}>
                    <SearchOutlined />
                  </span>
                  <input placeholder="Bạn đang cần tìm gì?" />
                  <span style={{ right: "40px" }}>
                    <CameraOutlined />
                  </span>
                </div>
              </div>
              <ul className="header-icons">
                <li onClick={() => setSliderBar(true)}>
                  <span>
                    <UserOutlined />
                  </span>
                  <span>Đăng nhập hoặc đăng kí</span>
                </li>
                <li>
                  <span>
                    <img alt="" src={truck} />
                  </span>
                </li>
                <li>
                  <a href="/furnituno/wish-list">
                    <span>
                      <img alt="" src={heart} />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/furnituno/cart">
                    <span>
                      <img alt="" src={shopping_bag} />
                      <span>0</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="navbar">
        <nav>
          <ul className="nav-list">
            <li>
              <a href="/furnituno/all-products">Sản phẩm</a>
            </li>
            <li>
              <a href="/">Vật dụng trong nhà</a>
            </li>
            <li>
              <a href="/">Phòng</a>
            </li>
            <li>
              <a href="/">Thiết kế</a>
            </li>
            <li>
              <a href="/">Giao dịch</a>
            </li>
          </ul>
          <div className="navigation-container">
            <div className="nav-item">
              <img alt="" src={atlanta} />
              <span>Việt Nam</span>
            </div>
            <div className="nav-item">
              <img alt="" src={zip_code} />
              <span>Nhập mã ZIP </span>
            </div>
          </div>
        </nav>
      </div>

      <div
        onClick={() => {
          setAppear(false);
          setSliderBar(false);
        }}
        className={`sidebar-layer ${appear || sliderBar ? "appear" : ""}`}
      ></div>
      <aside className={`${appear ? "appear" : ""}`}>
        <div className="sidebar-top">
          <span>
            <CloseOutlined onClick={() => setAppear(false)} />
          </span>
          <div className="sidebar-logo">
            <a href="/furnituno">
              <img
                style={{ width: "170px", height: "80px" }}
                alt=""
                src={logo}
              />
            </a>
          </div>
        </div>
        <div className="sidebar-body">
          <nav>
            <ul>
              {[
                "Sản phẩm",
                "Vật dụng trong nhà",
                "Phòng",
                "Thiết kế",
                "Giao dịch",
              ].map((item, index) => (
                <li key={index}>
                  <a href={`/furnituno/${item}`}>{item}</a>
                </li>
              ))}
            </ul>
            <ul>
              {["Thông tin mới", "Ý tưởng", "Quà tặng", "Cộng đồng"].map(
                (item, index) => (
                  <li key={index}>
                    <a href={`/furnituno/${item}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
            <ul>
              {[
                "Hồ sơ",
                "Đơn hàng",
                "Vị trí cửa hàng",
                "Dịch vụ khách hàng",
              ].map((item, index) => (
                <li key={index}>
                  <a href={`/furnituno/${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="side-button">
          <a href="/furnituno">
            <GlobalOutlined />
            <span>Quốc gia</span>
          </a>
        </div>
      </aside>

      <div
        style={{
          transform: `${sliderBar ? "translate(0px)" : "translate(480px)"}`,
        }}
        className="function-slider"
      >
        <section className="slider-header">
          <CloseOutlined onClick={() => setSliderBar(false)} />
          <div className="header-content">
            <h2>Hola</h2>
            <a href="/login">
              <span>Đăng nhập</span>
            </a>
          </div>
          <div className="header-link">
            <a href="/sign-up">
              <span>Tạo tài khoản Furnituno</span>
              <RightOutlined />
            </a>
          </div>
        </section>
        <section className="slider-body">
          <ul>
            {[
              "Thiết kế của tôi",
              "Lịch sử mua hàng",
              "Danh sách mua sắm",
              "Kế hoạch",
              "Theo dõi đơn hàng",
            ].map((item, index) => (
              <li key={index}>
                <a href={`/ikea/${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </NavbarFurnitunoStyle>
  );
};

export default NavbarFurnituno;
