import selectors from "./selectors.json";

export const getSelectors = (selectorCategory) => {
	return selectors[selectorCategory];
};

// Accessor function for tabs
export const getTabSelector = (tabName) => {
	return selectors.tabs[tabName];
};

// Accessor function for transfer tab tiles
export const getTransfersTabTileSelector = (tileName) => {
	return selectors.transfersTabTiles[tileName];
};

// Accessor function for search filters
export const getSearchFilterSelector = (filterName) => {
	return selectors.searchFilters[filterName];
};

// Accessor function for rarity dropdown elements
export const getRarityDropdownElementSelector = (elementName) => {
	return selectors.rarityDropdownElements[elementName];
};

// Accessor function for price filters
export const getPriceFilterSelector = (filterName) => {
	return selectors.priceFilters[filterName];
};

// Accessor function for transfer market buttons
export const getTransferMarketButtonSelector = (buttonName) => {
	return selectors.transferMarketButtons[buttonName];
};

export default {
	getSelectors,
	getTabSelector,
	getButtonSelector,
	getTransfersTabTileSelector,
	getSearchFilterSelector,
	getRarityDropdownElementSelector,
	getPriceFilterSelector,
	getTransferMarketButtonSelector,
};
