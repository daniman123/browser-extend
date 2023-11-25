import { simulateHumanTyping } from "../actions/typing";

export const test = () => {
	const inputElement = document.querySelector("#APjFqb");
	simulateHumanTyping(inputElement, "Hello, World!");
};
