import { Ictlogo } from "../assets";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BankOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Image } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../redux/actions/userActions";

const { Header, Sider, Content } = Layout;

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="flex2">
            <Ictlogo />
            <h1 className="hometitle">ALUMNI JOB PORTAL</h1>
          </div>

          <div className="flex1">
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[window.location.pathname]}
            >
              <Menu.Item key="/" icon={<BankOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="/profile" icon={<UserOutlined />}>
                <Link to="/profile">Profile</Link>
              </Menu.Item>
              <Menu.Item key="/appliedjobs" icon={<FileDoneOutlined />}>
                <Link to="/appliedjobs">Applied Jobs</Link>
              </Menu.Item>
              <Menu.Item key="/postjob" icon={<UploadOutlined />}>
                <Link to="/postjob">Post Jobs</Link>
              </Menu.Item>
              <Menu.Item key="/posted" icon={<UploadOutlined />}>
                <Link to="/posted">Posted Jobs</Link>
              </Menu.Item>
              <Menu.Item key="/login" icon={<UploadOutlined />}>
                <Link to="/login">Log In</Link>
              </Menu.Item>
              <Menu.Item key="/register" icon={<UploadOutlined />}>
                <Link to="/register">Sign Up</Link>
              </Menu.Item>
              {/* <Menu.Item>LogOut</Menu.Item> */}
            </Menu>
          </div>
        </Header>
        <br></br>
        <br></br>

        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DefaultLayout;
