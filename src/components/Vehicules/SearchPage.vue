<template>
  <section class="search-page pt-10 pb-30">
    <div class="container pt-20">
      <div class="max-w-3xl space-y-4">
        <h1 class="font-roboto">Location de voitures premium</h1>
        <p class="text-lg text-[#D1D5DB]">
          Découvrez une sélection de véhicules haut de gamme <br />
          pour tous vos déplacements
        </p>
      </div>
    </div>

    <!-- Formulaire de recherche -->
    <div class="search-form-container container">
      <div class="shadow-lg p-6 bg-white rounded-lg w-full max-w-full mx-auto">
        <div class="grid grid-cols-4 gap-4 text-left items-center w-full">
          <!-- Lieu de prise en charge -->
          <div class="flex flex-col gap-1">
            <label class="label-style">Lieu de prise en charge</label>
            <div class="relative w-full">
              <span class="icon-style">
                <i class="ri-map-pin-line"></i>
              </span>
              <input
                v-model="searchData.location"
                type="text"
                placeholder="Paris, France"
                class="input-style p-2"
              />
            </div>
          </div>

          <!-- Date de début -->
          <div class="flex flex-col gap-1">
            <label class="label-style">Date de début</label>
            <div class="relative w-full">
              <span class="icon-style">
                <i class="ri-calendar-line"></i>
              </span>
              <input
                v-model="searchData.startDate"
                type="date"
                class="input-style p-2"
              />
            </div>
          </div>

          <!-- Type de véhicule -->
          <div class="flex flex-col gap-1">
            <label class="label-style">Type de véhicule</label>
            <div class="relative w-full">
              <span class="icon-style">
                <i class="ri-car-line"></i>
              </span>
              <select v-model="searchData.vehicleType" class="input-style">
                <option value="">Tous</option>
                <option value="SUV">SUV</option>
                <option value="Berline">Berline</option>
                <option value="Sport">Sport</option>
              </select>
            </div>
          </div>

          <!-- Bouton de recherche -->
          <div class="flex items-center pt-7">
            <Button
              content="Rechercher"
              customClass="bg-black text-white hover:bg-slate-800 px-4 rounded-md w-full "
              @click="goToVehicleFilter"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Button from "../bases/Button.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const searchData = ref({
  location: "",
  startDate: "",
  vehicleType: "",
});
console.log(searchData);

const goToVehicleFilter = () => {
  router.push({ path: "/vehicleFilter", query: searchData.value });
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
  padding-bottom: 200px;
}

h1 {
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
  bottom: -100px;
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
  width: 100%;
  border-radius: 6px;
  text-align: left;
  color: #6b7280;
  padding-left: 35px;
}

select {
  padding: 10px;
}
/* Icône dans l'input */
.icon-style {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
}
</style>
