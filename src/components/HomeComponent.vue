<template>
    <div id="app">
        <header-component></header-component>
        <displayarticles-component></displayarticles-component>
        <team-component></team-component>
        <page-footer> </page-footer>
  </div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
import PageFooter from "./PageFooter.vue";
import DisplayarticlesComponent from "./DisplayarticlesComponent.vue";
import TeamComponent from './TeamComponent.vue';

export default {
    name: 'HomeComponent',
    components: {
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

</style>