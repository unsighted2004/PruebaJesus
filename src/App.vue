<template>
  <v-app>

   <v-main>

    <men></men>

   </v-main>

   <router-view>
  
   </router-view>
   
  </v-app>
 </template>
 
 <script>
import men from './components/FirstMenu.vue';
   export default {
    name: 'App',
     
     components:{

      men,

     },
     data: () => ({
      //
     }),
   };

 </script>
