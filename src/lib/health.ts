import { backendConfig } from "@/config/backendConfig"
import { useStatusStore } from "@/stores/appStatus";
import { useMessageStore } from "@/stores/message";
import { useErrorStore } from "@/stores/error";

export const makeStatusQuery = () => {
  const url = backendConfig.backendUrl;
  const statusStore = useStatusStore();
  const errorStore = useErrorStore();
  const messageStore = useMessageStore();

  fetch(`${url}/app_status`)
    .then(() => {
      console.log("app is up!");
      statusStore.setStatus(1)
    })
    .catch(() => {
      console.log("app is down :(");
      statusStore.setStatus(0);
      messageStore.clearMessage();
      errorStore.setError("App is currently down! :(");
    })
}