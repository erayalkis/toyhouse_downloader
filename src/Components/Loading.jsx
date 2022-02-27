import { useContext } from "react";
import LoadingContext from "../Contexts/LoadingContext";

const Loading = (props) => {
  const { loading } = useContext(LoadingContext);

  return (
    <div
      className="text-primary"
      style={{ display: loading ? "block" : "none" }}
    >
      {loading ? loading : null}
    </div>
  );
};

export default Loading;
