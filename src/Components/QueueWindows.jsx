import { useEffect } from "react";
import "../Stylesheets/QueueWindow.css";

const QueueWindow = (props) => {
  const { viewQueue, useQueue } = props;

  useEffect(() => {
    console.log(viewQueue);
  }, [viewQueue]);

  return (
    <div>
      <div className={"queue-bg" + (viewQueue ? " active" : "")}></div>
      <div className={"queue-window" + (viewQueue ? " active" : "")}>
        <p className="display-6 queue-header">Character Queue</p>

        {useQueue ? (
          <div className="queue-characters">
            <div className="character">Poopie</div>
            <div className="character">Testie</div>
          </div>
        ) : (
          <p>Please enable the queue to use this window!</p>
        )}
      </div>
    </div>
  );
};

export default QueueWindow;
