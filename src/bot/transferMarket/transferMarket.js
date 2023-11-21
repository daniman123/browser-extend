import { simulateHumanClick } from "../utils";

export const transferMarketActions = async () => {
	await simulateHumanClick(".", "transfersTabTiles", "transferMarket");
	await simulateHumanClick(".", "searchFilters", "rarityDropdown");
};
