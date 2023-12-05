import ToggleBotSection from "./components/ToggleBotSection";
import MainContent from "./containers/MainContent/MainContent";

export const renderContent = (
  toggleBot: boolean,
  setToggleBot: React.Dispatch<React.SetStateAction<boolean>>,
) =>
  toggleBot ? (
    <MainContent />
  ) : (
    <ToggleBotSection setToggleBot={setToggleBot} />
  );
