import { IPriceInputs } from "../../types";
import { PriceInputField } from "./PriceInputField";

const PriceInputs = ({ prices, setPrices }: IPriceInputs) => {
  return (
    <>
      {prices.map((price, index) => (
        <PriceInputField
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
