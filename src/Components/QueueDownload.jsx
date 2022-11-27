import { useEffect } from "react";
import { useContext } from "react";
import QueueContext from "../Contexts/QueueContext";
import DownloadCharacter from "../JavaScript/DownloadCharacter";
import { Mixpanel } from "../JavaScript/Mixpanel";
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
    Mixpanel.track('user_queue_download_start')

    for (let i = 0; i < queue.length; i++) {
      const currCharacter = queue[i];

      Mixpanel.track('user_download_character_from_queue', { id: currCharacter.id })
      DownloadCharacter(currCharacter.id, setQueue);
    }

    Mixpanel.track('user_queue_download_done')
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
