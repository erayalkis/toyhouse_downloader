import { useEffect } from "react";
import { useContext } from "react";
import QueueContext from "../Contexts/QueueContext";
import DownloadCharacter from "../JavaScript/DownloadCharacter";
import "../Stylesheets/QueueDownload.css";

const QueueDownload = (props) => {
  const { queue, setQueue } = useContext(QueueContext);
  const { downloading, setDownloading } = props;

  useEffect(() => {
    if (!queue.length) {
      setDownloading(false);
    }
  }, [queue]);

  const handleClick = async () => {
    setDownloading(true);

    for (let i = 0; i < queue.length; i++) {
      const currCharacter = queue[i];
      DownloadCharacter(currCharacter.id, setQueue);
    }
  };

  return (
    <button
      type="button"
      className="btn queue-btn btn-outline-primary fixed-bottom w-100"
      disabled={!queue.length || downloading}
      onClick={handleClick}
    >
      {downloading ? "Download in progress..." : "Start Download"}
    </button>
  );
};

export default QueueDownload;
