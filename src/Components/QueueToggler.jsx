import "../Stylesheets/Toggler.css";

const QueueToggler = (props) => {
  const { viewQueue, setViewQueue } = props;

  const toggleView = () => setViewQueue((old) => !old);

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
