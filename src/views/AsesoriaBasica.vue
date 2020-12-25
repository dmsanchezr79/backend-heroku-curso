<template>
<div id="app">
<!-- barra inicial -->
<menu-component></menu-component>
 <!-- banner -->
  <!-- <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnwvKa97Y1AXSOD8uh-aWsJ4qHiRJ_BUpQeg&usqp=CAU" class="img-fluid" alt=" image"> -->
  <!-- ContenidoServicio -->
<contenido-basico></contenido-basico>



<!-- page footer -->
<page-footer> </page-footer>
</div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue'
import PageFooter from '../components/PageFooter.vue'
import ContenidoBasico from '../components/auth/ContenidoBasica.vue'
export default {
  name: "AsesoriaBasica",
  components: { MenuComponent, PageFooter, ContenidoBasico},
  
}
</script>