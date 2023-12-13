import { useState } from "react";
import { renderContent } from "./helpers";

const App = () => {
  const [toggleBot, setToggleBot] = useState(true);

  return (
    <main className="h-[700px] w-[700px]">
      {renderContent(toggleBot, setToggleBot)}
    </main>
  );
};

export default App;
