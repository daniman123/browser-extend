import React, { useCallback } from 'react';
import { removeElement } from "../../lib/utils";
import { IRenderSelectedFilters } from "../../types";
import FilterItem from "./FilterItem";

const RenderSelectedFilters = ({
  elements,
  activeList,
  setActiveList,
  setElements,
}: IRenderSelectedFilters) => {

  const handleSetActiveList = useCallback((index: number) => {
    setActiveList(index);
  }, [setActiveList]);

  const handleRemoveElement = useCallback((index: number) => {
    removeElement(elements, setElements, index);
  }, [elements, setElements]);

  return (
    <div className="grid h-5/6 grid-cols-3 gap-2 overflow-y-auto">
      {elements.map((element, index) => (
        <MemoizedFilterItem
          key={element.id}
          element={element}
          isActive={index === activeList}
          onSetActiveList={() => handleSetActiveList(index)}
          onRemoveElement={() => handleRemoveElement(index)}
        />
      ))}
    </div>
  );
};

const MemoizedFilterItem = React.memo(FilterItem);

export default RenderSelectedFilters;
