<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12" height="100%">
          <v-form @submit.prevent="loginUser">
            <v-img
              src="https://images.unsplash.com/photo-1589901507334-19f6a78c0db4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              aspect-ratio="1.9"
            >
              <v-card-title>Inicia Sesión</v-card-title>
            </v-img>
            <v-card-text>
              <v-text-field
                :rules="rulesName"
                label="Ingresa tu email"  
                name="login"
                prepend-icon="mdi-account"
                type="text"
                validate-on-blur
                class="mx-4"
                v-model="user.correo"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                v-model="user.contraseña"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show ? 'text' : 'password'"
                :rules="[rulesPass.required]"
                @click:append="show = !show"
                label="Ingresa tu contraseña"
                validate-on-blur
                class="mx-4"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <small></small>
              <v-spacer></v-spacer>
              <v-btn text color="primary" type="submit">Iniciar Sesion</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Signin",

  data() {
    return {
      user: {
        correo: "",
        contraseña: "",
      },
      show: false,
      rulesPass: {
        required: (value) => !!value || "Contraseña requerida",
      },
      rulesName: [(v) => !!v || "Campo requerido"],
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/api/auth/signin", this.user);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
        }
      } catch (error) {
        let err = error.response;
        console.log(err.response);
      }
    },
  },
};
</script>