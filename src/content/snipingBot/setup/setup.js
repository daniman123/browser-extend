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

export const populatePriceFields = async (prices) => {
	const priceFilters = selectors.priceFilters.unique;

	const priceSelectors = Object.values(priceFilters);
	for (let i = 0; i < priceSelectors.length; i++) {
		await simulateHumanClick(priceSelectors[i]);
		simulateHumanTyping(priceSelectors[i], prices[i]);
	}
};

export const setPrices = async (prices) => {
	await populatePriceFields(prices);

	const transferMarketButtons = selectors.transferMarketButtons;
	const searchButton = transferMarketButtons.unique.search;
	await simulateHumanClick(searchButton);
};

export const snipingBotSetup = async (rarity, prices) => {
	// click transfers tab
	await openTransfersTab();
	// open transfer market
	await setTransfersTile();
	// select common rarity
	await setRarity(rarity);
	// set prices
	await setPrices(prices);
};
