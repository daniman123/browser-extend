import { snipingBotSetup } from "./setup/setup";

export const snipingBot = async (rarity, prices) => {
  await snipingBotSetup(rarity, prices);
};
