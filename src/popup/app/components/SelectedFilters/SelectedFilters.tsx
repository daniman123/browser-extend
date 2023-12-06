import { ISelectedFilters } from "../../types";
import FilterControls from "./FilterControls";
import RenderSelectedFilters from "./RenderSelectedFilters";

const SelectedFilters = ({
  elements,
  setElements,
  setActiveList,
  activeList,
}: ISelectedFilters) => {
  return (
    <>
      <FilterControls elements={elements} setElements={setElements} />

      <RenderSelectedFilters
        elements={elements}
        activeList={activeList}
        setActiveList={setActiveList}
        setElements={setElements}
      />
    </>
  );
};

export default SelectedFilters;
