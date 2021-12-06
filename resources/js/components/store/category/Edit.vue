<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Editar categoría</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="edit">
                            <div class="form-group">
                                <label for="name">Nombre</label>
                                <input class="form-control" type="text" v-model="category.name" value="" autofocus>
                            </div>
                            <div class="form-group mt-3">
                                <label for="status">Estado</label>
                                <select name="" id="" v-model="category.status">
                                    <option value="1">Activo</option>
                                    <option value="0">Inactivo</option>
                                </select>
                            </div>
                            <div class="form-group mt-3">
                                <label for="description">Descripción</label>
                                <textarea class="form-control" v-model="category.description"></textarea>
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
        name: "editarCategory",
        data(){
            return{
                category:{
                    name:"",
                    description:"",
                    status: "",
                }
            }
        },
        mounted(){
            this.showCategory()
        },
        methods:{
            async showCategory(){
                await this.axios.get(`/api/category/${this.$route.params.id}`)
                .then(response=>{
                    const {name, description, status} = response.data
                    this.category.name = name,
                    this.category.description = description,
                    this.category.status = status
                })
                .catch(error=>{
                    console.log(error)
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
            }
        } 
    }
</script>