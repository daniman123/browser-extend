import React from "react";
import { IRenderSelectedFilters } from "../../types";
import FilterItem from "./FilterItem";

const RenderSelectedFilters = ({
  elements,
  activeList,
  setActiveList,
  setElements,
}: IRenderSelectedFilters) => {
  return (
    <div className="grid h-5/6 grid-cols-3 gap-2 overflow-y-auto">
      {elements.map((element, index) => (
        <MemoizedFilterItem
          key={element.id}
          element={element}
          index={index}
          activeList={activeList}
          setActiveList={setActiveList}
          elements={elements}
          setElements={setElements}
        />
      ))}
    </div>
  );
};

const MemoizedFilterItem = React.memo(FilterItem);

export default RenderSelectedFilters;
