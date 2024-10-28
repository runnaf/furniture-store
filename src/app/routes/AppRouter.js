import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './lib/data'
import { Navbar } from '../../widgets/Navbar/ui/Navbar/Navbar';
import { MobileNavbar } from "../../widgets/Navbar/ui/MobileNavbar/MobileNavbar";
import { Header } from '../../entities/Header/Header/Header';
import { HeaderAlert } from '../../entities/Header/HeaderAlert/HeaderAlert';

export const AppRouter = () => {
    const location = useLocation();

    const excludedRoutes = ["/signin", "/signup"];

    const shouldShowLayout = !excludedRoutes.includes(location.pathname);

    return (
        <>
            {shouldShowLayout && (
                <>
                    <HeaderAlert />
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