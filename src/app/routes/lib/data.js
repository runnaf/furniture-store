import MainPage from "../../../pages/MainPage/ui/MainPage";
import { getRouteAbout, getRouteBlog, getRouteCategories, getRouteContact, getRouteMain, getRouteShop } from "./helper";

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
    },
]