<!-- <template>
  <div>
   <VitePwaManifest /> 
    <NuxtPwaManifest />
    <NuxtPage />
  </div>
</template> -->


<template>
  <NuxtLayout>
    <VitePwaManifest />
    <!-- <NuxtPwaManifest /> -->
    <UCard>
      <!-- <template #header>
        <UHorizontalNavigation :links="links" class="border-b border-gray-300 dark:border-gray-2000" />
      </template> -->

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


