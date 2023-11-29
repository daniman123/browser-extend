import React, { useState } from "react";
import PriceInputs from "./components/PriceInputs";
import rarities from "../data/activeRarities.json";
import FiltersPanel from "./components/FiltersPanel";

const App = () => {
	const [rarity, setRarity] = useState("");
	const [prices, setPrices] = useState([0, 0, 0, 0]);
	return (
		<main>
			<h1>Pengu</h1>
			current rarity: {rarity}
			<section>
				<FiltersPanel
					defaultOptionLabel="Rarity"
					setRarity={setRarity}
					jsonData={rarities}
				/>

				<PriceInputs setPrices={setPrices} prices={prices} />

				{/* <RuntimeControls rarity={rarity} prices={prices} /> */}
			</section>
		</main>
	);
};

export default App;
