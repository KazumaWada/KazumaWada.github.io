<template>
<!-- <v-container class="text-center" :style="{ color: '#4172B5' }">
</v-container> -->
  <v-container>
    <!-- <v-row justify="center"> -->
      <v-row>
        <!-- col:スマホ
        md: 中画面 -->
      <!-- <v-col cols="4" md="2" style="background-color: skyblue;"> -->
      <v-col cols="4" md="2">
        <v-img
          src="/images/me.jpg"
          class="rounded-image"
          max-width="250"
        ></v-img>
        <!-- <h2>Kazuma Wada</h2>
        <h4 :style="{ color: 'gray' }">(和田一真)</h4> -->
      </v-col>

      <!-- <v-col cols="8" md="8" style="background-color: gray;"> -->
      <v-col cols="8" md="8">
        <ul class="no-bullets">
          <!-- <h1 :style="{ color: '#4172B5' }">Kazuma Wada</h1> -->
          <h2>Kazuma Wada</h2>
          <p :style="{ color: 'gray' }">和田一真 (ワダカズマ)</p>
          <br>
          <!-- <p>👷🚧 This portfolio is currently under development. 🪚🏗️🚧🚨 </p> -->
          
          <!-- <p><i class="fa-sharp fa-regular fa-envelope"></i>: kazumawadaa@gmail.com</p>
          <p><i class="fa-brands fa-github"></i>: <a href="https://github.com/KazumaWada" target="_blank">@kazumawada</a></p>
          <p>Zenn: <a href="https://zenn.dev/kazumawada" target="_blank">@kazumawada</a></p> -->
        
        </ul>
      </v-col>

    </v-row>
    <!-- </v-row> -->
  </v-container>
</template>
<style>
.no-bullets{
  list-style: none;
  padding: 0;
}
</style>