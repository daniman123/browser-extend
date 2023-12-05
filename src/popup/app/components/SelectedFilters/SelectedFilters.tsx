import useFilterControls from "../../lib/hooks/useFilterControls";
import { ISelectedFilters } from "../../types";
import FilterControls from "./FilterControls";
import RenderSelectedFilters from "./RenderSelectedFilters";

const SelectedFilters = ({
  elements,
  setElements,
  setActiveList,
  activeList,
}: ISelectedFilters) => {
  const { addFilter, clearAllFilters } = useFilterControls(
    elements,
    setElements,
  );

  return (
    <>
      <FilterControls
        addFilter={addFilter}
        clearAllFilters={clearAllFilters}
        disabled={!elements.length}
      />

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
