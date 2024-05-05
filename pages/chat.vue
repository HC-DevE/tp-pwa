<!-- <template>
  <div>
    <input v-model="message" @keyup.enter="sendMessage">
    <button @click="sendMessage">Send</button>
    <ul>
      <li v-for="msg in messages" :key="msg">{{ msg }}</li>
    </ul>
  </div>
</template> -->

<!-- <script setup>
import { ref, onMounted } from 'vue';

// const socket = useNuxtApp().$socket;
const message = ref('');
const messages = ref([]);

const sendMessage = () => {
  if (message.value.trim()) {
    // socket.emit('chat message', message.value);
    message.value = '';
  }
};

onMounted(() => {
  // socket.on('chat message', (msg) => {
    messages.value.push(msg);
  // });
});
</script> -->












<template>
  <div>
    <h1>Chat test</h1>
    <p>
      <button @click="sendMessage">Send message</button>
    </p>
    <p>
    <ul>
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