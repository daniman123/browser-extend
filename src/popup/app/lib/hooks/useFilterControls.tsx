import { useCallback } from "react";
import { addElement } from "../../lib/utils";
import { Telements, TsetElements } from "../../types";

const useFilterControls = (elements: Telements, setElements: TsetElements) => {
  const clearAllFilters = useCallback(() => setElements([]), [setElements]);
  const addFilter = useCallback(
    () => addElement(elements, setElements),
    [elements, setElements],
  );

  return { addFilter, clearAllFilters };
};

export default useFilterControls;
