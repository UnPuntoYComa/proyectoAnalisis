<template>


<v-container md=12>
    <v-row align="center" justify="center">
        <v-col cols="13" sm="8" md="12">
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
            text: 'Nombre del producto',
            align: 'start',
            filterable: true,
            value: 'name',
          },
          { text: 'unidades', value: 'unidades' },
          { text: 'descripción', value: 'descripcion' },
          { text: 'lote', value: 'lote' },
          { text: 'fecha vencimiento', value: 'fechaVencimiento' },
          { text: 'Proveedor', value: 'proveedor' },
          { text: 'telefono proveedor', value: 'telProveedor' },
          { text: 'categoria', value: 'categoria' },
          { text: 'precio unidad Q', value: 'precioUnidad' },
        ],
        desserts: [
          {
            name: 'Aspirina',
            unidades: 54,
            descripcion: 'allivia dolor y fiebre',
            lote: 3,
            fechaVencimiento: '06/06/2022',
            proveedor: 'Bayer',
            telProveedor: '+502 ------',
            categoria: 'salicilato',
            precioUnidad: '14',
            ingrediente: 'ácido acetilsalicílico',
          },{
            name: 'Omeprazol',
            unidades: 21,
            descripcion: 'acidez estomacal',
            lote: 32,
            fechaVencimiento: '21/07/2022',
            proveedor: 'hiperFarma',
            telProveedor: '+502 ------',
            categoria: 'antiulcerosos',
            precioUnidad: '100',
            ingrediente: 'Omeprazol',
          },
        ],
      }
    },
  }
</script>