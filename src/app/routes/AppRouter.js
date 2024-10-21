import { Route, Routes } from 'react-router-dom';
import { routes } from './lib/data'

export const AppRouter = () => {
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