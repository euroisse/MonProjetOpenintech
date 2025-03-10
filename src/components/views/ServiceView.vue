<template>
  <section>
    <div class="items-center gap-3 text-center mb-10">
      <h2 class="text-[#111827] text-[30px] font-roboto font-[700]">
        Nos Services Premium
      </h2>
    </div>

    <div class="container w-full grid grid-cols-1 md:px-5 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="border bg-white p-5 cursor-pointer rounded-lg hover:shadow-2xl hover:-translate-y-1 duration-300"
      >
        <div class="w-16 h-16 bg-[#DBEAFE] flex items-center justify-center rounded-full shadow-md">
          <i :class="service.icon + ' text-2xl md:text-xl text-black'"></i>
        </div>
        <h3 class="text-lg md:text-md font-semibold mt-5">
          {{ service.title }}
        </h3>
        <p class="text-[#4B5563] mt-1">{{ service.description }}</p>
      </div>
    </div>

    <PopularVehcule />
    <Testimonial />
    <FAQs :faqs="faqs" />
    <Footer/>
  </section>
</template>

<script setup>
import { ref } from "vue";
import PopularVehcule from "../Services/PopularVehcule.vue";
import Testimonial from "../Services/Testimonial.vue";
import FAQs from "../Vehicules/FAQs.vue";
import Footer from "../bases/Footer.vue";
const services = ref([
  { icon: "ri-car-fill", title: "Large choix", description: "Plus de 100 modèles de véhicules premium disponibles pour répondre à tous vos besoins." },
  { icon: "ri-price-tag-3-fill", title: "Meilleurs prix", description: "Des tarifs compétitifs et transparents, sans frais cachés." },
  { icon: "ri-shield-fill", title: "Assurance incluse", description: "Une couverture complète pour rouler en toute sérénité." },
  { icon: "ri-customer-service-fill", title: "Support 24/7", description: "Une équipe dédiée à votre service à tout moment." },
]);

const faqs = [
  {
    question: "Quelles sont les conditions de location ?",
    answer:
      "Pour louer un véhicule, vous devez avoir au moins 21 ans, un permis de conduire valide depuis plus de 2 ans et une carte bancaire à votre nom.",
    
    open: false,
  },
  {
    question: "L'assurance est-elle incluse ?",
    answer:
      "Oui, tous nos véhicules sont couverts par une assurance tous risques incluse dans le prix de la location.",
   
    open: false,
  },
];
</script>

<style scoped>
h3 {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
}
p {
  font-size: 16px;
  font-weight: 400;
  color: #4b5563;
}
</style>