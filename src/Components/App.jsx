import { useState } from "react";
import Nav from "./Nav";
import AppForm from "./AppForm";
import Error from "./Error";
import Loading from "./Loading";
import Footer from "./Footer";
import Limitations from "./Limitations";
import QueueWindow from "./QueueWindows";

function App() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState("Fetching status...");
  const [fetching, setFetching] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [useQueue, setUseQueue] = useState(false);
  const [viewQueue, setViewQueue] = useState(false);

  return (
    <div>
      {viewQueue && (
        <QueueWindow useQueue={useQueue} setUseQueue={setUseQueue} />
      )}
      <div>
        <Nav
          isOnline={isOnline}
          setIsOnline={setIsOnline}
          loading={loading}
          setLoading={setLoading}
          fetching={fetching}
          setFetching={setFetching}
          setError={setError}
        />
        <div className="container text-center mt-4 w-75 body-bg-main mt-4">
          <div className="card p-5">
            <p className="display-3">Toyhouse Downloader</p>
            <p>Mass download galleries directly from Toyhouse</p>
            <AppForm
              setHasError={setError}
              setLoading={setLoading}
              loading={loading}
              isOnline={isOnline}
            />
            <Error error={error} />
            <Loading loading={loading} />
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
