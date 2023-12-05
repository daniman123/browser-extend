import { useCallback, useState } from "react";
import { updateElement } from "../utils";

const useElementState = () => {
  const [activeList, setActiveList] = useState<number>(0);
  const [elements, setElements] = useState<any[]>([]);

  const handleUpdateElement = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateElement(e, elements, setElements, activeList);
    },
    [elements, activeList, setElements],
  );

  return {
    activeList,
    elements,
    setActiveList,
    setElements,
    handleUpdateElement,
  };
};

export default useElementState;
