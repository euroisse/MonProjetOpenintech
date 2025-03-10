<template>
  <section>
    <div class="items-center gap-3 text-center mb-10">
      <h2 class="text-[#111827] text-[30px] font-roboto font-[700]">
        Témoignages Clients
      </h2>
    </div>
    <div
      class="container w-full grid grid-cols-1 md:px-5 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="review in reviews"
        :key="review.id"
        class="service_card border bg-[#F9FAFB] p-5 cursor-pointer rounded-md hover:shadow-2xl sm:items-center hover:-translate-y-1 duration-300 space-y-5"
      >
        <div class="items-left gap-5">
          <div class="text-[#FACC15] text-xl tracking-wider py-3">
            <i class="ri-star-fill" v-for="n in review.rating" :key="n"></i>
          </div>
          <p class="md:text-left text-[#4B5563]">
            {{ review.comment }}
          </p>
        </div>
        <div class="flex items-center">
          <div
            class="w-12 h-12 bg-[#DBEAFE] flex items-center justify-center rounded-full shadow-md"
          >
            <i :class="review.customer.icon + ' text-lg items-center text-center text-gray-700'"></i>
          </div>
          <div class="ml-2 nameProf">
            <p class="name text-[#111827] font-roboto uppercase">
              {{ review.customer.name }}
            </p>
            <p class="prof font-roboto">{{ review.customer.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const reviews = ref([]);

const fetchReviews = async () => {
  try {
    const response = await axios.get(`https://booking.openintech.app/api/reviews`, {
      params: {
        product_id: 22,
        customer: 1,
        page: 1,
        category: "HOTEL",
      },
      headers: {
        "Content-Type": "application/json",
        "Shop-Id": "072f100a-9009-4e5c-98a2-007f2f24cf11",
        "token":  "36|ANNQlsnws6tI2Ei4oLeqR4eheoGz8xRzyLgFjGb09c922402"

      },
    });
    reviews.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des avis :", error);
  }
};

onMounted(() => {
  fetchReviews();
});
</script>

