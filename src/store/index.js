import Vue from 'vue'
import Vuex from 'vuex'
import jwtdecode from 'jwt-decode'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        user: null
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            // console.log(token);
        },
        setUsuario(state, usuario) {
            state.user = usuario
        }
    },
    actions: {
        guardarToken({commit}, token) {
            commit("setToken", token);
            commit("setUsuario", jwtdecode(token));
            localStorage.setItem('token', token);
        },
        autoLogin({commit}) {
            const token = localStorage.getItem('token');
            console.log('autologin');
            if (token) {
                commit("setToken", token);
                commit("setUsuario", jwtdecode(token));
            }
            else {
                return false;
            }

        },
        salir({commit}) {
            commit("setToken", null);
            commit("setUsuario", null);
            localStorage.removeItem("token");
            router.push({name: 'Home'});
        }
    }
})

export default store
