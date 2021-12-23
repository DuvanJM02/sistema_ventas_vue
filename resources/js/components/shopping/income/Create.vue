<template>
    <div class="container mt-5">
        <form @submit.prevent="create" method="POST">
            <input type="hidden" name="_token" :value="csrf">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Crear ingreso</h4>
                        </div>
                        <div class="card-body">
                            <div class="alert alert-danger" role="alert" v-if="message">
                                <strong>{{ message }}</strong>
                            </div>
                            <div class="form-group">
                                <label for="user_id">Proveedor</label>
                                <select v-model="user_id" id="user_id" class="form-control">
                                    <option value="">Seleccione un proveedor</option>
                                    <option v-for="user in users" :key="user.id" :value="user.id">{{ user.id + ': ' +  user.name }}</option>
                                </select>
                            </div>
                            <div class="form-group mt-3">
                                <label for="t_comprobante">Tipo de comprobante</label>
                                <select v-model="t_comprobante" id="t_comprobante" class="form-control">
                                    <option value="Boleta">Boleta</option>
                                    <option value="Factura">Factura</option>
                                    <option value="Tiquete">Tiquete</option>
                                </select>
                            </div>
                            <div class="form-group mt-3">
                                <label for="s_comprobante">Serie de comprobante</label>
                                <input class="form-control" type="number" v-model="s_comprobante" id="s_comprobante">
                            </div>
                            <div class="form-group mt-3">
                                <label for="n_comprobante">N° de comprobante</label>
                                <input class="form-control" type="number" id="n_comprobante" v-model="n_comprobante">
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group mt-3">
                                <label for="pproduct_id">Producto</label>
                                <select id="pproduct_id" class="form-control" v-model="pproduct_id">
                                    <option value="">Seleccione un producto</option>
                                    <option v-for="product in products" :key="product.id" :value="product.id">
                                        {{ product.id + ' - ' + product.product }}
                                    </option>
                                </select>
                            </div>
                            <div class="form-group mt-3">
                                <label for="pquantity">Cantidad</label>
                                <input class="form-control" type="number" min="0" v-model="pquantity">
                            </div>
                            <div class="form-group mt-3">
                                <label for="ppurchase_price">Precio de compra</label>
                                <input class="form-control" type="number" min="0" v-model="ppurchase_price">
                            </div>
                            <div class="form-group mt-3">
                                <label for="psale_price">Precio de venta</label>
                                <input class="form-control" type="number" min="0" v-model="psale_price">
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
                                            <th>Precio compra</th>
                                            <th>Precio venta</th>
                                            <th>Subtotal</th>
                                        </thead>
                                        <tfoot style="border: 1px solid cadetblue">
                                            <th><strong>TOTAL</strong></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th><h4>$ <span id="total">. 0</span></h4></th>
                                        </tfoot>
                                        <tbody v-if="iquantity != ''">
                                            <!-- <tr class="selected" id="cont">
                                                <td>
                                                    <button type="button" class="btn btn-danger" onclick="">x</button>
                                                </td>
                                                <td>
                                                    <input class="form-control" type="hidden" v-model="iproduct_id">
                                                    {{producto}}
                                                </td>
                                                <td>
                                                    <input class="form-control" type="number" v-model="iquantity" value="quantity">
                                                </td>
                                                <td>
                                                    <input class="form-control" type="number" v-model="ipurchase_price">
                                                </td>
                                                <td>
                                                    <input class="form-control" type="number" v-model="isale_price">
                                                </td>
                                                <td>
                                                    {{subtotal}}
                                                </td>
                                            </tr> -->
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
                <div class="col-lg-4">
                    <div class="card" v-if="imagen">
                        <div class="card-header">
                            <h4>{{ user.name }}</h4>
                        </div>
                        <div class="card-body d-flex justify-content-center">
                            <a class="profile-photo" :href="imagen" data-lightbox='imagen'>
                                <img :src="imagen" alt="" width="100%">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "createIncome",
        data(){
            return{
                csrf: null,
                income_store: null,
                user_id: '',
                t_comprobante: '',
                s_comprobante: '',
                n_comprobante: '',
                pproduct_id: '',
                pquantity: '',
                ppurchase_price: '',
                psale_price: '',
                producto: '',
                cont: 0,
                total: 0,
                subtotal: [],
                users: [],
                i: '',
                products: [],
                iproduct_id: [],
                iquantity: [],
                ipurchase_price: [],
                isale_price: [],
                imgThumb: null,
                message: null,
                errors: '',
            }
        },
        created(){
            this.showData();
            this.limpiar();
            this.getCsrf();
            this.getIncomeStore();
        },
        methods:{
            getImage(e){
                let file = e.target.files[0];
                console.log(file)
                this.user.img_path = file;
                this.uploadImg(file);
            },
            getCsrf(){
                this.csrf = document.getElementsByTagName('meta').csrf.content;
            },
            getIncomeStore(){
                this.income_store = document.getElementsByTagName('meta').incomestore.content;
            },
            uploadImg(file){
                let reader = new FileReader() 
                reader.onload = (e) => {
                    this.imgThumb = e.target.result;
                }
                reader.readAsDataURL(file);
            },
            // async showCategory(){
            //     await this.axios.get('/api/product/create')
            //     .then(response=>{
            //         console.log(response.data)
            //         this.categories = response.data
            //     })
            //     .catch(error=>{
            //         console.log(error)
            //     })
            // },
            agregar(){

                // this.iproduct_id.push(this.pproduct_id)
                // if(!this.products[this.pproduct_id-1].product){
                //     this.errors = "¡Debe rellenar todos los campos!"
                //     alert(this.errors)
                // }
                // this.producto = this.products[this.pproduct_id-1].product
                // // this.producto = this.$refs.producto.value
                // this.iquantity.push(this.pquantity)
                // this.ipurchase_price.push(this.ppurchase_price)
                // this.isale_price.push(this.psale_price)

                let product_id = this.pproduct_id
                if(!this.products[product_id-1].product){
                    this.errors = "¡Debe rellenar todos los campos!"
                    alert(this.errors)
                }
                this.producto = this.products[product_id-1].product
                // this.producto = this.$refs.producto.value
                let quantity = this.pquantity
                let purchase_price = this.ppurchase_price
                let sale_price = this.psale_price

                // if(this.iproduct_id != ''){
                //     this.subtotal[this.cont] = (this.iquantity * this.ipurchase_price)
                //     this.total = this.total + this.subtotal[this.cont]

                //     this.quantity.push[this.iquantity]

                //     // var fila = ``
                //     this.cont++

                //     console.log(this.iquantity)
                //     var t = document.getElementById("total");
                //     t.innerHTML = this.total;
                //     // this.limpiar()
                //     // console.log(fila)
                //     // var tabla = document.getElementById("details");
                //     // tabla.insertRow(-1).innerHTML = fila;
                // }else{
                //     this.errors = "¡Debe rellenar todos los campos!"
                // }


                if(product_id != '' && quantity != '' && quantity > 0 && purchase_price != '' && sale_price != ''){
                    this.subtotal[this.cont] = (quantity * purchase_price)
                    this.total = this.total + this.subtotal[this.cont]

                    var fila = `
                        <tr class="selected" id="fila${this.cont}">
                            <td>
                                <button type="button" class="btn btn-danger" onclick="eliminar(${this.cont});">x</button>
                            </td>
                            <td>
                                <input class="form-control" type="hidden" name="iproduct_id" value="${product_id}">
                                ${this.producto}
                            </td>
                            <td>
                                <input class="form-control" type="number" name="iquantity" value="${quantity}">
                            </td>
                            <td>
                                <input class="form-control" type="number" name="ipurchase_price" value="${purchase_price}">
                            </td>
                            <td>
                                <input class="form-control" type="number" name="isale_price" value="${sale_price}">
                            </td>
                            <td>
                                ${this.subtotal[this.cont]}
                            </td>
                        </tr>
                    `
                    this.cont++
                    var t = document.getElementById("total");
                    t.innerHTML = this.total;
                    this.limpiar()
                    console.log(fila)
                    var tabla = document.getElementById("details");
                    tabla.insertRow(-1).innerHTML = fila;
                }else{
                    this.errors = "¡Debe rellenar todos los campos!"
                }
            },
            eliminar(index){
                this.total = this.total - this.subtotal[index];
                var t = document.getElementById("total");
                t.innerHTML = this.total;
                var df = document.getElementById("fila");
                df.innerHTML = "s";
            },
            limpiar(){
                this.pquantity = ''
                this.ppurchase_price = ''
                this.psale_price = ''
            },
            async showData(){
                await this.axios.get('/api/income/create')
                .then(response=>{
                    this.users = response.data[0]
                    this.products = response.data[1]
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            async create(){
                for (let i = 0; i < this.cont; i++) {
                    this.iproduct_id.push(document.getElementsByName("iproduct_id")[i].value);
                    this.iquantity.push(document.getElementsByName("iquantity")[i].value);
                    this.ipurchase_price.push(document.getElementsByName("ipurchase_price")[i].value);
                    this.isale_price.push(document.getElementsByName("isale_price")[i].value);
                }
                console.log(this.iproduct_id)
                console.log(this.iquantity)
                console.log(this.ipurchase_price)
                console.log(this.isale_price)
                
                let formData = new FormData();
                formData.append('user_id', this.user_id)
                formData.append('t_comprobante', this.t_comprobante)
                formData.append('s_comprobante', this.s_comprobante)
                formData.append('n_comprobante', this.n_comprobante)
                formData.append('producto_id', this.iproduct_id)
                formData.append('quantity', this.iquantity)
                formData.append('purchase_price', this.ipurchase_price)
                formData.append('sale_price', this.isale_price)
                console.log(formData)
                await this.axios.post('/api/income', formData)
                .then(response=>{
                    console.log(response.data)
                    this.$router.push({name:"indexIncome"})
                })
                .catch(error=>{
                    console.log(error)
                })
            },
        },
        computed:{
            imagen(){
                return this.imgThumb;
            },
        }
    }
</script>