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
						maxBidPrice: maxBidPrices,
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
						maxBidPrice: maxBidPrices,
					})
				}
			>
				Run Bot!
			</button>
		</>
	);
};

export default RuntimeControls;
