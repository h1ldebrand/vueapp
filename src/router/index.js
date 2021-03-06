import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'

import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'
import NewAd from '@/components/Ads/NewAd'
import Home from '@/components/Home'
import AdList from '@/components/Ads/AdList'
import Ad from '@/components/Ads/Ad'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration
        },
        {
            path: '/orders',
            name: 'orders',
            component: Orders,
            beforeEnter: AuthGuard
        },
        {
            path: '/new',
            name: 'newAd',
            component: NewAd,
            beforeEnter: AuthGuard
        },
        {
            path: '/list',
            name: 'list',
            component: AdList,
            beforeEnter: AuthGuard
        },
        {
            path: '/ad/:id',
            name: 'add',
            props: true,
            component: Ad
        }
    ]
})
