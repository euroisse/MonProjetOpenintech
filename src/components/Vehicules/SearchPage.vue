<template>
  <section class="search-page pt-10 pb-30">
    <div class="container pt-20">
      <div class="max-w-2xl space-y-4">
        <h1 class="font-roboto">Location de voitures premium</h1>
        <p class="text-lg text-[#D1D5DB]">
          Découvrez une sélection de véhicules haut de gamme <br />
          pour tous vos déplacements
        </p>
      </div>
    </div>

    <div class="search-form-container container">
      <div class="shadow-lg p-6 bg-white rounded-lg w-full max-w-full mx-auto">
        <div class="grid grid-cols-4 gap-4 text-left items-center w-full">
          <div class="flex flex-col gap-1">
            <label class="label-style">Lieu de prise en charge</label>
            <div class="relative w-full">
              <span class="icon-style">
                <i class="ri-map-pin-line"></i>
              </span>
              <select
                v-model="selectedCountry"
                class="border rounded-md text-black"
              >
                <option value="">Sélectionner un pays</option>
                <option
                  v-for="country in countries"
                  :key="country.id"
                  :value="country"
                >
                  {{ country.name }}
                </option>
              </select>
              <select
                v-model="selectedCity"
                :disabled="!selectedCountry"
                class="border rounded-md text-black"
              >
                <option value="">Sélectionner une ville</option>
                <option v-for="city in cities" :key="city.id" :value="city">
                  {{ city.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label class="label-style">Date de début</label>
            <div class="relative w-full">
              <span class="icon-style">
                <i class="ri-calendar-line"></i>
              </span>
              <input
                v-model="searchData.date"
                type="date"
                class="input-style p-2"
              />
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <label class="label-style">Type de véhicule</label>
            <div class="relative w-full">
              <span class="icon-style">
                <i class="ri-car-line"></i>
              </span>
              <select v-model="searchData.brands" class="input-style">
                <option value="">Tous</option>
                <option v-for="brand in brands" :key="brand" :value="brand">
                  {{ brand.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="flex items-center pt-7">
            <Button
              content="Rechercher"
              customClass="bg-black text-white hover:bg-slate-800 px-4 rounded-md w-full"
              @click="goToVehicleFilter"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import Button from "../bases/Button.vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const countries = ref([]);
const cities = ref([]);
const brands = ref([]);
const searchData = ref({
  pickupLocation: "",
  date: "",
  brands: "",
});
const selectedCountry = ref(null);
const selectedCity = ref(null);

onMounted(async () => {
  await fetchCountries();
  await fetchVehicleTypes();
});

const fetchCountries = async () => {
  try {
    const response = await axios.get("https://booking.openintech.app/api/countries", {
      headers: {
        "Content-Type": "application/json",
        "Shop-Id": "072f100a-9009-4e5c-98a2-007f2f24cf11",
      },
    });
    countries.value = response.data.countries;
  } catch (error) {
    console.error("Erreur lors de la récupération des pays:", error);
  }
};

const fetchCities = async (countryId) => {
  if (!countryId){
    cities.value = []
    return;
  
  } 
  try {
    const response = await axios.get(`https://booking.openintech.app/api/cities?country_id=${countryId}`, {
      headers: {
        "Content-Type": "application/json",
        "Shop-Id": "072f100a-9009-4e5c-98a2-007f2f24cf11",
      },
      params: { country: countryId },
    });
    cities.value = response.data.cities || [];
  } catch (error) {
    console.error("Erreur lors de la récupération des villes:", error);
  }
};

watch(selectedCountry, (newCountry) => {
  selectedCity.value = null;
  fetchCities(newCountry?.id);
});

const fetchVehicleTypes = async () => {
  try {
    const response = await axios.get("https://booking.openintech.app/api/brands", {
      headers: {
        "Content-Type": "application/json",
        "Shop-Id": "072f100a-9009-4e5c-98a2-007f2f24cf11",
      },
    });
    brands.value = response.data.brands;
  } catch (error) {
    console.error("Erreur lors de la récupération des marques de véhicules:", error);
  }
};

const goToVehicleFilter = () => {
  if (!selectedCountry.value || !selectedCity.value || !searchData.value.date) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }
  searchData.value.pickupLocation = `${selectedCity.value.name}, ${selectedCountry.value.name}`;
  router.push({ path: "/vehicleFilter", query: searchData.value });
};
</script>


<style scoped>
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

.icon-style {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
}
</style>
