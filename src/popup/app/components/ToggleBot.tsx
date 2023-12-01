import React from "react";

export interface IToggleBot {
	setToggleBot: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleBot = ({ setToggleBot }: IToggleBot) => {
	return (
		<button
			className="rounded-lg bg-red-500"
			onClick={() => setToggleBot(true)}
		>
			Enable Bot
		</button>
	);
};

export default ToggleBot;
