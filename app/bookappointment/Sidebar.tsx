import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  ActivitySquare,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext, createContext, useState } from "react";

interface SidebarContextType {
  expanded: boolean;
}

// Create the SidebarContext with a default value
const SidebarContext = createContext<SidebarContextType>({
  expanded: true,
});

// Sidebar component
export function Sidebar({ children }: any) {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-gray-200 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert, redirect }: any) {
  const { expanded } = useContext<any>(SidebarContext);
  const route = useRouter();

  function handleClick(redirect: string) {
    if (redirect == "/login") {
      localStorage.removeItem("LSemail");
    }
    route.push(`${redirect}`);
  }

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md 
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-gray:200"
        } ${expanded ? "cursor-pointer" : "hover:bg-color-gray text-xl"}
    `}
    >
      {icon}
      <span
        onClick={() => handleClick(redirect)}
        className={`overflow-hidden transition-all text-red ${
          expanded ? "w-52 ml-3" : "w-0"
        }
        ${active ? "bg-black text-red" : "bg-red text-red"}
        `}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
    </li>
  );
}
