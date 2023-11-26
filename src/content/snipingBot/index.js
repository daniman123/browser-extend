import { snipingBotSetup } from "./setup/setup";

export const snipingBot = async (rarity) => {
	await snipingBotSetup(rarity);
};
