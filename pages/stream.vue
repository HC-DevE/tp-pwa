<!-- pwa stream test -->
<template>
  <div>
    <h1>Stream test</h1>
    <p>
      <!-- <button @click="startStream">Start stream</button>
      <button @click="stopStream">Stop stream</button> -->
    </p>
    <p>
      <video ref="video" autoplay></video>
    </p>
  </div>
</template>

<!-- <script>
import { MediaDevices } from '../../types'
const constraints = window.constraints = {
  audio: false,
  video: true
} as MediaDevices.MediaStreamConstraints;
export default {
  setup() {
    const video = ref<HTMLVideoElement | null>(null)
    const startStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        video.value!.srcObject = stream
      } catch (error) {
        console.error('Error accessing media devices.', error)
      }
    }
    const stopStream = () => {
      const stream = video.value!.srcObject as MediaStream
      const tracks = stream.getTracks()
      tracks.forEach(track => track.stop())
      video.value!.srcObject = null
    }
    return { video, startStream, stopStream }
  }
}
</script> -->