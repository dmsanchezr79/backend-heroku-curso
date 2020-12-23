<template>
    <v-data-table
    :headers="headers"
    :items="categorias"
    sort-by="calories"
    class="elevation-1"
    :loading="cargando"
    loading-text="Cargando... Por favor espere"  
    >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Categorías</v-toolbar-title>
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
              Nueva Categoría
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
                    <v-textarea
                      v-model="editedItem.descripcion"
                      label="Descripcion"
                    ></v-textarea>
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
    name: 'CategoriasComponent',
    data: () => ({
        dialog: false,
        dialogToggleActive: false,
        cargando: true,
        headers: [
        // {
        //   text: 'Dessert (100g serving)',
        //   align: 'start',
        //   sortable: false,
        //   value: 'name',
        // },
        { text: 'ID', value: 'id' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Descripcion', value: 'descripcion' },
        { text: 'Estado', value: 'estado' },
        // { text: 'Protein (g)', value: 'protein' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      categorias: [],
      editedId: -1,
      editedItem: {
        nombre: '',
        descripcion: '',
      },
      defaultItem: {
        nombre: '',
        descripcion: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedId === -1 ? 'Nueva Categoría' : 'Editar Categoría'
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
        this.$http.get('/categoria/list', {
          headers: {
            token: this.$store.state.token
          }
        })
        .then((response) => {
          this.categorias = response.data;
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
        //this.categorias.splice(this.editedId, 1)
        // 
        const accion = this.editedItem.estado === 1 ? '/categoria/deactivate' : '/categoria/activate';
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
        })
      },

      closeToggleActive () {
        this.dialogToggleActive = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedId = -1
        })
      },

      save () {
        if (this.editedId > -1) {
          this.$http.put('/categoria/update', {
            id: this.editedId,
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion
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
          this.$http.post('/categoria/add', {
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion
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
