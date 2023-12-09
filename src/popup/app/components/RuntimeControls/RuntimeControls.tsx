import { injectContentScript } from "../../../handlers";
import { IRuntimeControls } from "../../types";
import { runMain } from "./utils";

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
