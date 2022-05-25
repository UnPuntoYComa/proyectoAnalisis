<template>


<v-container md=10>
    <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="10">
            <v-card class="elevation-12" height="100%">
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
            </v-card>
        </v-col>
    </v-row>
</v-container>

</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Nombre',
            align: 'start',
            filterable: true,
            value: 'name',
          },
          { text: 'Telefono del Proveedor', value: 'telefono' },
          { text: 'Dirección', value: 'direccion' },
          { text: 'Descripcion', value: 'descripcion' },
        ],
        desserts: [
          {
            name: 'Bayer',
            telefono: '+502 ---------',
            direccion: 'zona 9, ciudad capital',
            descripcion: 'venta de todo tipo de medicamentos',
          },{
              name: 'hyperfarma',
            telefono: '+502 ---------',
            direccion: 'boca del monte, guatemala',
            descripcion: 'jarabes',
          },
        ],
      }
    },
  }
</script>