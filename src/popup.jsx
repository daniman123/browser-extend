import React from "react";
import { render } from "react-dom";
import { injectContentScript } from "./handlers";
import { simulateClick } from "./utils";
import { main } from "./main";

const Popup = () => {
  return (
    <>
      <h1>Popup</h1>
      <p>im feeling like rap god imbegingnig to fell</p>
      <button onClick={injectContentScript}>INject!</button>
      <button onClick={() => simulateClick(".", "tabs", "transfersTab")}>
        Click!
      </button>
      <button onClick={main}>Run Bot!</button>
    </>
  );
};

render(<Popup />, document.getElementById("react-target"));
