<template>
    <div>
        <h1>Geolocation test</h1>
        <p>
            <button @click="getLocation">Get location</button>
        </p>
        <p>
        <ul>
            <li v-for="location in locations" :key="location.id">
                {{ location.coords.latitude }}, {{ location.coords.longitude }}
            </li>
        </ul>
        
        </p>
    </div>
</template>

<script setup  lang="ts">
import { ref } from 'vue';

const locations = ref([]);
const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        locations.value.push({
            id: locations.value.length + 1,
            coords: position.coords,
        });
    });
};
</script>