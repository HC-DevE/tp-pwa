<template>
    <div>
        <h1>Get Location</h1>
        <p>
            <UButton @click="getLocation">Get location</UButton>
        </p>
        <!-- <UTextarea color="primary" variant="outline" placeholder="Search..." /> -->
        <!-- <p>
        <ul>
            <li v-for="location in locations" :key="location.id">
                {{ location.coords.latitude }}, {{ location.coords.longitude }}
            </li>
        </ul>

        </p> -->
        <div v-if="!!location">
            <MapboxMap map-id="{ID}" style="display: flex;" :options="{
                style: 'mapbox://styles/hc-xdev/clufnmhuj00fd01r21qrah976', // style URL
                center: [location.longitude, location.latitude], // starting position
                zoom: 7 // starting zoom
            }" />
        </div>

    </div>
</template>

<script setup  lang="ts">
import { ref } from 'vue';
const toast = useToast();

let location = ref<GeolocationCoordinates | null>();

const getLocation = async () => {
    console.log('before await', location)
    await navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log('position', position);
            location.value = position.coords;
        },
        (error) => {
            console.error('Error getting location', error);
            return null;
        }
    );
    toast.add({
        id: 'location',
        title: 'Location',
        description: 'Location has been retrieved',
        icon: 'i-heroicons-check-circle',
    });
};
onMounted(() => {
    getLocation();
});
console.log('location', location.value);



</script>