<template>
<v-container fluid>
    <v-card>

      <h2 class="title text-center font-Helvetica" >Nuestros servicios</h2>
    </v-card>
    <v-row dense>
      <v-col
          v-for="article in articulos"
          :key="article.title"
          cols="6"
          >
          <v-card

          >
            <v-card-title>
              {{ article.nombre }}
            </v-card-title>
            <v-card-text>
              {{ article.descripcion }}
            </v-card-text>
            <v-card-actions>

            </v-card-actions>

          </v-card>
      </v-col>
    </v-row>
  <!-- Fin Noticia 1 -->
</v-container>
</template>


<script>
import axios from "axios";

export default {
  name: "DisplayarticlesComponent",
  data() {
    return {
      articulos: null,
    };
  },
  created() {
    this.$http.get('/articulo/list')
        .then((response) => {
          this.articulos = response.data.filter(articulo => articulo.estado === 1);
        })
        .catch((error) => {
          Swal.fire('Oops', 'Error: ' + error, 'error');
        });
    // axios
    //   .get("http://newsapi.org/v2/top-headlines?country=co&category=science&apiKey=9a1461f61fed442197db42acc58ae209")
    //   .then((response) => {
    //     this.articulos = response.data.articles.slice(0, 4);
    //     // console.log(this.articulos);
    //   });
  },
};
</script>


<style scoped>

    /*div {*/

    /*background-color: #078bf0; */
    /*}*/

    img {
      width: 150px;
      height: 300px;
      object-fit: cover;
      }
</style>




