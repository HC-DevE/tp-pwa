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
    <UCard class="flex-1 h-screen">
      <template>
        <UContainer>
          <NuxtPage />
        </UContainer>
      </template>
    </UCard>
    <UNotifications />
  </NuxtLayout>
</template>


