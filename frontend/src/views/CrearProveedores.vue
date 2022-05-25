<template>

<v-container md=10>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="10">
            <v-card class="elevation-12" height="100%">
                <v-form @submit.prevent="loginUser">
                    <h2 class="text-center text-h2 my-5">Proveedores</h2>
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
                        <v-btn color="indigo" type="submit">Agregar</v-btn>
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
  name: 'CrearProveedores',
  data(){
   return{
       cantidad:1,
   }
  },
}
</script>
