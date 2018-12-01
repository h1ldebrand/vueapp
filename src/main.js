import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    created () {
        fb.initializeApp({
            apiKey: 'AIzaSyDgtaIOz84Hw9fUUy2tkkqT1iF1CSLqTzA',
            authDomain: 'itc-ads-9dd8a.firebaseapp.com',
            databaseURL: 'https://itc-ads-9dd8a.firebaseio.com',
            projectId: 'itc-ads-9dd8a',
            storageBucket: 'itc-ads-9dd8a.appspot.com',
            messagingSenderId: '411385075243'
        })
        fb.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.dispatch('autoLoginUser', user)
            }
        })
        this.$store.dispatch('fetchAds')
    }
})
