import { useState } from "react";
import Terminal from "./components/Terminal";
import ThemeToggler from "./components/ThemeToggler";

export default function App() {
  const [whiteGradient, setWhiteGradient] = useState(false);

  const handleThemeToggle = () => {
    setWhiteGradient(!whiteGradient);
  };

  const getBackgroundClasses = () => {
    if (whiteGradient) {
      return "bg-gradient-to-br from-[#E0EAFC] to-[#CFDEF3] text-gray-800  min-h-screen font-mono p-5 flex justify-center items-start";
    }
    return "bg-gradient-to-br from-[#141E30] to-[#243B55] text-white min-h-screen font-mono p-5 flex justify-center items-start";
  };
// linear-gradient(90deg, #4b6cb7 0%, #182848 100%)
  return (
    <div className={getBackgroundClasses()}>
      <div className="w-full max-w-4xl">
        <div className={`${whiteGradient ? 'bg-white/80 backdrop-blur-md border-gray-200' : 'bg-[#09203f] backdrop-blur-md border-gray-900'} rounded-t-lg px-4 py-2 flex items-center justify-between text-sm shadow-inner border`}>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center flex-1 ml-1 text-xs">
            <span className={`text-xs font-semibold tracking-wide flex items-center justify-center ${whiteGradient ? 'text-gray-700' : 'text-gray-200'}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              abeer.sh
            </span>
          </div>
          <ThemeToggler whiteGradient={whiteGradient} onToggle={handleThemeToggle} />
        </div>
        <Terminal whiteGradient={whiteGradient} />
      </div>
    </div>
  );
}
