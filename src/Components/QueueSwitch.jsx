import { Mixpanel } from "../JavaScript/Mixpanel";
import "../Stylesheets/QueueSwitch.css";

const QueueSwitch = (props) => {
  const { useQueue, setUseQueue } = props;

  const toggleQueue = () => {
    setUseQueue((old) => !old);
    Mixpanel.track('user_toggle_queue', { state: useQueue })
  }

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
