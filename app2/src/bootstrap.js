import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    const App = require("./App").default;
    ReactDOM.render(<App />, rootElement);
  });
}
