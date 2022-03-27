import { useState } from "react";
import CheckURL from "../JavaScript/CheckURL.js";
import MakeRequest from "../JavaScript/MakeRequest.js";
import { useContext } from "react";
import QueueContext from "../Contexts/QueueContext";
import ErrorContext from "../Contexts/ErrorContext.jsx";
import LoadingContext from "../Contexts/LoadingContext.jsx";
import Promiseify from "../JavaScript/Promiseify.js";
import SavePromisesToZip from "../JavaScript/SavePromisesToZip.js";
import DownloadZip from "../JavaScript/DownloadZip.js";

const AppForm = (props) => {
  const [queryStr, setQueryStr] = useState("");
  const { setError } = useContext(ErrorContext);
  const { setLoading } = useContext(LoadingContext);
  const { useQueue } = props;
  const { queue, setQueue } = useContext(QueueContext);

  const handleSubmit = async () => {
    setError(null);
    setLoading("Handling link...");

    const newId = await CheckURL(queryStr);
    if (!newId) {
      setLoading(null);
      setError("Please paste in a valid Toyhouse link!");
      return;
    }

    setLoading("Downloading images..");
    const response = await MakeRequest(newId, { galleryOnly: true });

    if (!response || response.msg) {
      const error = response.msg
        ? response.msg
        : "Something went wrong :( Check the console for more details!";

      setError(error);
      setLoading("");
      return;
    }

    setLoading("Handling the gallery...");
    const promises = await Promiseify(response);
    setLoading("Saving files to zip...");
    const promisesZip = await SavePromisesToZip(promises);
    setLoading("Downloading file...");
    await DownloadZip(promisesZip, response);
    setQueryStr("");
    setLoading("");
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

    setError("");
    setLoading("Fetching character data...");
    let response;
    try {
      response = await MakeRequest(newId, { detailsOnly: true });
    } catch {
      setLoading("");
      setError("Something went wrong! :( Check the console for more details");
      return;
    }
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
    <div>
      <div
        className="input-group mb-3 app-form"
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

      <div
        className="mb-3 app-form-mobile"
        style={{ cursor: props.loading ? "progress" : "default" }}
      >
        <input
          type="text"
          className="form-control form-control-lg app-form-input-mobile"
          placeholder="Toyhouse Link"
          value={queryStr}
          onChange={(e) => setQueryStr(e.target.value)}
        />

        <button
          className="btn btn-outline-primary btn-lg app-form-btn-mobile"
          type="button"
          disabled={props.loading || !props.isOnline}
          onClick={useQueue ? handleEnqueue : handleSubmit}
        >
          {useQueue ? "Add to queue" : "Download"}
        </button>
      </div>
    </div>
  );
};

export default AppForm;
