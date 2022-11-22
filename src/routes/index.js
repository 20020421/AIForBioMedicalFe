import HomePage from '../pages/HomePage';
import routes from '../configs/routes';
import DefaultLayout from '../components/layouts/DefaultLayout';
import DashboardPage from '../pages/DashboardPage';
import InFuturePage from '../pages/InFuturePage';


const publicRoutes = [
    {
        title: 'Home',
        path: routes.root,
        component: HomePage,
        layout: DefaultLayout,
    },
    {
        title: 'Diagnostic',
        path: routes.diagnostic,
        component: DashboardPage,
        layout: DefaultLayout,
    },
    {
        title: 'No Route Match',
        path: routes.no_match,
        component: InFuturePage,
        layout: DefaultLayout,
    },
    
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
