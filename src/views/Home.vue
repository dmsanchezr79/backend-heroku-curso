<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <menu-component></menu-component>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MenuComponent from '../components/MenuComponent.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorl
    MenuComponent
  }
}
</script>
