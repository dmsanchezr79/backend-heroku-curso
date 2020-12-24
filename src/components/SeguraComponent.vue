<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Administrador de configuraciones</v-toolbar-title>

      <v-spacer>

      </v-spacer>

      <v-btn
        icon
        class="mr-5"
        @click="salir"
      >
            <v-icon>
                mdi-logout
            </v-icon>
            <span>Salir</span>
      </v-btn>

    </v-app-bar>

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

    <v-main class="grey lighten-2">
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
    name: 'SeguraComponent',
    components: {

    },
    data: () => ({
    drawer: null,
    admins: [
        ['Tipos de Servicio', 'mdi-folder-cog', { name: 'Categorias' }],
        ['Servicios', 'mdi-file-cog', { name: 'Articulos' }],
        ['Usuarios', 'mdi-account-cog', { name: 'Usuarios' }],
      ],
    }),

    beforeCreate() {
            this.$store.dispatch('autoLogin');
    },

    methods: {
        salir() {
            this.$store.dispatch('salir');
        }
    }
}
</script>