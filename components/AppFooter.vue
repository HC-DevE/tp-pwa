<script setup lang="ts">
const links = [{
    label: 'Nuxt UI',
    to: 'https://ui.nuxt.com/'
}, {
    label: 'Nuxt Docs',
    to: 'https://nuxt.com'
}, {
    label: 'Nuxt Studio',
    to: 'https://nuxt.studio'
}]
</script>

<template>
    <div>
        <h1>This is Auto imported footer</h1>
     <!-- UFooter component only for pro version ! -->
    <!-- <UFooter :links="links">
        <template #left>
            Copyright © {{ new Date().getFullYear() }}
        </template>

        <template #right>
            <UButton icon="i-simple-icons-x" color="gray" variant="ghost" to="https://x.com/nuxt_js" target="_blank" />
            <UButton icon="i-simple-icons-linkedin" color="gray" variant="ghost" to="https://discord.com/invite/ps2h6QT"
                target="_blank" />
            <UButton icon="i-simple-icons-facebook" color="gray" variant="ghost" to="https://github.com/nuxt/nuxt"
                target="_blank" />
        </template>
    </UFooter>    -->
    </div>
    
</template>

