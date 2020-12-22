<template>
  <v-app id="app">
    <v-main class="grey lighten-2">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({ 
    drawer: null,
    admins: [
        ['Categorías', 'mdi-folder-cog', { name: 'Categorias' }],
        ['Artículos', 'mdi-file-cog', { name: 'Articulos' }],
        ['Usuarios', 'mdi-account-cog', { name: 'Usuarios' }],
      ],
    }),
};
</script>
