import { useState } from "react";
import MainContent from "./components/MainContent";
import ToggleBotSection from "./components/ToggleBotSection";

const App = () => {
  const [toggleBot, setToggleBot] = useState(true);

  return (
    <main className="h-[700px] w-[700px]">
      {!toggleBot ? (
        <ToggleBotSection setToggleBot={setToggleBot} />
      ) : (
        <MainContent />
      )}
    </main>
  );
};

export default App;
