import { injectContentScript } from "../../handlers";
import { main } from "../../utils";
import { IRuntimeControls } from "../types";



export const runMain =
  (botEvent: string, rarity: string, prices: number[]) => () =>
    main({
      bot: botEvent,
      rarity,
      prices,
    });

const RuntimeControls = ({ rarity, prices }: IRuntimeControls) => {
  return (
    <>
      <button onClick={injectContentScript}>INject!</button>
      <button onClick={runMain("test", rarity, prices)}>TEST!</button>
      <button onClick={runMain("startBot", rarity, prices)}>Run Bot!</button>
    </>
  );
};

export default RuntimeControls;
