import "../Stylesheets/QueueSwitch.css";

const QueueSwitch = (props) => {
  const { setUseQueue } = props;

  const toggleQueue = () => setUseQueue((old) => !old);

  return (
    <div className="form-check form-switch queue-switch">
      <input
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        onClick={toggleQueue}
      />
      <label class="form-check-label" htmlFor="flexSwitchCheckDefault">
        Toggle Queue
      </label>
    </div>
  );
};

export default QueueSwitch;
