<template>
    <main>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <router-link to="/" class="navbar-brand"><i class="fas fa-store"></i></router-link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-cart-plus"></i> Almacén
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <router-link exact-active-class="active" to="/product" class="dropdown-item" aria-current="page">
                                        <i class="fas fa-cart-plus"></i> Productos
                                    </router-link>
                                </li>
                                <li>
                                    <router-link exact-active-class="active" to="/category" class="dropdown-item" aria-current="page">
                                        <i class="fas fa-list-ul"></i> Categorias
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-dolly-flatbed"></i> Compras
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <router-link exact-active-class="active" to="/income" class="dropdown-item" aria-current="page">
                                        <i class="fas fa-dolly-flatbed"></i> Ingreso
                                    </router-link>
                                </li>
                                <li>
                                    <router-link exact-active-class="active" to="/supplier" class="dropdown-item" aria-current="page">
                                        <i class="fas fa-user-plus"></i> Proveedor
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-dolly-flatbed"></i> Ventas
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <router-link exact-active-class="active" to="/sale" class="dropdown-item" aria-current="page">
                                        <i class="fas fa-dolly-flatbed"></i> Venta
                                    </router-link>
                                </li>
                                <li>
                                    <router-link exact-active-class="active" to="/customer" class="dropdown-item" aria-current="page">
                                        <i class="fas fa-user-plus"></i> Cliente
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" action="/logout" method="post">
                        <input type="hidden" name="_token" :value="csrf">
                        <div class="dropdown">
                            <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img v-if="authUser.img_path != null" class="rounded-circle" :src="'/img/users/' + authUser.img_path" v-bind:alt="authUser.name" width="35rem" height="35rem">
                                &nbsp;&nbsp;&nbsp;
                                {{ authUser.name }}
                            </button>
                            <ul class="dropdown-menu bg-danger" aria-labelledby="dropdownMenuButton1">
                                <li>
                                    <button class="dropdown-item" href="#" type="submit">
                                        <i class="fas fa-sign-out-alt"></i>&nbsp;Cerrar sesión
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
    export default {
        name: "app",
        data(){
            return{
                csrf: null,
                authUser: [],
            }
        },
        created(){
            this.getCsrf();
            this.showUser();
        },
        methods:{
            getCsrf(){
                this.csrf = document.getElementsByTagName('meta').csrf.content;
            },
            async showUser(){
                await this.axios.get('/showUser')
                .then(response=>{
                    this.authUser = response.data;
                })
                .catch(error=>{
                    console.log(error)
                })
            },
        },
    }
</script>