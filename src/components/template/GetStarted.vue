<template>
    <button class="px-7 py-5 bg-zinc-300 rounded text-black text-lg font-medium" @click="scrollTo('demo')">Get Started <i
            class="fa-solid fa-arrow-right"></i></button>
</template>
<script setup lang="ts">

const scrollTo = (id: string) => {
    const element = document.getElementById(id)!
    element.scrollIntoView({ behavior: 'smooth' });
}
</script>