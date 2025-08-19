<template>
  <section class="vehicle-filter-page bg-[#F9FAFB] pt-10">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row gap-7">
        <aside class="p-5 bg-white rounded-md lg:w-1/4 md:w-2/4 xl:w-1/4 shadow-md">
          <h2 class="font-roboto mb-4">Filtres</h2>
          <div class="mb-5">
            <h3 class="text-[14px] font-[500] font-roboto mb-2">
              Type de tarification
            </h3>
            <select
              v-model="filters.priceType"
              class="w-full border rounded p-2 text-sm"
            >
              <option value="hour">Par heure</option>
              <option value="day">Par jour</option>
              <option value="month">Par mois</option>
            </select>
          </div>

          <div class="mb-5">
            <h3 class="text-[14px] font-[500] font-roboto mb-2">
              Prix par jour
            </h3>
            <input
              type="range"
              :min="params.min"
              :max="params.max"
              v-model="filters.price"
              class="w-full range-slider"
            />
            <div class="flex justify-between text-sm text-gray-500">
              <span>{{ params.min }}€</span>
              <span>{{ params.max }}€</span>
              <span>{{ filters.price }}€</span>
            </div>
          </div>

          <div
            v-for="feature in features"
            :key="feature.feature.id"
            class="mb-5"
          >
            <h3 class="text-sm font-semibold mb-2">
              {{ feature.feature.name }}
            </h3>
            <div v-for="value in feature.values" :key="value.id" class="mb-2">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  :value="value.value"
                  v-model="filters.features"
                  class="mr-2"
                />
                {{ value.value }}
              </label>
            </div>
          </div>
        </aside>

        <main class="w-full ">
          <div class="flex justify-between items-center mb-5">
            <h2 class="text-[20px] text-[#000000] font-medium">
              {{ filteredVehicles.length }} Véhicules trouvés
            </h2>
            <select v-model="sortBy" class="border rounded p-2 text-sm">
              <option value="priceAsc">Prix croissant</option>
              <option value="priceDesc">Prix décroissant</option>
            </select>
          </div>
          <div v-if="loading" class="text-center my-5">
            <p class="text-gray-500">Chargement des véhicules...</p>
          </div>
          <div
            v-else
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <div
              v-for="vehicle in sortedVehicles"
              :key="vehicle.id"
              class="bg-white p-4 rounded-md shadow-md"
            >
              <img
                v-if="vehicle.images && vehicle.images.length > 0"
                :src="vehicle.images[0]"
                alt="Vehicle Image"
                class="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 class="font-medium text-lg">{{ vehicle.name }}</h3>
              <p class="text-sm text-gray-500">{{ vehicle.type }}</p>
              <p class="text-lg font-semibold mt-2">
                {{ vehicle.price }}€/jour
              </p>
              <p class="text-sm text-gray-500">
                🚗 {{ vehicle.transmission }} | ⛽ {{ vehicle.fuel }}
              </p>
              <button
                class="mt-3 w-full bg-black text-white py-2 rounded-md hover:bg-gray-900"
              >
                Réserver
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import axios from "axios";

const filters = ref({
  price: 10000,
  features: [],
  priceType: "day",
});
const loading = ref(false)
const features = ref([]);
const params = ref({
  min: 0,
  max: 0,
});
const sortBy = ref("priceAsc");
const vehicles = ref([]);

onMounted(async () => {
  await fetchVehicles();
});

const fetchVehicles = async () => {
  loading.value = true;
  try {
    const response = await axios.get(
      "https://booking.openintech.app/api/filters",
      {
        params: {
          price: filters.value.price,
          price_type: filters.value.priceType,
          features: filters.value.features,
        },
        headers: {
          "Content-Type": "application/json",
          "Shop-Id": "072f100a-9009-4e5c-98a2-007f2f24cf11",
        },
      }
    );
    const resp = response.data;
    console.log("Réponse du backend:", resp);

    params.value = {
      min: resp.min_price,
      max: resp.max_price,
    };

    features.value = resp.features;
  } catch (error) {
    console.error("Erreur lors de la récupération des véhicules:", error);
  } finally {
    loading.value = false;
  }
};

const filteredVehicles = computed(() => {
  return vehicles.value;
});

const sortedVehicles = computed(() => {
  const sorted = [...filteredVehicles.value];
  return sorted.sort((a, b) => {
    if (sortBy.value === "priceAsc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
});

watch(
  () => [filters.value.price, filters.value.priceType],
  async () => {
    await fetchVehicles();
  },
  { deep: true }
);

</script>

<style scoped>
.vehicle-filter-page {
  background-color: #f9fafb;
}

.range-slider {
  accent-color: #007bff;
}
label {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: black;
}
h2 {
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  color: #000000;
}
h3 {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: #374151;
}
input[type="checkbox"] {
  accent-color: rgb(112, 112, 248);
}
</style>
