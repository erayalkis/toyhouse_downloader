<template>
  <div
    class="flex w-full text-center bg-toyhouse-dark text-toyhouse-primary-400 p-2 pl-3 text-xl"
  >
    <a class="text-white header" href="https://toyhou.se" target="_blank"
      >TOYHOU.DL</a
    >

    <div class="ml-auto flex items-center">
      <h1>App Status:</h1>
      <h1 v-if="status === 1" class="ml-2 text-green-600">Online</h1>
      <h1 v-else-if="status === 0" class="ml-2 text-red-600">Offline</h1>
      <h1 v-else class="ml-2">Fetching</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from "vue";
import { makeStatusQuery } from "@/lib/health";
import { useStatusStore } from "@/stores/appStatus";

const statusStore = useStatusStore();

const status = computed(() => statusStore.status);

onMounted(() => {
  makeStatusQuery();
});
</script>
<style scoped>
.header {
  transition: text-shadow 200ms ease-out;
}
.header:hover {
  text-shadow: 0 0 1px white, 0 0 8px white;
}
</style>
