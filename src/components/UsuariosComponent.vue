<template>
    <v-data-table
    :headers="headers"
    :items="usuarios"
    sort-by="calories"
    class="elevation-1"
    :loading="cargando"
    loading-text="Cargando... Por favor espere"  
    >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Usuarios</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Nuevo Usuario
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="E-mail"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.rol"
                      label="Rol"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.estado"
                      label="Estado"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="password"
                      label="Password"
                      type="password"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogToggleActive" max-width="500px">
          <v-card>
            <v-card-title class="headline">¿Desea {{ getAccionMostrar(editedItem.estado) }} este ítem?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeToggleActive">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="toggleActiveItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="toggleActiveItem(item)"
      >
        {{ getIcon(item.estado) }}
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="list"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'UsuariosComponent',
    data: () => ({
        dialog: false,
        dialogToggleActive: false,
        cargando: true,
        headers: [
        { text: 'ID', value: 'id' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'E-mail', value: 'email' },
        { text: 'Rol', value: 'rol' },
        { text: 'Estado', value: 'estado' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      usuarios: [],
      editedId: -1,
      password: '',
      editedItem: {
        nombre: '',
        email: '',
        rol: '',
        estado: 0,
        password: '',
      },
      defaultItem: {
        nombre: '',
        email: '',
        rol: '',
        estado: 0,
        password: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedId === -1 ? 'Nuevo Usuario' : 'Editar Usuario'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogToggleActive (val) {
        val || this.closeToggleActive()
      },
    },

    created () {
      this.list()
    },

    beforeCreate() {
      this.$store.dispatch('autoLogin');
    },

    methods: {
      list () {
        this.cargando = true;
        this.$http.get('/usuario/list', {
          headers: {
            token: this.$store.state.token
          }
        })
        .then((response) => {
          this.usuarios = response.data;
          this.cargando = false;
        })
        .catch((error) => {
          //return error
          Swal.fire('Oops', 'Error: ' + error, 'error');
        });
      },

      editItem (item) {
        this.editedId = item.id;
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      toggleActiveItem (item) {
        this.editedId = item.id;
        this.editedItem = Object.assign({}, item)
        this.dialogToggleActive = true
      },

      toggleActiveItemConfirm () {
        const accion = this.editedItem.estado === 1 ? '/usuario/deactivate' : '/usuario/activate';
        this.$http.put(accion, {
            id: this.editedId
          }, {
          headers: {
            token: this.$store.state.token
          }
        })
          .then((response) => {
            Swal.fire('Éxito', 'Operación realizada exitosamente', 'success');
            this.list();
          })
          .catch((error) => {
            Swal.fire('Oops', 'Error: ' + error, 'error');
          });
        this.closeToggleActive()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedId = -1
          this.password = ''
        })
      },

      closeToggleActive () {
        this.dialogToggleActive = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedId = -1
          this.password = ''
        })
      },

      save () {
        if (this.editedId > -1) {
          this.$http.put('/usuario/update', {
            id: this.editedId,
            nombre: this.editedItem.nombre,
            email: this.editedItem.email,
            estado: this.editedItem.estado,
            rol: this.editedItem.rol,
            password: this.password,
          }, {
          headers: {
            token: this.$store.state.token
          }
        })
          .then((response) => {
            Swal.fire('Éxito', 'Operación realizada exitosamente', 'success');
            this.list();
          })
          .catch((error) => {
            Swal.fire('Oops', 'Error: ' + error, 'error');
          })
        } else {
          this.$http.post('/usuario/add', {
            nombre: this.editedItem.nombre,
            email: this.editedItem.email,
            estado: this.editedItem.estado,
            rol: this.editedItem.rol,
            password: this.password,
          }, {
          headers: {
            token: this.$store.state.token
          }
        })
          .then((response) => {
            Swal.fire('Éxito', 'Operación realizada exitosamente', 'success');
            this.list();
          })
          .catch((error) => {
            Swal.fire('Oops', 'Error: ' + error, 'error');
          })
        }
        this.close()
      },
      getIcon(estado) {
        if (estado === 1) {
          return 'mdi-toggle-switch'
        } else {
          return 'mdi-toggle-switch-off'
        }
      },
      getAccionMostrar(estado) {
        if (estado === 1) {
          return 'inactivar'
        } else {
          return 'activar'
        }
      },
    },
}
</script>
