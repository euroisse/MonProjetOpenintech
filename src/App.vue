<template>
  <div>
    <Header
      v-if="showHeader"
      :isAuthenticated="isAuthenticated"
      @logout="handleLogout"
      @updateAuth="updateAuth"
    />
    <main class="pt-20">
      <router-view @login="handleLogin" />
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import Header from './components/bases/Header.vue'

const route = useRoute()
const isAuthenticated = ref(false) 


const showHeader = computed(() => !route.meta.hideHeader)


const handleLogin = () => {
  isAuthenticated.value = true
  console.log("isAuthenticated mis à true dans le composant parent");
}

const updateAuth = (value) =>{
  isAuthenticated.value = value
}


const handleLogout = () => {
  isAuthenticated.value = false
  console.log('deconnexion reussie')
}
</script>