import React, { memo, useState } from "react";
import Sidebar from "../Sidebar";
import "antd/dist/antd.min.css";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { LayoutAdmin } from "./styled";
import { Outlet, useNavigate } from "react-router-dom";
import { path } from "../../../routes/path";

const { Header, Sider, Content } = Layout;
const AdminLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <LayoutAdmin>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Trang chủ",
              onClick: () => navigate(path.dashboard),
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Danh sách sản phẩm",
              onClick: () => navigate(path.product),
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Danh sách đơn hàng",
              onClick: () => navigate(path.order),
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </LayoutAdmin>
  );
};

export default memo(AdminLayout);
