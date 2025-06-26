import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // <-- This is correct.
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from "react-router-dom";
import { AuthProvider } from "./routes/CORE/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
// import axios from 'axios';

// axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router hashType="noslash">
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
