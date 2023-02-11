import { useMessageStore } from "@/stores/message"; 

export const downlaodCharacter = (id: string) => {
  const { setMessage, clearMessage } = useMessageStore();

  if(!id) return null;
  setMessage("Fetching gallery...");
  setTimeout(() => {
    setMessage("Fetched gallery");
    setTimeout(() => {
      clearMessage();
    }, 2000)
  }, 5000)
}