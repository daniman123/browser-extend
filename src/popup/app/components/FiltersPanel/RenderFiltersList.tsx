import filtersListJson from "../../../data/activeRarities.json";

const RenderFiltersList = () => {
  return (
    <>
      {filtersListJson.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </>
  );
};

export default RenderFiltersList;
