<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mb-4">
                <h3 class="mt-5">Categorías &nbsp;
                    <router-link to="/category/create" class="btn btn-info">
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
                <div v-if="categories == '' && !errors">
                    <div>
                        <div id="liveAlertPlaceholder">
                            <div class="alert alert-primary alert-alert-dismissible" role="alert">
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Cargando base de datos...
                                <span class="end">
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="errors">
                    <div>
                        <div id="liveAlertPlaceholder slide-fade">
                            <div class="alert alert-danger alert-alert-dismissible" role="alert">
                                <i class="fas fa-exclamation-circle"></i>
                                Error de conexión con la base de datos...
                                <span class="end">
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-success table-striped">
                        <thead class="table-bordered">
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Estado</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="category in categories" :key="category.id">
                                <td>{{ category.id }}</td>
                                <td>{{ category.name }}</td>
                                <td>{{ category.description }}</td>
                                <td>{{ category.status }}</td>
                                <td class="text-center">
                                    <router-link :to='{name:"editCategory", params:{id:category.id}}' class="btn btn-warning">
                                        <i class="fas fa-edit"></i>
                                    </router-link>
                                    <a class="btn btn-danger" type="button" @click="deleteCategory(category.id)">
                                        <i class="fas fa-trash-alt"></i>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <img class="rounded me-2">
                    <strong class="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default{
    name: "categories",
    data(){
        return{
            categories:[],
            search: "",
            setTimeoutSearch: '',
            errors: ''
        }
    },
    created(){
        this.showCategories()
    },
    methods:{
         showCategories(){
             this.axios.get('/api/category', {
                 params:{
                     search: this.search
                 }
             })
            .then(response=>{
                this.categories = response.data
            })
            .catch(error=>{
                this.errors = error
                console.log(this.errors)
            })
        },
        searchItem(){
            clearTimeout(this.setTimeoutSearch)
            this.setTimeoutSearch = setTimeout(this.showCategories, 360)
        },
        deleteCategory(id){
            if(confirm('¿Desea borrar el registro?')){
                this.axios.delete(`/api/category/${id}`)
                .then(response=>{
                    this.showCategories()
                }) 
                .catch(error=>{
                    this.errors = error
                    console.log(this.errors)
                })
            }
        }
    }
}
</script>