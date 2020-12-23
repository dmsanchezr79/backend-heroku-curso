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
    <v-row class="fill-height" align="end" justify="center">
        <div class="display-3 white--text">{{ item.text }}</div>
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
            text: 'Especialistas en marketing',
          },
          {
            src: '/img/im2.jpg',
            text: 'La calidad, nuestro compromiso',
          },
          {
            src: '/img/im3.jpg',
            text: 'Tecnología al servicio del mercadeo',
          },
        ],
      }
    },
}
</script>
<style scoped>

</style>