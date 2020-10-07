<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12" height="100%">
          <v-form @submit.prevent="loginUser">
            <v-img
              src="https://lh3.googleusercontent.com/proxy/jLapqInhsLWXJqMLyhvT7t50iFdrixDzPGppDNTQTzrs0pYaHEosz-wPtKHmrLUohGJQHlfSU4Yv9fU0IDFldZ4JaRK5UHyn1uj8X5i-u0xY6bzASLUpPSvoJdLvrvVtNxdT7A"
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
              <v-btn text color="primary" type="submit">Iniciar Sesion</v-btn>
              <v-spacer></v-spacer>
              <small>¿No tienes cuenta?</small>
              <v-btn text color="orange accent-4" to="/signup"
                >Registrate</v-btn
              >
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
        console.log(token);
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/crear-encuesta");
        }
      } catch (error) {
        let err = error.response;
        console.log(err.response);
      }
    },
  },
};
</script>