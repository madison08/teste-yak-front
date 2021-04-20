const routes = [
    {
        path: '/',
        redirect: '/admin',
        component: () => import('../layouts/Index.vue'),
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
                path: '/reproducteur',
                name: 'reproducteur',
                component: () => import('../pages/Reproducteur.vue')
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
            }

        ]
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