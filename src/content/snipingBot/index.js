import { snipingBotSetup } from "./setup/setup";

export const snipingBot = async (rarity, maxBidPrice) => {
	await snipingBotSetup(rarity, maxBidPrice);
};
