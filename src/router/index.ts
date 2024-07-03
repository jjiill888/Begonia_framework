import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../views/Start.vue'),
        meta: { title: 'Start' },
    },
    {
        path: '/warning',
        component: () => import('../views/Warning.vue'),
        meta: { title: 'Warning' },
    },
    {
        path: '/home',
        component: () => import('../views/Home.vue'),
        meta: { title: 'Home' },
    },
    {
        path: '/game',
        component: () => import('../views/Game.vue'),
        meta: { title: 'Game' },
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../404.vue'),
        meta: { title: '404 Not Found' },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
