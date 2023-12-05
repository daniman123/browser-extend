import { IFilterControls } from "../../types";
import FilterButton from "./FilterButton";

const FilterControls = ({
  addFilter,
  clearAllFilters,
  disabled,
}: IFilterControls) => {
  return (
    <div className="flex gap-1">
      <FilterButton onClick={addFilter} text="Add Filter" />
      <FilterButton
        onClick={clearAllFilters}
        disabled={disabled}
        text="Clear All Filters"
      />
    </div>
  );
};

export default FilterControls;
