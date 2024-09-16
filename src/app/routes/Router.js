import { Route, Routes } from 'react-router-dom';
import { routes } from './lib/routes.data';

const Router = () => {

    return (
            <Routes>
                {routes.map(route => {
                    return (
                        <Route
                            key={route.title}
                            path={route.link}
                            element={<route.page />}
                        />
                    )
                })}
            </Routes>
    );
};

export default Router;