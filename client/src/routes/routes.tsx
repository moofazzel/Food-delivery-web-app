import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Shop from '../pages/Shop/Shop';
import PersistentDrawerLeft from '../pages/testpage/PersistentDrawerLeft';
import ResponsiveDrawer from '../pages/testpage/ResponsiveDrawer';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/test',
                element: <PersistentDrawerLeft />,
            },
        ],
    },
]);
