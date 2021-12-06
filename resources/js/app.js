require('./bootstrap');

import vue from 'vue'; 
window.Vue = vue;

import App from './components/App.vue';

// importar axios para peticiones

import VueAxios from 'vue-axios';
import axios from 'axios';

// importar y configurar Vue router

import VueRouter from 'vue-router';
import {ROUTES} from './routes';
import Vue from 'vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const ROUTER = new VueRouter({
    mode: 'history',
    routes: ROUTES,
});

const APP = new Vue({
    el: '#app',
    router: ROUTER,
    render: h => h(App)
});