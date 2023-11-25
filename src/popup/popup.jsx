import React from "react";
import { render } from "react-dom";
import { injectContentScript } from "./handlers";
import { main } from "./utils";

const Popup = () => {
	return (
		<>
			<h1>Popup</h1>
			<p>im feeling like rap god imbegingnig to fell</p>
			<button onClick={injectContentScript}>INject!</button>
			<button
				onClick={() =>
					main({
						test: true,
					})
				}
			>
				TEST!
			</button>
			<button
				onClick={() =>
					main({
						bot: "startBot",
					})
				}
			>
				Run Bot!
			</button>
		</>
	);
};

render(<Popup />, document.getElementById("react-target"));
