<template>
    <div class="container">
        <nav-bar-component></nav-bar-component>
        <h1 align="center" class="mt-5">Cadastro de vendedores</h1>
        <b-form @submit.prevent="onSubmit" >
            <b-form-group
                id="input-group-1"
                label="Nome:"
                label-for="input-1"
                description="Nome do vendedor a ser cadastrado."
            >
            <b-form-input
                id="input-1"
                type="text"
                placeholder="Digite o nome"
                v-model="seller.name"
                required
                name="input-name"
                v-validate="'required|min:3|max:190'"
            ></b-form-input>
            <p v-if="errors.has('input-name')" class="text-danger" >Nome inválido </p>

            </b-form-group>
            <b-form-group
                id="input-group-1"
                label="Email:"
                label-for="input-1"
                description="Email do vendedor a ser cadastrado."
            >
            <b-form-input
                id="input-1"
                type="email"
                v-model="seller.email"
                placeholder="Digite o email"
                name="input-email"
                v-validate="'required|email'"
            ></b-form-input>
            <p v-if="errors.has('input-email')" class="text-danger" >Email inválido </p>

            </b-form-group>

            <button type="submit" class="btn btn-success">Cadastrar</button>
        </b-form>

    </div>
</template>
<script>
import NavBarComponent from '../Home/NavBarComponent.vue'
export default {
    data () {
        return {
            title: "pagina de cadastrar vendedor",
            seller: {
                name: '',
                email: ''
            },
        }
    },
    methods: {
        onSubmit () {
             this.$validator.validateAll().then((result) => {
                if (result) {
                    this.$http.post('seller',this.seller)
                        .then(response => {
                            alert("Usuário cadastrado com sucesso")
                        }, error => {
                            alert("Email já cadastrado")
                        })
            this.clearFields()
                return;
                }
            })
        
        },
        clearFields () {
            this.seller = {
                    name: '',
                    email: ''
                }
    },
    },
    components: {
        NavBarComponent
    }
    
}
</script>

<style scoped>

</style>