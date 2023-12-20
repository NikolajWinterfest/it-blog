import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import ArticlePage from '@/pages/ArticlePage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import CreatePostPage from '@/pages/CreatePostPage.vue'
import RegistrationPage from '@/pages/RegistrationPage.vue'
import ArticlePageUserComment from '@/pages/ArticlePageUserComment.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/article/:id',
        name: 'article',
        component: ArticlePage,
    },
    {
        path: '/registration',
        name: 'registration',
        component: RegistrationPage,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/createpost',
        name: 'createpost',
        component: CreatePostPage,
        meta: { requiresAdmin: true },
    },
    {
        path: '/:catchall(.*)',
        name: 'notfoundpage',
        component: NotFoundPage,
    },
    {
        path: '/comment/:id',
        name: 'comment',
        component: ArticlePageUserComment,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const isAdmin = store.state.isAdmin

    if (to.meta.requiresAdmin && !isAdmin) {
        next('/notfoundpage')
    } else {
        next()
    }
})

export default router
