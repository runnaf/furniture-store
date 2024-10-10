import { FAQs } from "../../../pages/FAQs/ui/FAQs";
import MainPage from "../../../pages/MainPage/ui/MainPage";
import { OurBlog } from "../../../pages/OurBlog/ui/OurBlog";
import { getRouteAbout, getRouteBlog, getRouteCategories, getRouteContact, getRouteFAQ, getRouteMain, getRouteShop } from "./helper";

export const routes = [
    {
        title: "Главная",
        link: getRouteMain(),
        page: <MainPage />
    },
    {
        title: "Магазин",
        link: getRouteShop(),
        
    },
    {
        title: "Категории",
        link: getRouteCategories(),
        
    },
    {
        title: "Вопросы",
        link: getRouteFAQ(),
        page: <FAQs/>
    },
    {
        title: "О нас",
        link: getRouteAbout(),
        
    },
    {
        title: "Контакты",
        link: getRouteContact(),
        
    },
    {
        title: "Новости",
        link: getRouteBlog(),
        page: <OurBlog/>
    },
]