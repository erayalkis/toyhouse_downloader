import { useState } from "react";
import CheckURL from "../JavaScript/CheckURL.js";
import HandleSubmit from "../JavaScript/HandleSubmit.js";

const AppForm = (props) => {
  const [queryStr, setQueryStr] = useState("");
  const { useQueue, setHasError, setLoading } = props;

  const handleSubmit = () => {
    // This is honestly cursed but currently it was the easiest way to handle it
    // I'll change the code later on to make it more efficient
    HandleSubmit(setHasError, setLoading, queryStr, setQueryStr);
  };

  const handleEnqueue = (e) => {
    const newId = CheckURL(queryStr);
    if (!newId) {
      setHasError("Please paste in a valid Toyhouse link!");
      return;
    }

    console.log(newId);
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
          onClick={useQueue ? handleEnqueue : handleSubmit}
        >
          {useQueue ? "Add To Queue" : "Download"}
        </button>
      </div>
    </div>
  );
};

export default AppForm;
