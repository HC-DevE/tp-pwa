<!-- pwa chat test vue -->
<template>
  <div>
    <h1>Chat test</h1>
    <p>
      <button @click="sendMessage">Send message</button>
    </p>
    <p>
    <ul>
      <!-- <USkeleton v-if="isLoading" class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" /> -->
      <UAvatar chip-color="primary" chip-text="" chip-position="top-right" size="sm"
        src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
      <li v-for="message in messages" :key="message.id">
        {{ message.text }}
      </li>
    </ul>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// definePageMeta({
//   middleware: 'auth'
// })


const messages = ref([]);
const sendMessage = () => {
  messages.value.push({
    id: messages.value.length + 1,
    text: `Message ${messages.value.length + 1}`,
  });
};
//TODO: if messages is empty, show skeleton



</script>