import { IFilterItem } from "../../types";
// TODO - Reduce compl.
const FilterItem = ({
  element,
  isActive,
  onSetActiveList,
  onRemoveElement,
}: IFilterItem) => (
  <div
    className={`border ${isActive ? "bg-green-500" : "border-slate-700"}`}
    onClick={onSetActiveList}
  >
    <div className="flex">
      <p key={element.id}>{element.content}</p>
      <button className="text-red-700" onClick={onRemoveElement}>
        X
      </button>
    </div>
    <div>{element.additionalData}</div>
  </div>
);

export default FilterItem;
