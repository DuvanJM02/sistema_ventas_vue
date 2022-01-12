<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mb-4">
                <h3 class="mt-5">Proveedores &nbsp;
                    <router-link to="/supplier/create" class="btn btn-info">
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
                <div v-if="suppliers == '' && !errors">
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
                    <table class="table table-light table-striped align-middle">
                        <thead class="table-bordered">
                            <tr>
                                <th>Id</th>
                                <th>Usuario</th>
                                <th>Correo</th>
                                <th>Documento</th>
                                <th>N° Documento</th>
                                <th>Ubicación</th>
                                <th>Teléfono</th>
                                <th>Estado</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="supplier in suppliers" :key="supplier.id">
                                <td>{{ supplier.id }}</td>
                                <td>
                                    <a class="inline" :href="'img/users/' + supplier.img_path" :data-fancybox="supplier.name" :data-caption="supplier.name">
                                        <img class="rounded-circle" :src="'img/users/' + supplier.img_path" v-bind:alt="supplier.name" width="40rem" height="40rem">    
                                    </a>
                                    <strong>{{ supplier.name }}</strong>
                                </td>
                                <td>{{ supplier.email }}</td>
                                <td>{{ supplier.document }}</td>
                                <td>{{ supplier.n_document }}</td>
                                <td>{{ supplier.location }}</td>
                                <td>{{ supplier.phone }}</td>
                                <td>{{ supplier.status }}</td>
                                <!-- <td>
                                    <div class="text-center">
                                        <a :href="'img/products/' + product.img_path" data-lightbox="image-1" >
                                            <img :src="'img/products/' + product.img_path" v-bind:alt="product.name" width="100rem" height="100rem">    
                                        </a>
                                    </div>
                                </td> -->
                                <td class="text-center">
                                    <router-link :to='{name:"editSupplier", params:{id:supplier.id}}' class="btn btn-warning">
                                        <i class="fas fa-edit"></i>
                                    </router-link>
                                    <div class="d-inline" v-if="supplier.status">
                                        <a class="btn btn-danger" type="button" @click="deleteSupplier(supplier.id)" >
                                            <i class="fas fa-eye-slash"></i>
                                        </a>
                                    </div>
                                    <div class="d-inline" v-if="!supplier.status">
                                        <a class="btn btn-success" type="button" @click="activateSupplier(supplier.id)" >
                                            <i class="fas fa-eye"></i>
                                        </a>
                                    </div>
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
    name: "suppliers",
    data(){
        return{
            suppliers:[],
            search: "",
            setTimeoutSearch: '',
            errors: '',
        }
    },
    created(){
        this.showSuppliers()
    },
    methods:{
        showSuppliers(){
             this.axios.get('/api/supplier', {
                 params:{
                     search: this.search
                 }
             })
            .then(response=>{
                this.suppliers = response.data
            })
            .catch(error=>{
                this.errors = error
                console.log(this.errors)
            })
        },
        searchItem(){
            clearTimeout(this.setTimeoutSearch)
            this.setTimeoutSearch = setTimeout(this.showSuppliers, 360)
        },
        deleteSupplier(id){
            if(confirm('¿Desea borrar el registro?')){
                this.axios.delete(`/api/supplier/${id}`)
                .then(response=>{
                    this.showSuppliers()
                })
                .catch(error=>{
                    this.errors = error
                    console.log(this.errors) 
                })
            } 
        },
        activateSupplier(id){
            if(confirm('¿Desea activar el registro?')){
                this.axios.post(`/api/supplier/activate/${id}`)
                .then(response=>{
                    this.showSuppliers()
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
