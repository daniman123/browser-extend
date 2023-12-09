import { IFilterItem } from "../../types";
import { FilterItemContent } from "./FilterItemContent";

const FilterItem = ({
  index,
  activeList,
  element,
  setActiveList,
  elements,
  setElements,
}: IFilterItem) => (
  <div
    className={`border ${
      index === activeList ? "bg-green-500" : "border-slate-700"
    }`}
    onClick={() => setActiveList(index)}
  >
    <FilterItemContent
      element={element}
      elements={elements}
      setElements={setElements}
      index={index}
    />
  </div>
);

export default FilterItem;
