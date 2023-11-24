import { simulateClickOnElement, test, verifyClick } from "./contentUtils";

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.test) {
    test();
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

    
  }
});
