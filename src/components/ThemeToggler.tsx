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
          : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200 shadow-lg'
      }`}
      title={whiteGradient ? "Switch to Dark Mode" : "Switch to White Gradient"}
    >
      {whiteGradient ?  (<div className="flex align-middle pr-2"><MoonStar size={20}  className="mr-1"/>Dark Mode</div>): (<div className="flex align-middle pr-2"><Sun size={20} className="mr-1"/>Light Mode</div>)}
    </button>
  );
}

export default ThemeToggler;