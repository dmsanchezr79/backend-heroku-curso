<template>
  <div class="home">
    <menu-component></menu-component>
    <home-component></home-component>
    
  </div>
</template>

<script>
import HomeComponent from '../components/HomeComponent.vue'
import MenuComponent from '../components/MenuComponent.vue'


export default {
  name: 'Home',
  components: {
    MenuComponent,
    HomeComponent,
   
  }
}
</script>
