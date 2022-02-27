import "../Stylesheets/QueueSwitch.css";

const QueueSwitch = (props) => {
  const { setUseQueue } = props;

  const toggleQueue = () => setUseQueue((old) => !old);

  return (
    <div className="switch-container">
      <div className="form-check form-switch queue-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={toggleQueue}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Toggle Queue
        </label>
      </div>
    </div>
  );
};

export default QueueSwitch;
