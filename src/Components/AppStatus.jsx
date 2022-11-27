import { useContext } from "react";
import { useEffect } from "react";
import ErrorContext from "../Contexts/ErrorContext";
import LoadingContext from "../Contexts/LoadingContext";
import { Mixpanel } from "../JavaScript/Mixpanel";
import "../config";

const AppStatus = (props) => {
  const { loading, setLoading } = useContext(LoadingContext);
  const { setError } = useContext(ErrorContext);
  const { isOnline, setIsOnline } = props;

  useEffect(() => {
    fetch(`${global.config.backend_url}/app_status`)
      .then((res) => {
        if (res.ok) {
          Mixpanel.track('user_visit_site_no_error')
          setIsOnline(true);
          setLoading(null);
        }
      })
      .catch((err) => {
        setIsOnline(false);
        setLoading(null);
        console.error(err);
        Mixpanel.track('user_visit_site_error')
        setError("This app is currently down :(");
      });
  }, [setIsOnline, setLoading, setError]);

  return (
    <div className="app-status">
      <div className="d-flex me-1">
        <h6>App Status:</h6>

        {loading && loading === "Fetching status..." ? (
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
