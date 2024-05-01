<template>
    <div class="text-center py-4">
        <button @click="receiveOTP"
            class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">Receive OTP</button>
        <p v-if="otpCode">Received OTP: {{ otpCode }}</p>
    </div>
</template>

<script setup lang="ts">

const otpCode = ref('');

async function receiveOTP() {
    try {
        const otp = await navigator.credentials.get({ otp: { transport: ['sms'] } });
        otpCode.value = otp.code;
        //   vibrate if the code is received
        window.navigator.vibrate([200, 100, 200]);
        // navigator.vibrate([200, 100, 200]);
    } catch (error) {
        console.error('Failed to receive OTP:', error);
    }
}
</script>