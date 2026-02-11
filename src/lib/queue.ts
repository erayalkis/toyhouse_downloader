import { useQueueStore } from "@/stores/queue";
import { fetchCharacterDetails } from "@/lib/download";
import { useMessageStore } from "@/stores/message";
import { useErrorStore } from "@/stores/error";

export const enqueueCharacter = async (id: string) => {
  if (!id) return;
  const { queue } = useQueueStore();
  const { setError, clearError } = useErrorStore();

  const characterCheck = queue.find((char) => char.id === id);
  if (characterCheck) {
    setError("Character already in queue!");
    setTimeout(() => {
      clearError();
    }, 1200);
    return;
  }

  const { setMessage, clearMessage } = useMessageStore();
  const { addToQueue } = useQueueStore();

  setMessage("Fetching character details...");
  const character = await fetchCharacterDetails(id);
  if (!character || (!character.name && character.image === "none")) {
    clearMessage();
    setError("Character is invalid!");
    setTimeout(() => {
      clearError();
    }, 1200);
    return;
  }
  character.id = id;
  setMessage("Adding character to queue...");
  addToQueue(character);
  clearMessage();
};
