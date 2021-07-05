<template>
    <div>
        <navbar-component></navbar-component>
    </div>
</template>
<script>
import NavbarComponent from './NavBarComponent.vue'
export default {
    data () {
        return {
            title: 'homepage'
        }
    },
    components: {
        NavbarComponent
    }
}
</script>