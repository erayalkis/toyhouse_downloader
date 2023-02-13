import { ref } from "vue";
import { defineStore } from "pinia";
import type { CharacterDetails } from "@/lib/interfaces/toyhouse";

export const useQueueStore = defineStore("queue", () => {
  /* 
    -1 => queue undefined, making query
    0 => App is down, server returned a 500 or took too long to respond
    1 => App is up and running
  */
  const queueDefault: Array<CharacterDetails> = [];
  const viewQueueDefault: boolean = false;

  const queue = ref(queueDefault);
  const viewQueue = ref(viewQueueDefault);
  const setqueue = (newValue: Array<CharacterDetails>) => queue.value = newValue;
  const addToQueue = (queueItem: CharacterDetails) => queue.value.push(queueItem);
  const clearqueue = () => queue.value = queueDefault;
  const toggleQueueView = () => viewQueue.value = !viewQueue.value;

  return { viewQueue, toggleQueueView, addToQueue, queue, setqueue, clearqueue };
});
