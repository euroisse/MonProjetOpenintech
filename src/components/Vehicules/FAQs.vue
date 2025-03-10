<template>
  <section class="bg-[#F9FAFB] mx-auto flex flex-col items-center px-5">
    <h2 class="title font-roboto text-center mb-6">Questions Fréquentes</h2>

    <div class="max-w-[700px] w-full flex flex-col gap-4">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item bg-white rounded-lg shadow-md p-10"
      >
        <div
          class="flex justify-between items-center cursor-pointer"
          @click="toggleFAQ(index)"
        >
          <h3 class="font-roboto">{{ faq.question }}</h3>
          <span :class="{ 'rotate': openIndex === index }">
            <i class="ri-arrow-down-s-line text-xl text-gray-600"></i>
          </span>
        </div>

        <transition name="fade">
          <div v-if="openIndex === index" class="answer mt-3">
            <p class="font-roboto">{{ faq.answer }}</p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  faqs: {
    type: Array,
    required: true,
  },
});

const openIndex = ref(false);

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? false : index;
  console.log(openIndex)
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 700;
  color: #111827;
}
h3 {
  font-size: 18px;
  font-weight: 500;
  color: #111827;
}
p {
  font-size: 16px;
  font-weight: 400;
  color: #4B5563;
}
.faq-item {
  transition: all 0.3s ease-in-out;
}
.faq-item:hover {
  background: #f8fafc;
}
.rotate {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
