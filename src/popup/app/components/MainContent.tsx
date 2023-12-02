import React, { useState } from "react";
import RarityDropdown from "./FiltersPanel/RarityDropdown";

const MainContent = () => {
	const [activeList, setActiveList] = useState<number>(0);
	const [elements, setElements] = useState<any[]>([]);

	const addElement = () => {
		const newElement = {
			id: elements.length,
			content: `Filter ${elements.length + 1}`,
			additionalData: "",
		};
		setElements([...elements, newElement]);
	};

	const removeElement = (index: number) => {
		setElements(elements.filter((_, i) => i !== index));
	};

	const updateElement = (e: any) => {
		const rarity = e.target.value;
		setElements(
			elements.map((element, i) => {
				if (i === activeList) {
					return {
						...element,
						additionalData: `${element.additionalData} ${rarity}`,
					};
				}
				return element;
			})
		);
	};

	return (
		<section className="w-full grid grid-flow-col auto-cols-fr gap-2 p-2 bg-slate-500">
			<section className="rounded bg-slate-200">
				<RarityDropdown
					defaultOptionLabel="Rarity"
					updateElement={updateElement}
				/>
			</section>

			<section className="rounded bg-slate-200">
				<button onClick={addElement}>Add Element</button>
				<div>
					{elements.map((element, index) => (
						<div
							className={index === activeList ? "bg-green-500" : ""}
							onClick={() => setActiveList(index)}
						>
							<p key={element.id}>{element.content}</p>
							<div>{element.additionalData}</div>
							<button
								className="text-red-700"
								onClick={() => removeElement(index)}
							>
								X
							</button>
						</div>
					))}
				</div>
			</section>
		</section>
	);
};

export default MainContent;
