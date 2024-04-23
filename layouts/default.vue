<template>
    <div id="default" class="h-screen">
      <AppHeader class="w-full flex items-center justify-center px-2 h-10 my-2 " />
      <slot />
      <AppFooter />
      <!-- <div class=" fixed inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-200 z-[-1] opacity-50" /> -->
    </div>
  </template>
  