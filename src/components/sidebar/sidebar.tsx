import { ChevronFirst, ChevronLast } from "lucide-react";
import { createContext, useState } from "react";

const SidebarContext = createContext({});

const Sidebar = ({ children }: any) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen w-fit">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="py-4 px-2 flex justify-between items-center">
          <img
            src="https://www.pikpng.com/pngl/b/173-1739644_education-education-icon-dark-blue-clipart.png"
            className={`overflow-hidden transition-all ${
              expanded ? "w-16" : "w-0"
            } p-2`}
          />
          <button
            onClick={() => setExpanded((value) => !value)}
            className="p-1.5 rounded-3xl bg-gray-50 hover:bg-gray-300"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
};

export { Sidebar, SidebarContext };
