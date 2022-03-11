import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [

        {
            path: '/',
            name: 'login',
            component: () =>
                import ('../views/Authentication/login.vue')

        },
        {
            path: '/home',
            name: 'home',
            component: () =>
                import ('../views/Authentication/home.vue')

        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('../views/Register.vue')

        }
    ]
})
export default router