<template>
    <div id="default" class="max-h-screen w-full relative">

      <AppHeader class="fixed z-50 top-0 flex w-full items-center justify-around px-2 h-15 border-b border-t-gray-700 bg-chathams-blue-800" />
      <!-- <AppHeader class="w-full flex items-center justify-around px-2 h-10 my-2 bg-chathams-blue-800 " /> -->
      
      <UContainer class="flex w-full h-screen mx-auto my-20 py-0 px-0">
        <slot />
      </UContainer>

      <AppFooter class="z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-chathams-blue-800 " />
      <!-- <div class=" fixed inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-200 z-[-1] opacity-50" /> -->
    </div>
  </template>
  