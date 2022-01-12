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
                            Comprobante de venta N° {{ sale.n_comprobante }}
                            <span class="float-end mr-3">
                                <a :href="sale_print + '/' + sale.id" class="btn btn-warning" target="_blank">
                                    <i class="fas fa-print"></i>
                                </a>
                            </span>
                        </h4>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-3">
                                <strong>Id:</strong>
                                <p>{{ sale.id }}</p>
                            </div>
                            <div class="col-lg-3">
                                <strong>Fecha:</strong>
                                <p>
                                    <time :datetime="sale.date">{{ sale.date }}</time>
                                </p>
                            </div>
                            <div class="col-lg-3">
                                <strong>Nombre del proveedor:</strong>
                                <p>{{ sale.name }}</p>
                            </div>
                            <div class="col-lg-3">
                                <strong>Impuesto:</strong>
                                <p>{{ sale.tax }}%</p>
                            </div>
                            <div class="col-lg-4">
                                <strong>Tipo de comprobante:</strong>
                                <p>{{ sale.t_comprobante }}</p>
                            </div>
                            <div class="col-lg-4">
                                <strong>Serie:</strong>
                                <p>{{ sale.s_comprobante }}</p>
                            </div>
                            <div class="col-lg-4">
                                <strong>Número de comprobante:</strong>
                                <p>{{ sale.n_comprobante }}</p>
                            </div>
                            <div class="form-group mt-3">
                            </div>
                            <div class="form-group">
                                <div class="table-responsive">
                                    <table id="details" class="table table-striped table-bordered table-condensed table-hover">
                                        <thead style="background: cadetblue;">
                                            <th>Producto</th>
                                            <th>Cantidad <abbr title="Unidades">(Unds)</abbr></th>
                                            <th>Precio venta <abbr title="Peso Colombiano">(COP)</abbr></th>
                                            <th>Descuento <abbr title="Peso Colombiano">(COP)</abbr></th>
                                            <th>Subtotal <abbr title="Peso Colombiano">(COP)</abbr></th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="detail in details" :key="detail.id">
                                                <td>{{ detail.product }}</td>
                                                <td>{{ detail.quantity }}</td>
                                                <td>${{ detail.sale_price }}</td>
                                                <td>${{ detail.discount }}</td>
                                                <td>${{ detail.quantity * detail.sale_price - detail.discount }}</td>
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
                            </div>
                            <div class="col-12 text-center">
                                <a :href="sale_print + '/' + sale.id" class="btn btn-warning" target="_blank"><i class="fas fa-print"></i> Imprimir</a>
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
        name: "showSale",
        data(){
            return{
                sale: [],
                details: [],
                total: 0,
                sale_print: null,
                errors: []
            }
        },
        created(){
            this.showData()
            this.getSaleStore()
        },
        methods:{
            async showData(){
                await this.axios.get(`/api/sale/${this.$route.params.id}`)
                .then(response=>{
                    this.details = response.data.details
                    this.sale = response.data.sale
                    // this.total += this.details.sale_total
                    for(var i = 0; i < this.details.length; i++){
                        this.total += this.details[i].quantity * this.details[i].sale_price - this.details[i].discount
                    }
                })
            },
            getSaleStore(){
                this.sale_print = document.getElementsByTagName('meta').saleprint.content;
            },
        },
    }
</script>
