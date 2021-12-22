<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mb-4">
                <h3 class="mt-5">Clientes &nbsp;
                    <router-link to="/customer/create" class="btn btn-info">
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
                <div v-if="customers == '' && !errors">
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
                                <th class="xd">Correo</th>
                                <th>Documento</th>
                                <th>N° Documento</th>
                                <th>Ubicación</th>
                                <th>Teléfono</th>
                                <th>Estado</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="customer in customers" :key="customer.id">
                                <td>{{ customer.id }}</td>
                                <td>
                                    <a class="inline" :href="'img/users/' + customer.img_path" data-lightbox="image-1" >
                                        <img class="rounded-circle" :src="'img/users/' + customer.img_path" v-bind:alt="customer.name" width="40rem" height="40rem">    
                                    </a>
                                    <strong>{{ customer.name }}</strong>
                                </td>
                                <td class="xd">{{ customer.email }}</td>
                                <td>{{ customer.document }}</td>
                                <td>{{ customer.n_document }}</td>
                                <td>{{ customer.location }}</td>
                                <td>{{ customer.phone }}</td>
                                <td>{{ customer.status }}</td>
                                <!-- <td>
                                    <div class="text-center">
                                        <a :href="'img/products/' + product.img_path" data-lightbox="image-1" >
                                            <img :src="'img/products/' + product.img_path" v-bind:alt="product.name" width="100rem" height="100rem">    
                                        </a>
                                    </div>
                                </td> -->
                                <td class="text-center">
                                    <router-link :to='{name:"editcustomer", params:{id:customer.id}}' class="btn btn-warning">
                                        <i class="fas fa-edit"></i>
                                    </router-link>
                                    <div class="d-inline" v-if="customer.status">
                                        <a class="btn btn-danger" type="button" @click="deleteCustomer(customer.id)" >
                                            <i class="fas fa-eye-slash"></i>
                                        </a>
                                    </div>
                                    <div class="d-inline" v-if="!customer.status">
                                        <a class="btn btn-success" type="button" @click="activateCustomer(customer.id)" >
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
    name: "customers",
    data(){
        return{
            customers:[],
            search: "",
            setTimeoutSearch: '',
            errors: '',
        }
    },
    created(){
        this.showCustomers()
    },
    methods:{
        showCustomers(){
             this.axios.get('/api/customer', {
                 params:{
                     search: this.search
                 }
             })
            .then(response=>{
                this.customers = response.data
            })
            .catch(error=>{
                this.errors = error
                console.log(this.errors)
            })
        },
        searchItem(){
            clearTimeout(this.setTimeoutSearch)
            this.setTimeoutSearch = setTimeout(this.showCustomers, 360)
        },
        deleteCustomer(id){
            if(confirm('¿Desea borrar el registro?')){
                this.axios.delete(`/api/customer/${id}`)
                .then(response=>{
                    this.showCustomers()
                })
                .catch(error=>{
                    this.errors = error
                    console.log(this.errors) 
                })
            } 
        },
        activateCustomer(id){
            if(confirm('¿Desea activar el registro?')){
                this.axios.post(`/api/customer/activate/${id}`)
                .then(response=>{
                    this.showCustomers()
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
