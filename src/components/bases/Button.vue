<template>
<div>
    <button class="px-4 py-2 border border-black rounded-[4px] duration-300 bg-black md:overflow-hidden  " >{{ content }}</button>
</div>
</template>
<script setup>
const props = defineProps({
    content:{
        type:String,
        required:true
    },
    color:{
        type:String,
    },

},);
</script>