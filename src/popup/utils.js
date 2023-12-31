export const executeScriptOnActiveTab = (tabId, scriptDetails, logMessage) => {
	chrome.scripting
		.executeScript({
			target: { tabId },
			...scriptDetails,
		})
		.then(() => console.log(logMessage));
};

export const main = (msg) => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, msg);
	});
};
