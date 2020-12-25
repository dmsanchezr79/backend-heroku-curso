<template>
  <v-app-bar app :style="{ background: color }">
     <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <!-- <a class="navbar-brand" href="#"> -->
      <v-btn
        icon
        class="mr-5"
        @click="salir"
      >
    <img src="img/favicon.jpg" alt="logo" width="100" height="45" class="d-inline-block align-top">&nbsp;
      <i class="fa fa-cog fa-fw"></i>&nbsp; </v-btn>
         
       

      <!-- <v-toolbar-title> <i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; <b> ꓘoperniK </b>- Consultores en Marketing </v-toolbar-title>; -->
     <v-toolbar-title>  <i class="fa fa-reply  mr-2"></i> &nbsp; <b> ꓘoperniK </b> - <em>Consultores en Marketing </em> </v-toolbar-title>
        
        <!-- <h1> <b> KoperniK </b>- Consultores en Marketing</h1> -->
        <!-- </a> -->
        <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

        <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list>
      <v-list-item
        :to="{ name: 'Home' }"
      >
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Ir a Inicio</v-list-item-title>
      </v-list-item>

      <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Administrar</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, link], i) in admins"
            :key="i"
            :to="link"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
    </v-list>
    </v-navigation-drawer>






     
   
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