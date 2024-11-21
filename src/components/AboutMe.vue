<template>
<v-container class="text-center" :style="{ color: '#4172B5' }">
     <h1>Kazuma Wada</h1>
     <p :style="{ color: 'gray' }">和田一真</p>
    </v-container>



  <v-container>
    <v-row justify="center">

      <v-col cols="6" md="4">
        <v-img
          src="../me.jpg"
          class="rounded-image"
          max-width="300"
        ></v-img>
        <!-- <h2>Kazuma Wada</h2>
        <h4 :style="{ color: 'gray' }">(和田一真)</h4> -->
      </v-col>

      <v-col cols="6" md="4">
        <ul class="no-bullets">
          <li>GitHub: @KazumaWada</li>
          <li>Zenn: @Kazumawada</li>
          <li>Mail: kazumawadaa@gmail.com</li>
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