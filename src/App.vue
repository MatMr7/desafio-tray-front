<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HomeComponent from './components/Home/HomeComponent.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    HomeComponent
  }
}
</script>

<style>

</style>
