import { useState } from 'react';
import AppForm from './AppForm';
import Error from './Error';
import Loading from './Loading';
import Footer from './Footer';
import Limitations from './Limitations';

function App() {
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(null);

  return (
    <div>
    <div className="container text-center mt-5 w-75 body-bg-main mt-4">
      <div className="card p-5">
        <p className="display-3">Toyhouse Downloader</p>
        <p>Mass download galleries directly from Toyhouse</p>
        <AppForm setHasError={setHasError} setLoading={setLoading} />
        <Error display={hasError} />
        <Loading loading={loading} />
        <p className="text-primary" style={{display: !hasError && !loading ? "block" : "none"}}>
            Welcome! Paste a Toyhouse link in the input field to get started!</p>
      </div>

      <small className="opacity-50">
        <em>
          All content belongs to Cyan Crows and the respective artists. We claim no ownership over the downloaded content.
        </em>
      </small>
    </div>
    
      <div>
          <Limitations />
          <Footer />
      </div>
    </div>
  );
}

export default App;
