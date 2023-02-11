<template>
  <div class="flex-col text-toyhouse-dark bg-toyhouse-primary-100 border border-toyhouse-primary-200 w-10/12 rounded-sm p-4 xl:w-7/12">
    <h1 class="text-xl font-medium">Download gallery</h1>
    <hr class="w-full h-px bg-toyhouse-primary-300 my-2" />
    <h1 class="font-bold mb-2">Character Profile</h1>
    <div class="flex w-full">
      <input class="border w-full border-toyhouse-primary-300 outline-0 p-1 rounded-md rounded-r-none indent-1" placeholder="Profile URL" v-model="url" />
      <button class="bg-toyhouse-button-primary text-white transition duration-300 ease-out p-1 rounded-r-md hover:bg-toyhouse-button-secondary" @click="download">Download</button>
    </div>
    <h1>{{ message }}</h1>
    <h1>{{ error }}</h1>
  </div>
</template>
<script setup lang="ts">
  import { useMessageStore } from '@/stores/message';
  import { useErrorStore } from '@/stores/error';
  import { downlaodCharacter } from '@/lib/download';
  import { getIdFromUrl } from '@/lib/url';
  import { computed, ref } from 'vue';

  const messageStore = useMessageStore();
  const errorStore = useErrorStore();
  const message = computed(() => messageStore.message);
  const error = computed(() => errorStore.error);
  const url = ref("");

  const download = () => {
    const id = getIdFromUrl(url.value);
    downlaodCharacter(id);
  }
</script>