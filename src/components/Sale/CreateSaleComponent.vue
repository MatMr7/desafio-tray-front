<template>
    <div class="container">
        <nav-bar-component></nav-bar-component>
        <h1 align="center" class="m-5">Cadastrar Venda</h1>
        <div>
            <b-form @submit.prevent="onSubmit">
                <b-form-group>
                    <b-form-input 
                        id="input-value" 
                        size="default" 
                        v-model="sale.sale_value" 
                        placeholder="Digite o valor da venda: R$" 
                        v-validate="'required|min_value:0.5'"
                        name=input-value
                        ></b-form-input>
                        <p v-if="errors.has('input-value') && this.sale.sale_value != ''" class="text-danger" >Valor inválido</p>

                </b-form-group>
                <b-form-group>
                        <b-form-select v-model="sale.seller_id" :options="sellers"></b-form-select>
                </b-form-group>
                <button type="submit" class="btn btn-success">Cadastrar Venda</button>
            </b-form>
        </div>
    </div>
</template>
<script>
import NavBarComponent from '../Home/NavBarComponent.vue'
export default {
    created() {
        this.getSellers()
    },
    data () {
        return {
            sellers: [{ value: null, text: 'Selecione o vendedor' }],
            sale: {
                seller_id: null,
                sale_value: ''
            }
        }
    },
    components: {
        NavBarComponent
    },
    methods: {
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
        onSubmit () {
            this.formatValue()
            this.$http.post('sale',this.sale)
                .then(response => {
                    alert("Venda cadastrada com sucesso")
                }, error => {
                    alert("Erro ao cadastrar venda")
                })
            this.cleanSale()
        },formatValue() {
            let value = this.sale.sale_value
            value = parseFloat(value).toFixed(2)
            value = value.replace('.','')
            let zeros = '0'.repeat(12-value.length)
            let formatedValue = zeros + value
            this.sale.sale_value = formatedValue
        },
        cleanSale() {
            this.sale = {
                seller_id: null,
                sale_value: ''
            }
        }

            
    }
}
</script>