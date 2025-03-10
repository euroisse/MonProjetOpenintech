<template> 
  <section class="vehicle-filter-page bg-[#F9FAFB] p-5">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row gap-5">
        
        <!-- Sidebar des filtres -->
        <aside class="p-5 bg-white rounded-md w-full md:w-1/4 shadow-md">
          <h2 class=" font-roboto mb-4">Filtres</h2>
          
          <!-- Filtre par prix -->
          <div class="mb-5">
            <h3 class="text-[14px] font-[500] font-roboto mb-2">Prix par jour</h3>
            <input type="range" min="0" max="1000" v-model="filters.price" class="w-full range-slider" />
            <div class="flex justify-between text-sm text-gray-500">
              <span>0€</span>
              <span>{{ filters.price }}€</span>
            </div>
          </div>
          
          <!-- Filtre par carburant -->
          <div class="mb-5">
            <h3 class="text-sm  mb-2">Carburant</h3>
            <div v-for="fuelType in fuelOptions" :key="fuelType" class="mb-2">
              <label class="flex items-center">
                <input type="checkbox" :value="fuelType" v-model="filters.fuel" class="mr-2" />
                {{ fuelType }}
              </label>
            </div>
          </div>
          
          <!-- Filtre par transmission -->
          <div>
            <h3 class="text-sm font-semibold mb-2">Transmission</h3>
            <div v-for="transmissionType in transmissionOptions" :key="transmissionType" class="mb-2">
              <label class="flex items-center">
                <input type="checkbox" :value="transmissionType" v-model="filters.transmission" class="mr-2" />
                {{ transmissionType }}
              </label>
            </div>
          </div>
        </aside>
        
        <!-- Contenu principal -->
        <main class="w-full md:w-3/4">
          <div class="flex justify-between items-center mb-5">
            <h2 class="text-[20px] text-[#000000] font-medium">{{ filteredVehicles.length }} véhicules trouvés</h2>
            <select v-model="sortBy" class="border rounded p-2 text-sm">
              <option value="priceAsc">Prix croissant</option>
              <option value="priceDesc">Prix décroissant</option>
            </select>
          </div>
          
          <!-- Liste des véhicules -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="vehicle in sortedVehicles" :key="vehicle.id" class="bg-white p-4 rounded-md shadow-md">
              <img v-if="vehicle.images.length > 0" :src="vehicle.images[0]"  alt="Vehicle Image" class="w-full h-40 object-cover rounded-md mb-3" />
              <h3 class="font-medium text-lg">{{ vehicle.name }}</h3>
              <p class="text-sm text-gray-500">{{ vehicle.type }}</p>
              <p class="text-lg font-semibold mt-2">{{ vehicle.price }}€/jour</p>
              <p class="text-sm text-gray-500">🚗 {{ vehicle.transmission }} | ⛽ {{ vehicle.fuel }}</p>
              <button class="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-gray-900">Réserver</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const vehicles = ref([]);
const filters = ref({ price: 1000, fuel: [], transmission: [] });
const sortBy = ref('priceAsc');
const fuelOptions = ['Essence', 'Diesel', 'Électrique', 'Hybride'];
const transmissionOptions = ['Automatique', 'Manuelle'];

onMounted(async () => {
  try {
    const response = await axios.get('https://booking.openintech.app/api/products', {
      params: { category: 'FURNISHED' },
    });
    vehicles.value = response.data;
   
  } catch (err) {
    console.error(err);
  }
});

const filteredVehicles = computed(() => {
  return vehicles.value.filter((vehicle) => {
    return (
      vehicle.price <= filters.value.price &&
      (filters.value.fuel.length === 0 || filters.value.fuel.includes(vehicle.fuel)) &&
      (filters.value.transmission.length === 0 || filters.value.transmission.includes(vehicle.transmission))
    );
  });
});

const sortedVehicles = computed(() => {
  return [...filteredVehicles.value].sort((a, b) => {
    return sortBy.value === 'priceAsc' ? a.price - b.price : b.price - a.price;
  });
});
</script>

<style scoped>
.vehicle-filter-page {
  background-color: #f9fafb;
}

.range-slider {
  accent-color:#007BFF ; 
}
label{
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: black;
}
h2{
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  color:#000000 ;
}
h3{
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #374151;
}
</style>
