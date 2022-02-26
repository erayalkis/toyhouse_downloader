import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import QueueContext from "./Contexts/QueueContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useContext } from "react";
import LoadingContext from "./Contexts/LoadingContext";
import ErrorContext from "./Contexts/ErrorContext";

const Index = () => {
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useContext(LoadingContext);
  const [error, setError] = useContext(ErrorContext);

  return (
    <QueueContext.Provider value={{ queue, setQueue }}>
      <App />
    </QueueContext.Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
