<script setup lang="ts">
const route = useRoute();

// get battery level
let batteryLevel = ref(0);
let batteryCharging = ref(false);

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
      links.value[1][1].badge = batteryLevel.value;
    }
  });
});

  const getBatteryLevel = () => {
    const batteryValue = batteryLevel.value ? +batteryLevel.value : 0;
    return `${batteryValue.toString()} %`;
  };


const getBatteryLevelIcon = () => {
  return batteryLevel.value === 100 ? 'i-heroicons-battery-100' : batteryLevel.value >= 50 ? 'i-heroicons-battery-50' : (batteryLevel.value && batteryLevel.value < 50) ? 'i-heroicons-battery-0' : 'i-heroicons-battery-0';
};


const links = ref([[{
  label: 'Home',
  to: '/',
}, {
  label: 'Géolocalisation',
  icon: 'i-heroicons-map-pin',
  to: '/geoloc'
}, {
  label: 'Caméra',
  icon: 'i-heroicons-camera',
  to: '/camera'
}, {
  label: 'Galerie',
  icon: 'i-heroicons-photo',
  to: '/gallery'
}, {
  label: 'chat',
  icon: 'i-heroicons-chat-bubble-left-right',
  to: '/chat'
}, {
  label: 'Stream',
  icon: 'i-heroicons-video-camera',
  to: '/stream'
}, {
  label: 'About',
  icon: 'i-heroicons-information-circle',
  to: '/about'
}], [
  {
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    },
    to: '/me',
    badge: 0
  },
  {
    // battery level
    label: '',
    icon: getBatteryLevelIcon(),
    badge: getBatteryLevel()
  },
]]);

</script>

<template>
  <div class="w-full mx-auto my-0">
    <UHorizontalNavigation :links="links" color="black" class="my-0 py-0 justify-around" />
    <!-- <UVerticalNavigation :links="links" class="border-b border-gray-300 dark:border-gray-2000" /> -->

    <!-- battery level -->
    <!-- <p>Battery level: {{ batteryLevel }}%</p>
    <p v-if="!!batteryCharging">Battery is charging</p>-->
  </div> 
</template>