<script setup lang="ts">
import Default from '~/layouts/default.vue';

const { $pwa } = useNuxtApp();
const onlineStatus = ref(true);
// window.addEventListener('online', () => {
//   onlineStatus.value = true;
// });

</script>

<template>
  <UContainer class="w-full h-screen">
  <!-- <div>
    <h1>Welcome to the homepage</h1>
  </div>
  <div>
    <AppAlert />
  </div> -->
  <!-- <default> -->
  <div id="IndexPage" class="w-full overflow-auto">
    <div class="m-10 overflow-hidden dark:bg-gray-700">
      <AppAlert class="dark:bg-gray-700" />
    </div>
  </div>
  <!-- </default> -->

  <!-- <ClientOnly> -->
      <div v-if="$pwa?.offlineReady || $pwa?.needRefresh">
        <div class="message">
          <span v-if="$pwa.offlineReady">
            App ready to work offline
          </span>
          <span v-else>
            New content available, click on reload button to update.
          </span>
        </div>
        <button v-if="$pwa.needRefresh" @click="$pwa.updateServiceWorker()">
          Reload
        </button>
        <button @click="$pwa.cancelPrompt()">
          Close
        </button>
      </div>
      <div v-else>
        <p>Not offlineready</p>
      </div>
      <div>
        <!-- is offline -->
        <p v-if="!!onlineStatus">You are online</p>
        <p v-else>You are offline</p>
      </div>
      <div class="w-full" v-if="$pwa?.isPWAInstalled === false">
        <UButton variant="outline" @click="$pwa?.install()">Install PWA</UButton>
      </div>
    </UContainer>
  <!-- </ClientOnly> -->
</template>
