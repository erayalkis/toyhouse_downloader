<template>
  <div class="flex-col text-toyhouse-dark bg-toyhouse-primary-100 border border-toyhouse-primary-200 w-10/12 rounded-sm p-4 xl:w-7/12">
    <h1 class="text-xl font-medium">Download gallery</h1>
    <hr class="w-full h-px bg-toyhouse-primary-300 my-2" />
    <h1 class="font-bold mb-2">Character Profile</h1>
    <div class="flex w-full">
      <input class="border w-full border-toyhouse-primary-300 outline-0 p-1 rounded-md rounded-r-none indent-1" placeholder="Profile URL" v-model="url" />
      <button class="bg-toyhouse-button-primary text-white transition duration-300 ease-out p-1 rounded-r-md hover:bg-toyhouse-button-secondary disabled:bg-toyhouse-button-secondary disabled:cursor-not-allowed" @click="download" :disabled="status === -1 || status === 0">Download</button>
    </div>
    <h1 v-if="message" class="text-blue-400 text-lg text-center mt-2">{{ message }}</h1>
    <h1 v-if="error" class="text-red-400 text-lg text-center mt-2">{{ error }}</h1>
  </div>
</template>
<script setup lang="ts">
  import { useMessageStore } from '@/stores/message';
  import { useErrorStore } from '@/stores/error';
  import { downlaodCharacter } from '@/lib/download';
  import { getIdFromUrl } from '@/lib/url';
  import { computed, ref } from 'vue';
  import { useStatusStore } from '@/stores/appStatus';

  const statusStore = useStatusStore();

  const status = computed(() => statusStore.status);

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