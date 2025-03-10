<template>
  <section class="w-full py-16 bg-white">
    <div class="container mx-auto text-center">
      <h2 class="text-[#111827] mb-10 md:text-xl">Nos Services</h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <div
          v-for="(service, index) in services"
          :key="index"
          class="flex flex-col items-center"
        >
          <div
            class="w-16 h-16 bg-gray-100 flex items-center justify-center rounded-full shadow-md"
          >
            <i :class="service.icon + ' text-2xl md:text-xl text-black'"></i>
          </div>
          <h3 class="text-lg md:text-md mt-3">{{ service.title }}</h3>
          <p class=" mt-2">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';


const services = ref( [
  {
    icon: "ri-car-fill",
    title: "Large choix",
    description: "Plus de 100 modèles disponibles",
  },
  {
    icon: "ri-price-tag-3-fill",
    title: "Meilleurs prix",
    description: "Tarifs compétitifs garantis",
  },
  {
    icon: "ri-shield-fill",
    title: "Assurance incluse",
    description: "Protection complète",
  },
  {
    icon: "ri-customer-service-fill",
    title: "Support 24/7",
    description: "Assistance permanente",
  },
]);
</script>

<style scoped>
h3 {
  font-size: 18px;
  line-height: 28px;
  font-weight: 600;
  color:#111827 ;
}
h2{
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  
}
p {
  font-size: 16px;
  line-height: 24px;
  font-weight: normal;
color: #4B5563;
}
</style>
