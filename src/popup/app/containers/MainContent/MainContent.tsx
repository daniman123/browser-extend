import RarityDropdown from "../../components/FiltersPanel/RarityDropdown";
import SelectedFilters from "../../components/SelectedFilters/SelectedFilters";
import useElementState from "../../lib/hooks/useElementState";
import { renderSection } from "./helpers";

const MainContent = () => {
  const {
    activeList,
    elements,
    setActiveList,
    setElements,
    handleUpdateElement,
  } = useElementState();

  return (
    <section className="grid h-full w-full grid-rows-2 gap-2 bg-slate-500 p-2">
      {renderSection(RarityDropdown, {
        defaultOptionLabel: "Rarity",
        updateElement: handleUpdateElement,
        isDisabled: !elements.length,
      })}
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
