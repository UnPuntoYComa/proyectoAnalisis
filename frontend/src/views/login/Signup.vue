<template>
  <v-container>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6"
          ><v-card
            ><v-card-title class="text-h2 justify-center"
              >¡REGISTRATE!</v-card-title
            ></v-card
          ></v-col
        >
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step editable :complete="e1 > 1" step="1"
                >Crea tu Usuario</v-stepper-step
              >
              <v-divider></v-divider>
              <v-stepper-step editable :complete="e1 > 2" step="2"
                >Datos</v-stepper-step
              >
            </v-stepper-header>
            <v-form @submit.prevent="registerUser">
              <v-stepper-items>
                <!-- CREAR USUARIO -->
                <v-stepper-content step="1">
                  <v-card class="mb-12" outlined>
                    <v-row justify="center" align="center">
                      <v-col cols="12" md="8">
                        <v-text-field
                          class="mx-4"
                          :rules="rulesEmail"
                          label="Ingresa tu correo"
                          name="register"
                          prepend-icon="mdi-at"
                          type="text"
                          validate-on-blur
                          v-model="register.correo"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col cols="12" md="8">
                        <v-text-field
                          class="mx-4"
                          prepend-icon="mdi-lock"
                          v-model="register.contraseña"
                          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show ? 'text' : 'password'"
                          :rules="[rulesPass.required]"
                          @click:append="show = !show"
                          label="Ingresa tu contraseña"
                          validate-on-blur
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col cols="12" md="6">
                        <div class="text-center pb-5">
                          <small>*todos los campos son obligatorios*</small>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-row>
                    <v-btn color="indigo accent-4" class="ml-5" @click="e1 = 2"
                      >Continue</v-btn
                    >
                    <v-spacer></v-spacer>
                    <small class="mt-2">¿Ya tienes cuenta?</small>
                    <v-btn
                      text
                      color="teal accent-3"
                      :to="{ name: 'Signin' }"
                      exact
                      >Inicia Sesion</v-btn
                    >
                  </v-row>
                </v-stepper-content>

                <!-- DATOS DEL USUARIO -->
                <v-stepper-content step="2">
                  <v-card class="mb-12" outlined>
                    <v-row justify="center">
                      <v-col cols="12" md="8">
                        <v-text-field
                          class="mx-4"
                          :rules="rulesName"
                          label="Ingresa tu nombre"
                          name="register"
                          prepend-icon="mdi-form-textbox"
                          type="text"
                          validate-on-blur
                          v-model="register.nombre"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row justify="center">
                      <v-col cols="12" md="8">
                        <v-text-field
                          class="mx-4"
                          :rules="rulesName"
                          label="Ingresa tu apellido"
                          name="register"
                          prepend-icon="mdi-form-textbox"
                          type="text"
                          validate-on-blur
                          v-model="register.lastname"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row justify="center">
                      <v-col cols="12" md="6">
                        <div class="text-center pb-5">
                          <small>*todos los campos son obligatorios*</small>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                  <v-row>
                    <v-btn class="ml-5" color="indigo accent-4" type="submit"
                      >Registrarse</v-btn
                    >
                    <v-btn text @click="e1--">regresar</v-btn>
                    <v-spacer></v-spacer>
                    <small class="mt-2">¿Ya tienes cuenta?</small>
                    <v-btn
                      text
                      color="teal accent-3"
                      :to="{ name: 'Signin' }"
                      exact
                      >Inicia Sesion</v-btn
                    >
                  </v-row>
                </v-stepper-content>
              </v-stepper-items>
            </v-form>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      register: {
        correo: "",
        contraseña: "",
        nombre: "",
        firstname: "",
        rol:"admin",
      },

      e1: 1,
      show: false,
      rulesName: [(v) => !!v || "Campo requerido"],
      rulesPass: {
        required: (value) => !!value || "Contraseña requerida",
      },
      rulesEmail: [
        (v) => !!v || "Tu e-mail es requerido",
        (v) =>
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
            v
          ) || "E-mail inválido",
      ],
    };
  },
  methods: {
    async registerUser() {
      try {
        let response = await this.$http.post("/api/auth/signup", this.register);
        console.log(response);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/crear-encuesta");
          //swal("Success", "Registro exitoso!", "success");
        } else {
          //swal("Error", "Algo anda mal :c", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 400) {
          //swal("Error", error.data.message, "error");
          console.log(error.data.message);
        } else {
          // swal("Error", error.data.message, "error");
          console.log(error.data.message);
        }
      }
    },
  },
};
</script>

<style>
</style>