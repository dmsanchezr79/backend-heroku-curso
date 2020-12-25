<template>
    <v-layout>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>
                        Ingresar al área administrativa
                    </v-card-title>
                    <v-card-text>
  <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="login.email"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="login.password"
      label="Password"
      type="password"
      required
    ></v-text-field>

    <v-btn
      :disabled="!(this.login.password && this.login.email)"
      color="success"
      class="mr-4"
      block
      @click="loginUser"
    >
      Login
    </v-btn>
  </v-form>
                    </v-card-text>
                    <v-card-actions>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-layout>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'TheLogin',
    data() {
        return {
            login: {
                email: '',
                password: ''
            }
        }
    },
    beforeCreate() {
            this.$store.dispatch('autoLogin') ? this.$router.push({ name: 'Segura' }) : false;
    },
    methods: {
        async loginUser() {
            this.$http.post('/usuario/login', this.login)
                .then(response => {
                    return response.data;
                })
                .then(data => {

                    this.$store.dispatch('guardarToken', data.tokenReturn);
                    // console.log(data.tokenReturn);

                    this.$router.push({ name: 'Segura' });

                    // Mostrar mensaje de éxito
                    Swal.fire('Éxito', 'Login correcto', 'success');
                    
                })
                .catch(error => {
                    Swal.fire('Oops', 'Error de autenticación', 'error');
                    // console.log(error);
                    return error;
                });
        }

    }
}
</script>