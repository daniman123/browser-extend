import { IPriceInputProps } from "../../types";
import { handleChange, setInputTitle } from "./utils";

export const PriceInputField = ({
  index,
  price,
  setPrices,
}: IPriceInputProps) => {
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
