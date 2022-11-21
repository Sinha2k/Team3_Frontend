import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import NoOrderstyle from "./NoOrderStyle";

function NoOrder() {
  return (
    <NoOrderstyle>
      <ShoppingCartOutlined className="icon" />
      <h4>Chưa có đơn hàng</h4>
      <h5>Nhanh tay mua ngay để có sản phẩm đẹp giá tốt</h5>
    </NoOrderstyle>
  );
}

export default NoOrder;
