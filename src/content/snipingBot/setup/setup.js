import { simulateHumanClick, verifyClick } from "../../actions/click";
import { simulateHumanTyping } from "../../actions/typing/typing";
import selectors from "../../selectors/selectors.json";

export const openTransfersTab = async () => {
	const tabs = selectors.tabs;
	const transfersTab = tabs.unique.transfersTab;
	await verifyClick(transfersTab, tabs.delta);
};

export const setTransfersTile = async () => {
	const transfersTiles = selectors.transfersTabTiles;
	const transferMarketTile = transfersTiles.unique.transferMarket;
	await simulateHumanClick(transferMarketTile);
};

export const setRarity = async (rarity) => {
	const searchFilters = selectors.searchFilters;
	const searchFilterDropdown = searchFilters.unique.rarityDropdown;

	const rarityDropdownElements = selectors.rarityDropdownElements;
	const commonRarity = rarityDropdownElements.unique[rarity];

	await simulateHumanClick(searchFilterDropdown);
	await simulateHumanClick(commonRarity);
};

export const setPrice = async (maxBidPrice) => {
	const priceFilters = selectors.priceFilters;
	const maxBidField = priceFilters.unique.maxBid;
	await simulateHumanClick(maxBidField);

	simulateHumanTyping(maxBidField, maxBidPrice);

	const transferMarketButtons = selectors.transferMarketButtons;
	const searchButton = transferMarketButtons.unique.search;
	await simulateHumanClick(searchButton);
};

export const snipingBotSetup = async (rarity, maxBidPrice) => {
	// click transfers tab
	await openTransfersTab();
	// open transfer market
	await setTransfersTile();
	// select common rarity
	await setRarity(rarity);
	// set prices
	await setPrice(maxBidPrice);
};
