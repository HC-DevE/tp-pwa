<script setup lang="ts">
import { useConnectionStore } from '~/store/connection';


const { $pwa } = useNuxtApp();

const connectionStore = useConnectionStore();
const onlineStatus = computed(() => connectionStore.online);

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
      <UButton v-if="$pwa.needRefresh" @click="$pwa.updateServiceWorker()">
        Reload
      </UButton>
      <UButton @click="$pwa.cancelPrompt()">
        Close
      </UButton>
    </div>
    <div v-else>
      <p>Not offlineready</p>
    </div>
    <div>
      <!-- is offline -->
      <div>
        <p v-if="onlineStatus">You are online</p>
        <p v-else>You are offline</p>
      </div>
    </div>
    <div class="w-full" v-if="$pwa?.isPWAInstalled === false">
      <UButton variant="outline" @click="$pwa?.install()">Install PWA</UButton>
    </div>
  </UContainer>
  <!-- </ClientOnly> -->
</template>
