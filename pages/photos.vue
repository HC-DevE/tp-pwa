<template>
    <div class="photo-album">
        <div v-for="photo in photos" :key="photo.id" class="photo-item">
            <img :src="photo.url" :alt="photo.title">
            <h2>{{ photo.title }}</h2>
        </div>
    </div>
</template>

<script setup  lang="ts">
// import photos from the local storage
const photos = JSON.parse(localStorage.getItem('photos')) || []
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