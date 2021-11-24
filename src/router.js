import Vue from "vue"
import VueRouter from "vue-router"
import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Projects from '@/pages/projects/AllProjects'
import VueDo from "@/pages/projects/vue-do/App.vue"
import VueGreeter from "@/pages/projects/vue-greeter/App.vue"
import VueGiphy from "@/pages/projects/vue-giphy/App.vue"
import VueCa1 from "@/pages/projects/vue-ca1/App.vue"
import ca1Home from "@/pages/projects/vue-ca1/pages/Home.vue"
import ca1About from "@/pages/projects/vue-ca1/pages/About.vue"
import ca1Indepth from "@/pages/projects/vue-ca1/pages/Indepth.vue"



Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/demo/vue-do',
            name: 'vue-do',
            component: VueDo
        },
        {
            path: '/demo/vue-greeter',
            name: 'vue-greeter',
            component: VueGreeter
        },
        {
            path: '/demo/vue-giphy',
            name: 'vue-giphy',
            component: VueGiphy
        },
        {
            path: '/demo/vue-ca1',
            name: 'vue-ca1',
            component: VueCa1,
        },
        {
            path: '/vue-ca1/home',
            name: './vue-ca1/pages/home',
            component: ca1Home,
        },
        {
            path: '/vue-ca1/about',
            name: './vue-ca1/pages/about',
            component: ca1About,
        },
        {
            path: '/vue-ca1/indepth/:country',
            name: './vue-ca1/indepth',
            component: ca1Indepth,
        },
    ]
})