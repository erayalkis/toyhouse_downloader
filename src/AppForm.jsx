import { useState } from "react";

const AppForm = (props) => {
  const [queryStr, setQueryStr] = useState("");

  const handleSubmit = () => {
    props.setHasError(false);

    let id = null;
    if (!queryStr.startsWith("https") && !queryStr.startsWith("toyhou.se")) {
      props.setHasError("Please paste in a valid Toyhouse link!");
      return;
    } else if (queryStr.startsWith("toyhou.se")) {
      id = queryStr.split("/")[1];
    } else if (queryStr.startsWith("https://toyhou.se")) {
      id = queryStr.split("/")[3];
    } else {
      props.setHasError("Please paste in a valid Toyhouse link!");
      return;
    }

    props.setLoading("Downloading images...");
    fetch(`https://toyhouse-rails-api.herokuapp.com/download_gallery/?id=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.status === 422 || response.status === 404) {
          props.setLoading(null);
          props.setHasError(response.msg);
        } else {
          props.setLoading("Gallery downloaded!");
          setTimeout(() => {
            props.setLoading(null);
          }, 3000);
        }
      });
  };

  return (
    <div
      className="input-group mb-3"
      style={{ cursor: props.loading ? "progress" : "default" }}
    >
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Toyhouse Link"
        value={queryStr}
        onChange={(e) => setQueryStr(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary btn-lg"
          type="button"
          disabled={props.loading || !props.isOnline}
          onClick={handleSubmit}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default AppForm;
