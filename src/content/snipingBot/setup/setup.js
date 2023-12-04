import { simulateHumanClick, verifyClick } from "../../actions/click";
import { simulateHumanTyping } from "../../actions/typing/typing";
import {
  getRarityDropdownElementSelector,
  getSelectors,
  getTabSelector,
  getTransferMarketButtonSelector,
  getTransfersTabTileSelector,
} from "../../selectors/selectorManager";

export const openTransfersTab = async () => {
  const transfersTab = getTabSelector("transfersTab");
  await verifyClick(transfersTab, "selected");
};

export const setTransfersTile = async () => {
  const transferMarketTile = getTransfersTabTileSelector("transferMarket");
  await simulateHumanClick(transferMarketTile);
};

export const setRarity = async (rarity) => {
  const searchFilterDropdown = getSearchFilterSelector("rarityDropdown");
  const commonRarity = getRarityDropdownElementSelector(rarity);

  await simulateHumanClick(searchFilterDropdown);
  await simulateHumanClick(commonRarity);
};

export const populatePriceFields = async (prices) => {
  const priceFilters = getSelectors("priceFilters");

  const priceSelectors = Object.values(priceFilters);
  for (let i = 0; i < priceSelectors.length; i++) {
    await simulateHumanClick(priceSelectors[i]);
    simulateHumanTyping(priceSelectors[i], prices[i]);
  }
};

export const clickSearch = async () => {
  const searchButton = getTransferMarketButtonSelector("search");
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
  await populatePriceFields(prices);
  // search market
  await clickSearch();
};
