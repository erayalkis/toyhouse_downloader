import { useState } from 'react';
import AppForm from './AppForm';
import Error from './Error';
import Loading from './Loading';

function App() {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(null);

  return (
    <div className="container text-center mt-5 w-75 body-bg-main">
      <div className="card p-4">
        <p className="display-4">Toyhouse Downloader</p>
        <p>Mass download directly from Toyhouse</p>
        <AppForm setHasError={setHasError} setLoading={setLoading} />
        <Error display={hasError} />
        <Loading loading={loading} />
        <p className="text-primary" style={{display: !hasError && !loading ? "block" : "none"}}>
            Welcome! Type a Toyhouse link in the input field to get started!</p>
      </div>
    </div>
  );
}

export default App;
