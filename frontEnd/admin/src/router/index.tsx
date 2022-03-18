import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

interface MenuItem {
  component: JSX.Element;
  icon?: string;
  key: string;
}

function CustomRoutes(): JSX.Element {
  return (
    <Router>
      {routes.map((routeItem: MenuItem) => {
        return (
          <Routes key={routeItem.key}>
            <Route path={routeItem.key} element={routeItem.component}></Route>
          </Routes>
        );
      })}
    </Router>
  );
}

export default CustomRoutes;
