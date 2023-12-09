import { main } from "../../../utils";

export const runMain =
  (botEvent: string, rarity: string, prices: number[]) => () =>
    main({
      bot: botEvent,
      rarity,
      prices,
    });
