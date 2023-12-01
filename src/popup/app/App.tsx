import React, { useState } from "react";
import PriceInputs from "./components/PriceInputs";
import rarities from "../data/activeRarities.json";
import FiltersPanel from "./components/FiltersPanel";
import RuntimeControls from "./components/RuntimeControls";
import ToggleBot from "./components/ToggleBot";

const App = () => {
	const [toggleBot, setToggleBot] = useState(true);
	const [rarity, setRarity] = useState("");
	const [prices, setPrices] = useState([0, 0, 0, 0]);
	return (
		<main className="h-96 w-96 border ">
			<section className="h-full w-full grid grid-flow-row auto-rows-auto">
				
				<h1 className="flex items-center justify-center font-bold text-3xl">
					Pengu
				</h1>

				{!toggleBot ? (
					<ToggleBot setToggleBot={setToggleBot} />
				) : (
					<section className="w-full grid grid-flow-col auto-cols-fr">
						<section className="w-full p-2">
							<FiltersPanel
								defaultOptionLabel="Rarity"
								setRarity={setRarity}
								jsonData={rarities}
							/>
							<PriceInputs setPrices={setPrices} prices={prices} />
							<RuntimeControls rarity={rarity} prices={prices} />
						</section>
						<section>yo</section>
					</section>
				)}
			</section>
		</main>
	);
};

export default App;
