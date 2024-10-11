import { Route, Routes } from 'react-router-dom';
import { routes } from './lib/data'

const Router = () => {
    return (
            <Routes>
                {routes.map(({title, link, page}) => 
                    <Route
                        key={title}
                        path={link}
                        element={page}
                    />
                )}
            </Routes>
    );
};

export default Router;