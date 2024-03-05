import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App />);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    root.render(<NextApp />);
  });
}
