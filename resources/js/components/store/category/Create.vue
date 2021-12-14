<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Crear categoría</h4>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="create" method="POST">
                            <div class="form-group">
                                <label for="name">Nombre</label>
                                <input class="form-control" type="text" v-model="category.name" autofocus>
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
        name: "createCategory",
        data(){
            return{
                category:{
                    name:"",
                    description:"",
                    status: 1,
                }
            }
        },
        methods:{
            async create(){
                await this.axios.post('/api/category', this.category)
                .then(response=>{
                    this.$router.push({name:"indexCategory"})
                })
                .catch(error=>{
                    console.log(error)
                })
            }
        } 
    }
</script>