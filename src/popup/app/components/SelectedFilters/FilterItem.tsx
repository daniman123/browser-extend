import { removeElement } from "../../lib/utils";
import { IFilterItem, IFilterItemControls } from "../../types";

export const FilterItemControls = ({
  elements,
  setElements,
  index,
}: IFilterItemControls) => {
  return (
    <>
      <p>Filter {index + 1}</p>
      <button
        className="text-red-700"
        onClick={() => removeElement(elements, setElements, index)}
      >
        X
      </button>
    </>
  );
};

const Item = (props: IFilterItemControls) => {
  return (
    <>
      <div className="flex">
        <FilterItemControls {...props} />
      </div>
      {props.element.additionalData}
    </>
  );
};

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
    <Item
      element={element}
      elements={elements}
      setElements={setElements}
      index={index}
    />
  </div>
);

export default FilterItem;
