import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Row, Space, Table, Typography } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProduct } from "../../../redux-toolkit/reducer/productSliceReducer";
import { path } from "../../../routes/path";
import { productApi } from "../../../services/product";
import ProductFilter from "./components/filter";

const ProductList = () => {
  const [filter, setFilter] = useState({ page: 1, perPage: 10 });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productsList = useSelector((state) => state.product.productList);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const columns = [
    {
      title: "Ảnh sản phẩm",
      dataIndex: "image",
      key: "image",
      render: (value) => <img src={value} alt="" width="32px" height="32px" />,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "nameProduct",
      key: "nameProduct",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Chất liệu",
      dataIndex: "material",
      key: "material",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Đánh giá",
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: "Đã bán",
      dataIndex: "sold",
      key: "sold",
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
      <Space style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography.Title level={2}>Quản lý sản phẩm</Typography.Title>
        <Button
          icon={<PlusOutlined />}
          onClick={() => navigate(path.addProduct)}
        >
          Thêm mới sản phẩm
        </Button>
      </Space>
      <ProductFilter />
      <Divider />
      <Table columns={columns} dataSource={productsList} />
    </div>
  );
};

export default ProductList;
