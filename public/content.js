function simulateClickOnElement(selector) {
  const element = document.querySelector(selector);

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

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function typingDelay() {
  // Average typing speed is between 30-60 WPM.
  // This translates to approximately 100 - 300 milliseconds per character.
  return Math.random() * (300 - 100) + 100;
}

export async function simulateTyping(element, text, typingDelay) {
  for (const char of text) {
    element.value += char;
    await delay(typingDelay());
  }
}

export async function simulateTypingWithTypos(element, text, typingDelay) {
  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    // Randomly decide to make a typo
    if (Math.random() < 0.1) {
      // 10% chance of typo
      char = getRandomChar();
      element.value += char;
      await delay(typingDelay());

      // Correct the typo
      element.value = element.value.slice(0, -1);
      await delay(typingDelay());
    }

    // Type the correct character
    element.value += char;
    await delay(typingDelay());
  }
}

export function getRandomChar() {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return chars[Math.floor(Math.random() * chars.length)];
}

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
});
