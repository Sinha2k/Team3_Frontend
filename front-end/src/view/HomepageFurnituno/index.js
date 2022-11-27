import React, { useEffect, useState } from "react";
import productsList from "../../data/Products";
import HomepageStyle from "../../styled/HomepageFurnituno";
import HoverCard from "../../component/util/HoverCard/HoverCard";
// import categories from "../../data/Categories";
import PopularCategories from "../../data/PopularCategories";
import Rooms from "../../data/Rooms";
import delivery from "../../assets/svgIcons/delivery.svg";
import collect from "../../assets/svgIcons/collect.svg";
import assembly from "../../assets/svgIcons/assembly.svg";
import credit_card from "../../assets/svgIcons/credit-card.svg";
import Loading from "../../component/Loading";

import Tippy from "@tippyjs/react/headless";
import Slider from "react-slick";
import { HeartOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux-toolkit/reducer/categorySliceReducer";

const HomepageFurnituno = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // beforeChange : (current,next) => setSlideIndex(next)
  };

  const [slide, setSlide] = useState();

  const [slideInsta, setSlideInsta] = useState();

  const [roomFilter, setRoomFilter] = useState("Tất cả");

  const [loading, setLoading] = useState(false);

  const instagram_image = [
    "https://cdn-yotpo-images-production.yotpo.com/instagram/26/18253470688138226/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/39/17959962665033239/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/85/18195003757175485/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/36/17990173615559536/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/15/17966441044895715/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/5/17908159598638105/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/36/17847522104842536/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/46/17914870970082746/standard_resolution.jpg",
    "https://cdn-yotpo-images-production.yotpo.com/instagram/33/17941392604393533/standard_resolution.jpg",
  ];

  const rooms_image = [
    "https://www.ikea.com/ext/ingkadam/m/6624b8c6d7b521e4/original/PH176180-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/637824d985f01bac/original/PH181307-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/6f1cba42d7e45883/original/PH162921-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/6b6cc7f1e45dc5a9/original/PH181383-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/2eeee0d73e5e3078/original/PH186905.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/514d0d7d792d1f3/original/PH159987-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/38e77143a45d6125/original/PH161183-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/7c2adecbe5ac3037/original/PH180205.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/4477772fd30ad69e/original/PH181303-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/59059ced2ce768d/original/PH180154-crop002.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/3d982d972636b093/original/PH157148-crop001.jpg?f=xs",
    "https://www.ikea.com/ext/ingkadam/m/7c923e19aaaa90b5/original/PH168401-crop003.jpg?f=xs",
  ];

  const handleShowmore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const categories = useSelector((state) => state.category.categorytList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <HomepageStyle>
      <section>
        <div className="pub-teaser-header">
          <div className="pub-teaser-info">
            <h2>Làm ấm căn phòng của bạn trong mùa thu này!</h2>
            <p>
              Mang đến cho không gian của bạn sự sảng khoái vào mùa thu với giá
              cả phải chăng, chỗ ngồi thoải mái và ánh sáng ấm áp.
            </p>
          </div>
          <div>
            <a href="/ikea">Phòng khách</a>
          </div>
        </div>
        <div className="pub-teaser-body">
          <div>
            <img
              alt=""
              src="https://www.ikea.com/ext/ingkadam/m/1b2b64dff6d6f43c/original/PH185020.jpg?f=m"
            />
            <span>
              {productsList.slice(0, 5).map((item) => (
                <Tippy
                  interactive={true}
                  render={(attrs) => <HoverCard product={item} {...attrs} />}
                >
                  <div key={item.id} className="pub-teaser"></div>
                </Tippy>
              ))}
            </span>
          </div>
          <div>
            <img
              alt=""
              src="https://www.ikea.com/ext/ingkadam/m/5f265f6e452e9176/original/PH186980-crop001.jpg?f=xxs"
            />
            <span>
              {productsList.slice(5, 6).map((item) => (
                <Tippy
                  interactive={true}
                  render={(attrs) => <HoverCard product={item} {...attrs} />}
                >
                  <div key={item.id} className="pub-teaser"></div>
                </Tippy>
              ))}
            </span>
          </div>
          <div>
            <img
              alt=""
              src="https://www.ikea.com/ext/ingkadam/m/4ac987f9a4ebe1b8/original/PH186991-crop001.jpg?f=xxs"
            />
            <span>
              {productsList.slice(6, 8).map((item) => (
                <Tippy
                  interactive={true}
                  render={(attrs) => <HoverCard product={item} {...attrs} />}
                >
                  <div key={item.id} className="pub-teaser"></div>
                </Tippy>
              ))}
            </span>
          </div>
          <div>
            <img
              alt=""
              src="https://www.ikea.com/ext/ingkadam/m/cf905e8929140e2/original/PH188014.jpg?f=xxs"
            />
            <span>
              {productsList.slice(8, 13).map((item) => (
                <Tippy
                  interactive={true}
                  render={(attrs) => <HoverCard product={item} {...attrs} />}
                >
                  <div key={item.id} className="pub-teaser"></div>
                </Tippy>
              ))}
            </span>
          </div>
          <div>
            <img
              alt=""
              src="https://www.ikea.com/ext/ingkadam/m/117dd0ea7965dfee/original/PH186087.jpg?f=xxs"
            />
            <span>
              {productsList.slice(13, 16).map((item) => (
                <Tippy
                  interactive={true}
                  render={(attrs) => <HoverCard product={item} {...attrs} />}
                >
                  <div key={item.id} className="pub-teaser"></div>
                </Tippy>
              ))}
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2>Hạng mục hàng đầu</h2>
      </section>
      <div className="carousel">
        <Slider ref={(c) => setSlide(c)} {...settings}>
          {categories.map((item) => (
            <div key={item.categoryId}>
              <a href={`/ikea/categories/${item.categoryName}`}>
                <img alt="" src={item.descriptionName} />
                <span>{item.categoryName}</span>
              </a>
            </div>
          ))}
        </Slider>
        <div className="btn-arrow">
          <LeftOutlined onClick={() => slide.slickPrev()} />
          <RightOutlined onClick={() => slide.slickNext()} />
        </div>
      </div>

      <section>
        <h2>Hạng mục phổ biến</h2>
        <div className="categories-grid">
          {categories.map((item) => (
            <div className="category-card">
              <img alt="" src={item.descriptionName} />
              <span>{item.categoryName}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Furnituno trên Instagram</h2>
        <p>
          Xem sản phẩm của chúng tôi trông như thế nào trong nhà thực tế! Chia
          sẻ ảnh của bạn trên Instagram với #MyFurnituno hoặc gắn thẻ @Furnituno
          để có cơ hội được mọi người nhìn thấy tại đây!
        </p>
      </section>
      <div className="carousel instagram">
        <Slider
          ref={(c) => setSlideInsta(c)}
          infinite={false}
          slidesToShow={3.1}
          slidesToScroll={3}
        >
          {instagram_image.map((item) => (
            <div>
              <img alt="" src={item} />
            </div>
          ))}
        </Slider>
        <div className="btn-arrow">
          <LeftOutlined onClick={() => slideInsta.slickPrev()} />
          <RightOutlined onClick={() => slideInsta.slickNext()} />
        </div>
      </div>

      <section>
        <h2>Dịch vụ</h2>
        <div className="services-container">
          <div className="service-items">
            <img alt="" src={delivery} />
            <h3>Vận chuyển</h3>
            <p>Mua sắm tại nhà và nhận ngay trước cửa.</p>
            <a href="/ikea">Xem thêm</a>
          </div>
          <div className="service-items">
            <img alt="" src={collect} />
            <h3>Nhấn & Sưu tầm</h3>
            <p>Mua trực tuyến, lấy ở cửa hàng.</p>
            <a href="/ikea">Xem thêm</a>
          </div>
          <div className="service-items">
            <img alt="" src={assembly} />
            <h3>Hội đồng Furnituno</h3>
            <p>
              Tìm những cách linh hoạt và giá cả phải chăng để hoàn thành việc
              của bạn.
            </p>
            <a href="/ikea">Xem thêm</a>
          </div>
          <div className="service-items">
            <img alt="" src={credit_card} />
            <h3>Phương thức thanh toán</h3>
            <p>
              Tài trợ cho ngôi nhà mơ ước của bạn bằng thẻ tín dụng của chúng
              tôi.{" "}
            </p>
            <a href="/ikea">Xem thêm</a>
          </div>
        </div>
        <a className="service-button" href="/ikea">
          <span>Xem các dịch vụ</span>
        </a>
      </section>

      <section>
        <h2>Cảm hứng thiết kế và ý tưởng nhà hiện đại </h2>
        <div className="filter-bar">
          {Rooms.map((item, index) => (
            <span
              onClick={() => setRoomFilter(item)}
              className={`${roomFilter === item ? "active" : ""}`}
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="rooms-grid">
          {rooms_image.map((item, index) => (
            <div key={index} className="room-card">
              <img loading="lazy" alt="" src={item} />
              <HeartOutlined />
            </div>
          ))}
        </div>
        <div className="load-more">
          <span onClick={() => handleShowmore()}>
            {loading ? (
              <Loading width="5px" height="5px" background="#fff" />
            ) : (
              "Xem thêm"
            )}
          </span>
        </div>
      </section>

      <section>
        <h2>Đây là Furnituno</h2>
        <div className="services-container introduction">
          <div className="service-items">
            <h3>Bền vững hàng ngày</h3>
            <p>
              Furnituno bền vững như thế nào? Chà, bền vững hơn mỗi ngày. Với
              các sản phẩm và các giải pháp tiết kiệm năng lượng, chúng tôi mở
              đường cho những ngôi nhà bền vững hơn cho nhiều người.{" "}
            </p>
            <a href="/ikea">Xem thêm</a>
          </div>
          <div className="service-items">
            <h3>Khí hậu và môi trường</h3>
            <p>
              Tìm hiểu cách Furnituno đầu tư, truyền cảm hứng và hành động để
              giải quyết các vấn đề môi trường, giảm lượng carbon và thay đổi
              trên quy mô toàn cầu.
            </p>
            <a href="/ikea">Xem thêm</a>
          </div>
          <div className="service-items">
            <h3>Làm việc với chúng tôi</h3>
            <p>
              Đến từ khắp nơi trên thế giới, các đồng nghiệp Furnituno của chúng
              tôi chia sẻ bộ giá trị đặc biệt và tầm nhìn cho phép mọi người
              sống cuộc sống hàng ngày tốt hơn, bền vững hơn. Họ đến với nhau
              trong môi trường làm việc Furnituno đa dạng, toàn diện, cởi mở,
              nơi mỗi người cung cấp một cái gì đó độc đáo.
            </p>
            <a href="/ikea">Xem thêm</a>
          </div>
        </div>
      </section>
    </HomepageStyle>
  );
};

export default HomepageFurnituno;
