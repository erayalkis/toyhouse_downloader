<template>
  <div
    class="flex-col text-toyhouse-dark bg-toyhouse-primary-100 border border-toyhouse-primary-200 rounded-sm p-10"
  >
    <h1 class="text-xl font-medium">Download gallery</h1>
    <hr class="w-full h-px bg-toyhouse-primary-300 my-2" />
    <h1 class="font-bold mb-2">Character Profile</h1>
    <div class="flex w-full">
      <input
        class="border w-full border-toyhouse-primary-300 outline-0 p-2 rounded-md rounded-r-none indent-1"
        placeholder="Profile URL"
        v-model="url"
      />
      <button
        class="bg-toyhouse-button-primary text-white transition duration-300 ease-out p-1 rounded-r-md hover:bg-toyhouse-button-secondary disabled:bg-toyhouse-button-secondary disabled:cursor-not-allowed"
        @click="handleCharacterRequest"
        :disabled="status === -1 || status === 0"
      >
        {{ isUsingQueue ? "Add" : "Download" }}
      </button>
    </div>
    <div class="flex">
      <div class="flex items-center gap-3 my-3 w-full">
        <input
          id="ownership-checkbox"
          type="checkbox"
          v-model="opts.downloadOwnerLogs"
        />
        <div class="flex flex-col">
          <label for="ownership-checkbox" class="font-medium"
            >Download Logs</label
          >
          <label for="ownership-checkbox" class="hidden sm:block"
            >Download this character's ownership logs.</label
          >
        </div>
      </div>
      <div class="flex items-center gap-3 my-3 w-full">
        <input id="queue-checkbox" type="checkbox" @change="toggleQueue" />
        <div class="flex flex-col">
          <label for="queue-checkbox" class="font-medium">Use Queue</label>
          <label for="queue-checkbox" class="hidden sm:block"
            >Use a queue for downloading multiple characters</label
          >
        </div>
      </div>
    </div>

    <Queue />
    <h1 v-if="message" class="text-blue-400 text-lg text-center mt-2">
      {{ message }}
    </h1>
    <h1 v-if="error" class="text-red-400 text-lg text-center mt-2">
      {{ error }}
    </h1>
  </div>
</template>
<script setup lang="ts">
import { useMessageStore } from "@/stores/message";
import { useErrorStore } from "@/stores/error";
import { downloadCharacter } from "@/lib/download";
import { getIdFromUrl } from "@/lib/url";
import { computed, ref } from "vue";
import { useStatusStore } from "@/stores/appStatus";
import { useQueueStore } from "@/stores/queue";
import { enqueueCharacter } from "@/lib/queue";
import Queue from "../Queue/QueueContainer.vue";
import { useOptionsStore } from "@/stores/options";
import { storeToRefs } from "pinia";

const statusStore = useStatusStore();
const optsStore = useOptionsStore();

const status = computed(() => statusStore.status);
const { opts } = storeToRefs(optsStore);

const messageStore = useMessageStore();
const errorStore = useErrorStore();
const queueStore = useQueueStore();
const message = computed(() => messageStore.message);
const error = computed(() => errorStore.error);
const isUsingQueue = computed(() => queueStore.viewQueue);
const url = ref("");

const toggleQueue = () => {
  queueStore.toggleQueueView();
};

const handleCharacterRequest = async () => {
  if (isUsingQueue.value) {
    await enqueue();
  } else {
    await download();
  }
};

const download = async () => {
  const id = getIdFromUrl(url.value);
  await downloadCharacter(id);
  url.value = "";
};

const enqueue = async () => {
  const id = getIdFromUrl(url.value);
  await enqueueCharacter(id);
  url.value = "";
};
</script>
