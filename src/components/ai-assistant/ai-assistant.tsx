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
        <div className="flex justify-end">
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
        } fixed bottom-8 right-8 bg-primary px-4 py-2.5 rounded-full text-white shadow-lg hover:bg-primaryBgHover transition-all`}
        onClick={() => handlePageToggle(true)}
      >
        AI
      </button>
    </>
  );
};

export default AIAssistant;
