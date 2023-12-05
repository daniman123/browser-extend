import { IFilterButton } from "../../types";

const FilterButton = ({ onClick, disabled, text }: IFilterButton) => (
  <button className="h-1/6" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

export default FilterButton;
