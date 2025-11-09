import { MoonStar, Sun } from "lucide-react";

interface ThemeTogglerProps {
  whiteGradient: boolean;
  onToggle: () => void;
}

function ThemeToggler({ whiteGradient, onToggle }: ThemeTogglerProps) {
  return (
    <button
      onClick={onToggle}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        whiteGradient 
          ? 'bg-gray-800 text-white hover:bg-gray-700 shadow-lg' 
          : 'bg-[#0f172a] text-gray-800 hover:bg-gray-950 hover:text-gray-800 border border-black/30'
      }`}
      title={whiteGradient ? "Switch to Dark Mode" : "Switch to White Gradient"}
    >
      {whiteGradient ?  (<div className="flex align-middle"><MoonStar size={18}  className=""/></div>): (<div className="flex align-middle  text-white"><Sun size={18} className=""/></div>)}
    </button>
  );
}

export default ThemeToggler;