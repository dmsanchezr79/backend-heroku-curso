<template>

<v-container fluid id="servicios">
    <v-card style="background-color:#030455">

      <h2 class="title text-center font-Helvetica white--text" > <b>Nuestros servicios</b></h2>
    </v-card>
    <v-row dense  >
      <v-col 
         v-for="(article,i) in articulos"
          :key="i"
          cols="6"

          >
          
          <v-list-item three-line>
          <v-list-item-content>
           
          <v-card style="background-color:#E0F7FA;" class="d-flex flex-no-wrap  justify-space-between"
                     >
                     <div class="p-1" >
          <img  :src= " images[i]">
          <!-- <img class="p-1"  v-for="(articles,i) in articulos"
           :key="i"
           :src= " image.src"> -->
            </div>
            <!-- <div class="d-flex flex-no-wrap justify-space-between"> -->
            <!-- <v-flex text-xs-center>  -->
            <div class="flex-item text-justify">

              <!-- <v-col class="d-flex justify-space-around"> -->
            <div class="overline mb-4">
               
            <!-- <v-list-item-content> -->
              <!-- <div class="d-flex flex-no-wrap justify-space-between"> -->
            
            <v-card-title  class="headline justify-center align-center" style="position:center">
             <!-- <v-card-title  class="headline align-center justify-space-between row"> -->

             <h5><b> {{ article.nombre }} </b></h5>
            </v-card-title>
            
            <!-- </div> -->
            <!-- </v-list-item-content> -->
          
            </div>
            <v-spacer></v-spacer>
            
            <!-- <img class="nav-link white--text" :src= " images.src" > -->
            
           
            <!-- <img v-for="(ite,i) in items1"
          :key="i"
          :img="item.img"
          reverse-transition="fade-transition"
          transition="fade-transition"> -->

           <!-- <img v-for="img in images" v-bind:key="img"/ > -->
 
            <v-card-text class="texto1 ">
              {{ article.descripcion }}
            </v-card-text>
            <!-- </v-col> -->
            </div>
            <!-- </div> -->
           <!-- </v-flex > -->

            <v-card-actions>

            </v-card-actions>
            <br>
            <!-- <v-layout row wrap justify-end> -->
              <router-link :to="dirigir[i]">       <v-btn
              depressed
              color="primary" 
              rounded
              align-end
              absolute
                 bottom
                  right
                

            >
              Ver más
            </v-btn>  </router-link >
            <!-- </v-layout > -->
             <!-- <button type="button"  style="background-color:#030455 'position: absolute; left: 0;" >Ver más</button> -->
            

          </v-card>
         </v-list-item-content>
          </v-list-item>
      </v-col>
    </v-row>
  
</v-container> 
</template>


<script>
import axios from "axios";

export default {
  name: "DisplayarticlesComponent",
  data() {
    return {
      articulos: null,

      images:[ 
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfryByLaInDN4unes4LJxVoiHj3ldm5c-t4g&usqp=CAU',
            
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliWtaKJXH3TTow-Bh7fpdVmOCHU2b2GEXqw&usqp=CAU',
    
      ],
      dirigir:[
        '/AsesoriaBasica',
        'AsesoriaCompleta'
      ]
      };},
  
  created() {
    this.$http.get('/articulo/list')
        .then((response) => {
          this.articulos = response.data.filter(articulo => articulo.estado === 1);
        })
        .catch((error) => {
          Swal.fire('Oops', 'Error: ' + error, 'error');
        });
  },
        
        
            
      

    // mounted(){
    // axios
    //   .get("http://newsapi.org/v2/top-headlines?country=co&category=science&apiKey=9a1461f61fed442197db42acc58ae209")
    //   .then((response) => {
    //     this.articulos = response.data.articles.slice(0, 4);
        // console.log(this.articulos);
      // });
  
};
</script>


<style scoped>

    /*div {*/

    /*background-color: #078bf0; */
    /*}*/
  body {
    font-family: 'Titillium Web', sans-serif;
}
    img {
      width: 150px;
      height: 300px;
      object-fit: cover;
      }

     .texto1 {
       color: black;


     } 
</style>




