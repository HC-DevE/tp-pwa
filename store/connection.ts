import { usePicturesStore } from "./pictures.store";

export const useConnectionStore = defineStore('connectionStore', {
  state: () => ({
    online: true,
  }),
  actions: {
    initializeConnectionStatus() {
      this.online = navigator.onLine;

      window.addEventListener('online', this.handleOnline);
      window.addEventListener('offline', this.handleOffline);
    },
    handleOnline() {
      this.setOnlineStatus(true);
    },
    handleOffline() {
      this.setOnlineStatus(false);
    },
    setOnlineStatus(status: boolean) {
      this.online = status;
      if (status) {
        this.syncData();
      }
    },
    syncData() {
      // Sync photos
      const photoStore = usePicturesStore();
      photoStore.syncPhotos();
    },
  },
});