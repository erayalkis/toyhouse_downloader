import { useState } from "react";
import "../Stylesheets/QueueSwitch.css";

const QueueSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div class="form-check form-switch" style={{ marginLeft: 800 }}>
      <input
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
        checked={isChecked}
        onClick={(e) => setIsChecked((old) => !old)}
      />
    </div>
  );
};

export default QueueSwitch;
