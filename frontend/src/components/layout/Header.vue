<template>
  <v-app-bar
    absolute
    color="#fcb69f"
    dark
    src="https://picsum.photos/1920/1080?random"
    app
    prominent
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(0,0,0,.3), rgba(0,0,0,2.8)"
      ></v-img>
    </template>
    
    <div class="nav">
      
    <v-toolbar-title class="text-h4" md=12>
      <div class="d-inline d-flex justify-space-around align-center">
                    <v-btn
            v-if="logged"
              @click.stop="drawer = !drawer"
            >
            <v-icon class="mr-1">mdi-menu</v-icon>
            MENU
          </v-btn>
      Sistema Farmaceutico 
        <div >
        <v-tooltip v-if="!$vuetify.theme.dark" bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text small fab @click="darkMode">
              <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
            </v-btn>
          </template>
          <span>Modo Oscuro Prendido</span>
        </v-tooltip>

        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text small fab @click="darkMode">
              <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
            </v-btn>
          </template>
          <span>Modo Oscuro Apagado</span>
        </v-tooltip>
        </div>
        <div>
             <v-btn v-if="!logged" text to="/signin">
        <v-icon>mdi-account</v-icon>
        Iniciar Sesión
      </v-btn>
      <v-btn v-if="logged" text @click="logUserOut">
        <v-icon>mdi-logout</v-icon>
        Cerrar Sesión
      </v-btn>
      </div>
      </div>
      <v-navigation-drawer
        v-model="drawer"
        absolute="true"
        height=100vh
        temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content class="font-weight-black">
            {{user.nombre}}
            <v-list-item-title  >{{user.rol}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
          <v-list-item
          >
          <v-list-item-content>
          <v-btn text to="/" class="pa-0 ma-0" exact>
            <v-icon>mdi-home</v-icon>
            HOME
          </v-btn>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
          <v-list-item-content>
            <v-btn text to="/vender" class="pa-0 ma-0" >
              <v-icon>mdi-cash-multiple</v-icon>
              vender
            </v-btn>
        </v-list-item-content>
          </v-list-item>
          <v-list-item>
          <v-list-item-content>
              <v-btn text to="/historialVentas" class="pa-0 ma-0" >
                <v-icon>mdi-history</v-icon>
                 Historial de ventas
              </v-btn>
          </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                  <v-btn text to="/inventario" class="pa-0 ma-0" >
                    <v-icon>mdi-pill</v-icon>
                     Inventario
                  </v-btn>
              </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                      <v-btn text to="/medicine" class="pa-0 ma-0" >
                        <v-icon>mdi-magnify</v-icon>
                         Buscar producto
                      </v-btn>
                  </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-content>
                          <v-btn text to="/cargarProducto" class="pa-0 ma-0" >
                            <v-icon>mdi-briefcase-upload</v-icon>
                             Cargar producto
                          </v-btn>
                      </v-list-item-content>
                        </v-list-item>
                    <v-list v-if="user.rol==='admin'" >
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-content small>
            <v-list-item-title align="center" justify="center"> 
            <v-icon>mdi-account</v-icon>
            Proveedores
            </v-list-item-title>
          </v-list-item-content>
        </template>
                      <v-list-item>
                      <v-list-item-content>
                          <v-btn  text to="/proveedores" class="pa-0 ma-0" >
                            <v-icon>mdi-account-supervisor</v-icon>
                             Ver proveedores
                          </v-btn>
                      </v-list-item-content>
                        </v-list-item>
                                              <v-list-item>
                      <v-list-item-content>
                          <v-btn  text to="/crearProveedores" class="pa-0 ma-0" >
                            <v-icon>mdi-account-plus</v-icon>
                             Crear proveedores
                          </v-btn>
                      </v-list-item-content>
                        </v-list-item>
                              </v-list-group>
    </v-list>
                       <v-list v-if="user.rol==='admin'" >
                      <v-list-group>
                      <template v-slot:activator>
          <v-list-item-content small>
            <v-list-item-title align="center" justify="center"> 
            <v-icon>mdi-account</v-icon>
            Usuarios
            </v-list-item-title>
          </v-list-item-content>
        </template>

                      <v-list-item>
                      <v-list-item-content>
                          <v-btn  text to="/verUsuario" class="pa-0 ma-0" >
                            <v-icon>mdi-account-supervisor</v-icon>
                             Ver usuarios
                          </v-btn>
                      </v-list-item-content>
                        </v-list-item>
                                              <v-list-item>
                      <v-list-item-content>
                          <v-btn  text to="/crearUsuario" class="pa-0 ma-0" >
                            <v-icon>mdi-account-plus</v-icon>
                             Crear usuarios
                          </v-btn>
                      </v-list-item-content>
                        </v-list-item>
      </v-list-group>
    </v-list>
        </v-list>
      </v-navigation-drawer>

    </v-toolbar-title>
      <v-btn v-if="logged" text to="/" exact>
        <v-icon>mdi-home</v-icon>
        HOME
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script>
import { mapState, mapMutations, Store } from "vuex";

export default {
  name: "Header",
  props: {
   user: Object},
  data() {
    return {
      admin:false,
      condicion: null,       drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
        
    };
  },
  methods: {
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/signin");
      this.$store.commit("logout");
    },
    ...mapMutations(["logout"]),
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },

  },
  computed: { ...mapState(["logged"]),     
  },
};
</script>
<style scoped>
h1 {
  color: rgb(0, 0, 0);
}
.nav .v-btn {
  margin: 0.8rem 1rem;
}
</style>