<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 mb-4">
                <h3 class="mt-5">Ingresos &nbsp;
                    <router-link to="/income/create" class="btn btn-info">
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
                <div v-if="incomes == '' && !errors">
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
                                <th>Proveedor</th>
                                <th>Comprobante</th>
                                <th>Impuesto</th>
                                <th>Total ingreso</th>
                                <th>Estado</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="income in incomes" :key="income.id">
                                <td>{{ income.date }}</td>
                                <td>{{ income.name }}</td>
                                <td>
                                    <router-link :to='{name:"showIncome", params:{id:income.id}}'>
                                        {{ income.t_comprobante + ': ' + income.s_comprobante + '-' + income.n_comprobante }}
                                    </router-link>
                                </td>
                                <td>{{ income.tax }}%</td>
                                <td>${{ income.total }}</td>
                                <td>
                                    <span v-if="income.status == 1">Activo</span>
                                    <span v-else>Inactivo</span>
                                </td>
                                <td class="text-center">
                                    <router-link :to='{name:"showIncome", params:{id:income.id}}' class="btn btn-sm btn-outline-secondary">
                                        <i class="fas fa-scroll"></i>
                                    </router-link>
                                    <div class="d-inline">
                                        <a :href="income_print + '/' + income.id" class="btn btn-sm btn-outline-dark" target="_blank">
                                            <i class="fas fa-print"></i>
                                        </a>
                                    </div>
                                    <div class="d-inline" v-if="income.status == 1">
                                        <a class="btn btn-sm btn-outline-success" type="button" @click="deleteIncome(income.id)" >
                                            <i class="fas fa-toggle-on"></i>
                                        </a>
                                    </div>
                                    <div class="d-inline" v-else>
                                        <a class="btn btn-sm btn-outline-danger" type="button" @click="activateIncome(income.id)" >
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
    name: "income",
    data(){
        return{
            incomes:[],
            search: "",
            setTimeoutSearch: '',
            errors: ''
        }
    },
    created(){
        this.showIncomes()
        this.getIncomeStore()
    },
    methods:{
        showIncomes(){
             this.axios.get('/api/income', {
                 params:{
                     search: this.search
                 }
             })
            .then(response=>{
                this.incomes = response.data
            })
            .catch(error=>{
                this.errors = error
                console.log(this.errors)
            })
        },
        searchItem(){
            clearTimeout(this.setTimeoutSearch)
            this.setTimeoutSearch = setTimeout(this.showIncomes, 360)
        },
        getIncomeStore(){
            this.income_print = document.getElementsByTagName('meta').incomeprint.content;
        },
        deleteIncome(id){
            if(confirm('¿Desea borrar el registro?')){
                this.axios.delete(`/api/income/${id}`)
                .then(response=>{
                    this.showIncomes()
                })
                .catch(error=>{
                    this.errors = error
                    console.log(this.errors)
                })
            } 
        },
        activateIncome(id){
            if(confirm('¿Desea activar el registro?')){
                this.axios.post(`/api/income/activate/${id}`)
                .then(response=>{
                    this.showIncomes()
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