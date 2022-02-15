import { useEffect } from "react";

const AppStatus = (props) => {
  const { isOnline, setIsOnline, setLoading, fetching, setFetching, setError } =
    props;

  useEffect(() => {
    fetch("https://toyhouse-rails-api.herokuapp.com/app_status")
      .then((res) => {
        if (res.ok) {
          setIsOnline(true);
          setLoading(null);
          setFetching(false);
        }
      })
      .catch((err) => {
        setIsOnline(false);
        setLoading(null);
        setFetching(false);
        setError("This app is currently down :(");
      });
  }, [setIsOnline, setLoading, setFetching, setError]);

  return (
    <div>
      <div className="d-flex me-1">
        <h6>App Status:</h6>

        {fetching ? (
          <h6 className="text-secondary ms-2">Fetching...</h6>
        ) : isOnline ? (
          <h6 className="text-success ms-2">Online</h6>
        ) : (
          <h6 className="text-danger ms-2">Offline</h6>
        )}
      </div>
      <br />
    </div>
  );
};

export default AppStatus;
