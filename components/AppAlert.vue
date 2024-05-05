<template>
  <UContainer class="flex flex-row">
    <UAlert :description="props?.description ?? 'This is an auto-imported component!'"
      :avatar="{ src: props?.avatar?.src ?? 'https://avatars.githubusercontent.com/u/739984?v=4' }"
      :title="props.title ?? 'Alert title'" />
    <UCard class="flex flex-1 w-full">
      <slot />
    </UCard>
  </UContainer>
</template>

<script setup lang="ts">

const props = defineProps<{
  title?: string;
  description?: string;
  avatar?: {
    src: string;
  };
}>();

</script>