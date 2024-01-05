import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./src/App";
import CCState from "./src/components/CCState";
import { CounterApp } from "./src/components/CounterApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CounterApp value={0} />
    <CCState nombre="Leandro" apellido="Palma"/>
  </React.StrictMode>
);
