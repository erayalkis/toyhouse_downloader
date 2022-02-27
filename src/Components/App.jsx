import { useState } from "react";
import Nav from "./Nav";
import AppForm from "./AppForm";
import Error from "./Error";
import Loading from "./Loading";
import Footer from "./Footer";
import Limitations from "./Limitations";
import QueueWindow from "./QueueWindows";
import QueueSwitch from "./QueueSwitch";
import { useContext } from "react";
import ErrorContext from "../Contexts/ErrorContext";
import LoadingContext from "../Contexts/LoadingContext";

function App() {
  const [isOnline, setIsOnline] = useState(false);
  const [useQueue, setUseQueue] = useState(false);
  const [viewQueue, setViewQueue] = useState(false);
  const { error } = useContext(ErrorContext);
  const { loading } = useContext(LoadingContext);

  return (
    <div>
      <QueueWindow viewQueue={viewQueue} useQueue={useQueue} />
      <div>
        <Nav
          isOnline={isOnline}
          setIsOnline={setIsOnline}
          viewQueue={viewQueue}
          setViewQueue={setViewQueue}
        />
        <div className="container text-center mt-4 w-75 body-bg-main mt-4">
          <div className="card p-5">
            <QueueSwitch setUseQueue={setUseQueue} />

            <p className="display-3">Toyhouse Downloader</p>
            <p>Mass download galleries directly from Toyhouse</p>
            <AppForm isOnline={isOnline} useQueue={useQueue} />
            <Error />
            <Loading />
            <p
              className="text-primary"
              style={{ display: !error && !loading ? "block" : "none" }}
            >
              Welcome! Paste a Toyhouse link in the input field to get started!
            </p>
          </div>

          <small className="opacity-50">
            <em>
              All content belongs to Cyan Crows and the respective artists. I
              claim no ownership over the downloaded content.
            </em>
          </small>
        </div>

        <div>
          <hr className="w-75 mx-auto" />
          <Limitations />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
