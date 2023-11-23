function simulateClickOnElement(selector) {
	element = document.querySelector(selector);

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

const verifyClick = (selector, delta) => {
	const isTransferTabOpen = document.querySelector([selector, delta].join("."));
	if (!isTransferTabOpen) {
		simulateClickOnElement(selector);
	}
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "simulateClick") {
		console.log("content file message recievde");
		const selector = request.selector;
		console.log(
			"🚀 ~ file: content.js:23 ~ chrome.runtime.onMessage.addListener ~ selector:",
			selector
		);
		simulateClickOnElement(selector);
	}
	if (request.click === "startBot") {
		verifyClick("ut-tab-bar-item.icon-transfer", "selected");

		// click transfer market
		simulateClickOnElement("tile.ut-tile-transfer-market");

		// open rarity dropdown
		simulateClickOnElement(
			"inline-list-select.ut-search-filter-control.has-default.has-image:nth-child(3) > div > div"
		);

		// select rarity
		document.querySelector("li.with-icon:nth-child(2)").click();

		// simulateClickOnElement("li.with-icon:nth-child(2)");
	}
});
