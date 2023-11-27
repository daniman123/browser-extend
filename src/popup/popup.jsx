import React, { useState } from "react";
import { render } from "react-dom";
import RuntimeControls from "./components/RuntimeControls.jsx";
import FiltersPanel from "./components/FiltersPanel.jsx";
import rarityData from "./data/rarities.json";

const rarities = [
	"Any",
	"Common",
	"Rare",
	"Centurions",
	"Centurions ICON",
	"CONMEBOL Libertadores",
	"CONMEBOL Libertadores MOTM",
	"CONMEBOL Sudamericana",
	"CONMEBOL Sudamericana MOTM",
	"Domestic Man of the Match",
	"FC Pro Live",
	"Icon",
	"Nike",
	"Team of the Week",
	"Trailblazers",
	"Triple Threat",
	"Triple Threat Heroes",
	"UCL Road to the Knockouts",
	"UECL Road to the Knockouts",
	"UEFA Heroes (Mens)",
	"UEFA Heroes (Womens)",
	"UEL Road to the Knockouts",
	"UT Heroes",
	"UWCL Road to the Knockouts",
];

const Popup = () => {
	const [rarity, setRarity] = useState("");
	const [maxBidPrice, setMaxBidPrice] = useState(0);
	return (
		<main>
			<h1>Pengu</h1>
			current rarity: {rarity}
			<section>
				<FiltersPanel
					defaultOptionLabel="Rarity"
					setRarity={setRarity}
					jsonData={rarities}
					columnName=""
				/>
				<h4>Max Bid</h4>
				<input
					type="tel"
					onChange={(e) => {
						setMaxBidPrice(e.target.value);
					}}
				/>

				<RuntimeControls rarity={rarity} maxBidPrice={maxBidPrice} />
			</section>
		</main>
	);
};

render(<Popup />, document.getElementById("react-target"));
