<template>
  <v-app-bar app :style="{ background: color }">

    <!-- <a class="navbar-brand" href="#"> -->
      
    <img src="img/favicon.jpg" alt="logo" width="100" height="45" class="d-inline-block align-top">&nbsp;
      <i class="fa fa-cog fa-fw"></i>&nbsp;  

      <!-- <v-toolbar-title> <i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; <b> ꓘoperniK </b>- Consultores en Marketing </v-toolbar-title>; -->
     <v-toolbar-title>  <i class="fa fa-reply  mr-2"></i> &nbsp; <b> ꓘoperniK </b> - <em>Consultores en Marketing </em> </v-toolbar-title>
        <!-- <h1> <b> KoperniK </b>- Consultores en Marketing</h1> -->
        <!-- </a> -->
        <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->


     
   
    <!--       color="deep-purple accent-4" -->
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

    <!-- <v-toolbar-title>Page title</v-toolbar-title> -->

    <v-spacer></v-spacer>
     

    <template
      v-if="this.$store.state.user && this.$store.state.user.rol === 'Administrador'"
    >
   
      <v-btn 
        icon 
        :to="{ name: 'Segura' }"
        >
            <v-icon>
                mdi-cog
            </v-icon>
      </v-btn>
     
    </template>

    <template v-if="this.$store.state.user">
       
      <v-btn 
        icon 
        @click="salir"
        >
            <v-icon>
                mdi-logout
            </v-icon>
      </v-btn>
    </template>
    <template v-else>
      
      <v-btn 
        icon 
        class="mr-5"
        :to="{ name: 'Login' }"
        >
        <v-icon>mdi-login</v-icon>
        <span class= "Ingreso"><b> Ingreso</b></span>
      </v-btn>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  name: "MenuComponent",
  data() {
      return {
    color: '#468FAF',
    };
  },
      
  methods: {
    salir() {
      this.$store.dispatch("salir");
    },
  },
};

</script>
<style scoped>
v-app-bar.app{
font-size: 20px !important;
}

.Ingreso{font-size: 15px !important;
    }
</style>