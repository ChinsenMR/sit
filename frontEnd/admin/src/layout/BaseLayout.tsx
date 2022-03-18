import React from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import Routes from "../router";
import Navside from "./Navside";
import "./style.css";
const { Content } = Layout;

class BaseLayout extends React.Component<object, object> {
  state = {
    collapsed: false,
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div style={{ width: `100%`, height: `100%` }}>
        <Layout className="main-content">
          <Navside />
          <Content style={{ padding: 15 }} className="layout-content">
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application Center</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Application List</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: "15px 0" }}>
              <Routes />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default BaseLayout;
