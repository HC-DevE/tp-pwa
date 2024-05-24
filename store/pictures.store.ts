// stores/images.js
import { defineStore } from "pinia";

export const usePicturesStore = defineStore("images", {
  state: () => ({
    images: JSON.parse(localStorage.getItem("pictures") ?? "[]"),
    unsyncedPictures: JSON.parse(
      localStorage.getItem("unsyncedPictures") || "[]"
    ),
  }),
  actions: {
    addPhoto(newPhoto: string) {
      this.images.push(newPhoto);
      localStorage.setItem("pictures", JSON.stringify(this.images));
      this.syncPhotos();
    },
    deletePhoto(index: number) {
      this.images.splice(index, 1);
      localStorage.setItem("pictures", JSON.stringify(this.images));
    },
    loadPhotos() {
      this.images = JSON.parse(localStorage.getItem("pictures") || "[]");
    },
    addUnsyncedPhoto(photo: string) {
      this.unsyncedPictures.push(photo);
      localStorage.setItem(
        "unsyncedPictures",
        JSON.stringify(this.unsyncedPictures)
      );
    },
    syncPhotos() {
      if (navigator.onLine && this.unsyncedPictures) {
        // Synchronize images
        console.log("Synchronizing images...");
        // add the unsynced images to the images and remove t after
        this.images = this.images.concat(this.unsyncedPictures);
        localStorage.setItem("pictures", JSON.stringify(this.images));
        this.unsyncedPictures = [];
        localStorage.removeItem("unsyncedPictures");
        // Afficher une notification de succès
        this.showNotification("Photos synchronized successfully.");
      }
    },
    showNotification(message: string) {
      if (Notification.permission === "granted") {
        new Notification(message);
      }
    },
  },
});
