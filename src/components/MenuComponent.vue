<template>
  <v-app-bar app>
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
        <span>Ingreso</span>
      </v-btn>
    </template>
  </v-app-bar>
</template>
<script>
export default {
  name: "MenuComponent",
  data: () => ({}),
  methods: {
    salir() {
      this.$store.dispatch("salir");
    },
  },
};
</script>
