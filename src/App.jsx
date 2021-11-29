import { useState } from 'react';
import AppForm from './AppForm';
import Error from './Error';

function App() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="container text-center mt-5 w-75">
      <div className="card p-4">
        <p className="display-4">Toyhouse Downloader</p>
        <p>Mass download directly from Toyhouse</p>
        <AppForm setHasError={setHasError} />
        <Error display={hasError} />
      </div>
    </div>
  );
}

export default App;
