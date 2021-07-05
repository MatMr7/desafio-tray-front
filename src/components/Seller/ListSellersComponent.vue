<template>
    <div class="container">
        <navbar-component></navbar-component>
        <h1 align="center" class="m-5">Lista de vendedores</h1>
        <table class="table table-lisht">
            <thead>
                <tr>
                    <th>
                        Nome
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(seller, index) in sellers" :key="index">
                    <td>
                        {{ seller.name }}
                    </td>
                    <td>
                        {{ seller.email }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import NavbarComponent from '../Home/NavBarComponent.vue'
export default {
    created () {
        this.getSellers()
    },
    data () {
        return {
            fields: ['name','email'],
            sellers: []
        }
    },
    methods: {
        getSellers () {
            this.$http.get('seller')
                .then( response => {
                    this.sellers = response.data.data
                }, error => {
                    console.log(error)
                })
        }
    },
    components: {
        NavbarComponent
    }
}
</script>
<style scoped>

</style>