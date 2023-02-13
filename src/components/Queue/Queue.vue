<template>
  <div v-if="shouldDisplay" class="flex gap-10 w-full absolute top-11 overflow-y-auto bg-toyhouse-button-primary py-2 px-3 xl:h-[96%] xl:left-0 xl:w-min">
    <template v-for="character in queue">
      <Character :data="character" />
    </template>
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