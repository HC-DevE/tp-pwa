<template>
    <div class="p-4 text-center">
      <h1 class="text-lg font-bold">Vibration Test</h1>
      <button @click="triggerVibration" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Vibrate</button>
    </div>
  </template>
  
  <script setup>
  function triggerVibration() {
    window.navigator.vibrate(200);
  }
  </script>