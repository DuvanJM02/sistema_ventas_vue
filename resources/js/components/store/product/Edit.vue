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
                                <input class="form-control" type="file" @change="getImage" accept="image/*"> 
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
                            <h4>Imágen anterior {{ product.name }}</h4>
                        </div>
                        <div class="card-body">
                            <img v-bind:src="'img/products/' + product.img_path" v-bind:alt="product.name" width="100%">
                        </div>
                    </div>
                    <div v-if="imagen">
                        <div class="card-header">
                            <h4>Imágen nueva</h4>
                        </div>
                        <div class="card-body">
                            <img :src="imagen" alt="" width="100%">
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
                },
                errors: []
            }
        },
        created(){
            this.showData()
        },
        methods:{
            getImage(e){
                let file = e.target.files[0];
                console.log(file)
                this.product.img_path = file;
                this.uploadImg(file);
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
                    console.log(this.$route.params.id)
                    this.category = response.data
                })
            },
            async edit(){
                await this.axios.put(`/api/category/${this.$route.params.id}`, this.category)
                .then(response=>{
                    this.$router.push({name:"showCategory"})
                })
                .catch(error=>{
                    console.log(error)
                })
            },
        } 
    }
</script>
