import { addElement, removeElement } from "../../lib/utils";
import { ISelectedFilters } from "../../types";

const SelectedFilters = ({
  elements,
  setElements,
  setActiveList,
  activeList,
}: ISelectedFilters) => {
  return (
    <>
      <div className="flex gap-1">
        <button
          className="h-1/6"
          onClick={() => addElement(elements, setElements)}
        >
          Add Filter
        </button>
        <button
          className="h-1/6 "
          disabled={!elements.length}
          onClick={() => setElements([])}
        >
          Clear All Filters
        </button>
      </div>

      <div className="grid h-5/6 grid-cols-3 gap-2 overflow-y-auto">
        {elements.map((element, index) => (
          <div
            className={`border
            ${index === activeList ? " bg-green-500" : " border-slate-700"}
            `}
            onClick={() => setActiveList(index)}
          >
            <div className="flex">
              <p key={element.id}>{element.content}</p>
              <button
                className="text-red-700"
                onClick={() => removeElement(elements, setElements, index)}
              >
                X
              </button>
            </div>
            <div>{element.additionalData}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectedFilters;
