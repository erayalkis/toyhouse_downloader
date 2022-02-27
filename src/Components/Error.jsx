import { useContext } from "react";
import ErrorContext from "../Contexts/ErrorContext";

const Error = (props) => {
  const { error } = useContext(ErrorContext);

  return (
    <div style={{ display: error ? "block" : "none" }}>
      {error ? <small className="text-danger">{error}</small> : null}
    </div>
  );
};

export default Error;
