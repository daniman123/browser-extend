import { delay, getRandomDelay } from "./delay";

export function simulateClickOnElement(selector) {
	const element = document.querySelector(selector);

	if (element) {
		["mouseover", "mousedown", "mouseup", "click"].forEach((eventType) => {
			element.dispatchEvent(
				new MouseEvent(eventType, {
					bubbles: true,
					cancelable: true,
					view: window,
				})
			);
		});
	} else {
		console.log("Element not found: " + selector);
	}
}

export async function simulateHumanClick(selector) {
	simulateClickOnElement(selector);
	const totalDelay =
		getRandomDelay(500, 1000) +
		getRandomDelay(500, 1000) +
		getRandomDelay(500, 2000);
	await delay(totalDelay);
}

export const verifyClick = async (selector, delta) => {
	const isTransferTabOpen = document.querySelector([selector, delta].join("."));
	if (!isTransferTabOpen) {
		await simulateHumanClick(selector);
	}
};
