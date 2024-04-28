<!-- <template>
    <div class="flex-1 flew-wrap justify-between">
        <div v-if="photos" v-for="photo in photos" :key="index + 1" class="h-auto width-[calc(33%-10px)]">
            <img class="w-[100%] h-auto" :src="!!photo.url ? photo.url : photo"
                :alt="!!photo.title ? photo.title : `Photo ${photo.id}`">
            <h2>{{ !!photo.title ? photo.title : `Photo ${photo.id}` }}</h2>
            <UButton @click="deletePic(index)" color="red" size="sm">Delete</UButton>
        </div>
    </div>
</template>-->

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';

let pictures = ref([]);

onBeforeMount(() => {
    // import pictures from the local storage
    pictures.value = JSON.parse(localStorage.getItem('pictures')) || [];
})

const index = ref(0);

// // method to add a new picture into the array
// const addPic = (photo: string) => {
//     pictures.value.push(photo);
//     localStorage.setItem('pictures', JSON.stringify(pictures));
// }

// method to remove an existing picture from the array

const deletePic = (index: number) => {
    pictures.value.splice(index, 1);
    localStorage.setItem('pictures', JSON.stringify(pictures.value));
}

</script>

<template>

    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
            <!-- <img class="h-12 w-12" src="i-heroicons-photo" alt="ChitChat Logo"> -->
        </div>
        <div>
            <div class="text-xl font-medium text-black">Gallery</div>
            <p class="text-gray-500">Your beautiful photo gallery</p>
        </div>
    </div>

    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <TransitionGroup name="fade" tag="div" appear>
            <div v-for="picture in pictures" :key="index" class="group relative">
                <div
                    class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img :src="picture" alt="Photo"
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            Photo {{ index + 1 }}
                        </h3>
                    </div>
                    <button @click="deletePic(index)"
                        class="text-sm font-medium text-red-600 hover:text-red-500 z-10">Delete</button>
                </div>
            </div>
        </TransitionGroup>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>