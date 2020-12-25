<template>

    <v-card height="475px"  style="background-color:#E0F7FA;" id="equipo" >
               
        <div class="d-flex justify-content-center p-2 h-100" height="459px" width="223px" >
            <img class= "card-img-top" :src="member.image" alt= "foto del integrante">
        </div>
        <br>
        
        <div class="card-body text-center" >
            
            <h3 class="card-title">{{member.nombre}}</h3>
          
            <br> 
             <b> <hr> </b>
            <p class="card-text flex-column" > {{member.descripcion}}</p> 
            <br> 
                 
            <h4 class="card-footer text-center align-items-center ml-8 " style='position: absolute; bottom: 0; text-align: center;'> {{member.rol}}</h4>            
            <!-- <p class="card-text">Codigo : {{member.codigo}}</p> -->
           
        </div>        
    <!-- <div class="card  text-red bg-warning h-100">
    </div>    -->
 
    
    </v-card>

</template>

<script>
    export default {
        
        color: "#89C2D9",
        name: "TeamCard",
        props: {
            'member': Object
        }
    }
</script>

<style scoped>

.card-title{font-size: 16px !important;
    };
.card-footer{
    text-align: center;
    text-overflow: ellipsis;
     /* align-items: flex-end; */
     font-size: 16px !important;

};


v-card {
  background-color: #89C2D9;
}


    /* .card-text {

    background-color: #E1F5FE; 
    }; */

</style>
