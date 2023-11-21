import { simulateClick } from "../utils";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getRandomDelay = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

export const simulateHumanClick = async (
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
