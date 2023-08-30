import { ref } from "vue";
import { defineStore } from "pinia";

export const useOptionsStore = defineStore("options", () => {
  const optsDefault: Function = (): Record<string, boolean> => {
    return {
      downloadOwnerLogs: false,
    };
  };

  const opts: Record<string, boolean> = ref(optsDefault());

  const toggleValue = (key: string) => (opts[key] = !opts[key]);

  return { opts, toggleValue };
});
