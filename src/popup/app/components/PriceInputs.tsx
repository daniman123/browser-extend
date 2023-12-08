import React from "react";
import { IPriceInputProps, IPriceInputs, TsetPrices } from "../types";

const setInputTitle = (index: number) => {
  const inputTitles = ["Min Bid", "Max Bid", "Min Bin", "Max Bin"];
  return inputTitles[index] || "";
};

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
