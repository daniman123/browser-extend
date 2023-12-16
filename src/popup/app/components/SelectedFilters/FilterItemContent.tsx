import { IFilterItemControls } from "../../types";
import { FilterItemControls } from "./FilterItemControls";

const DisplayPriceFilters = ({ priceFilters }: { priceFilters: any }) => {
  const minBid = priceFilters[0];
  const maxBid = priceFilters[1];
  const minBin = priceFilters[2];
  const maxBin = priceFilters[3];

  const divStyle = "flex gap-1 border";

  return (
    <>
      Price Filters
      <div className={divStyle}>
        <p>Min Bid: {minBid}</p>
        <p>Max Bid: {maxBid}</p>
      </div>
      <div className={divStyle}>
        <p>Min Bin: {minBin}</p>
        <p>Max Bin: {maxBin}</p>
      </div>
    </>
  );
};

export const FilterItemContent = (props: IFilterItemControls) => {
  return (
    <>
      <div className="flex">
        <FilterItemControls {...props} />
      </div>
      {props.element.rarityFilters}
      <DisplayPriceFilters {...props.element} />
    </>
  );
};
