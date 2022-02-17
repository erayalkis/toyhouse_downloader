import { useContext } from "react";
import QueueContext from "../Contexts/QueueContext";

const QueueDownload = (props) => {
  const { queue } = useContext(QueueContext);

  return (
    <button
      type="button"
      className="btn queue-btn btn-outline-primary fixed-bottom"
      disabled={!queue.length}
    >
      Start Download
    </button>
  );
};

export default QueueDownload;
