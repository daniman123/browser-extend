import React from "react";
import { injectContentScript } from "../handlers";
import { main } from "../utils";
const RuntimeControls = ({ rarity }) => {
	return (
		<>
			<button onClick={injectContentScript}>INject!</button>
			<button
				onClick={() =>
					main({
						test: true,
						rarity: rarity,
					})
				}
			>
				TEST!
			</button>
			<button
				onClick={() =>
					main({
						bot: "startBot",
						rarity: rarity,
					})
				}
			>
				Run Bot!
			</button>
		</>
	);
};

export default RuntimeControls;
