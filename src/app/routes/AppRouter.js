import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './lib/data'
import { Header } from '../../entities/Header/Header/ui/Header';
import { Navbar } from '../../widgets/Navbar/ui/Navbar/Navbar';
import { MobileNavbar } from "../../widgets/Navbar/ui/MobileNavbar/MobileNavbar";

export const AppRouter = () => {
    const location = useLocation();

    const excludedRoutes = ["/signin", "/signup"];

    const shouldShowLayout = !excludedRoutes.includes(location.pathname);

    return (
        <>
            {shouldShowLayout && (
                <>
                    <Header />
                    <Navbar />
                    <MobileNavbar />
                </>
            )}


            <Routes>
                {routes.map(({ link, page }) =>
                    <Route
                        key={link}
                        path={link}
                        element={page}
                    />
                )}
            </Routes>
        </>
    );
};