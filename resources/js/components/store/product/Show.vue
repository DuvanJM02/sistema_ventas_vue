<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mb-4">
                <h3 class="mt-5">Productos &nbsp;
                    <router-link to="/product/create" class="btn btn-info">
                        <i class="fas fa-plus"></i>
                    </router-link>
                </h3>
                <form class="d-flex" @submit.prevent="searchItem">
                    <input class="form-control me-2" type="search" v-model="search" placeholder="Search" aria-label="Search" @keyup="searchItem">
                    <button class="btn btn-success" type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-light table-striped">
                        <thead class="table-bordered">
                            <tr>
                                <th>Id</th>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Cantidad</th>
                                <th>Estado</th>
                                <th>Categoría</th>
                                <th>Imágen</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products" :key="product.id">
                                <td>{{ product.id }}</td>
                                <td>{{ product.code }}</td>
                                <td>{{ product.name }}</td>
                                <td>{{ product.description }}</td>
                                <td>{{ product.stock }}</td>
                                <td>{{ product.status }}</td>
                                <td>{{ product.category }}</td>
                                <td>
                                    <div class="text-center">
                                        <a v-bind:href="'img/products/' + product.img_path" data-lightbox="image-1" >
                                            <img v-bind:src="'img/products/' + product.img_path" v-bind:alt="product.name" width="100rem" height="100rem">    
                                        </a>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <router-link :to='{name:"editProduct", params:{id:product.id}}' class="btn btn-warning">
                                        <i class="fas fa-edit"></i>
                                    </router-link>
                                    <a class="btn btn-danger" type="button" @click="deleteProduct(product.id)">
                                        <i class="fas fa-trash-alt"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default{
    name: "products",
    data(){
        return{
            products:[],
            search: "",
            setTimeoutSearch: ''
        }
    },
    created(){
        this.showProducts()
    },
    methods:{
         showProducts(){
             this.axios.get('/api/product', {
                 params:{
                     search: this.search
                 }
             })
            .then(response=>{
                this.products = response.data
            })
            .catch(error=>{
                this.products = []
            })
        },
        searchItem(){
            clearTimeout(this.setTimeoutSearch)
            this.setTimeoutSearch = setTimeout(this.showProduct, 360)
        },
        deleteCategory(id){
            if(confirm('¿Desea borrar el registro?')){
                this.axios.delete(`/api/product/${id}`)
                .then(response=>{
                    this.showProduct()
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>
