
function App() {
  return (
    <div className="container text-center mt-5 w-75">
      <div className="card p-4">
        <p className="display-4">Toyhouse Downloader</p>
        <p>Mass download directly from Toyhouse</p>
        <div class="input-group mb-3">
          <input type="text" class="form-control form-control-lg" placeholder="Toyhouse Link" />
          <div class="input-group-append">
            <button class="btn btn-outline-primary btn-lg" type="button">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
