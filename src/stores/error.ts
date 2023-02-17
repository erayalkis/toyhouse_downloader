import { ref } from "vue";
import { defineStore } from "pinia";

export const useErrorStore = defineStore("error", () => {
  const errorDefault: string = "";

  const error = ref(errorDefault);
  const setError = (newValue: string) => (error.value = newValue);
  const clearError = () => (error.value = errorDefault);

  return { error, setError, clearError };
});
