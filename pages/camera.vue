<!-- pwa camera functionnality -->
<script setup lang="ts">

import { ref } from 'vue';

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
const image = ref(null);
const pictures = ref([]);

const startStream = async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        });
        const videoTracks = stream.getVideoTracks();
        const track = videoTracks[0];
        alert(`Getting video from: ${track.label}`);
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
};

// const takePicture = async () => {
//     const canvas = document.createElement('canvas');
//     const video = document.querySelector('video');
//     const stream = await navigator.mediaDevices.getUserMedia({
//         video: {
//             minAspectRatio: 1.333,
//             minFrameRate: 30,
//             width: 1280,
//             heigth: 720,
//         },
//     });
//     video.srcObject = stream;
//     video.play();
//     video.addEventListener('loadeddata', () => {
//         canvas.width = video.videoWidth;
//         canvas.height = video.videoHeight;
//         canvas.getContext('2d')!.drawImage(video, 0, 0);
//         image.value = canvas.toDataURL('image/png');
//         stream.getTracks().forEach((track) => track.stop());
//     });
// };


// // take picture
const takePicture = () => {
    if (video.value) {
        const canvas = document.createElement('canvas');
        canvas.width = video.value.videoWidth;
        canvas.height = video.value.videoHeight;
        canvas.getContext('2d')?.drawImage(video.value, 0, 0);
        const data = canvas.toDataURL('image/png');
        image.value = data;
        addPictureToLocalStorage(data);
        sendNotification();
    }
};

const addPictureToLocalStorage = (data: string) => {
    const pictures = JSON.parse(localStorage.getItem('pictures')) || [];
    pictures.push(data);
    localStorage.setItem('pictures', JSON.stringify(pictures));
};

</script>

<template>
    <div>
        <h1>Camera test</h1>
        <p>
            <UButton color="blue" @click="takePicture" size="sm">Take picture</UButton>
        </p>
        <p>
            <UButton variant="link" color="green" @click="startStream" size="sm">Start stream</UButton>
            <UButton variant="link" color="red" @click="stopStream" size="sm">Stop stream</UButton>
        </p>
        <p>
            <video ref="video" autoplay></video>
        </p>
        <p>
            <img v-if="image" :src="image" alt="Picture" />
        </p>

    </div>
</template>