import { Spinner } from "react-bootstrap";

const Loading = (props) => {
  return (
    <div
      className="text-primary"
      style={{ display: props.loading ? "block" : "none" }}
    >
      {props.loading ? props.loading : null}
      {props.loading && props.loading !== "Gallery downloaded!" ? (
        <Spinner
          animation="border"
          style={{ width: 20, height: 20, fontSize: 10, marginLeft: 5 }}
        />
      ) : null}
    </div>
  );
};

export default Loading;
