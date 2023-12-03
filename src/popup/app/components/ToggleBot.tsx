import React from "react";

export interface IToggleBot {
	setToggleBot: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleBot = ({ setToggleBot }: IToggleBot) => {
	return (
		<div className="flex items-center justify-center row-span-1">
			<button className="" onClick={() => setToggleBot(true)}>
				Enable Bot
			</button>
		</div>
	);
};

export default ToggleBot;
