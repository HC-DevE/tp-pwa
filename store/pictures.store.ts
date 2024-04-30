// stores/images.js
import { defineStore } from 'pinia';

export const useImagesStore = defineStore('images', {
  state: () => ({
    images: [''],
  }),
  actions: {
    loadImages() {
      const storedImages = localStorage.getItem('pictures');
      this.images = storedImages ? JSON.parse(storedImages) : [];
    },
    addImage(image: string) {
      this.images.push(image);
      localStorage.setItem('pictures', JSON.stringify(this.images));
    },
    removeImage(index: number) {
      this.images.splice(index, 1);
      localStorage.setItem('pictures', JSON.stringify(this.images));
    }
  }
});
