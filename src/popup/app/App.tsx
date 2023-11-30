import React, { useState } from "react";
import PriceInputs from "./components/PriceInputs";
import rarities from "../data/activeRarities.json";
import FiltersPanel from "./components/FiltersPanel";
import RuntimeControls from "./components/RuntimeControls";
// import "../global.css";

const App = () => {
	const [toggleBot, setToggleBot] = useState(false);
	const [rarity, setRarity] = useState("");
	const [prices, setPrices] = useState([0, 0, 0, 0]);
	return (
		<main className="">
			<h1>Pengu</h1>
			{!toggleBot ? (
				<button
					className="rounded-lg bg-red-500"
					onClick={() => setToggleBot(true)}
				>
					Enable Bot
				</button>
			) : (
				<>
					<div>current rarity: {rarity}</div>
					<section>
						<FiltersPanel
							defaultOptionLabel="Rarity"
							setRarity={setRarity}
							jsonData={rarities}
						/>
						<PriceInputs setPrices={setPrices} prices={prices} />
						<RuntimeControls rarity={rarity} prices={prices} />
					</section>
				</>
			)}
		</main>
	);
};

export default App;
