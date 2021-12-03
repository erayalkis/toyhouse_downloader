import { useEffect } from "react";

const AppStatus = (props) => {
  const { setIsOnline, setLoading } = props;

  useEffect(() => {
    fetch('https://toyhouse-rails-api.herokuapp.com/app_status')
      .then(res => {
        if(res.ok) {
          setIsOnline(true);
          setLoading(null);
        }
      })
  }, [setIsOnline, setLoading]);

  return(
    <div>
    <div className="d-flex justify-content-end me-2 mt-2">
      <div className="d-flex">
        <h6>App Status:</h6>

        { 
        props.loading ? 
          <h6 className="text-secondary ms-2">Fetching...</h6>
        :
        props.isOnline ?
          <h6 className="text-success ms-2">Online</h6>
        : 
          <h6 className="text-danger ms-2">Offline</h6>
        }
      </div>
      <br />
    </div>
    
    </div>
  )
};

export default AppStatus;