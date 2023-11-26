import { calculateTypingDelay, dispatchInputEvent } from "./utils.js";

export function updateText(element, currentIndex, isBackspacing, numericText) {
	if (isBackspacing) {
		return element.value.slice(0, -1);
	} else {
		return element.value + numericText.charAt(currentIndex);
	}
}

export function updateTypingState(element, currentIndex, numericText) {
	const isBackspacing = false;

	if (element.value === numericText.slice(0, currentIndex)) {
		currentIndex++;
	} else {
		isBackspacing = true;
	}

	return { currentIndex, isBackspacing };
}

export function scheduleNextTypeAction(typeChar, isBackspacing) {
	setTimeout(typeChar, calculateTypingDelay(isBackspacing));
}

export function createTypingMechanism(element, numericText) {
	let currentIndex = 0;
	let isBackspacing = false;

	const typeChar = () => {
		if (currentIndex > numericText.length) return;

		element.value = updateText(
			element,
			currentIndex,
			isBackspacing,
			numericText
		);
		({ currentIndex, isBackspacing } = updateTypingState(
			element,
			currentIndex,
			numericText
		));
		dispatchInputEvent(element);
		scheduleNextTypeAction(typeChar, isBackspacing);
	};

	return typeChar;
}
