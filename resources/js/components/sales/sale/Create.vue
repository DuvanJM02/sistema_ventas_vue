<template>
    <div class="container mt-5">
            <!-- Button trigger modal -->
        <!-- <form @submit.prevent="create" method="POST"> -->
        <form @submit="validar" :action="sale_store" method="POST">
            <input type="hidden" name="_token" :value="csrf">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>
                                <a @click="$router.go(-1)">
                                    <i class="fas fa-arrow-left"></i>
                                </a> &nbsp;
                                Registrar venta
                            </h4>
                        </div>
                        <div class="card-body">
                            <div class="alert alert-danger" role="alert" v-if="message">
                                <strong>{{ message }}</strong>
                            </div>
                            <div class="form-group">
                                <label for="user_id">Proveedor</label>
                                <select v-model="user_id" name="user_id" id="user_id" class="form-control" required>
                                    <option value="">Seleccione un cliente</option>
                                    <option v-for="user in users" :key="user.id" :value="user.id">{{ user.id + ': ' +  user.name }}</option>
                                </select>
                            </div>
                            <div class="form-group mt-3">
                                <label for="t_comprobante">Tipo de comprobante</label>
                                <select v-model="t_comprobante" name="t_comprobante" id="t_comprobante" class="form-control" required>
                                    <option value="">Seleccione un tipo de comprobante</option>
                                    <option value="Boleta">Boleta</option>
                                    <option value="Factura">Factura</option>
                                    <option value="Tiquete">Tiquete</option>
                                </select>
                            </div>
                            <div class="form-group mt-3">
                                <label for="s_comprobante">Serie de comprobante</label>
                                <input class="form-control" type="number" name="s_comprobante" v-model="s_comprobante" id="s_comprobante" required>
                            </div>
                            <div class="form-group mt-3">
                                <label for="n_comprobante">N° de comprobante</label>
                                <input class="form-control" type="number" name="n_comprobante" id="n_comprobante" v-model="n_comprobante" required>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="form-group mt-3 col-lg-3 col-sm-4 col-xs-12">
                                    <label for="pproduct_id">Producto</label>
                                    <select id="pproduct_id" name="pproduct_id" class="form-control" v-model="pproduct_id">
                                        <option value="">Seleccione un producto</option>
                                        <option v-for="product in products" :key="product.id" :value="product.id">
                                            {{ product.id + ' - ' + product.product }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group mt-3 col-lg-3 col-sm-4 col-xs-12">
                                    <label for="pquantity">Cantidad</label>
                                    <input class="form-control" type="number" min="0" v-model="pquantity">
                                </div>
                                <div class="form-group mt-3 col-lg-3 col-sm-4 col-xs-12">
                                    <label for="psale_price">Precio de venta</label>
                                    <input class="form-control" type="number" min="0" v-model="psale_price">
                                </div>
                                <div class="form-group mt-3 col-lg-3 col-sm-4 col-xs-12">
                                    <label for="pdiscount">Descuento</label>
                                    <input class="form-control" type="number" min="0" v-model="pdiscount">
                                </div>
                            </div>
                            <div class="form-group my-3">
                                <button type="button" class="btn btn-warning" id="btn_Add" @click="agregar()">Agregar</button>
                            </div>
                            <div class="col-lg-12">
                                <div v-if="errors" class="my-3">
                                    <div>
                                        <div id="liveAlertPlaceholder slide-fade">
                                            <div class="alert alert-danger alert-alert-dismissible" role="alert">
                                                <i class="fas fa-exclamation-circle"></i>
                                                {{ errors }}
                                                <span class="end">
                                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <table id="details" class="table table-striped table-bordered table-condensed table-hover">
                                        <thead style="background: cadetblue;">
                                            <th>Opciones</th>
                                            <th>Producto</th>
                                            <th>Cantidad</th>
                                            <th>Precio venta</th>
                                            <th>Descuento</th>
                                            <th>Subtotal</th>
                                        </thead>
                                        <tfoot style="border: 1px solid cadetblue">
                                            <th><strong>TOTAL</strong></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th>
                                                <h4>
                                                    $ <span v-if="total == 0" id="total">. 0</span>
                                                    <span v-else id="total">{{ total }}</span>
                                                </h4>
                                                <input type="hidden" name="sale_total" v-model="total">
                                            </th>
                                        </tfoot>
                                        <tbody>
                                            <tr class="selected" v-for="c in cont" :key="c" :id="'fila' + c">
                                                <td>
                                                    <button type="button" class="btn btn-danger" @click="eliminar(c)">
                                                        <i class="fas fa-trash"></i>
                                                    </button>
                                                </td>
                                                <td>
                                                    <input class="form-control" type="hidden" name="iproduct_id[]" v-model="iproduct_id[c-1]" required>
                                                    {{ iproduct[c-1] }}
                                                </td>
                                                <td>
                                                    <input class="form-control" type="number" name="iquantity[]" v-model="iquantity[c-1]" required>
                                                </td>
                                                <td>
                                                    <input class="form-control" type="number" name="isale_price[]" v-model="isale_price[c-1]" required>
                                                </td>
                                                <td>
                                                    <input class="form-control" type="number" name="idiscount[]" v-model="idiscount[c-1]">
                                                </td>
                                                <td>
                                                    $ {{ subtotal[c-1] }}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="btn btn-success">Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "createSale",
        data(){
            return{
                csrf: null,
                sale_store: null,
                user_id: '',
                t_comprobante: '',
                s_comprobante: '',
                n_comprobante: '',
                pproduct_id: '',
                pquantity: '',
                psale_price: '',
                pdiscount: 0,
                producto: '',
                cont: 0,
                total: 0,
                subt: [],
                subtotal: [],
                users: [],
                i: '',
                products: [],
                product_id: null,
                quantity: null,
                sale_price: null,
                discount: null,
                iproduct_id: [],
                iproduct: [],
                iquantity: [],
                isale_price: [],
                idiscount: [],
                imgThumb: null,
                message: null,
                errors: '',
            }
        },
        created(){
            this.showData();
            this.limpiar();
            this.getCsrf();
            this.getSaleStore();
        },
        methods:{
            validar(e){
                if(this.n_comprobante != ""){
                    return true;
                }
                    e.preventDefault()
            },
            getCsrf(){
                this.csrf = document.getElementsByTagName('meta').csrf.content;
            },
            getSaleStore(){
                this.sale_store = document.getElementsByTagName('meta').salestore.content;
            },
            agregar(){
                this.product_id = this.pproduct_id
                if(!this.products[this.product_id-1].product){
                    this.errors = "¡Debe rellenar todos los campos!"
                    alert(this.errors)
                }
                this.producto = this.products[this.product_id-1].product
                // this.producto = this.$refs.producto.value
                this.quantity = this.pquantity
                this.sale_price = this.psale_price
                this.discount = this.pdiscount

                if(this.product_id != '' && this.quantity != '' && this.quantity > 0 && this.sale_price != ''){
                    if(this.quantity > this.products[this.product_id-1].stock){
                        this.errors = "¡La cantidad no puede ser mayor al stock!"
                        alert(this.errors)
                    }else if(this.discount > (this.sale_price * this.quantity)){
                        this.errors = "¡El descuento no puede ser mayor al precio de venta!"
                        alert(this.errors)

                    }else{
                        this.subt[this.cont] = (this.quantity * this.sale_price - this.discount)
                        this.total = (this.total + this.subt[this.cont])

                        this.iproduct_id.push(this.product_id)
                        this.iproduct.push(this.producto)
                        this.iquantity.push(this.quantity)
                        this.isale_price.push(this.sale_price)
                        this.idiscount.push(this.discount)
                        this.subtotal.push(this.subt[this.cont])
                        this.cont++
                        this.limpiar()
                    }
                }else{
                    this.errors = "¡Debe rellenar todos los campos!"
                }
            },
            eliminar(index){
                this.total = this.total - this.subtotal[index - 1];

                this.iproduct_id.splice(index -1, 0)
                this.iproduct.splice(index -1, 0)
                this.iquantity.splice(index -1, 0);
                this.isale_price.splice(index -1, 0)
                this.idiscount.splice(index -1, 0)
                $('#fila' + index).remove(); 
            },
            limpiar(){
                this.pquantity = ''
                this.psale_price = ''
                this.pdiscount = ''
            },
            async showData(){
                await this.axios.get('/api/sale/create')
                .then(response=>{
                    this.users = response.data[0]
                    this.products = response.data[1]
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            // async create(){
            //     for (let i = 0; i < this.cont; i++) {
            //         this.iproduct_id.push(document.getElementsByName("iproduct_id")[i].value);
            //         this.iquantity.push(document.getElementsByName("iquantity")[i].value);
            //         this.ipurchase_price.push(document.getElementsByName("ipurchase_price")[i].value);
            //         this.isale_price.push(document.getElementsByName("isale_price")[i].value);
            //     }
            //     console.log(this.iproduct_id)
            //     console.log(this.iquantity)
            //     console.log(this.isale_price)
                
            //     let formData = new FormData();
            //     formData.append('user_id', this.user_id)
            //     formData.append('t_comprobante', this.t_comprobante)
            //     formData.append('s_comprobante', this.s_comprobante)
            //     formData.append('n_comprobante', this.n_comprobante)
            //     formData.append('producto_id', this.iproduct_id)
            //     formData.append('quantity', this.iquantity)
            //     formData.append('purchase_price', this.ipurchase_price)
            //     formData.append('sale_price', this.isale_price)
            //     console.log(formData)
            //     await this.axios.post('/api/income', formData)
            //     .then(response=>{
            //         console.log(response.data)
            //         this.$router.push({name:"indexIncome"})
            //     })
            //     .catch(error=>{
            //         console.log(error)
            //     })
            // },
        },
        computed:{
        },
    }
</script>