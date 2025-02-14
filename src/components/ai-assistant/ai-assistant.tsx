import { ChevronLast } from "lucide-react";
import { useState } from "react";
import { useSidenavStore } from "../../store/sidebar-store";
import ChatbotContainer from "./chatbot-container";

const AIAssistant = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleSidenav = useSidenavStore((state) => state.toggleSidenav);

  const handlePageToggle = (state: boolean) => {
    setExpanded(state);
    toggleSidenav(!state);
  };

  return (
    <>
      <div
        className={`${
          expanded ? "w-[40%] p-4" : "w-0 max-w-0"
        } bg-secondary flex-col  transition-all duration-300 overflow-hidden`}
      >
        <div className="flex justify-end mb-2">
          <button
            className="p-1.5 rounded-3xl bg-secondaryBg"
            onClick={() => {
              handlePageToggle(false);
            }}
          >
            <ChevronLast />
          </button>
        </div>
        <ChatbotContainer />
      </div>
      <button
        className={`${
          expanded ? "hidden" : "block"
        } fixed bottom-10 right-10 rounded-full text-white shadow-lg transition-all`}
        onClick={() => handlePageToggle(true)}
      >
        <img className="w-12" src="src\assets\images\chatbot-icon.png" />
      </button>
    </>
  );
};

export default AIAssistant;
