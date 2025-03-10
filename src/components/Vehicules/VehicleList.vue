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
          <swiper-slide v-for="vehicle in vehicles" :key="vehicle.id">
            <div class="rounded p-6">
              <img v-if="vehicle.images.length > 0" :src="vehicle.images[0].links" :alt="vehicle.name" class="max-w-full w-full" />
              <div>
                <div class="bg-white p-5">
                  <div class="text-left">
                    <h3 class="mb-2 text-[#000000]">{{ vehicle.name }}</h3>
                    <p>{{ vehicle.price_day }} € / jour</p>
                  </div>
                  <div class="w-full mt-5">
                    <Button
                      content="Réserver"
                      customClass="bg-black text-white hover:bg-slate-800 w-full px-2 rounded-md"
                    />
                  </div>
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
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";

const vehicles = ref();

const fetchVehicles = async () => {
  try {
    const response = await axios.get("https://booking.openintech.app/api/products", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Shop-Id": "072f100a-9009-4e5c-98a2-007f2f24cf11",
      },
    });
    console.log(response.data);
    vehicles.value = response.data.data.filter(product => product.category === "CAR"); 
   
  } catch (error) {
    console.error("Erreur lors de la récupération des véhicules :", error);
  }
};

onMounted(fetchVehicles);
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
img {
  border-radius: 6px 6px 0px 0px;
}
</style>