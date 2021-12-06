<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Subir producto</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="create" enctype="multipart/formdata">
                            <div class="form-group">
                                <label for="name">Código</label>
                                <input class="form-control" type="text" v-model="product.code" autofocus>
                            </div>
                            <div class="form-group mt-3">
                                <label for="name">Nombre</label>
                                <input class="form-control" type="text" v-model="product.name" autofocus>
                            </div>
                            <div class="form-group mt-3">
                                <label for="description">Descripción</label> 
                                <input class="form-control" type="text" v-model="product.description">
                            </div>
                            <div class="form-group mt-3">
                                <label for="stock">Cantidad</label> 
                                <input class="form-control" type="number" v-model="product.stock">
                            </div>
                            <div class="form-group mt-3">
                                <label for="category">Categoría</label> 
                                <select class="form-control w-100"  v-model="product.category_id">
                                    <option value="">Elige una opción</option>
                                    <option v-for="category in categories" :key="category.id" v-bind:value="category.id">{{ category.name }}</option>
                                </select>
                            </div>
                            <div class="form-group mt-3">
                                <label for="img_path">Imágen</label> 
                                <input class="form-control" type="file" @change="onFileChange">
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="btn btn-success">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "createProduct",
        data(){
            return{
                categories: [],
                product:{
                    code: "",
                    name:"",
                    description:"",
                    stock: "",
                    status: 1,
                    category_id: "",
                    img_path: '',
                },
                errors: []
            }
        },
        created(){
            this.showCategory()
        },
        methods:{
            async showCategory(){
                await this.axios.get('/api/product/create')
                .then(response=>{
                    console.log(response.data)
                    this.categories = response.data
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            async create(){
                await this.axios.post('/api/product', this.product)
                .then(response=>{
                    this.$router.push({name:"showProduct"})
                })
                .catch(error=>{
                    
                })
            },
            onFileChange(e) {
                var files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.create(files[0]);
            },
        } 
    }
</script>