<script setup>
import { RouterView } from "vue-router";
import Header from "./components/bases/Header.vue";
</script>

<template>
  <Header class="bg-white w-full top-0 left-0 z-10 shadow-sm" />
  <main class="pt-20">
    <RouterView />
  </main>
</template>
