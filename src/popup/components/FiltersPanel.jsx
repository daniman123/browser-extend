import React from "react";

const FiltersPanel = ({
	defaultOptionLabel,
	setRarity,
	jsonData,
	columnName,
}) => {
	return (
		<div>
			<div>
				<select
					name=""
					id=""
					defaultValue={defaultOptionLabel}
					onChange={(e) => {
						setRarity(e.target.value);
						// handleChange(defaultOptionLabel.toLowerCase(), e.target.value);
					}}
				>
					<option disabled value={defaultOptionLabel}>
						{defaultOptionLabel}
					</option>

					{jsonData.map((value, index) => (
						<option key={index} value={columnName ? value[columnName] : value}>
							{columnName ? value[columnName] : value}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default FiltersPanel;
