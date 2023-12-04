import { injectContentScript } from "../../handlers";
import { main } from "../../utils";

export interface IRuntimeControls {
  rarity: string;
  prices: number[];
}

const RuntimeControls = ({ rarity, prices }: IRuntimeControls) => {
  return (
    <>
      <button onClick={injectContentScript}>INject!</button>
      <button
        onClick={() =>
          main({
            test: true,
            rarity: rarity,
            prices: prices,
          })
        }
      >
        TEST!
      </button>
      <button
        onClick={() =>
          main({
            bot: "startBot",
            rarity: rarity,
            prices: prices,
          })
        }
      >
        Run Bot!
      </button>
    </>
  );
};

export default RuntimeControls;
