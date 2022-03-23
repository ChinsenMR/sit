import { Layout, Menu, Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { routeChange, selectRoute } from "@/redux/slice";
import { RouteTypes } from "@/interface/types";
import { useNavigate } from "react-router-dom";
import routes from "@/router/routes";
// import useHistory
// https://www.cnblogs.com/huangtao5921/p/11352986.html
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

type BaseMenu = {
  key: any;
  icon: any;
  title: any;
  hidden?: boolean;
  subs?: BaseMenu[];
};
interface MenuSubItem extends BaseMenu {
  subs?: [];
}

function Navside() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const routeList = useSelector(selectRoute);
  const defaultKeys = routes.filter((v) => v.selected).map((v) => v.key);
  const defaultOpenKeys = routes.filter((v) => v.opened).map((v) => v.key);

  /**
   * 递归渲染二级菜单
   * @param meunItem
   * @returns
   */
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

  /**
   * 导出出面包屑数组
   * @param currentKey
   * @param pathname
   * @returns
   */
  const selectBreadcrumb = (currentKey: any, pathname: string) => {
    let _routeList: RouteTypes[] = [...routeList];
    routes.forEach((item: any) => {
      if (item.key === pathname) {
        _routeList.push({
          key: item.key,
          title: item.title,
        });
      }
      if (item.subs) {
        item.subs.forEach((sItem: any) => {
          if (sItem.key === pathname) {
            _routeList.push({
              key: sItem.key,
              title: sItem.title,
            });
          }
        });
      }
    });
    let result = _routeList.map((v: RouteTypes) => JSON.stringify(v));
    return Array.from(new Set(result)).map((v) => JSON.parse(v));
  };

  /**
   * 且u按路由
   * @param item
   */
  const handleNavigateRoute = (item: any) => {
    const currentKey = "/" + item.key.split("/")[1];
    const pathname = item.key;
    dispatch(routeChange([...selectBreadcrumb(currentKey, pathname)]));
    navigate(pathname);
  };

  return (
    <Sider collapsible theme="light">
      <Menu
        defaultSelectedKeys={defaultKeys}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        theme="light"
        onClick={handleNavigateRoute}
      >
        {routes.map((routeItem: any) => {
          if (routeItem.hidden) return null;
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
