import React from "react";
import filtersListJson from "../../../data/activeRarities.json";

export interface IRarityDropdown {
	defaultOptionLabel: string;
	updateElement: (e: any) => void;
}

const RarityDropdown = ({
	defaultOptionLabel,
	updateElement,
}: IRarityDropdown) => {
	return (
		<select
			name=""
			id=""
			className="w-full rounded-t outline-none"
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
