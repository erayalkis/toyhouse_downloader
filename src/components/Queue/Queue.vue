<template>
  <div class="flex justify-between w-full absolute top-11 bg-toyhouse-button-primary">
    <div class="flex gap-10 overflow-y-auto ">
      <template v-for="character in queue">
        <Character :data="character" />
      </template>
    </div>
    <button class="bg-toyhouse-button-primary w-2/12 absolute right-0 border-l text-white border-toyhouse-button-secondary w-full h-full">Download</button>
  </div>
</template>
<script setup lang="ts">
  import { useQueueStore } from '@/stores/queue';
  import { computed } from 'vue';
  import Character from './Character.vue';

  const queueStore = useQueueStore();

  const queue = computed(() => queueStore.queue);
  const shouldDisplay = computed(() => queueStore.viewQueue);
</script>