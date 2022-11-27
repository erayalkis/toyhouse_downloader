import { Mixpanel } from "../JavaScript/Mixpanel";
import "../Stylesheets/Toggler.css";

const QueueToggler = (props) => {
  const { viewQueue, setViewQueue } = props;

  const toggleView = () => {
    setViewQueue((old) => !old);
    Mixpanel.track('user_toggle_queue_window', { state: viewQueue })
  }

  return (
    <div
      className={"toggler-button" + (viewQueue ? " toggler-active" : "")}
      onClick={toggleView}
    >
      <hr className="toggler-line-1" />
      <hr className="toggler-line-2" />
      <hr className="toggler-line-3" />
    </div>
  );
};

export default QueueToggler;
