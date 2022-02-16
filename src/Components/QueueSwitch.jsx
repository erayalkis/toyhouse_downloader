import { useState } from "react";
import "../Stylesheets/QueueSwitch.css";

const QueueSwitch = (props) => {
  const { setUseQueue } = props;
  const [isChecked, setIsChecked] = useState(false);

  const toggleQueue = () => setUseQueue((old) => !old);

  return (
    <div class="form-check form-switch queue-switch">
      <input
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        checked={isChecked}
        onClick={toggleQueue}
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">
        Toggle Queue
      </label>
    </div>
  );
};

export default QueueSwitch;
