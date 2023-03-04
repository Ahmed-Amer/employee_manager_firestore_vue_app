<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import NewEmployee from './views/NewEmployee.vue'
export default {
  components: {
    Navbar,
    NewEmployee
  }
}
</script>

<style>
  nav {
    margin-bottom:10px;
  }
</style>
