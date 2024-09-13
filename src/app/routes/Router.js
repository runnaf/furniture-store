import { Route, Routes } from 'react-router-dom';
import { routes } from './lib/routes.data';

const Router = () => {

    return (
            <Routes>
                {routes.map(route => {
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component />}
                        />
                    )
                })}
            </Routes>
    );
};

export default Router;