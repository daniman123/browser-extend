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

const renderElements = (
  elements: Telements,
  activeList: number,
  rarity: string,
) =>
  elements.map((element, i) =>
    i === activeList
      ? {
          ...element,
          additionalData: `${element.additionalData} ${rarity}`,
        }
      : element,
  );

export const updateElement = (
  e: any,
  elements: Telements,
  setElements: TsetElements,
  activeList: number,
) => setElements(renderElements(elements, activeList, e.target.value));
