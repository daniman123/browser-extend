export function simulateHumanTyping(element, text) {
	let currentIndex = 0;
	let isBackspacing = false;

	// Ensure only numeric characters are in the text
	const numericText = text.replace(/[^0-9]/g, "");

	const typeChar = () => {
		if (currentIndex <= numericText.length) {
			// Simulate typing or backspacing
			if (!isBackspacing) {
				// Add numeric character
				element.value += numericText.charAt(currentIndex);
				currentIndex++;
			} else {
				// Remove character
				element.value = element.value.slice(0, -1);
				if (element.value === numericText.slice(0, currentIndex)) {
					// Stop backspacing
					isBackspacing = false;
				}
			}

			// Trigger keyboard and input events
			["keydown", "keyup", "input"].forEach((eventType) => {
				element.dispatchEvent(new Event(eventType, { bubbles: true }));
			});

			// Randomly decide to simulate a mistake, adjusted for length
			if (Math.random() < 0.03 && !isBackspacing) {
				isBackspacing = true;
			}

			// Adjusted typing delay for numeric input
			const typingDelay = isBackspacing ? 60 : 120 + Math.random() * 80;
			setTimeout(typeChar, typingDelay);
		}
	};

	typeChar();
}

/**
 * Simulates human-like typing of numeric characters in an input element.
 * @param {HTMLElement} element - The DOM element to type into.
 * @param {string} text - The text to type.
 */
export function ss(element, text) {
	if (!(element instanceof HTMLElement)) {
		console.error("Invalid element provided");
		return;
	}
	if (typeof text !== "string") {
		console.error("Text must be a string");
		return;
	}

	let currentIndex = 0;
	let isBackspacing = false;
	const numericText = filterNumericCharacters(text);

	const typeChar = () => {
		if (currentIndex <= numericText.length) {
			element.value = isBackspacing
				? element.value.slice(0, -1)
				: element.value + numericText.charAt(currentIndex);

			if (element.value === numericText.slice(0, currentIndex)) {
				isBackspacing = false;
				currentIndex += !isBackspacing ? 1 : 0;
			}

			dispatchInputEvent(element);

			if (
				Math.random() < 0.03 &&
				!isBackspacing &&
				currentIndex < numericText.length
			) {
				isBackspacing = true;
			}

			setTimeout(typeChar, calculateTypingDelay(isBackspacing));
		}
	};

	typeChar();
}

import { filterNumericCharacters } from "./utils.js";
import { createTypingMechanism } from "./typingMechanism.js";

export function sss(element, text) {
	if (!(element instanceof HTMLElement)) {
		console.error("Invalid element provided");
		return;
	}
	if (typeof text !== "string") {
		console.error("Text must be a string");
		return;
	}

	const numericText = filterNumericCharacters(text);
	const typeChar = createTypingMechanism(element, numericText);

	typeChar();
}
