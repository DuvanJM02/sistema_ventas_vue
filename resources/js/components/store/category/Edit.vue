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
                                <input class="form-control" type="text" v-model="category.name" autofocus>
                            </div>
                            <div class="form-group mt-3">
                                <label for="status">Estado</label>
                                <select class="form-control" name="" id="" v-model="category.status">
                                    <option value="1">Activo</option>
                                    <option value="0">Inactivo</option>
                                </select>
                            </div>
                            <div class="form-group mt-3">
                                <label for="description">Descripción</label>
                                <input class="form-control" v-model="category.description">
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
        created(){
            this.showData()
        },
        methods:{
            async showData(){
                await this.axios.get(`/api/category/${this.$route.params.id}/edit`)
                .then(response=>{
                    this.category = response.data
                })
            },
            async edit(){
                await this.axios.put(`/api/category/${this.$route.params.id}`, this.category)
                .then(response=>{
                    this.$router.push({name:"indexCategory"})
                })
                .catch(error=>{
                    console.log(error)
                })
            },
        } 
    }
</script>