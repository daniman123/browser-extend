import { IToggleBotSection } from "../../types";
import ToggleBot from "./ToggleBot";

const TOGGLE_BOT_STYLE = `grid h-full w-full grid-flow-row auto-rows-auto bg-gradient-to-b from-[#5D9FFF] to-[#6BBBFF]`;
const PENGU_SNIPING_BOT_STYLE =
  "flex items-center justify-center text-3xl font-bold";

const ToggleBotSection = ({ setToggleBot }: IToggleBotSection) => (
  <section className={TOGGLE_BOT_STYLE}>
    <h1 className={PENGU_SNIPING_BOT_STYLE}>Pengu Sniping Bot</h1>
    <ToggleBot setToggleBot={setToggleBot} />
  </section>
);

export default ToggleBotSection;
