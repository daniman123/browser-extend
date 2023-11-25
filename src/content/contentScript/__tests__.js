import { getSelector } from "../selectors/utils";

export const test = () => {
	const selector = getSelector(".", "tabs", "transfersTab");
	console.log(
		"🚀 ~ file: content.js:8 ~ chrome.runtime.onMessage.addListener ~ selector:",
		selector
	);
};
