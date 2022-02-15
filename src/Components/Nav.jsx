import AppStatus from "./AppStatus";
import QueueToggler from "./QueueToggler";

const Nav = (props) => {
  const {
    isOnline,
    setIsOnline,
    loading,
    setLoading,
    fetching,
    setFetching,
    setError,
    setViewQueue,
  } = props;

  return (
    <div className="d-flex justify-content-between me-2 mt-2">
      <QueueToggler setViewQueue={setViewQueue} />

      <AppStatus
        isOnline={isOnline}
        setIsOnline={setIsOnline}
        loading={loading}
        setLoading={setLoading}
        fetching={fetching}
        setFetching={setFetching}
        setError={setError}
      />
    </div>
  );
};

export default Nav;
