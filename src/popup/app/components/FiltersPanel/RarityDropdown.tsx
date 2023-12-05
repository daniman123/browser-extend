import filtersListJson from "../../../data/activeRarities.json";
import { IRarityDropdown } from "../../types";

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
      <option disabled value={defaultOptionLabel}>
        {defaultOptionLabel}
      </option>
      {filtersListJson.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default RarityDropdown;
