<template>
  <section class="sectionHome relative pt-10  bg-cover bg-center  h-screen w-full flex items-center">
    <div class="container text-white ">
      <div class="max-w-3xl space-y-7 ">
        <h1 class="text-5xl font-bold ">Location de voitures premium</h1>
        <p class="text-lg text-gray-300">
          Découvrez une sélection de véhicules haut de gamme pour tous vos déplacements
        </p>
      </div>
    </div>
  </section>
  
  <VehiclesView  />
</template>

<script setup>

import VehiclesView from './VehiclesView.vue';
</script>


<style scoped>
.sectionHome {
  background-image: url(/src/components/Images/voiture1.png);
  /* @media (max-w-3xl){
    section {
    background-image: url(/src/Images/voiture2.png);
  } */
}


</style>