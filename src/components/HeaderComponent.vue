<template>
<v-card>

<v-carousel hide-delimiters height="300">
    <v-carousel-item
      
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"

      
      
    >
    <v-row class="fill-height " align="center" justify="center">
      <div  align="center" justify="center">
        <div class="display-3 white--text "> <b> {{ item.text }}</b></div>
        <br>
        <!-- <div> -->
          <!-- <a v-bind:href="direccion" class=" nav-link white--text ">{{item.direccion}} -->
            <!-- <a class=" nav-link white--text"  href="{{ item.direccion }}"> -->
              <!-- <a class=" nav-link white--text"  href="#{{ item.direccion }}"> -->
                <!-- <router-link :to=" item.direccion"> -->
                  <a class="nav-link white--text" :href=" item.direccion"> 
      <h2 > <u>{{ item.dos }} </u></h2> 
      </a>
                <!-- </router-link> -->
      <!-- </a> -->
      <!-- </div> -->
      <br>
      <!-- <h2> {{item.tres}} </h2> -->
      </div>
    <!-- <v-router-link: to="{(Section, i) in items}">     -->
      </v-row>
    </v-carousel-item>
  </v-carousel> 
</v-card>
</template>
<script>
export default {
    name: 'HeaderComponent',
    data () {
      return {
        items: [
          {
            src: '/img/im1.jpg',
            text: ' ¡Bienvenidos a nuestra página!',
            dos:  'Conozca más acerca de ꓘoperniK ',
            direccion: '#servicios'
           
             
          },
          {
            src: '/img/im2.jpg',
            text: 'Conozca nuestro Equipo de Trabajo',
            dos: 'La calidad, nuestro compromiso',
            direccion:'#equipo'
          },
          {
            src: '/img/im3.jpg',
            text: 'Contáctenos',
            dos: 'Tecnología al servicio del mercadeo',
            direccion:'#page-footer'
          },
        ],
      }
    },
   
    }

</script>
<style scoped>

</style>