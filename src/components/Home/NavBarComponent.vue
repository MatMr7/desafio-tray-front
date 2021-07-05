<template>
    <div class="m-3">
        <b-nav align="center" class="nav-top">
            <b-nav-item-dropdown
                id="my-nav-dropdown"
                text="Vendedor"
                toggle-class="nav-link-custom"
                right
            >
                <b-dropdown-item @click.prevent="goToCreateSeller">Cadastrar vendedor</b-dropdown-item>
                <b-dropdown-item @click.prevent="goToListSellers">Listar vendedores</b-dropdown-item>

            </b-nav-item-dropdown>

            <b-nav-item-dropdown
                id="my-nav-dropdown"
                text="Vendas"
                toggle-class="nav-link-custom"
                right
            >
                <b-dropdown-item @click.prevent="goToCreateSale">Cadastrar vendeda</b-dropdown-item>
                <b-dropdown-item @click.prevent="goToListSales">Listar vendedas</b-dropdown-item>

            </b-nav-item-dropdown>
        </b-nav>
    </div>
</template>
<script>
export default {
    methods: {
        goToCreateSeller () {
            this.$router.push({ name: 'createSeller' })
        },
        goToListSellers () {
            this.$router.push({ name: 'listSellers' })
        },
        goToCreateSale () {
            this.$router.push({ name: 'createSale'})
        },
        goToListSales () {
            this.$router.push({ name: 'listSales'})
        }
    }
}
</script>
<style scoped>

</style>