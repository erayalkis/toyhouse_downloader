import "../Stylesheets/Toggler.css";

const QueueToggler = (props) => {
  const { setViewQueue } = props;

  const toggleView = () => setViewQueue((old) => !old);

  return (
    <div className="toggler-button" onClick={toggleView}>
      <hr className="toggler-line-1" />
      <hr className="toggler-line-2" />
      <hr className="toggler-line-3" />
    </div>
  );
};

export default QueueToggler;
