<!-- pwa camera functionnality -->
<script setup lang="ts">
import { usePicturesStore } from '~/store/pictures.store';

const isTakePicture = ref(true);

const sendNotification = () => {
    Notification.requestPermission().then((result) => {
        if (result === 'granted') {
            new Notification('Notification', {
                body: 'Vous avez pris une photo !',
            });
        }
    });
};


const video = ref<HTMLVideoElement | null>(null);

const startStream = async () => {
    isTakePicture.value = false;
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });
        const videoTracks = stream.getVideoTracks();
        const track = videoTracks[0];
        // alert(`Getting video from: ${track.label}`);
        if (video.value) {
            video.value.srcObject = stream;
        }
    } catch (error) {
        console.error('Error accessing media devices.', error);
    }
};

const stopStream = () => {
    if (video.value && video.value.srcObject) {
        const stream = video.value.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        video.value.srcObject = null;
    }
    isTakePicture.value = true;
};

const picStore = usePicturesStore();

const takePicture = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (video.value && context) {
        canvas.width = video.value.videoWidth;
        canvas.height = video.value.videoHeight;
        context.drawImage(video.value, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/png');
        if (navigator.onLine) {
            picStore.addPhoto(dataURL);
        } else {
            picStore.addUnsyncedPhoto(dataURL);
            alert('You are offline. The photo will be synced later.');
        }
    }
};




</script>

<template>
    <UContainer class="w-full h-screen">
        <UCard class="" :ui="{ base: '' }"> <!-- delete the divider from the container using ui props -->
            <template #header>
                <div class="flex flex-row items-center justify-between w-full">
                    <h1>Camera </h1>
                    <!-- <h1>Camera ({{ networkStore.isOnline ? "en-ligne" : "hors-ligne" }})</h1> -->
                    <div class="flex items-center justify-between w-auto gap-x-1 ">
                        <UButton variant="outline" color="green" @click="startStream" size="sm">Start stream</UButton>
                        <UButton variant="outline" color="red" @click="stopStream" size="sm">Stop stream</UButton>
                    </div>
                </div>
            </template>
            <UContainer class="flex items-center justify-center border-2"> <!-- adjust border and  -->
                <div>
                    <video ref="video" autoplay></video>
                </div>
            </UContainer>
            <template #footer>
                <div class="flex items-center justify-center">
                    <UButton icon="i-heroicons-camera" color="blue" @click="takePicture" size="sm"
                        :disabled="isTakePicture">
                        Take picture
                    </UButton>
                </div>
            </template>

        </UCard>
    </UContainer>
</template>