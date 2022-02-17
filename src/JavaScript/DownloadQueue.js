import { useContext } from "react";
import QueueContext from "../Contexts/QueueContext";

const DownloadQueue = async () => {
  const { queue, setQueue } = useContext(QueueContext);
};

export default DownloadQueue;
