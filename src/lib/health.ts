import { backendConfig } from "@/config/backendConfig";
import { useStatusStore } from "@/stores/appStatus";
import { useMessageStore } from "@/stores/message";
import { useErrorStore } from "@/stores/error";

export const makeStatusQuery = () => {
  const url = backendConfig.backendUrl;
  const statusStore = useStatusStore();
  const errorStore = useErrorStore();
  const messageStore = useMessageStore();

  statusStore.setStatus(0);
  fetch(`${url}/app_status`)
    .then(() => {
      statusStore.setStatus(1);
    })
    .catch(() => {
      // Check status store for code meanings
      statusStore.setStatus(0);
      messageStore.clearMessage();
      errorStore.setError("App is currently down! :(");
    });
};
