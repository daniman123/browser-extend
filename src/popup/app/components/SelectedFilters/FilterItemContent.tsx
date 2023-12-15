import { IFilterItemControls } from "../../types";
import { FilterItemControls } from "./FilterItemControls";

export const FilterItemContent = (props: IFilterItemControls) => {
  return (
    <>
      <div className="flex">
        <FilterItemControls {...props} />
      </div>
      {props.element.rarityFilters}
      {props.element.priceFilters.join(",")}
    </>
  );
};
