import React from "react";

export interface IFiltersPanel {
	defaultOptionLabel: string;
	setRarity: React.Dispatch<React.SetStateAction<string>>;
	jsonData: string[];
}

const FiltersPanel = ({
	defaultOptionLabel,
	setRarity,
	jsonData,
}: IFiltersPanel) => {
	return (
		<>
			<select
				name=""
				id=""
				className="w-full"
				defaultValue={defaultOptionLabel}
				onChange={(e) => {
					setRarity(e.target.value);
				}}
			>
				<option disabled value={defaultOptionLabel}>
					{defaultOptionLabel}
				</option>

				{jsonData.map((value, index) => (
					<option key={index} value={value}>
						{value}
					</option>
				))}
			</select>
		</>
	);
};

export default FiltersPanel;
