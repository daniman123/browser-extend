import { simulateHumanClick, verifyClick } from "../../contentUtils";
import { getSelector } from "../../selectors/utils";

export const setFilters = async () => {
	const transfersTab = getSelector(".", "tabs", "transfersTab");
	const transferMarketTile = getSelector(
		".",
		"transfersTabTiles",
		"transferMarket"
	);
	const searchFilterDropdown = getSelector(
		".",
		"searchFilters",
		"rarityDropdown"
	);
	const commonRarity = getSelector(
		"",
		"rarityDropdownElements",
		"commonRarity"
	);

	console.log(transfersTab, transferMarketTile, searchFilterDropdown);

	// click transfers tab
	verifyClick(transfersTab, "selected");
	// // click transfer market
	await simulateHumanClick(transferMarketTile);
	// // open rarity dropdown
	await simulateHumanClick(searchFilterDropdown);
	// select common rarity
	await simulateHumanClick(commonRarity);
};
