<template>
    <button @click="scrollTo('home')" class="bg-transparent text-zinc-300">Back to Top</button>
</template>
<script setup lang="ts">

const scrollTo = (id: string) => {
    const element = document.getElementById(id)!
    element.scrollIntoView({ behavior: 'smooth' });
}
</script>