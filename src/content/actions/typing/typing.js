import {
  calculateTypingDelay,
  createBackspaceCharacter,
  createDispatchTypingEvents,
  createTypeCharacter,
  filterNumericCharacters,
} from "./utils";

export function simulateHumanTyping(selector, text) {
  const element = document.querySelector(selector);

  let currentIndex = { value: 0 };
  let isBackspacing = { value: false };
  const numericText = filterNumericCharacters(text);

  const typeCharacter = createTypeCharacter(element, numericText, currentIndex);
  const backspaceCharacter = createBackspaceCharacter(
    element,
    numericText,
    currentIndex,
    isBackspacing,
  );
  const dispatchTypingEvents = createDispatchTypingEvents(element);

  const shouldBackspace = () => Math.random() < 0.03 && !isBackspacing.value;

  const typeChar = () => {
    if (currentIndex.value <= numericText.length) {
      if (!isBackspacing.value) {
        typeCharacter();
      } else {
        backspaceCharacter();
      }

      dispatchTypingEvents();

      if (shouldBackspace()) {
        isBackspacing.value = true;
      }

      setTimeout(typeChar, calculateTypingDelay(isBackspacing.value));
    }
  };

  typeChar();
}
