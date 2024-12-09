import AboutUsPage from "../../../pages/AboutUsPage/ui/AboutUsPage";
import FAQs from '../../../pages/FAQs/ui/FAQs';
import MainPage from "../../../pages/MainPage/ui/MainPage";
import Admin from "../../../pages/Admin/ui/Admin";
import OurBlog from "../../../pages/OurBlog/ui/OurBlog";
import Shop from "../../../pages/Shop/ui/Shop";
import ProductPage from "../../../pages/ProductPage/ui/ProductPage";
import SigninPage from "../../../pages/SigninPage/ui/SigninPage";
import SignupPage from "../../../pages/SignupPage/ui/SignupPage";
import Error404 from "../../../pages/Error404Page/Error404Page";
import CartPage from "../../../pages/CartPage/CartPage";
import ChecoutPage from "../../../pages/ChecoutPage/ChecoutPage";
import { getRouteAbout, getRouteAdmin, getRouteBlog, getRouteCart, getRouteCheckout, getRouteError404, getRouteFAQ, getRouteMain, getRouteProduct, getRouteShop, getRouteSignin, getRouteSignup } from "./helper";



export const routes = [
    {
        title: "Главная",
        link: getRouteMain(),
        isNavbar: true,
        page: <MainPage />
    },
    {
        title: "Админ-панель",
        link: getRouteAdmin(),
        isNavbar: false,
        page: <Admin/>
    },
    {
        title: "Магазин",
        link: getRouteShop(),
        isNavbar: true,
        page: <Shop />
    },
    {
        title: "Вопросы",
        link: getRouteFAQ(),
        isNavbar: true,
        page: <FAQs/>
    },
    {
        title: "О нас",
        link: getRouteAbout(),
        isNavbar: true,
        page: <AboutUsPage />
    },
    {
        title: "Новости",
        link: getRouteBlog(),
        isNavbar: true,
        page: <OurBlog />
    },
    {
        title: "Товар",
        link: getRouteProduct(':id', ':color'),
        page: <ProductPage />
    },
    {
        link: getRouteSignin(),
        page: <SigninPage />
    },
    {
        link: getRouteSignup(),
        page: <SignupPage />
    },
    {
        link: getRouteError404(),
        page: <Error404 />
    },
    { 
      title: "Корзина",
      link: getRouteCart(),
      page: <CartPage />
    },
    { 
      title: "Оформление",
      link: getRouteCheckout(),
      page: <ChecoutPage />
    }

]