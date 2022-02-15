import "../Stylesheets/QueueWindow.css";

const QueueWindow = () => {
  return (
    <div>
      <div className="queue-bg"></div>
      <div className="queue-window">
        <p className="display-6 queue-header">Character Queue</p>

        <div className="queue-characters">
          <div className="character">Poopie</div>
          <div className="character">Testie</div>
        </div>
      </div>
    </div>
  );
};

export default QueueWindow;
