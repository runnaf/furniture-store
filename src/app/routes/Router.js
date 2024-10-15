import { Route, Routes } from 'react-router-dom';
import { routes } from './lib/data'

const Router = () => {
    return (
            <Routes>
                {routes.map(({link, page}) => 
                    <Route
                        key={link}
                        path={link}
                        element={page}
                    />
                )}
            </Routes>
    );
};

export default Router;