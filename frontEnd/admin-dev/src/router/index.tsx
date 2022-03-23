/// <reference path = "index.d.ts" />
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "@router/routes";
import Login from '@/pages/login';

function CustomRoutes(props: any) {
  const renderElement = (item: MenuItem) => {
    return props.loginStatus || item.noAuth ? (
      item.component
    ) : (
      <Navigate to={`/login?url=${item.key}`} replace></Navigate>
    );
  };
  function renderRoute(routeItem: MenuItem) {
    if (routeItem.subs && routeItem.subs.length > 0) {
      return routeItem.subs.map((subItem: any) => (
        <Route
          path={subItem.key}
          element={renderElement(subItem)}
          key={subItem.key}
        >
          {renderRoute(subItem)}
        </Route>
      ));
    }

    return (
      <Route
        path={routeItem.key}
        element={renderElement(routeItem)}
        key={routeItem.key}
      />
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {routes.map((routeItem: MenuItem) => renderRoute(routeItem))}
    </Routes>
  );
}

export default CustomRoutes;
