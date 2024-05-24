<template>
    <UCard class="flex h-screen">
        <!-- sidebar panel -->
        <UContainer
            class="p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4 dark:bg-gray-900 dark:text-white dark:border-gray-700 ">
            <div class="flex-shrink-0">
                <!-- <img class="h-12 w-12" src="i-heroicons-photo" alt="ChitChat Logo"> -->
                <NuxtImg src="i-heroicons-gallery" />
            </div>
            <div>
                <div class="text-xl font-medium dark:text-white">Gallery</div>
                <p class=" text-gray-500 dark:text-white">Your beautiful photo gallery</p>
            </div>
        </UContainer>
        <!-- picture gallery area -->
        <UContainer v-if="!!store.images && store.images.length > 0" class="grid grid-cols-3 gap-4 dark:bg-gray-900 overflow-y-auto">
            <UCard v-for="(picture, index) in store.images" :key="index"
                class="relative overflow-hidden justify-center dark:bg-gray-900">
                <template #header>
                    Photo {{ index + 1 }}
                </template>
                <template #default>
                    <NuxtImg :src="picture" width="200" height="200"
                        class="w-full h-auto rounded-lg shadow-md dark:bg-gray-900" alt="Photo" />
                </template>
                <template #footer>
                    <!-- download -->
                    <UButton label="Download" icon="i-heroicons-arrow-down-tray" size="sm"
                        @click="downloadPic(picture, index)" variant="ghost"
                        class="flex w-full justify-center h-10 text-green-600 hover:text-green-500 z-10 dark:bg-gray-900" />
                    <UButton label="Delete" icon="i-heroicons-trash" size="sm" @click="deletePic(index)" variant="ghost"
                        class="flex w-full justify-center h-10 text-red-600 hover:text-red-500 z-10 dark:bg-gray-900" />
                </template>
            </UCard>
        </UContainer>
        <UContainer v-else class="flex justify-center items-center h-full">
            <h1 class="text-2xl dark:text-white">No picture available</h1>
        </UContainer>
    </UCard>
</template>

<script setup lang="ts">
import { usePicturesStore } from '~/store/pictures.store';

const { $pwa } = useNuxtApp();

// const images = useState('pictures', () => {
//   const storedImages = localStorage.getItem('pictures');
//   return storedImages ? JSON.parse(storedImages) : [];
// });

// let pictures = ref<string[]>([]);

// onBeforeMount(() => {
//     loadPictures();
// })

// function loadPictures() {
//     const storedImages = localStorage.getItem('pictures');
//     if (storedImages) {
//         images.value = JSON.parse(storedImages);
//     }
// }

// onMounted(() => {
//     loadPictures();
//     window.addEventListener('loadPictures', loadPictures);
// });

// const deletePic = (index: number) => {
//     images.value.splice(index, 1);
//     localStorage.setItem('pictures', JSON.stringify(images.value));
// }

console.log($pwa);


const store = usePicturesStore();

onBeforeMount(() => {
    store.loadPhotos();
});

onMounted(() => {
    store.loadPhotos();
    window.addEventListener('loadPictures', () => {
        store.loadPhotos();
    });
});

function deletePic(index: number) {
    store.deletePhoto(index);
    store.loadPhotos();
}


function downloadPic(image, index) {
    const a = document.createElement('a');
    a.href = image;
    a.download = `photo-${index}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


</script>



<!-- <template>

    <UContainer>
        <UContainer
            class="p-6 max-w-sm mx-auto rounded-xl shadow-md flex items-center space-x-4 dark:bg-gray-900 dark:text-white dark:border-gray-700 ">
            <div class="flex-shrink-0">
                <img class="h-12 w-12" src="i-heroicons-photo" alt="ChitChat Logo">
            </div>
            <div>
                <div class="text-xl font-medium dark:text-white">Gallery</div>
                <p class=" text-gray-500 dark:text-white">Your beautiful photo gallery</p>
            </div>
        </UContainer>

        <UContainer class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <TransitionGroup name="fade" tag="div" appear class="flex flex-wrap flex-row gap-2 mt-2">
                <UCard v-for="picture in pictures" :key="index" class="group relative justify-between w-full">
                    <div
                        class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img :src="!!picture ? picture : ''" alt="Photo"
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
                </UCard>
            </TransitionGroup>
        </UContainer>
    </UContainer>
</template> -->

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