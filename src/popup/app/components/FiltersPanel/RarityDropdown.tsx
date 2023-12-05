import { IRarityDropdown } from "../../types";
import { DropdownOptions } from "./DropdownOptions";

const RarityDropdown = ({
  defaultOptionLabel,
  updateElement,
  isDisabled,
}: IRarityDropdown) => {
  return (
    <select
      name=""
      id=""
      className="w-full rounded-t outline-none"
      disabled={isDisabled}
      defaultValue={defaultOptionLabel}
      onChange={updateElement}
    >
      <DropdownOptions defaultOptionLabel={defaultOptionLabel} />
    </select>
  );
};

export default RarityDropdown;
