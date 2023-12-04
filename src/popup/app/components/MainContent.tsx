import { useState } from "react";
import { updateElement } from "../lib/utils";
import RarityDropdown from "./FiltersPanel/RarityDropdown";
import SelectedFilters from "./SelectedFilters/SelectedFilters";

const sectionStyle = "row-span-1 h-full max-h-full rounded bg-slate-200 p-1";

const MainContent = () => {
  const [activeList, setActiveList] = useState<number>(0);
  const [elements, setElements] = useState<any[]>([]);

  return (
    <section className="grid h-full w-full grid-rows-2 gap-2 bg-slate-500 p-2">
      <section className={sectionStyle}>
        <RarityDropdown
          defaultOptionLabel="Rarity"
          updateElement={(e) =>
            updateElement(e, elements, setElements, activeList)
          }
          isDisabled={!elements.length}
        />
      </section>
      <section className={sectionStyle}>
        <SelectedFilters
          activeList={activeList}
          elements={elements}
          setActiveList={setActiveList}
          setElements={setElements}
        />
      </section>
    </section>
  );
};

export default MainContent;
