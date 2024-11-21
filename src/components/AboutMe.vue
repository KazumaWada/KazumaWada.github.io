<template>
<v-container class="text-center" :style="{ color: '#4172B5' }">
</v-container>



  <v-container>
    <v-row justify="center">

      <v-col cols="4" md="4">
        <v-img
          src="../me.jpg"
          class="rounded-image"
          max-width="250"
        ></v-img>
        <!-- <h2>Kazuma Wada</h2>
        <h4 :style="{ color: 'gray' }">(和田一真)</h4> -->
      </v-col>

      <v-col cols="8" md="4">
        <ul class="no-bullets">
          <!-- <h1 :style="{ color: '#4172B5' }">Kazuma Wada</h1> -->
          <h2>Kazuma Wada</h2>
          <p :style="{ color: 'gray' }">和田一真</p>
          <br>
          <i class="fa-brands fa-github"></i>,
          <i class="fa-sharp fa-regular fa-envelope"></i>,
          <i>zenn.dev</i>
        </ul>
      </v-col>

    </v-row>
  </v-container>
</template>
<style>
.no-bullets{
  list-style: none;
  padding: 0;
}
</style>