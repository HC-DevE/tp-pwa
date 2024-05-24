<script setup lang="ts">
import { useConnectionStore } from '~/store/connection';


const { $pwa } = useNuxtApp();

const connectionStore = useConnectionStore();
const onlineStatus = computed(() => connectionStore.online);
let batteryLevel = ref(0);
let batteryCharging = ref(false);

const getBatteryLevel = () => {
  const batteryValue = batteryLevel.value ? +batteryLevel.value : 0;
  return `${batteryValue.toString()} %`;
};

const getBatteryLevelIcon = () => {
  return batteryLevel.value === 100 ? 'i-heroicons-battery-100' : batteryLevel.value >= 50 ? 'i-heroicons-battery-50' : (batteryLevel.value && batteryLevel.value < 50) ? 'i-heroicons-battery-0' : 'i-heroicons-battery-0';
};

onBeforeMount(() => {
  navigator.getBattery().then((battery) => {
    updateAllBatteryInfo();

    function updateAllBatteryInfo() {
      updateChargeInfo();
      updateLevelInfo();
    }

    battery.addEventListener("chargingchange", () => {
      updateChargeInfo();
    });
    function updateChargeInfo() {
      batteryCharging.value = battery.charging ? true : false;
    }

    battery.addEventListener("levelchange", () => {
      updateLevelInfo();
    });
    function updateLevelInfo() {
      batteryLevel.value = battery.level * 100;
    }
  });
});


</script>

<template>
  <UContainer class="w-full h-screen flex flex-col justify-start">
    <!-- <div>
    <h1>Welcome to the homepage</h1>
  </div>
  <div>
    <AppAlert />
  </div> -->
    <!-- <default> -->
    <!-- <div id="IndexPage" class="w-full overflow-auto">
      <div class="m-10 overflow-hidden dark:bg-gray-700">
        <AppAlert class="dark:bg-gray-700" />
      </div>
    </div> -->
    <!-- </default> -->

    <!-- <ClientOnly> -->
    <div v-if="$pwa?.offlineReady || $pwa?.needRefresh">
      <div class="message">
        <span class="text-green-500" v-if="$pwa.offlineReady">
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
      <p>PWA not offlineready</p>
    </div>
    <div>
      <!-- is offline -->
      <div>
        <p v-if="onlineStatus" class="text-green-500">You are online</p>
        <p v-else class="text-red-500">You are offline</p>
        <!-- battery level -->
        <div>
          <p>
          <!-- <p class="text-blue-500"> -->
            Battery level: {{ getBatteryLevel() }}
          </p>
          <!-- battery charging icon -->
        </div>
      </div>
    </div>
    <div class="w-full" v-if="$pwa?.isPWAInstalled === false">
      <UButton variant="outline" @click="$pwa?.install()">Install PWA</UButton>
    </div>
  </UContainer>
  <!-- </ClientOnly> -->
</template>
