import { TactiveList, Telements, TsetElements } from "../types";

export const addElement = (elements: Telements, setElements: TsetElements) => {
  const newElement = {
    id: elements.length,
    content: `Filter ${elements.length + 1}`,
    additionalData: "",
  };
  setElements([...elements, newElement]);
};

export const removeElement = (
  elements: Telements,
  setElements: TsetElements,
  index: TactiveList,
) => {
  setElements(elements.filter((_, i) => i !== index));
};

export const updateElement = (
  e: any,
  elements: Telements,
  setElements: TsetElements,
  activeList: number,
) => {
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
    }),
  );
};
