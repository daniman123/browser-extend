export function ss(element, text) {
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
