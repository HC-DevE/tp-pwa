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
      try {
        this.images.push(newPhoto);
        localStorage.setItem("pictures", JSON.stringify(this.images));
        this.syncPhotos();
      } catch (error) {
        if (error instanceof DOMException && error.name === 'QuotaExceededError') {
          this.showNotification('Quota of 5MB exceeded. Cannot save more photos.');
        } else {
          console.error('Error adding photo:', error);
        }
      }
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
      if (navigator.onLine && this.unsyncedPictures.length > 0) {
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
    async showNotification(message: string) {
      if (Notification.permission === "granted") {
        // const registration = await navigator.serviceWorker.ready;
        new Notification(message);
        // await registration.showNotification("Nouvelle photo", {
        //   body: message,
        // });
      }
    },
    // showNotification2(textMessage: string) {
    //   if ("Notification" in window) {
    //     Notification.requestPermission().then(async (result) => {
    //       if (result === "granted") {
    //         if ('serviceWorker' in navigator && 'Notification' in window) {
    //           try {
    //             const registration = await navigator.serviceWorker.ready;
    //             await registration.showNotification('Nouvelle photo', {
    //               body: textMessage,
    //               icon: '/path/to/icon.png', // Remplacez par le chemin de votre icône de notification
    //             });
    //           } catch (error) {
    //             console.error('Failed to display notification:', error);
    //           }
    //         } else {
    //           console.warn('Notifications not supported');
    //         }
    //       } else {
    //         throw new Error("Permission denied")
    //       }
    //     })
    //   } else {
    //     throw new Error("Notification not supported")
    //   }
    // }
  },
});
