<template>
    <div id="default" class="h-screen">

      <AppHeader class="w-full flex items-center justify-around px-2 h-10 my-2 bg-black " />
      
      <div class="flex w-full mx-auto h-screen">
        <slot />
      </div>

      <AppFooter class=" z-50 bottom-0 flex w-full h-[70px] border-t border-t-gray-700 bg-black " />
      <!-- <div class=" fixed inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-200 z-[-1] opacity-50" /> -->
    </div>
  </template>
  