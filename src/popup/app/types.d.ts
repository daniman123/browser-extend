export interface Ielement {
  id: number;
  content: string;
  additionalData: string;
}

export type Telements = Ielement[];
export type TactiveList = number;

export type TsetElements = React.Dispatch<React.SetStateAction<Telements>>;
export type TsetActiveList = React.Dispatch<React.SetStateAction<TactiveList>>;

export interface ISelectedFilters {
  elements: Telements;
  setElements: TsetElements;
  setActiveList: TsetActiveList;
  activeList: number;
}

export interface IFilterItem {
  index: number;
  activeList: number;
  element: Ielement;
  setActiveList: (value: React.SetStateAction<number>) => void;
  elements: Telements;
  setElements: TsetElements;
}

export interface IFilterItemControls {
  element: Ielement;
  elements: Telements;
  setElements: TsetElements;
  index: number;
}

export interface IFilterButton {
  onClick: () => void;
  disabled?: boolean;
  text: string;
}

export interface IFilterControls {
  addFilter: () => void;
  clearAllFilters: () => void;
  disabled: boolean;
}

export interface IRenderSelectedFilters {
  elements: Telements;
  setActiveList: TsetActiveList;
  setElements: TsetElements;
  activeList: number;
}
export interface IToggleBotSection {
  setToggleBot: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IRarityDropdown {
  defaultOptionLabel: string;
  updateElement: (e: any) => void;
  isDisabled: boolean;
}
