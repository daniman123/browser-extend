import { simulateHumanClick, verifyClick } from "../../actions/click";
import { getSelector } from "../../selectors/utils";

export const openTransfersTab = async () => {
	const transfersTab = getSelector(".", "tabs", "transfersTab");
	await verifyClick(transfersTab, "selected");
};

export const setTransfersTile = async () => {
	const transferMarketTile = getSelector(
		".",
		"transfersTabTiles",
		"transferMarket"
	);
	await simulateHumanClick(transferMarketTile);
};

export const setRarity = async (rarity) => {
	const searchFilterDropdown = getSelector(
		".",
		"searchFilters",
		"rarityDropdown"
	);
	const commonRarity = getSelector("", "rarityDropdownElements", rarity);
	await simulateHumanClick(searchFilterDropdown);
	await simulateHumanClick(commonRarity);
};

export const snipingBotSetup = async () => {
	// click transfers tab
	await openTransfersTab();
	// open transfer market
	await setTransfersTile();
	// select common rarity
	await setRarity("commonRarity");
};
