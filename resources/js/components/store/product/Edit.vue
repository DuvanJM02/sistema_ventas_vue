<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <h4>Editar producto</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="edit" enctype="multipart/formdata">
                            <div class="form-group">
                                <label for="name">Código</label>
                                <input class="form-control" type="text" v-model="product.code" required autofocus>
                            </div>
                            <div class="form-group mt-3">
                                <label for="name">Nombre</label>
                                <input class="form-control" type="text" v-model="product.name" required>
                            </div>
                            <div class="form-group mt-3">
                                <label for="description">Descripción</label> 
                                <input class="form-control" type="text" v-model="product.description" required>
                            </div>
                            <div class="form-group mt-3">
                                <label for="stock">Cantidad</label> 
                                <input class="form-control" type="number" v-model="product.stock" required>
                            </div>
                            <div class="form-group mt-3">
                                <label for="category">Categoría</label> 
                                <select class="form-control w-100"  v-model="product.category_id" required>
                                    <option value="">Elige una opción</option>

                                    <option v-for="category in categories" :key="category.id" v-bind:value="category.id" :selected="product.category_id == category.id">{{ category.name }}</option>
                                </select>
                            </div>
                            <div class="form-group mt-3">
                                <label for="img_path">Imágen</label> 
                                <input class="form-control" type="file" v-on:change="getImage" accept="image/*"> 
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="btn btn-success">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="card">
                    <div>
                        <div class="card-header">
                            <h4>Imágen actual: {{ product.name }}</h4>
                        </div>
                        <div class="card-body">
                            <a v-bind:href="'/img/products/' + product.img_path" data-fancybox="image-1" data-caption="Imágen actual">
                                <img :src="'/img/products/' + product.img_path" v-bind:alt="product.name" width="100%">
                            </a>
                        </div>
                    </div>
                    <div v-if="imagen">
                        <div class="card-header">
                            <h4>Imágen nueva</h4>
                        </div>
                        <div class="card-body">
                            <a :href="imagen" data-fancybox="image-1" data-caption="Imágen nueva">
                                <img :src="imagen" alt="" width="100%">
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
</template>

<script>
export default{
        name: "editarProduct",
        data(){
            return{
                file: '',
                imgThumb: null,
                categories: [],
                product:{
                    code: "",
                    name:"",
                    description:"",
                    stock: "",
                    status: 1,
                    category_id: "",
                    img_path: '',
                    img_path2: '',
                },
                errors: []
            }
        },
        created(){
            this.showData()
        },
        methods:{
            getImage(e){
                this.file = e.target.files[0];
                this.product.img_path2 = this.file;
                this.uploadImg(this.file);
            },
            uploadImg(file){
                let reader = new FileReader()
                reader.onload = (e) => {
                    this.imgThumb = e.target.result;
                }
                reader.readAsDataURL(file);
            },
            async showData(){
                await this.axios.get(`/api/product/${this.$route.params.id}/edit`)
                .then(response=>{
                    this.categories = response.data[1]
                    this.product = response.data[0]
                })
            },
            async edit(){
                let formData = new FormData();
                formData.append('code', this.product.code)
                formData.append('name', this.product.name)
                formData.append('description', this.product.description)
                formData.append('stock', this.product.stock)
                formData.append('status', this.product.status)
                formData.append('category_id', this.product.category_id)
                formData.append('img_path', this.file)
                await this.axios.post('/api/product/' + this.$route.params.id, formData)
                .then(response=>{
                    this.$router.push({name:"indexProduct"})
                })
                .catch(error=>{
                    console.log(response)
                })
            },
        },
        computed:{
            imagen(){
                return this.imgThumb; 
            }
        }
    }
</script>
