<template>
    <section class="search-page pt-10 pb-30">
      <div class="container pt-20 ">
        <div class="max-w-3xl space-y-4">
          <h1 class="font-roboto">
            Location de voitures premium
          </h1>
          <p class="text-lg text-[#D1D5DB]">
            Découvrez une sélection de véhicules haut de gamme <br />
            pour tous vos déplacements
          </p>
        </div>
      </div>
  
      <!-- Formulaire de recherche -->
      <div class="search-form-container container">
        <div class="shadow-lg p-6 bg-white rounded-lg w-full max-w-full mx-auto">
          <div class="grid grid-cols-4 gap-4 text-left items-end w-full">
            <!-- Lieu de prise en charge -->
            <div class="flex flex-col gap-1">
              <label class="label-style">Lieu de prise en charge</label>
              <div class="relative w-full">
                <span class="icon-style">
                  <i class="ri-map-pin-2-fill"></i>
                </span>
                <input type="text" placeholder="Paris, France" class="input-style" />
              </div>
            </div>
  
            <!-- Date de début -->
            <div class="flex flex-col gap-1">
              <label class="label-style">Date de début</label>
              <div class="relative w-full" >
                <span class="icon-style">
                  <i class="ri-calendar-line"></i>
                </span>
                <input type="date" class="input-style"/>
              </div>
            </div>
  
            <!-- Date de fin -->
            <div class="flex flex-col gap-1">
              <label class="label-style">Date de fin</label>
              <div class="relative w-full ">
                <span class="icon-style">
                  <i class="ri-calendar-line"></i>
                </span>
                <input type="date" class="input-style"  />
              </div>
            </div>
  
            <!-- Bouton de recherche -->
            <div class="flex mb-1 ">
              <Button content="Rechercher" customClass=" bg-black text-white hover:bg-slate-800 py-2 rounded-md w-full" @click="goToVehicle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script setup>
  import Button from '../bases/Button.vue';
  import { useRouter } from 'vue-router';

const router = useRouter();

const goToVehicle = () => {
  router.push({ path: '/vehicles', query: { hideSearchButton: 'true' } });
};

</script>
  
  <style scoped>
  /* Section avec l'image de fond */
  .search-page {
    background-image: url("/src/components/Images/voiture3.png");
    background-size: cover;
    background-position: center;
    background-color: black;
    height: 100vh;
    color: white;
    position: relative;
  }
  h1{
    font-size: 60px;
    line-height: 60px;
    letter-spacing: -1.5px;
    font-weight: 700;
  }
  /* Conteneur du formulaire */
  .search-form-container {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 100%;
    z-index: 10;
  }
  
  /* Boîte du formulaire */
  .search-form {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 900px;
  }
  
 
  .label-style {
    margin-bottom: 2px;
    font-size: 14px;
    font-weight: bold;
    color: #374151;
  }
  
  /* Style des inputs */
  .input-style {
    border: 1px solid #d1d5db;
    padding: 10px;
    width: 100%;
    border-radius: 6px;
    text-align: center;
    justify-content: center;
    color: #6B7280;
   
    
  }
  
  /* Icône dans l'input */
  .icon-style {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #6b7280;
    
  }
  
  /* Bouton de recherche */
  .search-button {
    background-color: black;
    color: white;
    padding: 10px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
  }
  
  .search-button:hover {
    background-color: #333;
  }
  </style>
  