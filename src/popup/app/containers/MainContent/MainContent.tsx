import { useState } from "react";
import RarityDropdown from "../../components/FiltersPanel/RarityDropdown";
import PriceInputs from "../../components/PriceInputs/PriceInputs";
import SelectedFilters from "../../components/SelectedFilters/SelectedFilters";
import useElementState from "../../lib/hooks/useElementState";
import { Tprices } from "../../types";
import { renderSections } from "./helpers";

const MainContent = () => {
  const {
    activeList,
    elements,
    setActiveList,
    setElements,
    handleUpdateElement,
  } = useElementState();

  const [prices, setPrices] = useState<Tprices>([0, 0, 0, 0]);

  const rarityDropdown = {
    Component: RarityDropdown,
    props: {
      defaultOptionLabel: "Rarity",
      updateElement: handleUpdateElement,
      isDisabled: !elements.length,
    },
  };

  const priceInputs = {
    Component: PriceInputs,
    props: { prices: prices, setPrices: setPrices },
  };

  const settingsSection = [rarityDropdown, priceInputs];

  const selectedFilters = {
    Component: SelectedFilters,
    props: {
      activeList,
      elements,
      setActiveList,
      setElements,
    },
  };
  const displayFiltersSection = [selectedFilters];

  return (
    <section className="grid h-full w-full grid-rows-2 gap-2 bg-slate-500 p-2">
      {renderSections(settingsSection)}
      {renderSections(displayFiltersSection)}
    </section>
  );
};

export default MainContent;
