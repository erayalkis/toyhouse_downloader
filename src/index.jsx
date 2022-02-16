import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import QueueContext from "./Contexts/QueueContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Index = () => {
  const [queue, setQueue] = useState([{ name: "a", id: "AB" }]);

  return (
    <QueueContext.Provider value={{ queue, setQueue }}>
      <App />
    </QueueContext.Provider>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
