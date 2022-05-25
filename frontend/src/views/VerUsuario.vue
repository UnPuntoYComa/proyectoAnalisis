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
      :items="usuarios"
      :search="search"
    ></v-data-table>
            </v-card>
        </v-col>
    </v-row>
</v-container>

</template>

<script>
import axios from "axios";
  export default {
    data () {

      return {
        search: '',
        headers: [
          {
            text: 'Nombre del usuario',
            align: 'start',
            filterable: true,
            value: 'nombre',
          },
          { text: 'contraseña', value: 'contraseña' },
          { text: 'rol', value: 'rol' },
          { text: 'correo', value: 'correo' },
        ],
        usuarios: [],
  }
    },
        async created(){
      try{
      const res = await axios.get("http://localhost:4000/api/usuario/");
      this.usuarios= res.data;
      }catch (e){
        console.log(e);
    }
    },
  }
</script>