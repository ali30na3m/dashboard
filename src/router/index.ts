import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "@/views/Dashboard.vue"
import Todos from "@/views/Todos.vue"
import Weather from "@/views/Weather.vue"
import Profile from "@/views/Profile.vue"

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/todos',
        name: 'Todos',
        component: Todos
    },
    {
        path: '/weather',
        name: 'Weather',
        component: Weather
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router