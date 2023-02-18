import { ref } from "vue";
import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", () => {
  const messageDefault: string = "";

  const message = ref(messageDefault);
  const setMessage = (newValue: string) => (message.value = newValue);
  const clearMessage = () => (message.value = messageDefault);

  return { message, setMessage, clearMessage };
});
