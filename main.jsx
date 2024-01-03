import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./src/App";
import { CounterApp } from "./src/components/CounterApp";
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App CounterApp={<CounterApp value={0}/>}/>
    </React.StrictMode>
);