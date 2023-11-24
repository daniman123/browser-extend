import { setFilters } from "./botRuntime/setup/setup";
import { test } from "./contentUtils";
import { getSelector } from "./selectors/utils";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.test) {
		test();
		const selector = getSelector(".", "tabs", "transfersTab");
		console.log(
			"🚀 ~ file: content.js:8 ~ chrome.runtime.onMessage.addListener ~ selector:",
			selector
		);
	}
	if (request.bot === "startBot") {
		console.log("yo bot first")
		setFilters();
	}
});
