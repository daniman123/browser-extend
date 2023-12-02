import React, { useState } from "react";
import ToggleBot from "./components/ToggleBot";
import MainContent from "./components/MainContent";

const App = () => {
	const [toggleBot, setToggleBot] = useState(true);

	return (
		<main className="h-[700px] w-[700px] border ">
			<section className="h-full w-full grid grid-flow-row auto-rows-auto">
				<h1 className="flex items-center justify-center font-bold text-3xl">
					Pengu
				</h1>

				{!toggleBot ? (
					<ToggleBot setToggleBot={setToggleBot} />
				) : (
					<MainContent />
				)}
			</section>
		</main>
	);
};

export default App;
