const routes = [
    {
        path: '/',
        redirect: '/admin',
        name: 'Home',
        component: () => import('../layouts/Index.vue'),
        children: [
            {
                path: 'admin',
                name: 'Dashboard',
                component: () => import('../pages/Home.vue')
            }

        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '*',
        name: 'notFound',
        component: () => import('../pages/notFound.vue')
    }
]


export default routes