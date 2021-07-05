<template>
    <div class="container">
        <navbar-component></navbar-component>
        <h1 align="center" class="m-5">Listar vendas de um vendedor</h1>
        <div align="center">
            <b-form>
                <b-form-group>
                        <b-form-select v-model="sellerId" :options="sellers"  @change="onChange"></b-form-select>
                </b-form-group>
            </b-form>

            <table class="table table-lisht" v-if="sales[0] != undefined">
            <thead>
                <tr>
                    <th>
                        Vendedor
                    </th>
                    <th>
                        Valor
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(sale, index) in sales" :key="index">
                    <td>
                        {{ sale.seller.name }}
                    </td>
                    <td>
                        <b>R$</b> {{ sale.sale_value }}
                    </td>
                </tr>
            </tbody>
        </table>

        </div>
    
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
            sales: [],
            sellers: [{ value: null, text: 'Selecione o vendedor' }],
            sellerId: null
        }
    },
    components: {
        NavbarComponent
    },
    methods: {
        getSales () {
            this.$http.get('sale/'+ this.sellerId)
                .then(response => {
                    this.sales = response.data.data

                }, error => {
                    console.log(error)
                })
        },
         getSellers () {
            this.$http.get('seller')
                .then( response => {
                    response.data.data.forEach((element) => {
                        this.sellers.push({ value: element.id, text: element.email})
                    })

                }, error => {
                    console.log(error)
                })
        },
        onChange () {
            this.getSales()
        }

    }
}
</script>