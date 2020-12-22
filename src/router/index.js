import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      public: true,
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      public: true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
    meta: {
      public: true,
    }
  },
  {
    path: '/segura',
    name: 'Segura',
    component: () => import(/* webpackChunkName: "Segura" */ '../views/Segura.vue'),
    meta: {
      auth: true,
      administrador: true,
      almacenero: true,
      vendedor: true,
},
    children: [
      {
        path: 'categorias',
        name: 'Categorias',
        component: () => import(/* webpackChunkName: "Categorias" */ '../views/Categorias.vue'),
        meta: {
          auth: true,
          administrador: true,
          almacenero: true,
        }
      },
      {
        path: 'articulos',
        name: 'Articulos',
        component: () => import(/* webpackChunkName: "Articulos" */ '../views/Articulos.vue'),
        meta: {
          auth: true,
          administrador: true,
          almacenero: true,
        }
      },
      {
        path: 'usuarios',
        name: 'Usuarios',
        component: () => import(/* webpackChunkName: "Usuarios" */ '../views/Usuarios.vue'),
        meta: {
          auth: true,
          administrador: true,
        }
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.every(record => record.meta.public)) {
    next();
  }
  else if (to.matched.every(record => record.meta.auth)) {
    console.log('Area privada');
    // console.log('store.state.user.rol', store.state.user.rol);
    console.log(localStorage.getItem('token'));

    if (store.state.user) {
      // Hacer validaciones por el rol
      if (to.matched.every(record => record.meta.administrador) && store.state.user.rol === 'Administrador') {
        console.log('Entra como admin');
        next();
      } 
      else if (to.matched.every(record => record.meta.almacenero) && store.state.user.rol === 'Almacenero') {
        console.log('Entra como almacen');
        next();
      }
      else if (to.matched.every(record => record.meta.vendedor) && store.state.user.rol === 'Vendedor') {
        console.log(to);
        console.log('Entra como vendedor');
        next();
      }
      else {
        next({name: "Login"});
      }
    }
    else {
      next({name: "Login"});
    }
  }
  else {
    next();
  }
})

export default router
