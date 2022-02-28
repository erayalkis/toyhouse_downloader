import AppStatus from "./AppStatus";
import QueueToggler from "./QueueToggler";

const Nav = (props) => {
  const { isOnline, setIsOnline, viewQueue, setViewQueue } = props;

  return (
    <div className="d-flex justify-content-between me-2 mt-2 app-nav">
      <QueueToggler viewQueue={viewQueue} setViewQueue={setViewQueue} />

      <AppStatus
        isOnline={isOnline}
        setIsOnline={setIsOnline}
        viewQueue={viewQueue}
      />
    </div>
  );
};

export default Nav;
