import { useEffect } from "react";
import { useContext, useState } from "react";
import QueueContext from "../Contexts/QueueContext";
import DownloadQueue from "../JavaScript/DownloadQueue";
import "../Stylesheets/QueueDownload.css";

const QueueDownload = (props) => {
  const { queue, setQueue } = useContext(QueueContext);
  const [downloading, setDownloading] = useState(false);

  const handleClick = async () => {
    setDownloading(true);

    for (let i = 0; i < queue.length; i++) {
      const currCharacter = queue[i];
      console.log(currCharacter);
      setQueue((old) =>
        old.filter((character) => character.id !== currCharacter.id)
      );
    }
  };

  return (
    <button
      type="button"
      className="btn queue-btn btn-outline-primary fixed-bottom"
      disabled={!queue.length}
      onClick={handleClick}
    >
      {downloading && queue.length ? "Pause Download" : "Start Download"}
    </button>
  );
};

export default QueueDownload;
