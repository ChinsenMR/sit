import { Fragment, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Spin } from "antd";

import CustomRoutes from "@router/index";
import { showLoading, selectLoading } from "@/redux/slice";
import Login from "@/pages/login";
import useAuth from "@/hooks/useAuth";

import SliderMenu from "./components/SliderMenu";
import BreadcrumbNav from "./components/Breadcrumb";

import "./style.less";

const { Content } = Layout;
const BaseLayout = () => {
  const loading = useSelector(selectLoading);
  const auth = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoading(false));
  }, []);

  return (
    <Fragment>
      {/* <Routes>
        <Route path="/login" element={!auth ? <Login /> : <></>}></Route>
      </Routes> */}
      <Spin tip="Loading..." spinning={loading}>
        {
          <Layout className="main-content">
            <SliderMenu />
            <Content style={{ padding: 15 }} className="layout-content">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <BreadcrumbNav />
                <div
                  style={{
                    padding: "15px 0",
                    height: `93vh`,
                    overflow: "scroll",
                  }}
                >
                  <CustomRoutes loginStatus={auth} />
                  <Outlet />
                </div>
              </div>
            </Content>
          </Layout>
        }
        {/* </div> */}
      </Spin>
    </Fragment>
  );
};

export default BaseLayout;
