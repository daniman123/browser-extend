import useFilterControls from "../../lib/hooks/useFilterControls";
import { IFilterControls } from "../../types";
import FilterButton from "./FilterButton";

const FilterControls = ({ elements, setElements, }: IFilterControls) => {
  const { addFilter, clearAllFilters } = useFilterControls(
    elements,
    setElements,
  );

  return (
    <div className="flex gap-1">
      <FilterButton onClick={addFilter} text="Add Filter" />
      <FilterButton
        onClick={clearAllFilters}
        disabled={!elements.length}
        text="Clear All Filters"
      />
    </div>
  );
};

export default FilterControls;
