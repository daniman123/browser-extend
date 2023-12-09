import ToggleBotSection from "./components/ToggleBot/ToggleBotSection";
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
