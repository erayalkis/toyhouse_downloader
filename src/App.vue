<template>
  <main>
    <div class="flex flex-col items-center justify-center w-screen h-screen">
      <!-- <Queue /> -->
      <Download />
      <Notice />
    </div>
  </main>
</template>
<script setup lang="ts">
import Download from './components/Download/Download.vue';
import Queue from './components/Queue/Queue.vue';
import Notice from "./components/Notice/Notice.vue";
</script>