export function simulateClickOnElement(selector) {
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

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getRandomDelay = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export async function simulateHumanClick(selector) {
  simulateClickOnElement(selector);
  const totalDelay =
    getRandomDelay(500, 1000) +
    getRandomDelay(500, 1000) +
    getRandomDelay(500, 2000);
  await delay(totalDelay);
}

export const verifyClick = (selector, delta) => {
  const isTransferTabOpen = document.querySelector([selector, delta].join("."));
  if (!isTransferTabOpen) {
    simulateClickOnElement(selector);
  }
};

export const test = () => {
  console.log("first test export");
};
