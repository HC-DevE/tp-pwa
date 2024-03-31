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
}, {
  label: 'About',
  icon: 'i-simple-icon-info',
  to: '/about'
}]
</script>


<template>
  <NuxtLayout>
    <VitePwaManifest />
    <!-- <NuxtPwaManifest /> -->
    <UCard>
      <template #header>
        <UHorizontalNavigation :links="links" class="border-b border-gray-300 dark:border-gray-2000" />
      </template>

      <template #default>
        <UContainer>
          <NuxtPage />
        </UContainer>
      </template>
      
      
      <template #footer>
        <Placeholder class="h-8" />
        <!-- <AppFooter /> -->
      </template>
    </UCard>
    <UNotifications />
  </NuxtLayout>
</template>


