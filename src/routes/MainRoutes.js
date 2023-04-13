import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
const Dashboard = Loadable(lazy(() => import('views/utilities/Dashboard')));
const Application = Loadable(lazy(() => import('views/utilities/Application')));
const ManageUser = Loadable(lazy(() => import('views/utilities/ManageUser')));
const WorkQueue = Loadable(lazy(() => import('views/utilities/WorkQueue')));
const Profile = Loadable(lazy(() => import('views/utilities/Profile')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'dashboard',
                    element: <Dashboard />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'appliaction',
                    element: <Application />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'manage-user',
                    element: <ManageUser />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'work-queue',
                    element: <WorkQueue />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'profile',
                    element: <Profile />
                }
            ]
        }
    ]
};

export default MainRoutes;
