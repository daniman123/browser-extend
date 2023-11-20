import React from "react";
import { render } from "react-dom";
import { injectContentScript, simulateClick } from "./utils";

const Popup = () => {
	return (
		<>
			<h1>Popup</h1>
			<p>im feeling like rap god imbegingnig to fell</p>
			<button onClick={injectContentScript}>INject!</button>
			<button onClick={simulateClick}>Click!</button>
		</>
	);
};

render(<Popup />, document.getElementById("react-target"));
