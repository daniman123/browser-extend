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
    default:
      return "";
  }
};

export type TsetPrices = (
  updateFunc: (prevState: number[]) => number[],
) => void;

interface IPriceInputProps {
  index: number;
  price: number;
  setPrices: TsetPrices;
}

export const handleChange =
  (setPrices: TsetPrices, index: number) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrices((prevState) => {
      const updatedPrices = [...prevState];
      updatedPrices[index] = parseInt(e.target.value);
      return updatedPrices;
    });
  };

const PriceInput = ({ index, price, setPrices }: IPriceInputProps) => {
  return (
    <>
      <h4 className="indent-1 font-semibold">{setInputTitle(index)}</h4>
      <input
        className="w-full indent-2 outline-none"
        type="tel"
        value={price || ""}
        onChange={handleChange(setPrices, index)}
      />
    </>
  );
};

const PriceInputs = ({ prices, setPrices }: IPriceInputs) => {
  return (
    <>
      {prices.map((price, index) => (
        <PriceInput
          key={index}
          index={index}
          price={price}
          setPrices={setPrices}
        />
      ))}
    </>
  );
};

export default PriceInputs;
