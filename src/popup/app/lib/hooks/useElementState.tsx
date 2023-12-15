import { useCallback, useState } from "react";
import { applyFilter, applyPriceFilter } from "../utils";

const useElementState = () => {
  const [activeList, setActiveList] = useState<number>(0);
  const [elements, setElements] = useState<any[]>([]);

  const handleUpdateElement = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      console.log(e.target.value);
      
      setElements(applyFilter(elements, activeList, e.target.value));
    },
    [elements, activeList, setElements],
  );

  const handlePriceElement = useCallback(
    (prices: number[]) => {
      setElements(applyPriceFilter(elements, activeList, prices));
    },
    [elements, activeList, setElements],
  );

  return {
    activeList,
    elements,
    setActiveList,
    setElements,
    handleUpdateElement,
    handlePriceElement,
  };
};

export default useElementState;
