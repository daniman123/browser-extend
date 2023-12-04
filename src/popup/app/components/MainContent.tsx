import { useState } from "react";
import RarityDropdown from "./FiltersPanel/RarityDropdown";

const MainContent = () => {
  const [activeList, setActiveList] = useState<number>(0);
  const [elements, setElements] = useState<any[]>([]);

  const addElement = () => {
    const newElement = {
      id: elements.length,
      content: `Filter ${elements.length + 1}`,
      additionalData: "",
    };
    setElements([...elements, newElement]);
  };

  const removeElement = (index: number) => {
    setElements(elements.filter((_, i) => i !== index));
  };

  const updateElement = (e: any) => {
    const rarity = e.target.value;
    setElements(
      elements.map((element, i) => {
        if (i === activeList) {
          return {
            ...element,
            additionalData: `${element.additionalData} ${rarity}`,
          };
        }
        return element;
      }),
    );
  };

  return (
    <section className="grid h-full w-full grid-rows-2 gap-2 bg-slate-500 p-2">
      <section className="row-span-1 h-full max-h-full rounded bg-slate-200">
        <RarityDropdown
          defaultOptionLabel="Rarity"
          updateElement={updateElement}
          isDisabled={!elements.length}
        />
      </section>

      <section className="row-span-1 h-full max-h-full rounded bg-slate-200 p-1 ">
        <div className="flex gap-1">
          <button className="h-1/6" onClick={addElement}>
            Add Filter
          </button>
          <button
            className={`${"h-1/6"} ${"bg-black"}`}
            disabled={!elements.length}
            onClick={() => setElements([])}
          >
            Clear All Filters
          </button>
        </div>

        <div className="grid h-5/6 grid-cols-3 gap-2 overflow-y-auto">
          {elements.map((element, index) => (
            <div
              className={`border
								${index === activeList ? " bg-green-500" : " border-slate-700"}
									`}
              onClick={() => setActiveList(index)}
            >
              <div className="flex">
                <p key={element.id}>{element.content}</p>
                <button
                  className="text-red-700"
                  onClick={() => removeElement(index)}
                >
                  X
                </button>
              </div>
              <div>{element.additionalData}</div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default MainContent;
