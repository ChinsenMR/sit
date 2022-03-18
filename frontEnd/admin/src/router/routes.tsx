import { Home, Mine, ErrorPage, Article } from "@/pages";

interface SubsItem {
  key: string;
  title: string;
  component: JSX.Element;
}

interface MenuItem {
  key: string;
  title: string;
  icon: string;
  component: JSX.Element;
  subs?: SubsItem[];
  selected?: boolean;
  opened?: boolean;
  hidden?: boolean;
}

const routes: MenuItem[] = [
  {
    key: "/",
    title: "首页",
    icon: "bank",
    component: <Home />,
    subs: [],
    selected: true,
    hidden: true,
  },
  {
    key: "/404",
    title: "页面错误",
    icon: "bank",
    component: <ErrorPage />,
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
        key: "/main/article/edit",
        title: "发布",
        component: <Home />,
      },
      {
        key: "/main/article/list",
        title: "文章列表",
        component: <Home />,
      },
    ],
  },
  { key: "/main/table", title: "表格", icon: "book", component: <Article /> },
  { key: "/main/message", title: "消息", icon: "bulb", component: <Article /> },
  { key: "/main/auth", title: "权限", icon: "bug", component: <Article /> },
  { key: "/main/staff", title: "员工", icon: "audio", component: <Article /> },
  {
    key: "/main/setting",
    title: "设置",
    icon: "rocket",
    component: <Article />,
    subs: [
      {
        key: "/main/setting/usercenter",
        title: "个人中心",
        component: <Article />,
      },
      {
        key: "/main/setting/expand",
        title: "功能扩展",
        component: <Article />,
      },
      
    ],
  },
];
export default routes;
