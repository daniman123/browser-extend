import { TsetPrices } from "../../types";

export const setInputTitle = (index: number) => {
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
