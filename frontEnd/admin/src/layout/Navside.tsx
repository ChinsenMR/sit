import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import React, { useState } from "react";

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import routes from "@/router/routes";

const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;

type BaseMenu = {
  key: any;
  icon: any;
  title: any;
  hidden?: boolean;
};
interface MenuSubItem extends BaseMenu {
  subs: [];
}

// 渲染有子菜单的subMenu
function Navside() {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const defaultKeys = routes.filter((v) => v.selected).map((v) => v.key);
  const defaultOpenKeys = routes.filter((v) => v.opened).map((v) => v.key);

  const renderSubItem = (meunItem: MenuSubItem) => {
    if (meunItem.hidden) return;
    if (meunItem.subs && meunItem?.subs.length > 0) {
      return meunItem.subs.map((item: MenuSubItem) => (
        <SubMenu key={item.key} title={item.title}>
          <Menu.Item key={item.key}>{item.title}</Menu.Item>
        </SubMenu>
      ));
    }
    return <Menu.Item key={meunItem.key}>{meunItem.title}</Menu.Item>;
  };

  return (
    <Sider>
      <Menu
        defaultSelectedKeys={defaultKeys}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
      >
        <Button
          type="link"
          onClick={() => setCollapsed(!collapsed)}
          style={{ marginBottom: 16 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        {routes.map((routeItem: any) => {
          if (routeItem.hidden) return;
          if (routeItem.subs && routeItem?.subs.length > 0) {
            return (
              <SubMenu key={routeItem.key} title={routeItem.title}>
                {renderSubItem(routeItem)}
              </SubMenu>
            );
          }
          return <Menu.Item key={routeItem.key}>{routeItem.title}</Menu.Item>;
        })}
      </Menu>
    </Sider>
  );
}

export default Navside;
