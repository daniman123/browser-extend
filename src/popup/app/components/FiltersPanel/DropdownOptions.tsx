import RenderFiltersList from "./RenderFiltersList";

export const DropdownOptions = ({
  defaultOptionLabel,
}: {
  defaultOptionLabel: string;
}) => {
  return (
    <>
      <option disabled value={defaultOptionLabel}>
        {defaultOptionLabel}
      </option>
      <RenderFiltersList />
    </>
  );
};
