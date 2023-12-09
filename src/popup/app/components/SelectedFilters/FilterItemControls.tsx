import { removeElement } from "../../lib/utils";
import { IFilterItemControls } from "../../types";

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
