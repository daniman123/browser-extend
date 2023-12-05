import { useCallback } from "react";
import { addElement } from "../../lib/utils";
import { ISelectedFilters } from "../../types";
import FilterControls from "./FilterControls";
import RenderSelectedFilters from "./RenderSelectedFilters";

const SelectedFilters = ({
  elements,
  setElements,
  setActiveList,
  activeList,
}: ISelectedFilters) => {
  const clearAllFilters = useCallback(() => setElements([]), [setElements]);
  const addFilter = useCallback(
    () => addElement(elements, setElements),
    [elements, setElements],
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
