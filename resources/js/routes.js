// const HOME = () => import('./components/Home.vue');

// components de los CRUD

export const ROUTES = [
    {
        name: 'home',
        path: '/',
        component: ()=> import('./components/store/product/Index.vue'),
    },
    {
        name: 'indexCategory',
        path: '/category',
        component: ()=> import('./components/store/category/Index.vue'),
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
        name: 'indexProduct',
        path: '/product',
        component: ()=> import('./components/store/product/Index.vue'),
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
    {
        name: 'indexSupplier',
        path: '/supplier',
        component: ()=> import('./components/shopping/supplier/Index.vue'),
    },
    { 
        name: 'createSupplier',
        path: '/supplier/create',
        component: ()=> import('./components/shopping/supplier/Create.vue') 
    },
    {
        name: 'editSupplier',
        path: '/supplier/edit/:id',
        component: ()=> import('./components/shopping/supplier/Edit.vue')
    },
    {
        name: 'indexIncome',
        path: '/income',
        component: ()=> import('./components/shopping/income/Index.vue'),
    },
    { 
        name: 'createIncome',
        path: '/income/create',
        component: ()=> import('./components/shopping/income/Create.vue') 
    },
    {
        name: 'showIncome',
        path: '/income/:id',
        component: ()=> import('./components/shopping/income/Show.vue'),
    },
    {
        name: 'indexCustomer',
        path: '/customer',
        component: ()=> import('./components/sales/customer/Index.vue'),
    },
    { 
        name: 'createCustomer',
        path: '/customer/create',
        component: ()=> import('./components/sales/customer/Create.vue') 
    },
    {
        name: 'editCustomer',
        path: '/customer/edit/:id',
        component: ()=> import('./components/sales/customer/Edit.vue')
    },
    {
        name: 'indexSale',
        path: '/sale',
        component: ()=> import('./components/sales/sale/Index.vue'),
    },
    { 
        name: 'createSale',
        path: '/sale/create',
        component: ()=> import('./components/sales/sale/Create.vue') 
    },
    {
        name: 'showSale',
        path: '/sale/:id',
        component: ()=> import('./components/sales/sale/Show.vue'),
    },
];