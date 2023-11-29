import React from "react";

export type Tprices = number[];
export interface IPriceInputs {
	prices: Tprices;
	setPrices: React.Dispatch<React.SetStateAction<Tprices>>;
}
const setInputTitle = (index: number) => {
	switch (index) {
		case 0:
			return "Min Bid";
		case 1:
			return "Max Bid";
		case 2:
			return "Min Bin";
		case 3:
			return "Max Bin";
	}
};
const PriceInputs = ({ prices, setPrices }: IPriceInputs) => {
	return (
		<>
			{[0, 1, 2, 3].map((index) => (
				<React.Fragment key={index}>
					<h4>{setInputTitle(index)}</h4>
					<input
						type="tel"
						value={prices[index] || ""}
						onChange={(e) => {
							setPrices((prevState) => {
								const updatedPrices = [...prevState];
								updatedPrices[index] = parseInt(e.target.value);
								return updatedPrices;
							});
						}}
					/>
				</React.Fragment>
			))}
		</>
	);
};

export default PriceInputs;
