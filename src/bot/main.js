import { transferMarketActions } from "./transferMarket/transferMarket";
import { simulateHumanClick } from "./utils";

export async function main() {
	// initial command - open transfersTab
	await simulateHumanClick(".", "tabs", "transfersTab");

	// transfermarket commands
	await transferMarketActions();
}
