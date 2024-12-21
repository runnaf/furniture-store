import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './lib/data'
import { Header } from '../../entities/Header/Header/Header';
import { HeaderAlert } from '../../entities/Header/HeaderAlert/HeaderAlert';
import { Navbar } from '../../widgets/Navbar/ui/Navbar/Navbar';
import { Footer } from '../../entities/Footer/ui/Footer/Footer';

export const AppRouter = () => {
    const location = useLocation();

    const excludedRoutes = ["/login", "/registration", '/admin', '/auth-admin'];

    const shouldShowLayout = !excludedRoutes.includes(location.pathname);

    return (
        <>
            {shouldShowLayout && (
                <>
                    <HeaderAlert />
                    <Header />
                    <Navbar />
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
            <Footer />
        </>
    );
};