<script setup lang="ts">
// If you want to use it in setup, import from the nuxtApp.
const { $pwa } = useNuxtApp()
const toast = useToast()
if ($pwa.offlineReady)
  toast.success('App ready to work offline')
</script>

<template>
  <div>
    <h1>Welcome to the homepage</h1>

    <AppAlert />

    <div v-show="$pwa.needRefresh">
      <span>
        New content available, click on reload button to update.
      </span>

      <button @click="$pwa.updateServiceWorker()">
        Reload
      </button>
    </div>
  </div>
</template> 


