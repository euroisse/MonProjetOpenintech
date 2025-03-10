<template>
  <div v-if="!$route.query.hideSearchButton" class="container max-w-full">
    <div class="shadow-lg p-[30px]">
      <div class="flex gap-3 text-center mb-4">
        <button
          class="w-full bg-black rounded-md h-12 text-white font-roboto font-[500] text-sm mt-3 cursor-pointer hover:bg-slate-800 hover:text-slate-200"
          @click="goToSearch"
        >
          Rechercher un véhicule
        </button>
      </div>
    </div>
  </div>
  <VehicleCard />
  <VehicleList />
  <CustomerTest />
  <FAQs :faqs="faqs" />
  <Footer />
</template>

<script setup>
import { useRouter } from "vue-router";
import VehicleCard from "../Vehicules/VehicleCard.vue";
import VehicleList from "../Vehicules/VehicleList.vue";
import CustomerTest from "../Vehicules/CustomerTest.vue";
import FAQs from "../Vehicules/FAQs.vue";
import Footer from "../bases/Footer.vue";

const router = useRouter();

const goToSearch = () => {
  router.push("/search");
};
const faqs = [
  {
    question: "Comment puis-je réserver une voiture ?",
    answer:
      "Utilisez notre moteur de recherche pour sélectionner vos dates et le type de véhicule souhaité. Suivez ensuite les étapes de réservation en ligne.",
   
    open: false,
  },
  {
    question: "Quels documents sont nécessaires ?",
    answer:
      "Vous devez présenter un permis de conduire valide, une pièce d'identité et une carte bancaire à votre nom.",
   
    open: false,
  },
];
</script>