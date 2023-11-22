import selectors from "./selectors/selectors.json";

export const executeScriptOnActiveTab = (tabId, scriptDetails, logMessage) => {
  chrome.scripting
    .executeScript({
      target: { tabId },
      ...scriptDetails,
    })
    .then(() => console.log(logMessage));
};

export const getSelector = (
  selectors,
  selectorPrefix,
  selectorType,
  uniqueSelector,
  seperator = ".",
  baseKey = "base"
) => {
  const base = selectors[0][selectorType]["shared"][baseKey];
  const unique = selectors[0][selectorType]["unique"][uniqueSelector];

  const selectorComponents = [base, unique];

  const selector = selectorComponents.join(seperator);

  return selectorPrefix + selector;
};

export const simulateClick = (
  selectorPrefix,
  selectorType,
  uniqueSelector,
  seperator = "."
) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      action: "simulateClick",
      selector: `${getSelector(
        selectors,
        selectorPrefix,
        selectorType,
        uniqueSelector,
        seperator
      )}`,
    });
  });
};

