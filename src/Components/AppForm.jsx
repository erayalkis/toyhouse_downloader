import { useState } from "react";
import CheckURL from "../JavaScript/CheckURL.js";
import HandleSubmit from "../JavaScript/HandleSubmit.js";
import MakeRequest from "../JavaScript/MakeRequest.js";
import { useContext } from "react";
import QueueContext from "../Contexts/QueueContext";

const AppForm = (props) => {
  const [queryStr, setQueryStr] = useState("");
  const { useQueue, setHasError, setLoading } = props;
  const { setQueue } = useContext(QueueContext);

  const handleSubmit = () => {
    // This is honestly cursed but currently it was the easiest way to handle it
    // I'll change the code later on to make it more efficient
    HandleSubmit(setHasError, setLoading, queryStr, setQueryStr);
  };

  const handleEnqueue = async (e) => {
    const newId = CheckURL(queryStr);
    if (!newId) {
      setHasError("Please paste in a valid Toyhouse link!");
      return;
    }

    const response = await MakeRequest(setHasError, setLoading, newId, true);
    setLoading("Adding character to queue...");

    const { name, profile_img } = response;

    const character = {
      id: newId,
      name,
      imgURL: profile_img,
    };

    console.log(character);
    setQueue((old) => [character, ...old]);
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
