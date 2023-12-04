export function filterNumericCharacters(text) {
  return text.replace(/\D/g, "");
}

export function dispatchInputEvent(element) {
  element.dispatchEvent(new Event("input", { bubbles: true }));
}

export function calculateTypingDelay(isBackspacing) {
  return isBackspacing ? 60 : 120 + Math.random() * 80;
}

export function createTypeCharacter(element, numericText, currentIndex) {
  return () => {
    element.value += numericText.charAt(currentIndex.value);
    currentIndex.value++;
  };
}

export function createBackspaceCharacter(
  element,
  numericText,
  currentIndex,
  isBackspacing,
) {
  return () => {
    element.value = element.value.slice(0, -1);
    if (element.value === numericText.slice(0, currentIndex.value)) {
      isBackspacing.value = false;
    }
  };
}

// Higher-order export function for event dispatching
export function createDispatchTypingEvents(element) {
  return () => {
    ["keydown", "keyup", "input"].forEach((eventType) => {
      element.dispatchEvent(new Event(eventType, { bubbles: true }));
    });
  };
}
