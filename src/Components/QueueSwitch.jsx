import "../Stylesheets/QueueSwitch.css";

const QueueSwitch = () => {
  return (
    <div class="form-check form-switch">
      <input
        class="form-check-input"
        type="checkbox"
        id="flexSwitchCheckDefault"
      />
      <label class="form-check-label" for="flexSwitchCheckDefault">
        Default switch checkbox input
      </label>
    </div>
  );
};

export default QueueSwitch;
