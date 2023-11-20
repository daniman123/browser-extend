function simulateClickOnElement(selector) {
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

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "simulateClick") {
		console.log("content file message recievde");
		const selector = request.selector;
		console.log("🚀 ~ file: content.js:23 ~ chrome.runtime.onMessage.addListener ~ selector:", selector)
		simulateClickOnElement(selector);
	}
});
