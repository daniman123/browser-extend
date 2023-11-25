import { executeScriptOnActiveTab } from "./utils";

export const injectContentScript = () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const activeTab = tabs[0].id;

		executeScriptOnActiveTab(
			activeTab,
			{
				files: ["content.js"],
			},
			"script injected"
		);
	});
};
