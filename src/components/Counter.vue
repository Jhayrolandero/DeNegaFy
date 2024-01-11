<template >
    <div>
        Count: {{ counter }}
        <button @click="counter++">Increment</button>
    </div>
</template>

<script setup>

import { ref } from 'vue'

const counter = ref(0)
</script>
