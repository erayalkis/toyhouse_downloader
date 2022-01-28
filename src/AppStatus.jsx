import { useEffect } from "react";

const AppStatus = (props) => {
  const { setIsOnline, setLoading, setFetching, setError } = props;

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
      <div className="d-flex justify-content-end me-2 mt-2">
        <div className="d-flex me-1">
          <h6>App Status:</h6>

          {props.fetching ? (
            <h6 className="text-secondary ms-2">Fetching...</h6>
          ) : props.isOnline ? (
            <h6 className="text-success ms-2">Online</h6>
          ) : (
            <h6 className="text-danger ms-2">Offline</h6>
          )}
        </div>
        <br />
      </div>
    </div>
  );
};

export default AppStatus;
