<template>
  <div id= "body">
    <div id="app">
        <header-component></header-component>
        <ser-historia></ser-historia>
        <displayarticles-component></displayarticles-component>
        <team-component></team-component>
        <page-footer> </page-footer>
  </div>
  </div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
import SerHistoria from "./SerHistoria.vue";
import PageFooter from './PageFooter.vue';
import DisplayarticlesComponent from "./DisplayarticlesComponent.vue";
import TeamComponent from './TeamComponent.vue';

export default {
    name: 'HomeComponent',
    components: {
        SerHistoria,
        PageFooter,
        DisplayarticlesComponent,
        HeaderComponent,
        TeamComponent,
    },
      data(){
    return{
        title: "¿Tiene alguna duda o sugerencia?",
    }    
  }
}
</script>
<style scoped>
#body1 {
  background: black;
  padding: 20px;
  font-family: Helvetica;
}

#body {
  background: #030455;
  padding: 20px;
  font-family: Helvetica;
}

#app {
  background-color: #89C2D9;
}

</style>