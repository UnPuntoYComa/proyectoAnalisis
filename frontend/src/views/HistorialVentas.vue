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
            text: 'Nombre del cliente',
            align: 'start',
            filterable: true,
            value: 'name',
          },
          { text: 'fecha', value: 'fecha' },
          { text: 'productos', value: 'productos' },
          { text: 'total', value: 'total' },
        ],
        desserts: [
          {
            name: 'Jazmin Arias',
            fecha: '06/05/2022',
            productos: 'Tabcin',
            total: 5,
          },{
              name: 'Jonathan Solares',
            fecha: '03/05/2022',
            productos: 'pirimpimpin',
            total: 120,
          },
        ],
      }
    },
  }
</script>