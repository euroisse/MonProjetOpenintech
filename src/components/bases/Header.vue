<template>
  <div class="relative h-max w-screen overflow-x-hidden">
    <nav class="flex items-center shadow-sm w-full justify-between h-16 sm:h-20 fixed z-50 top-0 duration-300 bg-white">
      <div class="container flex items-center justify-between">
        <div>logo</div>

        <div
          :class="[
            isMenuOpen ? 'left-0' : 'left-[-100%]',
            'absolute top-0 min-h-[80vh] w-full bg-white backdrop-blur-sm flex flex-col items-center justify-center gap-8 duration-300 overflow-hidden',
            'lg:static lg:min-h-fit lg:bg-transparent lg:w-auto lg:flex lg:flex-row lg:opacity-100 lg:left-auto',
          ]"
        >
          <ul class="flex flex-col items-center gap-8 lg:flex-row text-[#6B7280]">
            <li v-for="(link, index) in navLinks" :key="index">
              <RouterLink
                :to="link.to"
                :class="{
                  'bg-white shadow-lg border-b-2 border-black text-black hover:text-black': route.path === link.to,
                  'bg-white border-none hover:text-black': route.path !== link.to,
                }"
                @click="handleClick(link.to)"
              >
                {{ link.text }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <div v-if="$route.path === '/search'" class="flex flex-row justify-between items-center p-0 gap-8">
          <Button content="Se connecter" customClass="bg-white text-black border border-black hover:bg-gray-800 hover:text-white px-2" />
          <Button content="S'inscrire" customClass="bg-black text-white hover:bg-gray-800" />
        </div>
        
        <div v-else class="flex flex-row items-center p-0 gap-4 flex-wrap md:hidden lg:block">
          <Button content="Se connecter" customClass="bg-black text-white hover:bg-slate-800 px-2 rounded-md" />
        </div>

        <div class="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden" @click="toggleMenu">
          <i :class="isMenuOpen ? 'ri-close-line text-[#6B7280]' : 'ri-menu-line text-[#6B7280]'"></i>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Button from "./Button.vue";

const navLinks = ref([
  { text: "Accueil", to: "/" },
  { text: "Véhicules", to: "/vehicles" },
  { text: "Services", to: "/services" },
  { text: "Contact", to: "/contact" },
]);

const isMenuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClick = () => {
  if (window.innerWidth < 1024) {
    isMenuOpen.value = false;
  }
};
</script>
