import React from "react";
import WarrantyStyle from "../../styled/Warranty";
import NavManageAcount from "../../component/NavManageAcount/NavManageAcount";
import { Input } from "antd";
import { ScheduleOutlined } from "@ant-design/icons";

const { Search } = Input;

function Warranty() {
  const onSearch = (value) => console.log(value);
  return (
    <WarrantyStyle>
      <div className="left" style={{ width: "30%" }}>
        <NavManageAcount></NavManageAcount>
      </div>
      <div className="right">
        <div className="right-top">
          <div className="title">Tra cứu bảo hành</div>
          <div className={"search"}>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>
        <div className="right-bot">
          <ScheduleOutlined  className="icon" />
          <h4>Không có sản phẩm đang gửi hoặc còn bảo hành</h4>
        </div>
      </div>
    </WarrantyStyle>
  );
}

export default Warranty;
