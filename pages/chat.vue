<!-- pwa chat test vue -->
<template>
  <div>
    <h1>Chat test</h1>
    <p>
      <button @click="sendMessage">Send message</button>
    </p>
    <p>
      <ul>
        <li v-for="message in messages" :key="message.id">
          {{ message.text }}
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const messages = ref([]);
    const sendMessage = () => {
      messages.value.push({
        id: messages.value.length + 1,
        text: `Message ${messages.value.length + 1}`,
      });
    };
    return { messages, sendMessage };
  },
};
</script>