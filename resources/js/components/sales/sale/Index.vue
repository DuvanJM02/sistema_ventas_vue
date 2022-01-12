<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mb-4">
                <h3 class="mt-5">Ventas &nbsp;
                    <router-link to="/sale/create" class="btn btn-info">
                        <i class="fas fa-plus"></i>
                    </router-link>
                </h3>
                <form class="d-flex" @submit.prevent="searchItem">
                    <input class="form-control me-2" type="search" v-model="search" placeholder="Buscar por número de comprobante" aria-label="Search" @keyup="searchItem">
                    <button class="btn btn-success" type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div class="col-12">
                <div v-if="sales == '' && !errors">
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
                                <th>Fecha</th>
                                <th>Cliente</th>
                                <th>Comprobante</th>
                                <th>Impuesto</th>
                                <th>Total venta</th>
                                <th>Estado</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="sale in sales" :key="sale.id">
                                <td>{{ sale.date }}</td>
                                <td>{{ sale.name }}</td>
                                <td>
                                    <router-link :to='{name:"showSale", params:{id:sale.id}}'>
                                        {{ sale.t_comprobante + ': ' + sale.s_comprobante + '-' + sale.n_comprobante }}
                                    </router-link>
                                </td>
                                <td>{{ sale.tax }}%</td>
                                <td>${{ sale.sale_total }}</td>
                                <td>
                                    <span v-if="sale.status == 1">Activo</span>
                                    <span v-else>Inactivo</span>
                                </td>
                                <td class="text-center">
                                    <router-link :to='{name:"showSale", params:{id:sale.id}}' class="btn btn-sm btn-outline-secondary">
                                        <i class="fas fa-scroll"></i>
                                    </router-link>
                                    <div class="d-inline">
                                        <a :href="sale_print + '/' + sale.id" class="btn btn-sm btn-outline-dark" target="_blank">
                                            <i class="fas fa-print"></i>
                                        </a>
                                    </div>
                                    <div class="d-inline" v-if="sale.status == 1">
                                        <a class="btn btn-sm btn-outline-success" type="button" @click="deleteSale(sale.id)" >
                                            <i class="fas fa-toggle-on"></i>
                                        </a>
                                    </div>
                                    <div class="d-inline" v-else>
                                        <a class="btn btn-sm btn-outline-danger" type="button" @click="activateSale(sale.id)" >
                                            <i class="fas fa-toggle-off"></i>
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
export default{
    name: "sale",
    data(){
        return{
            sales:[],
            search: "",
            setTimeoutSearch: '',
            errors: ''
        }
    },
    created(){
        this.showSales()
        this.getSaleStore()
    },
    methods:{
        showSales(){
             this.axios.get('/api/sale', {
                 params:{
                     search: this.search
                 } 
             })
            .then(response=>{
                this.sales = response.data
            })
            .catch(error=>{
                this.errors = error
                console.log(this.errors)
            })
        },
        searchItem(){
            clearTimeout(this.setTimeoutSearch)
            this.setTimeoutSearch = setTimeout(this.showSales, 360)
        },
        getSaleStore(){
            this.sale_print = document.getElementsByTagName('meta').saleprint.content;
        },
        deleteSale(id){
            if(confirm('¿Desea borrar el registro?')){
                this.axios.delete(`/api/sale/${id}`)
                .then(response=>{
                    this.showSales()
                })
                .catch(error=>{
                    this.errors = error
                    console.log(this.errors)
                })
            } 
        },
        activateSale(id){
            if(confirm('¿Desea activar el registro?')){
                this.axios.post(`/api/sale/activate/${id}`)
                .then(response=>{
                    this.showSales()
                })
                .catch(error=>{
                    this.errors = error
                })
            }
        }
    }
}
</script>