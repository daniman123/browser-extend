export type Telements = any[];
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
  element: any;
  isActive: boolean;
  onSetActiveList: () => void;
  onRemoveElement: () => void;
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