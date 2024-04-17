<template>
    <div class="photo-album">
        <div v-if="photos" v-for="photo in photos" :key="index + 1" class="photo-item">
            <img :src="!!photo.url ? photo.url : photo" :alt="!!photo.title ? photo.title : `Photo ${photo.id}`">
            <h2>{{ !!photo.title ? photo.title : `Photo ${photo.id}` }}</h2>
            <UButton @click="deletePic(index)" color="red" size="sm">Delete</UButton>
        </div>
        <!-- delete button -->
    </div>
</template>

<script setup  lang="ts">
let index = 0;
// import photos from the local storage
const photos = JSON.parse(localStorage.getItem('pictures')) || [];
console.log('photos', photos);

const deletePic = (index: number) => {
    photos.splice(index, 1);
    localStorage.setItem('pictures', JSON.stringify(photos));
}

</script>

<!-- <style scoped>
.photo-album {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.photo-item {
    width: calc(33.33% - 10px);
    margin-bottom: 10px;
}

.photo-item img {
    width: 100%;
    height: auto;
}
</style> -->