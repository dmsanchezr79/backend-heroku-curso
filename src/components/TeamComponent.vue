<template>
    <v-container fluid>
        <v-card>
            <h2 class="title text-center font-Helvetica" >Nuestro Equipo de Trabajo</h2>
        </v-card>
        <v-row class="mb-5">
            <v-col
                v-for="(item,index) of team" 
                :key="index"
                class="mt-5"
                >
                <team-card :member="item"></team-card>
            </v-col>
        </v-row>
        <div class="row justify-content-center mb-5 " >
        </div>
    </v-container>
</template>

<script>

import TeamCard from './TeamCard.vue'

export default {
  name: "TeamComponent",
    components: {
        TeamCard,
    },
    data() {
        return {
            team: [
                {
                codigo: 1,
                nombre: "Diego Mauricio Sanchez",
                descripcion:
                    "Ingeniero de sistemas de la Universidad Distrital, de 41 años de edad. Aficionado al ajedrez y a los RPG. Papá de Juandi y de dos gatos.",
                rol: "Scrum Master",
                image: require("@/assets/foto_4.jpg"),
                },
                {
                codigo: 2,
                nombre: "Juan David Avalos",
                descripcion:
                    "Ingeniero de Petróleos de 29 años de edad. Reparte su afición entre el fútbol y los videojuegos. Felizmente casado.",
                rol: "Development Team",
                image: require("@/assets/foto_1.jpg"),
                },
                {
                codigo: 3,
                nombre: "Jose Bernardo Perez",
                descripcion:
                    "Administrador de un taller de taxímetros, con 45 años de edad, su mayor afición es saber cómo funcionan las cosas, tiene una hija una gata y muchos peces.",
                rol: "Development Team",
                image: require("@/assets/foto_2.jpg"),
                },
                {
                codigo: 4,
                nombre: "Juan Pablo Bermúdez",
                descripcion:
                    "Economista de la Universidad Nacional. Me gusta  Radiohead, Steven Wilson y  el Techno. Suelo hacer ejercicio o trotar cuando el clima es favorable y a veces juego lol. Tengo dos gatos.",
                rol: "Development Team",
                image: require("@/assets/foto_3.jpg"),
                },
                {
                codigo: 5,
                nombre: "Joan Esneider Duque",
                descripcion:
                    "Estudiante de Ingeniería Mecánica de la Universidad de Antioquia actualmente en noveno semestre, el poco tiempo libre que me queda lo comparto con mi hija.",
                rol: "Development Team",
                image: require("@/assets/foto_5.jpg"),
                },
            ],
            title: "¿Tiene alguna duda o sugerencia?",
    };
  },
};
</script>
<style scoped>
</style>