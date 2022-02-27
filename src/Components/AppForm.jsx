import { useState } from "react";
import CheckURL from "../JavaScript/CheckURL.js";
import HandleSubmit from "../JavaScript/HandleSubmit.js";
import MakeRequest from "../JavaScript/MakeRequest.js";
import { useContext } from "react";
import QueueContext from "../Contexts/QueueContext";
import ErrorContext from "../Contexts/ErrorContext.jsx";
import LoadingContext from "../Contexts/LoadingContext.jsx";

const AppForm = (props) => {
  const [queryStr, setQueryStr] = useState("");
  const { setError } = useContext(ErrorContext);
  const { setLoading } = useContext(LoadingContext);
  const { useQueue } = props;
  const { queue, setQueue } = useContext(QueueContext);

  const handleSubmit = () => {
    HandleSubmit(setError, setLoading, queryStr, setQueryStr);
  };

  const handleEnqueue = async (e) => {
    const newId = CheckURL(queryStr);
    if (!newId) {
      setError("Please paste in a valid Toyhouse link!");
      return;
    }

    if (queue.some((character) => character.id === newId)) {
      setError("Character is already in queue!");
      return;
    }

    const response = await MakeRequest(setError, setLoading, newId, true);
    setLoading("Adding character to queue...");

    const { name, profile_img } = response;

    const character = {
      id: newId,
      name,
      imgURL: profile_img,
    };

    setQueue((old) => [...old, character]);
    setLoading("");
    setQueryStr("");
  };

  return (
    <div
      className="input-group mb-3"
      style={{ cursor: props.loading ? "progress" : "default" }}
    >
      <input
        type="text"
        className="form-control form-control-lg app-form-input"
        placeholder="Toyhouse Link"
        value={queryStr}
        onChange={(e) => setQueryStr(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary btn-lg app-form-btn"
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
