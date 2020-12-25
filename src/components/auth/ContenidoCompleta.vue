<template>
<v-container fluid id="servicios">
    <v-card style="background-color:#030455">


      <h2 class="title text-center font-Helvetica white--text"> <b>Asesoría Completa</b></h2>
    </v-card>
      <div>
     <v-row dense>
         <v-col v-for="titulo in titulos"
          :key="titulo.src" 
          cols="10"
          >

          


          <v-list-item three-line>
          <v-list-item-content>
           
          <v-card style="background-color:#E0F7FA;" class="d-flex flex-no-wrap  justify-space-between"
                     >
                     <div class="p-1" >
          <!-- <img src="data:image/png;base64,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" class="img-fluid" alt="servicio1"> -->
          <!-- <img class="p-1"  v-for="(articles,i) in articulos"
           :key="i"
           :src= " image.src"> -->
            <img  
          :src="titulo.img" class="mt-15"  >
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

             <h5><b> {{titulo.titulo}} </b></h5>
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
              {{titulo.texto}}
            </v-card-text>
            <!-- </v-col> -->
            </div>
            <!-- </div> -->
           <!-- </v-flex > -->

            <v-card-actions>

            </v-card-actions>
            <br>
            <!-- <v-layout row wrap justify-end> -->
                    <!-- <v-btn
              depressed
              color="primary" 
              rounded
              align-end
              absolute
                 bottom
                  right
                

            >
              Ver más
            </v-btn> -->
            <!-- </v-layout > -->
             <!-- <button type="button"  style="background-color:#030455 'position: absolute; left: 0;" >Ver más</button> -->
            

          </v-card>
         </v-list-item-content>
          </v-list-item>
      
    
        </v-col>
        </v-row>
      </div>
</v-container> 
</template>


<script>
export default {
    name: 'ContenidoBasica',
    data () {
      return {
        titulos: [
          {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdj7ST3ZnqgxrTItoL7LDLPggN56-bmfAtew&usqp=CAU',
            titulo: ' Análisis de nicho de mercado ',
            texto:  'Teniendo en cuenta que muchas veces nuestros clientes tienen muchas ideas, pero no han definido la manera en la que van a  llevar a cabo las ventas, nos encargaremos de estudiar las mejores opcones que tendrá como empresa. Desde un punto en el que se tenga en cuenta la princpal competencia y la forma en la que se podría hacer más atractiva la marca. De igual manera, la mejor forma en la que se debe llevar la producción, en caso de estar asociado a la industria matríz. Nuestro objetivo será maximizar los beneficios de su negocio.',
            
           
             
          },
          {
            // src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gIfrlJYfonhGsoK7XEaKVB9Ly9GaFC_sAw&usqp=CAU',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzReSHrcxwnGy_aLc82g4EIwXl0HR2lcQcg&usqp=CAU',
            titulo: ' Análisis de potenciales consumidores',
            texto:  'Nuestro trabajo en éste caso, se basarán en un estudio detalladao de las opciones que existan para convencer a los consumidores de la necesidad de comprar ambos productos. Se realizará un estudio estádistico para evaluar la viabilidad de la venta cruzada en ese producto. Además, los tipos de publicidad y posibles targets que aún no se sienten seguros en adquirir los productos. El objetivo también traerá propuestas para crear conusmidores fieles a la marca ',
            
          },
          {
            // src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1gIfrlJYfonhGsoK7XEaKVB9Ly9GaFC_sAw&usqp=CAU',
           img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrvM3qt5449fgIy9SC1m6qII_NMYHpZLwfA&usqp=CAU',
           titulo: ' Resultados y Recomendaciones',
            texto:  'Después de conocer con claridad todas las ventajas y ventajas que se tendrán en el mercado, procederemos a cerrar el estudio de caso  teniendo en cuenta la información recolectada. Además aseguraremos que cuente con una amplia base de datos de los potenciales consumidores, que le asegurarán alcanzar sus metas financieras anuales. Sabemos que no es un camino corto, pero le aseguramos que su modelo de negocio estrá en buenas manos y que nuestra metodología son las más avanzadas.',
          },
        ],
      }
      console.log(titulos)
    },
   
    }

</script>
<style scoped>

</style>

   