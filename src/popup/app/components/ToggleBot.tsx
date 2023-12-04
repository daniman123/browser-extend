import React from "react";

export interface IToggleBot {
  setToggleBot: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleBot = ({ setToggleBot }: IToggleBot) => {
  return (
    <div className="row-span-1 flex items-center justify-center">
      <button
        className="rounded-lg border-2 border-blue-950 bg-blue-500 p-3"
        onClick={() => setToggleBot(true)}
      >
        Enable Bot
      </button>
    </div>
  );
};

export default ToggleBot;
