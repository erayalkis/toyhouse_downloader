import { useState } from "react";
import HandleSubmit from "../JavaScript/HandleSubmit.js";

const AppForm = (props) => {
  const [queryStr, setQueryStr] = useState("");

  const submitForm = async () => {
    HandleSubmit(props, queryStr).then(setQueryStr(""));
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
          onClick={submitForm}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default AppForm;
