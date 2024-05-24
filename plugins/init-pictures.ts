import { usePicturesStore } from "~/store/pictures.store";

export default defineNuxtPlugin((nuxtApp) => {
  const picturesStore = usePicturesStore();

  if (process.client) {
    picturesStore.loadPhotos();
  }
});
