import { simulateClick } from "./utils";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getRandomDelay = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

const simulateHumanClick = async (
	selectorPrefix,
	selectorType,
	uniqueSelector
) => {
	simulateClick(selectorPrefix, selectorType, uniqueSelector);
	const totalDelay =
		getRandomDelay(500, 1000) +
		getRandomDelay(500, 1000) +
		getRandomDelay(500, 2000);
	await delay(totalDelay);
};

export async function main() {
	await simulateHumanClick(".", "tabs", "transfersTab");
	await simulateHumanClick(".", "tabs", "homeTab");
	await simulateHumanClick(".", "tabs", "storeTab");
}
