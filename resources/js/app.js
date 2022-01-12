/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

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
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});

const APP = new Vue({
    el: '#aplicacion',
    router: ROUTER,
    render: h => h(App)
});