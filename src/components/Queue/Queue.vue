<template>
  <div v-if="shouldDisplay && queue.length > 0">
    <h1 class="text-toyhouse-dark font-medium">Queue</h1>
    <div class="flex w-full bg-toyhouse-primary-200 border border-toyhouse-primary-400 rounded-md">
      <div class="flex gap-10 overflow-y-auto ">
        <template v-for="character in queue">
          <Character :data="character" />
        </template>
      </div>
    </div>
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