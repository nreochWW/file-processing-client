import * as React from "react";
import * as ReactDOM from "react-dom";

import FileProcessing from "../src/index";

ReactDOM.render(
  <FileProcessing compiler="TypeScript" framework="React" />,
  document.getElementById("FileProcessing")
);
