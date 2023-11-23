export function simulateClickOnElement(element) {
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
		console.log("Element not found");
	}
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getRandomDelay = (min, max) =>
	Math.floor(Math.random() * (max - min + 1)) + min;

async function simulateHumanClick(element) {
	simulateClickOnElement(element);
	const totalDelay =
		getRandomDelay(500, 1000) +
		getRandomDelay(500, 1000) +
		getRandomDelay(500, 2000);
	await delay(totalDelay);
}

export default simulateHumanClick;
