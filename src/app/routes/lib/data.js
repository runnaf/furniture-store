import { FAQs } from "../../../pages/FAQs/ui/FAQs";
import MainPage from "../../../pages/MainPage/ui/MainPage";
import { OurBlog } from "../../../pages/OurBlog/ui/OurBlog";
import SigninPage from "../../../pages/SigninPage/ui/SigninPage";
import SignupPage from "../../../pages/SignupPage/ui/SignupPage";
import { getRouteAbout, getRouteBlog, getRouteCategories, getRouteContact, getRouteFAQ, getRouteMain, getRouteShop, getRouteSignin, getRouteSignup } from "./helper";

export const routes = [
    {
        title: "Главная",
        link: getRouteMain(),
        isNavbar: true,
        page: <MainPage />
    },
    {
        title: "Магазин",
        link: getRouteShop(),
        isNavbar: true,

    },
    {
        title: "Категории",
        link: getRouteCategories(),
        isNavbar: true,

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

    },
    {
        title: "Контакты",
        link: getRouteContact(),
        isNavbar: true,

    },
    {
        title: "Новости",
        link: getRouteBlog(),
        isNavbar: true,
        page: <OurBlog />
    },
    {
        link: getRouteSignin(),
        isNavbar: false,
        page: <SigninPage />
    },
    {
        link: getRouteSignup(),
        isNavbar: false,
        page: <SignupPage />
    }
]