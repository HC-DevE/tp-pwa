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
    <UCard>
      <template>
        <UContainer>
          <NuxtPage />
        </UContainer>

      </template>
    </UCard>
    <UNotifications />
  </NuxtLayout>
</template>
