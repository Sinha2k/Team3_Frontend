import {
  Button,
  Divider,
  Pagination,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { orderApi } from "../../../services/orderApi";
import OrderFilter from "./components/filter";

const OrderList = () => {
  const [filter, setFilter] = useState({ page: 1, perPage: 10 });
  const [orderPageable, setOrderPageable] = useState();

  const searchOrder = useCallback(async () => {
    const response = await orderApi.search(filter);
    console.log(response);
  }, []);

  useEffect(() => {
    searchOrder();
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Phương thức thanh toán",
      dataIndex: "payment_type",
      key: "payment_type",
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_date",
      key: "created_date",
    },
    {
      title: "Hành động",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button>Sửa</Button>
          <Button>Xóa</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Typography.Title level={2}>Quản lý đơn hàng</Typography.Title>
      <OrderFilter />
      <Divider />
      <Table columns={columns} dataSource={[]} />
      <Row>
        <Pagination defaultCurrent={1} total={50} />
      </Row>
    </div>
  );
};

export default OrderList;
