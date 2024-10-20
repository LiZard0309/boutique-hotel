import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/rooms',
            name: 'rooms',
            component: () => import('../views/RoomsView.vue')
        },
        {
            path: '/imprint',
            name: 'imprint',
            component: () => import('../views/ImprintView.vue')
        },
        {
            path:
                '/about',
            name:
                'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component:
                () => import('../views/AboutView.vue'),
        },
        {
            path: '/contact',
            name:
                'contact',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.

            component:
                () => import('../views/ContactView.vue'),

        }
    ]
})

export default router
