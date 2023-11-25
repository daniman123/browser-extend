export function simulateHumanTyping(element, text) {
	let currentIndex = 0;
	let isBackspacing = false;

	const typeChar = () => {
		if (currentIndex <= text.length) {
			// Simulate typing or backspacing
			if (!isBackspacing) {
				// Add character
				element.value += text.charAt(currentIndex);
				currentIndex++;
			} else {
				// Remove character
				element.value = element.value.slice(0, -1);
				if (currentIndex === element.value.length) {
					// Stop backspacing
					isBackspacing = false;
				}
			}

			// Trigger input event
			element.dispatchEvent(new Event("input", { bubbles: true }));

			// Randomly decide to simulate a mistake
			if (Math.random() < 0.05 && !isBackspacing) {
				isBackspacing = true;
			}

			// Calculate next typing delay
			const typingDelay = isBackspacing ? 50 : 100 + Math.random() * 100;
			setTimeout(typeChar, typingDelay);
		}
	};

	typeChar();
}
