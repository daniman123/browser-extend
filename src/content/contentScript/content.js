import { test } from "./__tests__";
import { snipingBot } from "../snipingBot/index";

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.bot === "test") {
    console.log("first test export");
    console.log(request.rarity);
    console.log(request.prices);
    test();
    console.log("test complete");
  }
  if (request.bot === "startBot") {
    console.log("yo bot first");
    await snipingBot(request.rarity, request.prices);
  }
});
