import { simulateClick } from "./utils";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getRandomDelay = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export async function main() {
  simulateClick(".", "tabs", "transfersTab");
  let totalDelay =
    getRandomDelay(500, 1000) +
    getRandomDelay(500, 1000) +
    getRandomDelay(500, 2000);
  await delay(totalDelay);

  simulateClick(".", "tabs", "homeTab");
  totalDelay =
    getRandomDelay(500, 1000) +
    getRandomDelay(500, 1000) +
    getRandomDelay(500, 2000);
  await delay(totalDelay);

  simulateClick(".", "tabs", "storeTab");
}
