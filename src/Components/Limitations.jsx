import "../Stylesheets/Limitations.css";

const Limitations = () => {
  return (
    <div className="mt-5 limitations">
      <div className="limitations-container">
        <h1 className="display-4">Limitations for this app</h1>
        <div className="mt-4">
          <ul className="limitations-list">
            <li>
              This app will not fetch galleries for locked (private) profiles.
            </li>
            <li>This app will not remove watermarks unless it's authorized.</li>
            <li>This app might not fetch galleries that have custom HTML.</li>
            <em>
              Psst... You can remove watermarks by authorizing{" "}
              <a
                href="https://toyhou.se/toyhouse_downloader"
                target="_blank"
                rel="noreferrer"
              >
                this account!
              </a>
            </em>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Limitations;
