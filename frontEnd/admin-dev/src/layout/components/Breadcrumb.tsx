
import { Breadcrumb } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectRoute, routeChange } from "@/redux/slice";
import { RouteTypes } from "@/types/types";

const CusBreadcrumb = () => {
  const storeRoutes = useSelector(selectRoute);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRoute = (currentKey: string, currentIndex: number) => {
    // navigate
    let filterRoutes = storeRoutes.filter(
      (v: RouteTypes, key: number) => key <= currentIndex
    );
    dispatch(routeChange([...filterRoutes]));
    navigate(currentKey);
  };
  return (
    <Breadcrumb>
      {storeRoutes.map((item: RouteTypes, index: number) => {
        return (
          <Breadcrumb.Item key={item.key}>
            <a
              onClick={() => handleRoute(item.key, index)}
            >
              {item.title}
            </a>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};
export default CusBreadcrumb;
