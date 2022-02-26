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
  const [loading, setLoading] = useState("Fetching data...");
  const [error, setError] = useState(null);

  return (
    <QueueContext.Provider value={{ queue, setQueue }}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <ErrorContext.Provider value={{ error, setError }}>
          <App />
        </ErrorContext.Provider>
      </LoadingContext.Provider>
    </QueueContext.Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
