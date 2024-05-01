<template>
    <div>
        <input type="text" v-model="phoneNumber" placeholder="Enter phone number" />
        <button @click="makeCall">Call</button>
    </div>
</template>

<script setup lang="ts">
const phoneNumber = ref('+33724536789');

const makeCall = () => {
    window.location.href = `tel:${phoneNumber.value}`;
};

</script>