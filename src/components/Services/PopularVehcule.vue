<template>
  <section class="bg-[#F9FAFB] py-20">
    <div class="container mx-auto text-center">
      <h2 class="text-[#111827] font-roboto mt-10">Nos Services</h2>
    </div>
    <div class="container mt-10">
      <swiper
        :modules="[Autoplay, Pagination]"
        :loop="true"
        :speed="400"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :space-between="30"
        :breakpoints="{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }"
      >
        <swiper-slide v-for="service in services" :key="service.id">
          <div class="rounded p-6">
            <div class="flex justify-center items-center">
              <img v-if="service.images.length > 0" :src="service.images[0].links" :alt="service.name" class="max-w-full w-full" />
            </div>
            <div class="bg-white text-left p-5">
              <h3 class="text-black font-semibold mb-2">{{ service.name }}</h3>
              <p class="text-gray-600">{{ service.description }}</p>
              <div class="mt-3 flex justify-between items-center">
                <p class="text-lg font-bold">{{ service.price_day }} € / jour</p> 
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

const services = ref();

const fetchServices = async () => {
  try {
    const response = await axios.get("https://booking.openintech.app/api/products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Shop-Id": "072f100a-9009-4e5c-98a2-007f2f24cf11",
      },
    });
    console.log(response.data);
    services.value = response.data.data.filter(product => product.category === "HOTEL"); 
  } catch (error) {
    console.error("Erreur lors de la récupération des services :", error);
  }
};

onMounted(fetchServices);
</script>

<style scoped>
h2 {
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
}
img {
  border-radius: 6px 6px 0px 0px;
}
</style>