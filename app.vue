<!-- <template>
  <div>
   <VitePwaManifest /> 
    <NuxtPwaManifest />
    <NuxtPage />
  </div>
</template> -->
<script setup lang="ts">
const route = useRoute()

const links = [{
  label: 'Profile',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  },
  to: '/',
  badge: 100
}, {
  label: 'Géolocalisation',
  icon: 'i-heroicons-map-pin',
  to: '/geoloc'
}, {
  label: 'Caméra',
  icon: 'i-heroicons-camera',
  to: '/camera'
}, {
  label: 'chat',
  icon: 'i-heroicons-chat-bubble-left-right',
  to: '/chat'
}, {
  label: 'Stream',
  icon: 'i-heroicons-video-camera',
  to: '/stream'
}]
</script>


<template>
  <!-- <VitePwaManifest /> -->
  <NuxtPwaManifest />
  <div>
    <UContainer>
      <UHorizontalNavigation :links="links" class="border-b border-gray-300 dark:border-gray-2000" />
      <NuxtPage />
    </UContainer>

    <UNotifications />
  </div>
  <AppFooter />
</template>


