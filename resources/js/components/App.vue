<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><i class="fas fa-store"></i></a>
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
                        <!-- <li class="nav-item">
                            <router-link exact-active-class="active" to="/category" class="nav-link" aria-current="page">
                                Categorias
                            </router-link>
                        </li> -->
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                    <!-- <form class="d-flex" @submit.prevent="search">
                        <input class="form-control me-2" type="search" v-model="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-success" type="submit">
                            <i class="fa fa-search"></i>
                        </button>
                    </form> -->
                </div>
            </div>
        </nav>
        <div>
            <router-view></router-view>
        </div>
    </main>
</template>