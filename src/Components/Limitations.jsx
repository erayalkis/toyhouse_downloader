import "../Stylesheets/Limitations.css";

const Limitations = () => {
  return (
    <div className="mt-5 col-lg-12 limitations">
      <div className="">
        <h1 className="display-4 text-center">Limitations for this app</h1>
        <div className="mt-4 text-center">
          <ul className="limitations-list">
            <li>
              This app will not fetch galleries for locked (private) profiles.
            </li>
            <li>This app can't fetch images that have NSFW tags on them.</li>
            <li>This app might not fetch galleries that have custom HTML.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Limitations;
