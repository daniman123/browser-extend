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
