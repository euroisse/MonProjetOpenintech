<template>
  <footer
    class="bg-[#000000] w-screen text-[#9CA3AF] pt-5 relative flex-grow overflow-x-hidden"
  >
    <div
      class="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 text-center md:text-start"
    >
      <div>
        <div class="container text-blue-700 text-left">
          <div class="mb-6">
            <img
              src="../Images/logo.png"
              width="32px"
              height="32px"
              alt="logo_image"
            />
          </div>
          <p class="font-roboto text-[16px] text-[#9CA3AF]">
            Location de voitures premium pour tous vos besoins
          </p>
        </div>
      </div>

      <div v-for="(item, index) in items" :key="index" class="container">
        <p class="mb-4 font-roboto text-[#FFFFFF] text-xl">{{ item.title }}</p>
        <div class="flex flex-col gap-1 text-[#9CA3AF]">
          <a v-for="(link, i) in item.links" :key="i" :href="link.url">{{
            link.name
          }}</a>
        </div>
      </div>

      <div class="container">
        <h3 class="mb-4">Newsletter</h3>
        <div class="flex flex-row items-center">
          <input
            type="email"
            placeholder="Votre email"
            class="w-full md:w-3/4 lg:w-2/3 text-left md:text-sm bg-white outline-none"
          />
          <Button
            content="S'abonner"
            customClass=" border-b-3 border-slate-800  bg-black text-white hover:bg-slate-800"
          />
        </div>
        <div class="flex gap-4 mt-3">
          <i
            class="ri-facebook-fill hover:text-white duration-300 cursor-pointer"
          ></i>
          <i
            class="ri-twitter-x-line hover:text-white duration-300 cursor-pointer text-base"
          ></i>
          <i
            class="ri-instagram-line hover:text-white duration-300 cursor-pointer"
          ></i>
          <i
            class="ri-linkedin-fill hover:text-white duration-300 cursor-pointer"
          ></i>
        </div>
      </div>
    </div>

    <div class="container p-5 max-w-6xl mx-auto">
      <p class="text-center mt-10 pb-10 opacity-50">
        © 2024 Location Auto Premium. Tous droits réservés.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import Button from "./Button.vue";

const items = ref([
  {
    title: "Navigation",
    links: [
      { name: "Accueil", url: "#" },
      { name: "Véhicules", url: "#" },
      { name: "Gardening", url: "#" },
      { name: "Services", url: "#" },
      { name: "Contact", url: "#" },
    ],
  },
  {
    title: "Contact ",
    links: [
      { name: "+88 333 78 901", url: "tel:+8833378901" },
      {
        name: "lightcodecamp@gmail.com",
        url: "mailto:lightcodecamp@gmail.com",
      },
      { name: "123 Avenue des Champs-Élysées, Paris", url: "#" },
    ],
  },
]);
</script>

<style scoped>
h3 {
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}
Button {
  border-radius: 0px 4px 4px 0px;
  padding: 8px 16px 8px 16px;
}

input {
  border-radius: 4px 0px 0px 4px;
  padding: 8px 12px 8px 12px;
}
</style>
