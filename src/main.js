import { simulateClick } from "./utils";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getRandomDelay = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const simulateHumanClick = async (
	selectorPrefix,
	selectorType,
	uniqueSelector,
	seperator = "."
) => {
	simulateClick(selectorPrefix, selectorType, uniqueSelector, seperator);
	const totalDelay =
		getRandomDelay(500, 1000) +
		getRandomDelay(500, 1000) +
		getRandomDelay(500, 2000);
	await delay(totalDelay);
};

export async function main() {
	// initial command - open transfersTab
	await simulateHumanClick(".", "tabs", "transfersTab");

	// transfermarket commands
	await simulateHumanClick(".", "transfersTabTiles", "transferMarket");

	await simulateHumanClick(".", "searchFilters", "rarityDropdown");
}
