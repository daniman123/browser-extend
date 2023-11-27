import React from "react";
import { injectContentScript } from "../handlers";
import { main } from "../utils";
const RuntimeControls = ({ rarity, maxBidPrice }) => {
	return (
		<>
			<button onClick={injectContentScript}>INject!</button>
			<button
				onClick={() =>
					main({
						test: true,
						rarity: rarity,
						maxBidPrice: maxBidPrice,
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
						maxBidPrice: maxBidPrice,
					})
				}
			>
				Run Bot!
			</button>
		</>
	);
};

export default RuntimeControls;
