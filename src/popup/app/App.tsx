import { useState } from "react";
import MainContent from "./components/MainContent";
import ToggleBot from "./components/ToggleBot";

const App = () => {
  const [toggleBot, setToggleBot] = useState(true);
  return (
    <main className="h-[700px] w-[700px]">
      {!toggleBot ? (
        <section
          className={`grid h-full w-full grid-flow-row auto-rows-auto bg-gradient-to-b from-[#5D9FFF] to-[#6BBBFF]`}
        >
          <h1 className="flex items-center justify-center text-3xl font-bold ">
            Pengu Sniping Bot
          </h1>

          <ToggleBot setToggleBot={setToggleBot} />
        </section>
      ) : (
        <MainContent />
      )}
    </main>
  );
};

export default App;
