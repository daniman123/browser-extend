import React, { useState } from "react";
import ToggleBot from "./components/ToggleBot";
import MainContent from "./components/MainContent";

const App = () => {
	const [toggleBot, setToggleBot] = useState(false);
	return (
		<main className="h-[700px] w-[700px]">
			{!toggleBot ? (
				<section className={`h-full w-full grid grid-flow-row auto-rows-auto`}>
					{/* Title */}
					<h1 className="flex items-center justify-center font-bold text-3xl">
						Pengu
					</h1>

					{/* Runtime controls */}
					<ToggleBot setToggleBot={setToggleBot} />
				</section>
			) : (
				<MainContent />
			)}
		</main>
	);
};

export default App;
