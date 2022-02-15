import "../Stylesheets/QueueWindow.css";

const QueueWindow = (props) => {
  const { useQueue, setUseQueue } = props;

  return (
    <div>
      <div className="queue-bg"></div>
      <div className="queue-window">
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
