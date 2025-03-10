<template>
  <!-- home -->
  <section class="sectionHome relative pt-10  bg-cover bg-center  h-screen w-full flex items-center">
    <div class="container text-white ">
      <div v-if="utilisateur" class="space-y-7" >
        <p class="text-3xl" ><span class="font-bold text-5xl"> Bienvenue </span> {{ utilisateur.firstname }}, </p>
        <p class="text-lg text-gray-300">
          Découvrez une sélection de véhicules haut de gamme pour tous vos déplacements
        </p>
      </div>
      <div v-else class="">
<div  class="max-w-3xl space-y-7 " >
<h1 class="text-5xl font-bold "> Location de voitures premium</h1>
<p class="text-lg text-gray-300">
          Découvrez une sélection de véhicules haut de gamme pour tous vos déplacements
        </p>
</div>
      </div>
      
    </div>
  </section>
  
  <VehiclesView  />
</template>

<script setup>

import VehiclesView from './VehiclesView.vue';
import { ref,onMounted } from 'vue';
import { api } from '../../api/axios';
const utilisateur = ref(null);

const recupererUtilisateur = async () => {
  try {
    const response = await api.get('/user');
    utilisateur.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des informations :', error);
    
  }
};

onMounted(recupererUtilisateur);

</script>


<style scoped>
.sectionHome {
  background-image: url(/src/components/Images/voiture1.png);
 
}


</style>

