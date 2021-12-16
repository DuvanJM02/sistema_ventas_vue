<template>
    <div class="container mt-5">
        <form @submit.prevent="create">
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
                                <input class="form-control" type="password" name="n_comprobante" id="n_comprobante" v-model="n_comprobante">
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="form-group mt-3">
                                <label for="pproduct_id">Producto</label>
                                <select name="pproduct_id" id="pproduct_id" class="form-control" v-model="pproduct_id">
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
                                        <tbody>

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
        name: "createSupplier",
        data(){
            return{
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
                products: [],
                imgThumb: null,
                message: null,
                errors: '',
            }
        },
        created(){
            this.showData();
            this.limpiar();
        },
        methods:{
            getImage(e){
                let file = e.target.files[0];
                console.log(file)
                this.user.img_path = file;
                this.uploadImg(file);
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


                if(product_id != '' && quantity != '' && quantity > 0 && purchase_price != '' && sale_price != ''){
                    this.subtotal[this.cont] = (quantity * purchase_price)
                    this.total = this.total + this.subtotal[this.cont]

                    var fila = `
                        <tr class="selected" id="fila${this.cont}">
                            <td>
                                <button type="button" class="btn btn-danger" onclick="eliminar(${this.cont});">x</button>
                            </td>
                            <td>
                                <input class="form-control" type="hidden" name="product_id[]" value="${product_id}">
                                ${this.producto}
                            </td>
                            <td>
                                <input class="form-control" type="number" name="quantity[]" value="${quantity}">
                            </td>
                            <td>
                                <input class="form-control" type="number" name="purchase_price[]" value="${purchase_price}">
                            </td>
                            <td>
                                <input class="form-control" type="number" name="sale_price[]" value="${sale_price}">
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
                let formData = new FormData();
                formData.append('name', this.user.name)
                formData.append('email', this.user.email)
                formData.append('password', this.user.password)
                formData.append('current_password', this.user.current_password)
                formData.append('document', this.user.document)
                formData.append('n_document', this.user.n_document)
                formData.append('location', this.user.location)
                formData.append('phone', this.user.phone)
                formData.append('status', this.user.status)
                formData.append('role', this.user.role)
                formData.append('img_path', this.user.img_path)
                console.log(formData)
                console.log(this.user)
                if(this.user.password == this.user.current_password){
                    await this.axios.post('/api/supplier', formData)
                    .then(response=>{
                        console.log(response.data)
                        this.$router.push({name:"showSupplier"})
                    })
                    .catch(error=>{
                        console.log(error)
                    })
                }else{
                    this.message = "Las contraseñas ingresadas no coinciden"
                    this.user.password = '';
                    this.user.current_password = '';
                    return this.message;
                }
            },
        },
        computed:{
            imagen(){
                return this.imgThumb;
            }
        }
    }
</script>