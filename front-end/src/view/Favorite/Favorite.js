import React from "react";
import FavoriteStyle from "../../styled/Favorite";
import NavManageAcount from "../../component/NavManageAcount/NavManageAcount";
import { HeartOutlined } from "@ant-design/icons";

function Favorite() {
  return (
    <FavoriteStyle>
      <div className="left" style={{ width: "30%" }}>
        <NavManageAcount></NavManageAcount>
      </div>
      <div className="right">
        <div className="right-top">
          <div className="title">Yêu thích</div>
        </div>
        <div className="right-bot">
          <HeartOutlined className="icon" />
          <h4>Bạn chưa yêu thích sản phẩm nào thì phải?</h4>
        </div>
      </div>
    </FavoriteStyle>
  );
}

export default Favorite;
