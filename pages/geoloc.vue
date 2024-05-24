<!-- <template>
    <!-- <UContainer class="flex flex-row w-full h-screen">
    <UCard class="flex w-full flex-col h-screen" :ui="{ base: '' }">
        <template #header>
            <h1>Geolocation</h1>
            <div>
                <UButton v-if="!location" variant="outline" @click="getLocation" color="chathams-blue">Get current
                    position</UButton>
            </div>
        </template>
        <!-- <div v-if="!!location">
        <UContainer v-if="!!location" class="flex justify-center align-top items-start" :ui="{ base: '' }">
            <UCard :ui="{ base: '' }">
                <template #header>
                    <div>
                        <h1>Get your actual location</h1>
                    </div>
                </template>
                <MapboxMap map-id="{ID}" :options="{
                    style: 'mapbox://styles/hc-xdev/clufnmhuj00fd01r21qrah976', // style URL
                    center: [location.longitude, location.latitude], // starting position
                    zoom: 18
                }">
                    <MapboxDefaultMarker :marker-id="marker1"
                        :lnglat="{ lng: location.longitude, lat: location.latitude }" :options="{ draggable: false }">
                        <MapboxDefaultPopup popup-id="popup1" :lnglat="[0, 0]" :options="{
                            closeOnClick: false
                        }">
                            <h1 class="dark:text-white">
                                Position actuelle
                            </h1>
                        </MapboxDefaultPopup>
                    </MapboxDefaultMarker>
                </MapboxMap>
                <template #footer>
                    <div>
                        This feature requires to be online
                    </div>
                </template>
            </UCard>
        </UContainer>
        <UContainer v-else>
            No location detected.
        </UContainer>
        <!-- </div>
        <template #footer>
            <div>
                Current Position: {{ !!location ? `longitude: ${location.longitude}, latitude: ${location.latitude}` :
                    'unknown' }}
            </div>
        </template>
    </UCard>
</template> -->

<template>
    <UCard class="flex flex-col w-full h-screen" :ui="{ base: '' }">
      <template #header>
        <h1 class="text-xl font-bold mb-2">Geolocation</h1>
        <div>
          <UButton v-if="!location" variant="outline" @click="getLocation" color="chathams-blue">
            Get current position
          </UButton>
        </div>
      </template>
      
      <UContainer v-if="location" class="flex-grow flex justify-start items-start overflow-hidden">
        <UCard :ui="{ base: '' }" class="w-full h-full pl-0">
          <!-- <template #header>
            <div>
              <h1 class="text-lg font-semibold">Your Current Location</h1>
            </div>
          </template> -->
          
          <div class="flex-grow">
            <MapboxMap
              :map-id="'your-map-id'"
              :options="{
                style: 'mapbox://styles/hc-xdev/clufnmhuj00fd01r21qrah976',
                center: [location.longitude, location.latitude],
                zoom: 18
              }"
              class="w-full h-full"
            >
              <MapboxDefaultMarker
                :marker-id="'marker1'"
                :lnglat="{ lng: location.longitude, lat: location.latitude }"
                :options="{ draggable: false }"
              >
                <MapboxDefaultPopup
                  popup-id="popup1"
                  :lnglat="[location.longitude, location.latitude]"
                  :options="{ closeOnClick: false }"
                >
                  <h1 class="dark:text-white">
                    Current Position
                  </h1>
                </MapboxDefaultPopup>
              </MapboxDefaultMarker>
            </MapboxMap>
          </div>
          
          <!-- <template #footer>
            <div class="text-center text-gray-500">
              This feature requires an online connection
            </div>
          </template> -->
        </UCard>
      </UContainer>
      
      <UContainer v-else class="flex justify-center items-center flex-grow">
        <div class="text-center text-gray-500">No location detected.</div>
      </UContainer>
      
      <template #footer>
        <div class="p-2 bg-gray-100 text-center">
          Current Position: {{ location ? `Longitude: ${location.longitude}, Latitude: ${location.latitude}` : 'unknown' }}
        </div>
      </template>
    </UCard>
  </template>

<script setup lang="ts">

const toast = useToast();


let location = ref<GeolocationCoordinates | null>();

const getLocation = async () => {
    await navigator.geolocation.getCurrentPosition(
        (position) => {
            location.value = position.coords;
            // return position.coords;
        },
        (error) => {
            console.error('Error getting location', error);
            return null;
        }
    );
    location ? showAlert(alertTypeEnum.success) : showAlert(alertTypeEnum.error);
};

const showAlert = (type: alertTypeEnum) => {
    type === alertTypeEnum.success ?
        toast.add({
            id: 'location',
            title: 'Location',
            description: 'Location has been retrieved',
            icon: 'i-heroicons-check-circle',
        })
        :
        toast.add({
            id: 'location',
            title: 'Location',
            description: 'Location has not been retrieved',
            icon: 'i-heroicons-x-circle',
        });
};
enum alertTypeEnum {
    success = 'success',
    error = 'error'
}

// onMounted(() => {
//     getLocation();
// });

</script>