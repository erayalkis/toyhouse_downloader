import { useQueueStore } from "@/stores/queue";
import { fetchCharacterDetails } from "@/lib/download";
import { useMessageStore } from "@/stores/message";

export const enqueueCharacter = async (id: string) => {
  const { setMessage, clearMessage } = useMessageStore();
  const { queue, addToQueue } = useQueueStore();

  setMessage("Fetching character details...");
  const character = await fetchCharacterDetails(id);
  character.id = id;
  setMessage("Adding character to queue...")
  addToQueue(character);
  setMessage("Character added to queue!");
}