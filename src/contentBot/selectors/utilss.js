// import selectors from "./selectors.json";

export const getSelector = (
	selectors,
	selectorPrefix,
	selectorType,
	uniqueSelector
) => {
	const base = selectors[0][selectorType]["shared"]["base"];
	const unique = selectors[0][selectorType]["unique"][uniqueSelector];

	// const baseSelector = selectors[0]["tabs"]["shared"]["base"];
	// const uniqueSelector = selectors[0]["tabs"]["unique"]["clubTab"];

	const selectorComponents = [base, unique];

	const selector = selectorComponents.join(".");

	return selectorPrefix + selector;
};
