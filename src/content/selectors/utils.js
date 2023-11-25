import selectors from "./selectors.json";

export const getSelector = (selectorPrefix, selectorType, uniqueSelector) => {
    const navigateSelectors = (path) => {
        return path.reduce((acc, current) => {
            return acc && acc[current] ? acc[current] : null;
        }, selectors[0]);
    };

    const baseSelectorPath = [selectorType, "shared", "base"];
    const uniqueSelectorPath = [selectorType, "unique", uniqueSelector];

    const base = navigateSelectors(baseSelectorPath);
    const unique = navigateSelectors(uniqueSelectorPath);

    if (!base || !unique) {
        // Handle error or provide a default value
        console.error("Invalid selector path");
        return null;
    }

    const selector = `${selectorPrefix}${base}.${unique}`;
    return selector;
};
