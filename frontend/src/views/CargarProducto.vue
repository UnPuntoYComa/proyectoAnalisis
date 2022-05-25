<template>

<v-container md=10>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="10">
            <v-card class="elevation-12" height="100%">
                <v-form @submit.prevent="loginUser">
                    <h2 class="text-center text-h2 my-5">Cargar Producto</h2>
                    <v-card-text>
                        <v-text-field
                            label="Ingresa nombre del proveedor"
                            name="nombreCliente"
                            type="text"
                            outlined
                            validate-on-blur
                            class="mx-4"
                        ></v-text-field>
                        <v-text-field
                            label="Ingresa dirección del proveedor"
                            name="direccionCliente"
                            type="text"
                            outlined
                            validate-on-blur
                            class="mx-4"
                        ></v-text-field>
                        <v-text-field
                            label="Ingresa telefono del proveedor"
                            name="telefonoCliente"
                            type="text"
                            outlined
                            validate-on-blur
                            class="mx-4"
                        ></v-text-field>
                        <v-row class="ma-0" v-for="index in cantidad" :key="index">
                            <v-col class="ma-0 pa-0">
                            <v-text-field 
                            label="Codigo Producto"
                            name="codigoProducto"
                            type="text"
                            outlined
                            validate-on-blur
                            class="mx-4 ma-0 pa-0"
                        ></v-text-field>
                            </v-col>
                            <v-col class="ma-0 pa-0">
                        <v-text-field
                            label="Precio"
                            name="precioProducto"
                            type="text"
                            outlined
                            validate-on-blur
                            class="mx-4 ma-0 pa-0"
                        ></v-text-field>
                            </v-col>
                                                      <v-btn
                            v-if="index === 1"
                            class="mx-2"
                            fab
                            dark
                            color="indigo"
                            @click="cantidad++"
                            >
                                <v-icon dark>
                                    mdi-plus
                                </v-icon>
                            </v-btn>
                                <v-btn
                                 v-else
                                class="mx-2"
                                fab
                                dark
                                color="red"
                            @click="cantidad--"
                                >
                                <v-icon dark>
                                    mdi-minus
                                </v-icon>
                                </v-btn>
                        </v-row>
                        <v-text-field
                            label="descripción"
                            name="descripcion"
                            type="text"
                            outlined
                            validate-on-blur
                            class="mx-4 ma-0 pa-0"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-row class="pr-4 d-flex flex-row-reverse">
                        <v-btn color="indigo" type="submit">Enviar</v-btn>
                        </v-row>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
</v-container>

</template>

<script>

export default {
  name: 'CargarProducto',
   data(){
   return{
       cantidad:1,
   }
  }
}
</script>
