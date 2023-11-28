import React from "react";

const RenderPriceInputs = ({ maxBidPrices, setMaxBidPrices }) => {
	return (
		<>
			{[0, 1, 2, 3].map((index) => (
				<input
					key={index}
					type="tel"
					value={maxBidPrices[index] || ""}
					onChange={(e) => {
						setMaxBidPrices((prevState) => {
							// Create a copy of the array
							const updatedPrices = [...prevState];
							// Update the value at the specific index
							updatedPrices[index] = e.target.value;
							// Return the updated array
							return updatedPrices;
						});
					}}
				/>
			))}
		</>
	);
};

const PriceInputs = ({ maxBidPrices, setMaxBidPrices }) => {
	return (
		<RenderPriceInputs
			maxBidPrices={maxBidPrices}
			setMaxBidPrices={setMaxBidPrices}
		/>
	);
};

export default PriceInputs;
