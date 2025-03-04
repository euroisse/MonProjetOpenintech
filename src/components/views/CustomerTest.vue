// Testimonials.vue
<template>
  <section>
    <div class="items-center gap-3 text-center mb-20">
      <h2 class="text-[#111827] text-[30px] font-roboto font-[700]">Témoignages Clients</h2>
    </div>
    <div class="container w-full grid grid-cols-1 md:px-5 gap-6 md:grid-cols-2 lg:grid-cols-3  ">
      <div
        v-for="card in cards"
        :key="card.name"
        class="service_card border bg-[#F9FAFB] p-5 cursor-pointer rounded-md hover:shadow-2xl sm:items-center hover:-translate-y-1 duration-300 space-y-5"
      >
        <div class=" items-left gap-5">
          <div class="text-[#FACC15] text-xl tracking-wider py-3">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>
          <p class="md:text-[12px] md:text-left text-[#4B5563]">{{ card.title }}</p>
        </div>
        <div class="flex items-center">
          <img :src="card.src" :alt="card.alt" class="w-12 h-12 rounded-full" />
          <div class="ml-2 nameProf">
            <p class="name text-[#111827] font-roboto uppercase">{{ card.name }}</p>
            <p class="prof font-roboto">{{ card.profession }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Image1 from "../Images/IMAGE1.png";
import Image2 from "../Images/IMAGE2.png";
import Image3 from "../Images/IMAGE3.png";

const cards = ref([
  { title: '"Service excellent, voiture impeccable. Je recommande vivement!"', src: Image1, alt: "image_customer", name: "Pierre Durand", profession: "Paris" },
  { title: '"Processus de réservation simple et rapide. Véhicule de qualité."', src: Image2, alt: "image_customer", name: "Marie Laurent", profession: "Lyon" },
  { title: '"Service client très réactif. Je louerai à nouveau sans hésiter."', src: Image3, alt: "image_customer", name: "Sophie Martin", profession: "Bordeaux" }
]);
</script>

<style scoped>
p { font-size: 16px; font-weight: 400; line-height: 24px; }
.name { font-size: 14px; font-weight: 500; line-height: 20px; }
.prof { font-size: 14px; line-height: 20px; font-weight: 400; color: #6B7280; }
.nameProf { text-align: left; }
</style>
