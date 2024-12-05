<style>
/* template{
  #4c6ef5
} */

body {
  background-color: #f2f5ff; /* グローバルに適用 */
  margin: 0;
  padding: 0;
}  
button {
  background-color: #f8f9fa; /* 明るいグレー */
  color: #343a40;           /* 濃いグレー */
  border: 1px solid #ced4da; /* 薄いグレーの枠線 */
  padding: 1px 3px;
  border-radius: 5px;       /* 角を少し丸める */
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* ホバー時の効果 */
button:hover {
  background-color: #e9ecef; /* 少し濃いグレー */
  color: #212529;            /* テキストを濃くする */
}
</style>

<template>
   <v-container>
    <h3>🧑‍💻 Projects</h3>
    
  <div>

  <li>🚀 <a href="https://travelpackhub.com" target="_blank">travelpackhub.com</a> <a href="https://github.com/KazumaWada/travelpackhub" target="_blank"><i class="fa-brands fa-github"></i></a> <button @click="toggleReadme('travelpackhub')">{{ activeReadme === 'travelpackhub' ? 'Close' : 'README' }}</button></li>
  <div v-if="activeReadme === 'travelpackhub'">
    <TravelPackHub />
  </div>


  <li>🛠️ <a href="https://thisjobdoesnotexistyet.com" target="_blank">thisjobdoesnotexistyet.com</a> <a href="https://github.com/KazumaWada/thisjobdoesnotexistyet" target="_blank"><i class="fa-brands fa-github"></i></a> <button @click="handleClick"> README</button> </li>
  <li>🛠️ <a href="https://onedayoneline.onrender.com/" target="_blank">onedayoneline.com</a> <a href="https://github.com/KazumaWada/onedayoneline" target="_blank"> <i class="fa-brands fa-github"></i></a> <button @click="handleClick"> README</button></li>
  <li>☠️ file directory system <a href="https://github.com/KazumaWada/filedirectorysystem" target="_blank"> <i class="fa-brands fa-github"></i></a> <button @click="handleClick"> README</button></li>
  <li>☠️ blog posting service <a href="https://github.com/KazumaWada/myapp" target="_blank"><i class="fa-brands fa-github"></i></a> <button @click="toggleReadme('berlin-now')">{{ activeReadme === 'berlin-now' ? 'Close' : 'README' }}</button></li>
  <div v-if="activeReadme === 'berlin-now'">
    <BerlinNow />
  </div>
  <li>☠️ <a href="https://text-snippet-sharing.vercel.app/" target="_blank">text snippet sharing service</a> <a href="https://github.com/KazumaWada/text_snippet_sharing" target="_blank"><i class="fa-brands fa-github"></i></a> <button @click="handleClick"> README</button> </li>
  <li>📝 computer science note <a href="https://github.com/KazumaWada/computer-science-note/tree/main/recursion" target="_blank"><i class="fa-brands fa-github"></i></a> <button @click="handleClick"> README</button> </li>
  <li>🚀 <a href="https://kazumawada.org" target="_blank">kazumawada.org</a> <a href="https://github.com/KazumaWada/kazumawada.github.io" target="_blank"><i class="fa-brands fa-github"></i></a> <button @click="handleClick"> README</button> </li>



</div>


</v-container>


</template>

<script setup>
import { ref } from 'vue';
import TravelPackHub from './readme/TravelPackHub.vue';
import BerlinNow from './readme/BerlinNow.vue';
//vueではdiv id=(getElementById)の代わりにrefやreactiveを使う。

//init
const activeReadme = ref(null)
//buttonがクリックされたら、toggleReadmeでどのボタンがクリックされたか識別できる。
const toggleReadme = (id) =>{
  activeReadme.value = activeReadme.value === id ? null : id;
};

// const buttonText = ref('README')

// const toggleButtonText = () =>{
//   buttonText.value
// }

</script>


<style>
a{
    text-decoration: none;
}
</style>