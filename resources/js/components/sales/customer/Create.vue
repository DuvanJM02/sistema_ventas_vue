<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <h4>Registrar proveedor</h4>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-danger" role="alert" v-if="message">
                            <strong>{{ message }}</strong>
                        </div>
                        <form @submit.prevent="create" enctype="multipart/form-data">
                            <div class="form-group">
                                <label for="name">Nombre</label>
                                <input class="form-control" type="text" v-model="user.name" autofocus>
                            </div>
                            <div class="form-group mt-3">
                                <label for="email">Correo electrónico</label>
                                <input class="form-control" type="email" v-model="user.email">
                            </div>
                            <div class="form-group mt-3">
                                <label for="password">Contraseña</label>
                                <input class="form-control" type="password" name="password" id="password" v-model="user.password">
                            </div>
                            <div class="form-group mt-3">
                                <label for="current-password">Confirmar contraseña</label>
                                <input class="form-control" type="password" name="current-password" id="current-password" v-model="user.current_password">
                            </div>
                            <div class="form-group mt-3">
                                <label for="document">Tipo de documento</label>
                                <select name="document" id="document" class="form-control" v-model="user.document">
                                    <option value="CC">Cédula de ciudadanía</option>
                                    <option value="TI">Tarjeta de identidad</option>
                                    <option value="CE">Cédula de extranjería</option>
                                    <option value="NIT">NIT</option>
                                    <option value="Pasaporte">Pasaporte</option>
                                </select>
                            </div>
                            <div class="form-group mt-3">
                                <label for="n_document">Número de documento</label>
                                <input class="form-control" type="number" v-model="user.n_document">
                            </div>
                            <div class="form-group mt-3">
                                <label for="location">Ubicación</label>
                                <input class="form-control" v-model="user.location">
                            </div>
                            <div class="form-group mt-3">
                                <label for="phone">Teléfono</label>
                                <input class="form-control" type="tel" v-model="user.phone">
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
    </div>
</template>

<script>
    export default {
        name: "createSupplier",
        data(){
            return{
                user: {
                    name: null,
                    email: null,
                    password: null,
                    current_password: null,
                    document: null,
                    n_document: null,
                    location: null,
                    phone: null,
                    img_path: null,
                    role: 'supplier',
                    status: 1,
                },
                imgThumb: null,
                message: null,
            }
        },
        created(){
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
                        this.$router.push({name:"indexSupplier"})
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