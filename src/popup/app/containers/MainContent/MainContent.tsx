import { useState } from "react";
import RarityDropdown from "../../components/FiltersPanel/RarityDropdown";
import PriceInputs from "../../components/PriceInputs/PriceInputs";
import SelectedFilters from "../../components/SelectedFilters/SelectedFilters";
import useElementState from "../../lib/hooks/useElementState";
import { Tprices } from "../../types";
import { SectionWrapper, renderSection } from "./helpers";

const MainContent = () => {
  const {
    activeList,
    elements,
    setActiveList,
    setElements,
    handleUpdateElement,
  } = useElementState();

  const [prices, setPrices] = useState<Tprices>([0, 0, 0, 0]);

  return (
    <section className="grid h-full w-full grid-rows-2 gap-2 bg-slate-500 p-2">
      <SectionWrapper>
        {/* {renderSection(RarityDropdown, {
          defaultOptionLabel: "Rarity",
          updateElement: handleUpdateElement,
          isDisabled: !elements.length,
        })} */}
        <RarityDropdown
          defaultOptionLabel="Rarity"
          updateElement={handleUpdateElement}
          isDisabled={!elements.length}
        />
        <PriceInputs prices={prices} setPrices={setPrices} />
      </SectionWrapper>

      {renderSection(SelectedFilters, {
        activeList,
        elements,
        setActiveList,
        setElements,
      })}
    </section>
  );
};

export default MainContent;
