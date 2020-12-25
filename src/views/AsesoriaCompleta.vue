<template>
<div id="app">
<!-- BarraInicial -->
<menu-component></menu-component>
<!-- banner -->
<!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-pmc_2uioi18zUKVexDcZfLLmsUdIKLjMA&usqp=CAU" class="img-fluid" alt="Responsive image"> -->
<!-- contenidoservicio -->
<contenido-completo></contenido-completo>


<page-footer></page-footer>
</div>
</template>

<script>
import ContenidoCompleto from '../components/auth/ContenidoCompleta.vue'

import MenuComponent from '../components/MenuComponent.vue'
import PageFooter from '../components/PageFooter.vue'

export default {
     name: "AsesoriaCompleta",
  components: { MenuComponent,  PageFooter, ContenidoCompleto },
    
}
</script>
