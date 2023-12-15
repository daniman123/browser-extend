import { Ielement, TactiveList, Telements, TsetElements } from "../types";

export const addElement = (elements: Telements, setElements: TsetElements) => {
  const newElement: Ielement = {
    id: elements.length,
    filterLabel: `Filter ${elements.length + 1}`,
    rarityFilters: "",
    priceFilters: [0, 0, 0, 0],
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

export const updateRarityFilters = (element: Ielement, rarity: string) => {
  return {
    rarityFilters: `${element.rarityFilters} ${rarity}`,
  };
};

export const applyFilter = (
  elements: Telements,
  activeList: number,
  rarity: string,
) =>
  elements.map((element, i) =>
    i === activeList
      ? {
          ...element,
          rarityFilters: `${element.rarityFilters} ${rarity}`,
        }
      : element,
  );

export const applyPriceFilter = (
  elements: Telements,
  activeList: number,
  prices: number[],
) =>
  elements.map((element, i) =>
    i === activeList
      ? {
          ...element,
          priceFilters: prices,
        }
      : element,
  );

export const updateElement = (
  e: any,
  elements: Telements,
  setElements: TsetElements,
  activeList: number,
) => setElements(applyFilter(elements, activeList, e));
