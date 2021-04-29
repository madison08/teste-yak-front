import { Auth } from '../middlewares/route'

const routes = [
    {
        path: '/',
        redirect: '/admin',
        component: () => import('../layouts/Index.vue'),
        beforeEnter: Auth.authIsRequire,
        children: [
            {
                path: 'admin',
                name: 'dashboard',
                component: () => import('../pages/Home.vue')
            },
            {
                path: '/reporting',
                name: 'report',
                component: () => import('../pages/reporting.vue')

            },
            {
                path: '/step',
                name: 'step',
                component: () => import('../pages/Step.vue')
            },
            {
                path: '/naissance',
                name: 'naissance',
                component: () => import('../pages/Naissance.vue')
            },
            {
                path: '/specy',
                name: 'specy',
                component: () => import('../pages/Specy.vue')
            },
            {
                path: '/specy/nouveau',
                name: 'addSpecy',
                component: () => import('../pages/AddSpecy.vue')
            },
            {
                path: '/specy/:id/edit',
                name: 'specy.edit',
                component: () => import('../pages/EditSpecy.vue')
            },
            {
                path: '/saisie',
                name: 'saisie',
                component: () => import('../pages/Saisies.vue')
            },
            {
                path: '/historique-de-saisir',
                name: 'historique',
                component: () => import('../pages/HistoriqueDeSaisies.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../pages/User.vue')
            },
            {
                path: '/user/nouveau',
                name: 'addUser',
                component: () => import('../pages/AddUser.vue')
            },
            {
                path: '/user/:id/edit',
                name: 'user.edit',
                component: () => import('../pages/EditUser.vue')
            }

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login.vue'),
        beforeEnter: (to, from, next) => {
            if(Auth.isLogin()){
                next({name: 'dashboard'})
                return;
            }
            next()
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import('../pages/notFound.vue')
    }
]


export default routes