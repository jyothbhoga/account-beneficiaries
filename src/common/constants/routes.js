import { lazy } from "react";
import config from "../config";
const Home = lazy(() =>
  import(/* webpackChunkName: 'home' */ "../../components/ManageBeneficiaries")
);

const routes = [
  {
    id: 0,
    name: "Home",
    transKey: "menuHome",
    titleTransKey: "homeTab",
    isRemove: false,
    isHideMenu: false,
    link: config.enumStaticUrls.home,
    linkMenu: config.enumStaticUrls.home,
    component: Home,
    isActive: true,
  },
];
export default routes;
