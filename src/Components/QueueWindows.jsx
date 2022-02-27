import { useContext, useState } from "react";
import QueueContext from "../Contexts/QueueContext";
import QueueDownload from "./QueueDownload";
import Characters from "./Characters";
import "../Stylesheets/QueueWindow.css";

const QueueWindow = (props) => {
  const { viewQueue, useQueue } = props;
  const { queue } = useContext(QueueContext);
  const [downloading, setDownloading] = useState(false);

  return (
    <div>
      <div className={"queue-bg" + (viewQueue ? " active" : "")}></div>
      <div
        className={
          "queue-window" +
          (downloading ? " disabled" : "") +
          (viewQueue ? " active" : "")
        }
      >
        <p className="display-6 queue-header">Character Queue</p>

        {useQueue ? (
          queue.length ? (
            <Characters queue={queue} />
          ) : (
            "No characters in queue!"
          )
        ) : (
          <p>Please enable the queue to use this window!</p>
        )}

        {useQueue && (
          <QueueDownload
            downloading={downloading}
            setDownloading={setDownloading}
          />
        )}
      </div>
    </div>
  );
};

export default QueueWindow;
