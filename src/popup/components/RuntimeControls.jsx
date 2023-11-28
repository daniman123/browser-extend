import React from "react";
import { injectContentScript } from "../handlers";
import { main } from "../utils";
const RuntimeControls = ({ rarity, maxBidPrices }) => {
	return (
		<>
			<button onClick={injectContentScript}>INject!</button>
			<button
				onClick={() =>
					main({
						test: true,
						rarity: rarity,
						prices: maxBidPrices,
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
						prices: maxBidPrices,
					})
				}
			>
				Run Bot!
			</button>
		</>
	);
};

export default RuntimeControls;
