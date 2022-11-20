import HomePage from '../pages/HomePage';
import routes from '../configs/routes';
import DefaultLayout from '../components/layouts/DefaultLayout';


const publicRoutes = [
    {
        title: 'Home',
        path: routes.root,
        component: HomePage,
        layout: DefaultLayout,
    },
    
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
