<template>
    <v-data-table
    :headers="headers"
    :items="categorias"
    sort-by="calories"
    class="elevation-1"
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
              New Item
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
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
    name: 'CategoriasComponent',
    data: () => ({
        dialog: false,
        dialogDelete: false,
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
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.$http.get('/categoria/list')
        .then((response) => {
          this.categorias = response.data
        })
        .catch((error) => {
          return error
        });
      },

      editItem (item) {
        this.editedId = item.id;
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedId = item.id;
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        //this.categorias.splice(this.editedId, 1)
        // 
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedId = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
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
          })
          .then((response) => {
            this.initialize()
          })
          .catch((error) => {
            return error
          })
        } else {
          this.$http.post('/categoria/add', {
            nombre: this.editedItem.nombre,
            descripcion: this.editedItem.descripcion
          })
          .then((response) => {
            this.initialize()
          })
          .catch((error) => {
            return error
          })
        }
        this.close()
      },
    },
}
</script>
