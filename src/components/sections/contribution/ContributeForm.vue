<template lang="">
        <div class="flex justify-between max-md:flex-col max-md:gap-5">
            <form class="flex flex-col gap-2 items-end">
                <label for="activity">Activity: 
                    <input type="text" v-model="activity" id="activity" class="border-2 border-white bg-black px-6 py-2 rounded-md max-md:w-full">
                </label>
                <label for="category">Category:
                    <input type="text" v-model="category" id="category" class="border-2 border-white bg-black px-6 py-2 rounded-md max-md:w-full">
                </label>
                <label for="contributor">Contributor:
                    <input type="text" v-model="contributor" id="contributor" class="border-2 border-white bg-black px-6 py-2 rounded-md max-md:w-full">
                </label>
                <div class="flex text-black gap-2"><button class="bg-white px-4 py-2 rounded-md">Clear</button><button class="bg-white px-4 py-2 rounded-md">Submit</button></div>
            </form>
            <div class="text-md">
                <p>&#123;</p>
                <p>
                    "activity": "{{activity}}"
                </p>
                <p>
                    "category": "{{category}}"
                </p>
                <p>
                    "contributor": "{{contributor}}"
                </p>
                <p>&#125;</p>
            </div>
            </div>
</template>
<script setup>
import { ref } from 'vue'
const activity = ref('')
const category = ref('')
const contributor = ref('')
</script>
