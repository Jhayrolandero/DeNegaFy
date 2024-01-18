<template lang="">
    <div>
        <input type="text" :value="activity" class="text-white bg-black border-2 border-white px-3 py-2">
        <button @click="getActivity" class="text-white border-2 border-white px-3 py-2">DeNegaFy</button>
    </div>
</template>
<script setup>
import axios from 'axios'
import { ref } from 'vue'

const activity = ref('')

async function getActivity() {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/activity');
        activity.value = response.data.activityTitle
    } catch (error) {
        console.error(error);
    }
}
</script>
