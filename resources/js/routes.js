// const HOME = () => import('./components/Home.vue');

// components de los CRUD

export const ROUTES = [
    {
        name: 'home',
        path: '/',
        component: ()=> import('./components/store/product/Show.vue'),
    },
    {
        name: 'showCategory',
        path: '/category',
        component: ()=> import('./components/store/category/Show.vue'),
    },
    { 
        name: 'createCategory',
        path: '/category/create',
        component: ()=> import('./components/store/category/Create.vue') 
    },
    {
        name: 'editCategory',
        path: '/category/edit/:id',
        component: ()=> import('./components/store/category/Edit.vue')
    },
    {
        name: 'showProduct',
        path: '/product',
        component: ()=> import('./components/store/product/Show.vue'),
    },
    { 
        name: 'createProduct',
        path: '/product/create',
        component: ()=> import('./components/store/product/Create.vue') 
    },
    {
        name: 'editProduct',
        path: '/product/edit/:id',
        component: ()=> import('./components/store/product/Edit.vue')
    },
];