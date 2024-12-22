import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import RoomsView from "../views/RoomsView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },

        {
            path: '/rooms',
            name: 'rooms',
            component: () => import('../views/RoomsView.vue')
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

        },

        {
            path: '/imprint',
            name: 'imprint',
            component: () => import('../views/ImprintView.vue')
        },

        {
            path: '/history',
            name: 'history',
            component: () => import('../views/BookingHistoryView.vue')
        },

        {
            path: '/bookingConfirmation',
            name: 'bookingConfirmation',
            component: () => import('../views/BookingConfirmationView.vue')
        },
    ],
    scrollBehavior(to, from, savedPosition) {

        return {top: 0};
    }
})

export default router