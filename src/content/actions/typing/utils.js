export function filterNumericCharacters(text) {
	return text.replace(/\D/g, "");
}

export function dispatchInputEvent(element) {
	element.dispatchEvent(new Event("input", { bubbles: true }));
}

export function calculateTypingDelay(isBackspacing) {
	return isBackspacing ? 60 : 120 + Math.random() * 80;
}

