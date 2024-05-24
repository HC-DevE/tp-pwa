<!-- <template>
  <div>
   <VitePwaManifest /> 
    <NuxtPwaManifest />
    <NuxtPage />
  </div>
</template> -->


<template>
  <NuxtLayout>
    <!-- <VitePwaManifest /> -->
    <NuxtPwaManifest />
    <!-- <UCard> -->
    <!-- <template> -->
    <!-- <UContainer> -->
    <NuxtPage />
    <!-- </UContainer> -->
    <!-- </template> -->
    <!-- </UCard> -->
    <UNotifications />
  </NuxtLayout>
</template>


<script lang="ts" setup>
import { useConnectionStore } from './store/connection';
import { usePicturesStore } from './store/pictures.store';

const photoStore = usePicturesStore();

onBeforeMount(
  () => {
    window.addEventListener('online', () => {
      photoStore.syncPhotos();
      if(photoStore.unsyncedPictures.length > 0){
        photoStore.showNotification('You are online. Syncing your photos...');
      }
    });
    
    window.addEventListener('offline', () => {
      if(photoStore.unsyncedPictures.length > 0){
      photoStore.showNotification('You are offline. Photos will be synced later.');
      }
    });

    const connectionStore = useConnectionStore();

    window.addEventListener('online', () => {
      connectionStore.setOnlineStatus(true);
    });

    window.addEventListener('offline', () => {
      connectionStore.setOnlineStatus(false);
    });
  }
)

</script>