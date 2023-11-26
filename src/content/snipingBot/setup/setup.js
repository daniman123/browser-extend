import { simulateHumanClick, verifyClick } from "../../actions/click";
import { simulateHumanTyping } from "../../actions/typing/typing";
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

export const setPrice = async () => {
	const selector = getSelector("", "priceFilters", "maxBid");
	await simulateHumanClick(selector);
	const maxBidPriceInputField = document.querySelector(selector);
	simulateHumanTyping(maxBidPriceInputField, "20000");

	const searchMarketSelector = getSelector(
		"",
		"transferMarketButtons",
		"search"
	);
	await simulateHumanClick(searchMarketSelector);
};

export const snipingBotSetup = async (rarity) => {
	// click transfers tab
	await openTransfersTab();
	// open transfer market
	await setTransfersTile();
	// select common rarity
	await setRarity(rarity);
	// set prices
	await setPrice();
};
