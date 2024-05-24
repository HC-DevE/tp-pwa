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

onBeforeMount(
  () => {
    window.addEventListener('online', () => {
      const photoStore = usePicturesStore();
      photoStore.syncPhotos();
      photoStore.showNotification('You are back online. Syncing photos...');
    });

    window.addEventListener('offline', () => {
      const photoStore = usePicturesStore();
      photoStore.showNotification('You are offline. Photos will be synced later.');
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