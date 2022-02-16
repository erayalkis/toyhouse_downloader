import { useContext } from "react";
import QueueContext from "../Contexts/QueueContext";

const AddToQueue = (characterObj) => {
  const { setQueue } = useContext(QueueContext);

  setQueue((old) => [characterObj, ...old]);
};

export default AddToQueue;
