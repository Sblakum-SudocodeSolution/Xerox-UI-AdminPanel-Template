import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication3/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/pages/signin',
            element: <AuthLogin3 />
        },
        {
            path: '/pages/signup',
            element: <AuthRegister3 />
        }
    ]
};

export default AuthenticationRoutes;
