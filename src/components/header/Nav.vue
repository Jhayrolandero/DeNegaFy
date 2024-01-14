<template>
    <nav class="flex gap-2 text-2xl max-sm:flex-col">
        <button class="transition hover:font-semibold duration-150" @click="scrollTo('home')">Home |</button>
        <button class="hover:font-semibold" @click="scrollTo('faq')">FAQ |</button>
        <button class="hover:font-semibold" @click="scrollTo('about')">About |</button>
        <button class="hover:font-semibold" @click="">Demo</button>
    </nav>
</template>

<script setup lang="ts">

const scrollTo = (id: string) => {
    const element = document.getElementById(id)!
    element.scrollIntoView({ behavior: 'smooth' });
}
</script>