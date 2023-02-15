<template>
  <div v-if="shouldDisplay" class="flex items-center shrink-0">
    <div class="flex w-full bg-toyhouse-primary-200 border border-toyhouse-primary-400 rounded-md rounded-r-none relative w-2/3 md:w-5/6 lg:w-5/6 2xl:w-11/12">
      <div class="flex gap-10 overflow-y-auto px-3">
        <template v-if="queue.length > 0" v-for="character in queue">
          <Character :data="character" />
        </template>
        <template v-else>
          <h1 class="p-3 lg:p-5 2xl:p-12">No characters in queue!</h1>
        </template>
      </div>
    </div>
    <button :class="{'cursor-not-allowed': queue.length === 0}" :disabled="queue.length === 0" 
      class="self-stretch right-0 bg-toyhouse-button-primary text-white rounded-md rounded-l-none w-1/3 transition duration-300 ease-out hover:bg-toyhouse-button-secondary disabled:bg-toyhouse-button-secondary md:w-1/6 lg:w-1/6 2xl:w-1/12">
      <img :src="DownloadSvg" class="w-6 mx-auto lg:w-7 xl:w-8 text-white" />
    </button>
  </div>
</template>
<script setup lang="ts">
  import { useQueueStore } from '@/stores/queue';
  import { computed } from 'vue';
  import DownloadSvg from "@/assets/download.svg"
  import Character from './Character.vue';

  const queueStore = useQueueStore();

  const queue = computed(() => queueStore.queue);
  const shouldDisplay = computed(() => queueStore.viewQueue);
</script>