// import { simulateHumanTyping } from "../actions/typing/typing";

// In other modules, e.g., setup.js

import {
	getTabSelector,
	getRarityDropdownElementSelector,
} from "../selectors/selectorManager";

export const openTransfersTab = async () => {
	// const transfersTab = getTabSelector("transfersTab");
	// console.log(
	// 	"🚀 ~ file: __tests__.js:12 ~ openTransfersTab ~ transfersTab:",
	// 	transfersTab
	// );
	const filters = getRarityDropdownElementSelector("rarityDropdown");
	console.log(
		"🚀 ~ file: __tests__.js:18 ~ openTransfersTab ~ filters:",
		filters
	);
};

export const test = () => {
	// simulateHumanTyping("#APjFqb", "Hello, World!123");
	openTransfersTab();
};
