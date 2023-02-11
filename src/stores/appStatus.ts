import { ref } from "vue";
import { defineStore } from "pinia";

export const useStatusStore = defineStore("status", () => {
  /* 
    -1 => Status undefined, making query
    0 => App is down, server returned a 500 or took too long to respond
    1 => App is up and running
  */
  const statusDefault: number = -1;

  const status = ref(statusDefault);
  const setStatus = (newValue: number) => status.value = newValue;
  const clearStatus = () => status.value = statusDefault;

  return { status, setStatus, clearStatus };
});
