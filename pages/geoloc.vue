<template>
    <!-- <div class="flex-1 h-screen right-0"> -->
        <div v-if="!location" >
            <h1>Get Location</h1>
            <p>
                <UButton @click="getLocation">Get location</UButton>
            </p>
        </div>
        <div v-if="!!location">
            <MapboxMap class="fixed mt-20 top-0 right-0 justify-start w-[100px] h-[80vh]" map-id="{ID}" :options="{
                style: 'mapbox://styles/hc-xdev/clufnmhuj00fd01r21qrah976', // style URL
                center: [location.longitude, location.latitude], // starting position
                zoom: 18
            }">
                <MapboxDefaultMarker :marker-id="marker1" :lnglat="{ lng: location.longitude, lat: location.latitude }"
                    :options="{ draggable: true }">
                    <MapboxDefaultPopup popup-id="popup1" :lnglat="[0, 0]" :options="{
                        closeOnClick: false
                    }">
                        <h1 class="test">
                            Position actuelle
                        </h1>
                    </MapboxDefaultPopup>
                </MapboxDefaultMarker>
            </MapboxMap>
        </div>

    <!-- </div> -->
</template>

<script setup lang="ts">
import type { _cursor } from '#tailwind-config/theme';
import { ref } from 'vue';
const toast = useToast();


let location = ref<GeolocationCoordinates | null>();

const getLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
        (position) => {
            console.log('position', position);
            location.value = position.coords;
            return position.coords;
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
    // : toast.add({
    //     id: 'location',
    //     title: 'Location',
    //     description: 'Location has not been retrieved',
    //     icon: 'i-heroicons-x-circle',
    // });
};

const showAlert = () => {
    toast.add({
        id: 'alert',
        title: 'Alert',
        description: 'You clicked the button',
        icon: 'i-heroicons-information-circle',
    });
};

// onMounted(() => {
//     getLocation();
// });

</script>