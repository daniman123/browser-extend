import { test } from "./__tests__";
import { snipingBot } from "../snipingBot/index";

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
	if (request.test) {
		console.log(request.rarity);
		console.log("first test export");
		test();
	}
	if (request.bot === "startBot") {
		console.log("yo bot first");
		await snipingBot(request.rarity);
	}
});
