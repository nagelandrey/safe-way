<script setup lang="ts">
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
</script>

<template>
  <div class="wrapper">
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
}
</style>