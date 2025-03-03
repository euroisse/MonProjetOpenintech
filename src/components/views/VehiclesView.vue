<template>
<div class="container max-w-full top-0 left-0">
    <div class="shadow-lg p-[30px]">
    <div  class=" flex  gap-3 text-center mb-4">
  <button class="w-full bg-black rounded-md h-12 text-white font-roboto font-[500] text-sm mt-3 cursor-pointer hover:bg-slate-800 hover:text-slate-200">Rechercher un véhicule</button>
    </div>
  </div>
    <div
      class="container w-full h-64 grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4"
    >
    <div
        v-for="card in cards"
        :key="card"
        class="service_card border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl sm:items-center hover:-translate-y-1 duration-300 space-y-5"
      >
        <div class="flex items-center gap-5">
          <i :class="card.icone" class="text-3xl md:text-4xl xl:text-5xl"></i>
          <p class="md:text-lg md:text-center font-bold">
            {{ card.title }} <br />
            {{ card.subtille }}
          </p>
        </div>
        <p class="font-Lobster">
          {{ card.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>


// import Cart1 from "../assets/img/cart-1.png";
// import Cart2 from "../assets/img/cart-2.png";
// import Cart3 from "../assets/img/cart-3.png";
// import Cart4 from "../assets/img/cart-4.png";
// import { ref, onMounted } from "vue";
// import { animate, inView } from "motion";

// const cards = ref([
//   {
//     src: Cart1,
//     alt: "popular_image",
//     desc: "Nephrolepis exaltata",
//     title: "Boston Fern",
//     value: "$5",
//   },
//   {
//     src: Cart2,
//     alt: "popular_image",
//     desc: "Ficus elastica",
//     title: "Rubber Plant",
//     value: "$5",
//   },
//   {
//     src: Cart3,
//     alt: "popular_image",
//     desc: "Spathiphyllum wallisii",
//     title: "Peace Lily",
//     value: "$5",
//   },
//   {
//     src: Cart4,
//     alt: "popular_image",
//     desc: "Adenium obesum",
//     title: "Desert Rose",
//     value: "$5",
//   },
// ]);

// const titlePopular = ref(null);
// const popularCards = ref([]);

// onMounted(() => {
//   inView(titlePopular.value, () => {
//     animate(titlePopular.value, { x: 5, scale: [0.5, 1] }, { ease: "linear", duration: 0.3 });
//   });

//   popularCards.value.forEach((card) => {
//     inView(card, () => {
//       animate(card, { y: 5, scale: [0.5, 1] }, { ease: "linear", duration: 0.5 });
//     });
//   });
// });
</script>
<style scoped>
.sectionVehcles{
  background-color: white;
}
</style>