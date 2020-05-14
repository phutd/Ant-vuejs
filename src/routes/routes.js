import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from "../views/Dashboard";
import Device from "../views/Device";
import NotFoundPage from '../views/NotFoundPage';

Vue.use(VueRouter);

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/device',
        name: 'Device',
        component: Device,
    },
    {
        path: '*',
        name: 'NotFoundPage',
        component: NotFoundPage,
    }
];

export default new VueRouter({
    routes,
    mode: 'history',
});