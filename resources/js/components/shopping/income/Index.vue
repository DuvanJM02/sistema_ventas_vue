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
                                <td>{{ income.t_comprobante + ': ' + income.s_comprobante + '-' + income.n_comprobante }}</td>
                                <td>{{ income.tax }}</td>
                                <td>{{ income.total }}</td>
                                <td>{{ income.status }}</td>
                                <td class="text-center">
                                    <router-link :to='{name:"showIncome", params:{id:income.id}}' class="btn btn-warning">
                                        <i class="fas fa-edit"></i>
                                    </router-link>
                                    <div class="d-inline" v-if="income.status">
                                        <a class="btn btn-danger" type="button" @click="deleteIncome(income.id)" >
                                            <i class="fas fa-eye-slash"></i>
                                        </a>
                                    </div>
                                    <div class="d-inline" v-if="!income.status">
                                        <a class="btn btn-success" type="button" @click="activateIncome(income.id)" >
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
export default{
    name: "income",
    data(){
        return{
            incomes:[],
            search: "",
            setTimeoutSearch: ''
        }
    },
    created(){
        this.showIncomes()
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
                console.log(error)
            })
        },
        searchItem(){
            clearTimeout(this.setTimeoutSearch)
            this.setTimeoutSearch = setTimeout(this.showIncomes, 360)
        },
        deleteIncome(id){
            if(confirm('¿Desea borrar el registro?')){
                this.axios.delete(`/api/income/${id}`)
                .then(response=>{
                    this.showIncomes()
                })
                .catch(error=>{
                    console.log(error) 
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
                    console.log(error)
                })
            }
        }
    }
}
</script>
