<template>
    <div ref="observerTarget"></div>
    <div class="relative h-max w-screen overflow-x-hidden">
      <nav :class="['flex items-center shadow-sm w-full justify-between h-16 sm:h-20 fixed z-50 top-0 duration-300', showScrollHeader ? 'bg-white shadow-lg' : 'bg-white']">
        <!-- Logo -->
        <div class="container flex items-center justify-between">
          <div>logo</div>
    
          <!-- Menu -->
          <div
            :class="[
              isMenuOpen ? 'left-0' : 'left-[-100%]',
              'absolute top-0 min-h-[80vh] w-full bg-white backdrop-blur-sm flex flex-col items-center justify-center gap-8 duration-300 overflow-hidden',
              'lg:static lg:min-h-fit lg:bg-transparent lg:w-auto lg:flex lg:flex-row lg:opacity-100 lg:left-auto'
            ]"
          >
            <ul class="flex flex-col items-center gap-8 lg:flex-row text-[#6B7280]">
              <li v-for="(link, index) in navLinks" :key="index">
                <RouterLink 
                  :to="link.to" 
                  :class="{
                    'active': activeLink === link.to,
                    'bg-white shadow-lg border-b-2 border-black text-black hover:text-black': activeLink === link.to && showScrollHeader,
                    'bg-white border-none hover:text-black': activeLink !== link.to
                  }"
                  @click="handleclick(link.to)"
                >
                  {{ link.text }}
                </RouterLink>
              </li>
            </ul>
          </div>
    
          <div class="flex flex-row items-center p-0 gap-0 flex-wrap">
            <Button class="btn text-white" content="Se connecter" />
          </div>
    
          <!-- Bouton menu hamburger -->
          <div class="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden" @click="toggleMenu">
            <i :class="[isMenuOpen ? 'ri-close-line text-[#6B7280]' : 'ri-menu-line text-[#6B7280]']"></i>
          </div>
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import Button from "./Button.vue"; 
  
  const navLinks = ref([
    { text: "Accueil", to: "/" },
    { text: "Véhicules", to: "/vehicles" },
    { text: "Services", to: "/services" },
    { text: "Contact", to: "/contact" }
  ]);
  
  const isMenuOpen = ref(false);
  const showScrollHeader = ref(false);
  const activeLink = ref("/");
  
  let observer = null;
  const ratio = 0.6;
  const observerTarget = ref(null);
  const sections = ref([]);
  
  // Fonction pour activer le menu hamburger
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  
  // Gérer le clic sur un lien et fermer le menu si sur mobile
  const handleclick = (link) => {
    activeLink.value = link;
    if (window.innerWidth < 1024) {
      isMenuOpen.value = false;
    }
  };
  
  // Suivi du scroll pour gérer le header
  const handleScroll = () => {
    showScrollHeader.value = window.scrollY > 50;
  };
  
  // Observer pour activer/désactiver les liens actifs en fonction des sections visibles
  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeLink.value = entry.target.id;
      }
    });
  };
  
  // Initialisation du IntersectionObserver pour observer les sections
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
    
    // Initialiser l'observateur
    observer = new IntersectionObserver(handleIntersection, {
      rootMargin: `0px 0px -${window.innerHeight * ratio}px 0px`,
      threshold: 0.5 // Détecte quand au moins 50% de la section est visible
    });
  
    // Observer toutes les sections de la page
    sections.value = document.querySelectorAll("section");
    sections.value.forEach(section => {
      observer.observe(section);
    });
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    
    // Désobserver toutes les sections lors de la destruction du composant
    if (observer) {
      sections.value.forEach(section => {
        observer.unobserve(section);
      });
    }
  });
  </script>
  
  