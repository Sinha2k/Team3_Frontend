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
  DashboardOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { LayoutAdmin } from "./styled";
import { Outlet, useNavigate } from "react-router-dom";
import { path } from "../../../routes/path";
import logo from "../../../assets/images/logo-2.png";

const { Header, Sider, Content } = Layout;
const AdminLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <LayoutAdmin>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="" style={{ width: "100%" }} />
          </a>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DashboardOutlined />,
              label: "Trang chủ",
              onClick: () => navigate(path.dashboard),
            },
            {
              key: "3",
              icon: <ShoppingOutlined />,
              label: "Danh sách sản phẩm",
              onClick: () => navigate(path.product),
            },
            {
              key: "2",
              icon: <ShoppingCartOutlined />,
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
