import AboutUsPage from "../../../pages/AboutUsPage/ui/AboutUsPage";
import FAQs from '../../../pages/FAQs/ui/FAQs';
import MainPage from "../../../pages/MainPage/ui/MainPage";
import Admin from "../../../pages/Admin/ui/Admin";
import OurBlog from "../../../pages/OurBlog/ui/OurBlog";
import Shop from "../../../pages/Shop/ui/Shop";
import ProductPage from "../../../pages/ProductPage/ui/ProductPage";
import SigninPage from "../../../pages/SigninPage/ui/SigninPage";
import SignupPage from "../../../pages/SignupPage/ui/SignupPage";
import Error404Page from "../../../pages/Error404Page/ui/Error404Page/Error404Page";
import CartPage from "../../../pages/CartPage/CartPage";
import ChecoutPage from "../../../pages/ChecoutPage/ChecoutPage";
import WishlistPage from "../../../pages/WishList/WishListPage";
import AuthAdminPage from "../../../pages/AuthAdminPage/AuthAdminPage";
import RefreshPasswordPage from "../../../pages/RefreshPasswordPage/RefreshPasswordPage";
import RefreshPasswordUser from "../../../pages/RefreshPasswordUser/RefreshPasswordUser";
import { getRouteAbout,
    getRouteAdmin, 
    getRouteAuthAdmin, 
    getRouteBlog, 
    getRouteCart, 
    getRouteCheckout, 
    getRouteError404, 
    getRouteFAQ, 
    getRouteMain, 
    getRouteProduct, 
    getRouteRefreshPasswordAdmin, 
    getRouteRefreshPasswordUser, 
    getRouteShop, 
    getRouteSignin, 
    getRouteSignup, 
    getRouteWishlist } from "./helper";


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
        title: "Админ-авторизация",
        link: getRouteAuthAdmin(),
        isNavbar: false,
        page: <AuthAdminPage/>
    },
    {
        title: "Обновление пароля",
        link: getRouteRefreshPasswordAdmin(),
        isNavbar: false,
        page: <RefreshPasswordPage/>
    },
    {
        title: "Обновление пароля",
        link: getRouteRefreshPasswordUser(),
        isNavbar: false,
        page: <RefreshPasswordUser/>
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
        page: <Error404Page />
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
    },
    {
        title: "Избранное",
        link: getRouteWishlist(),
        isNavbar: true,
        page: <WishlistPage />
    }

]