<template>
  <div id="app">
    <Navbar />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

</style>
