<template>
  <v-app-bar
    absolute
    color="#fcb69f"
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
    scroll-target="#scrolling-techniques-2"
    app
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-toolbar-title>Proyecto Analisis de Sistemas II</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-row justify="center">
      <v-col cols="6">
        <v-row justify="end">
          <v-col cols="3" class="mx-2">
            <v-btn text to="/" exact>
              <v-icon>mdi-home</v-icon>
              HOME
            </v-btn>
          </v-col>
          <v-col cols="3" class="mx-2">
            <v-btn text to="/encuestas">
              <v-icon>mdi-heart</v-icon>
              encuestas
            </v-btn>
          </v-col>
           <v-col cols="3" class="mx-2">
            <v-btn text to="/crear-encuesta">
              <v-icon>mdi-heart</v-icon>
              Crear encuesta
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row justify="end">
          <v-col cols="2" class="mx-4">
            <v-btn text to="/signin">
              <v-icon>mdi-dots-vertical</v-icon>
              signin
            </v-btn>
          </v-col>
          <v-col cols="2" class="mx-4">
            <v-btn text to="/signup">
              <v-icon>mdi-dots-vertical</v-icon>
              Signup
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>