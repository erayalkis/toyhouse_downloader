import CheckURL from "./CheckURL";
import StartDownload from "./StartDownload";

const HandleSubmit = async (setHasError, setLoading, queryStr, setQueryStr) => {
  setHasError(false);

  let id = CheckURL(queryStr);
  if (!id) {
    setHasError("Please paste in a valid Toyhouse link!");
    return;
  }

  setLoading("Downloading images...");
  StartDownload(setHasError, setLoading, setQueryStr, id);
};

export default HandleSubmit;
