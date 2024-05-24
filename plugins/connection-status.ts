import { useConnectionStore } from "~/store/connection";

export default defineNuxtPlugin((nuxtApp) => {
  const connectionStore = useConnectionStore();

  connectionStore.initializeConnectionStatus();

  window.addEventListener('online', () => {
    connectionStore.setOnlineStatus(true);
  });

  window.addEventListener('offline', () => {
    connectionStore.setOnlineStatus(false);
  });
});
