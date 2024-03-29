// // useWebCam.ts pwa
// import { ref, onBeforeUnmount } from 'vue';

// export function useWebCam() {
//   const webcam = useWebcam({ video: true });
//   const video = ref<HTMLVideoElement | null>(null);

//   onBeforeUnmount(() => {
//     webcam.stop();
//   });

//   return { video, webcam };
// }