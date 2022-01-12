<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4>
                            <a @click="$router.go(-1)">
                                <i class="fas fa-arrow-left"></i>
                            </a> &nbsp;
                            Comprobante de ingreso N° {{ income.n_comprobante }}
                            <span class="float-end mr-3">
                                <a :href="income_print + '/' + income.id" class="btn btn-warning" target="_blank">
                                    <i class="fas fa-print"></i>
                                </a>
                            </span>
                        </h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-3">
                                <strong>Id:</strong>
                                <p>{{ income.id }}</p>
                            </div>
                            <div class="col-lg-3">
                                <strong>Fecha:</strong>
                                <p>
                                    <time :datetime="income.date">{{ income.date }}</time>
                                </p>
                            </div>
                            <div class="col-lg-3">
                                <strong>Nombre del proveedor:</strong>
                                <p>{{ income.name }}</p>
                            </div>
                            <div class="col-lg-3">
                                <strong>Impuesto:</strong>
                                <p>{{ income.tax }}%</p>
                            </div>
                            <div class="col-lg-4">
                                <strong>Tipo de comprobante:</strong>
                                <p>{{ income.t_comprobante }}</p>
                            </div>
                            <div class="col-lg-4">
                                <strong>Serie:</strong>
                                <p>{{ income.s_comprobante }}</p>
                            </div>
                            <div class="col-lg-4">
                                <strong>Número de comprobante:</strong>
                                <p>{{ income.n_comprobante }}</p>
                            </div>
                            <div class="form-group mt-3">
                            </div>
                            <div class="form-group">
                                <table id="details" class="table table-striped table-bordered table-condensed table-hover">
                                    <thead style="background: cadetblue;">
                                        <th>Producto</th>
                                        <th>Cantidad <abbr title="Unidades">(Unds)</abbr></th>
                                        <th>Precio compra <abbr title="Peso Colombiano">(COP)</abbr></th>
                                        <th>Precio venta <abbr title="Peso Colombiano">(COP)</abbr></th>
                                        <th>Subtotal <abbr title="Peso Colombiano">(COP)</abbr></th>
                                    </thead>
                                    <tbody>
                                        <tr v-for="detail in details" :key="detail.id">
                                            <td>{{ detail.product }}</td>
                                            <td>{{ detail.quantity }}</td>
                                            <td>${{ detail.purchase_price }}</td>
                                            <td>${{ detail.sale_price }}</td>
                                            <td>${{ detail.quantity * detail.purchase_price }}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot style="border: 1px solid cadetblue">
                                        <th><strong>TOTAL</strong></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>
                                            <h4>$
                                                <span>{{ total }}</span>
                                                <abbr title="Peso Colombiano">COP</abbr>
                                            </h4>
                                        </th>
                                    </tfoot>
                                </table>
                            </div>
                            <div class="col-12 text-center">
                                <a :href="income_print + '/' + income.id" class="btn btn-warning" target="_blank"><i class="fas fa-print"></i> Imprimir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default{
        name: "showIncome",
        data(){
            return{
                income: [],
                details: [],
                total: 0,
                income_print: null,
                errors: []
            }
        },
        created(){
            this.showData()
            this.getIncomeStore()
        },
        methods:{
            async showData(){
                await this.axios.get(`/api/income/${this.$route.params.id}`)
                .then(response=>{
                    this.details = response.data.details
                    this.income = response.data.income
                    for(var i = 0; i < this.details.length; i++){
                        this.total += this.details[i].quantity * this.details[i].purchase_price
                    }
                })
            },
            getIncomeStore(){
                this.income_print = document.getElementsByTagName('meta').incomeprint.content;
            },
        },
    }
</script>
