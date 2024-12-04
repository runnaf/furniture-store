import AboutUsPage from "../../../pages/AboutUs/ui/AboutUsPage";
import { FAQs } from "../../../pages/FAQs/ui/FAQs";
import MainPage from "../../../pages/MainPage/ui/MainPage";
import Admin from "../../../pages/Admin/ui/Admin";
import OurBlog from "../../../pages/OurBlog/ui/OurBlog";
import Shop from "../../../pages/Shop/ui/Shop";
import ProductPage from "../../../pages/ProductPage/ui/ProductPage";
import SigninPage from "../../../pages/SigninPage/ui/SigninPage";
import SignupPage from "../../../pages/SignupPage/ui/SignupPage";
import { getRouteAbout, getRouteAdmin, getRouteBlog, getRouteCategories, getRouteContact, getRouteFAQ, getRouteMain, getRouteProduct, getRouteShop, getRouteSignin, getRouteSignup } from "./helper";

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
        page: <FAQs />
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
        link: getRouteProduct(':id'),
        page: <ProductPage />
    },
    {
        link: getRouteSignin(),
        page: <SigninPage />
    },
    {
        link: getRouteSignup(),
        page: <SignupPage />
    }
]