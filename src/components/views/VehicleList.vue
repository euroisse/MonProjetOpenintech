<template>
  <section class="bg-[#F9FAFB] py-20">
    <div class="container mx-auto text-center">
      <h2 class="text-[#111827] font-roboto mt-10">Véhicules Populaires</h2>

      <div class="container items-center mt-10">
        <swiper
          :modules="[Autoplay, Pagination]"
          :loop="true"
          :speed="400"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :pagination="{ clickable: true, grabCursor: true }"
          :space-between="30"
          :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }"
        >
          <swiper-slide v-for="(list, index) in Lists" :key="index">
            <div class="bg-white pt-20  rounded-md">
              <img
                :src="list.src"
                :alt="list.alt"
                class="relative w-full  rounded-md pb-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500"
              />
              <div>
                <h3 class="mb-2 text-[#000000]">{{ list.title }}</h3>
                <p>{{ list.description }}</p>

                <div class="mt-3 p-10">
                  <Button
                    content="Réserver"
                    customClass="bg-black text-white hover:bg-slate-800 w-full px-2 rounded-md"
                  />
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "../bases/Button.vue";
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import voiture4 from "../Images/voiture4.png";
import voiture5 from "../Images/voiture5.png";
import voiture6 from "../Images/voiture6.png";

const Lists = ref([
  {
    src: voiture4,
    alt: "vehicule_list",
    title: "Mercedes Classe E",
    description: "À partir de 150€/jour",
  },
  {
    src: voiture5,
    alt: "vehicule_list",
    title: "Range Rover Sport",
    description: "À partir de 200€/jour",
  },
  {
    src: voiture6,
    alt: "vehicule_list",
    title: "Porsche 911",
    description: "À partir de 300€/jour",
  },
]);
</script>

<style scoped>
h2 {
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
}
h3 {
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
}
p {
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  color: #4b5563;
}

</style>
