import Home from "@/pages/home";
import ErrorPage from "@/pages/404";
import Article from "@/pages/article";
import Login from "@/pages/login";
import Config from "@/pages/config";
import { MenuItem } from "@router/types";
const routes: MenuItem[] = [
  {
    key: "/",
    title: "首页",
    icon: "bank",
    index: true,
    component: <Home />,
    subs: [],
    selected: true,
    hidden: true,
    noAuth: true,
  },
  {
    key: "*",
    title: "页面错误",
    icon: "bank",
    component: <ErrorPage />,
    subs: [],
    hidden: true,
  },
  {
    key: "/login",
    title: "页面错误",
    icon: "登录",
    component: <Login />,
    subs: [],
    hidden: true,
  },
  {
    key: "/main",
    title: "首页",
    icon: "bank",
    component: <Home />,
    subs: [],
    selected: true,
  },

  {
    key: "/article",
    title: "文章",
    icon: "bank",
    component: <Article />,
    opened: true,
    subs: [
      {
        key: "/article/list",
        title: "文章列表",
        component: <Article />,
      },
    ],
  },
  {
    key: "/page",
    title: "自定义页面",
    icon: "bank",
    component: <Config />,
  },
];
export default routes;
