import React from "react";

export interface IFiltersPanel {
	defaultOptionLabel: string;
	children: React.ReactNode;
}

const FiltersPanel = ({ defaultOptionLabel, children }: IFiltersPanel) => {
	return (
		<>
			<select
				name=""
				id=""
				className="w-full rounded-t outline-none"
				defaultValue={defaultOptionLabel}
			>
				<option disabled value={defaultOptionLabel}>
					{defaultOptionLabel}
				</option>
				{children}
			</select>
		</>
	);
};

export default FiltersPanel;
