import React from "react";
import Terminal from "./components/Terminal";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#0a0f1c] via-[#111827] to-[#1a1e28] text-white min-h-screen font-mono p-5 flex justify-center items-start">
      <div className="w-full max-w-4xl">
        <div className="bg-[#1f2937]/80 backdrop-blur-md rounded-t-lg px-4 py-2 flex items-center justify-between text-sm text-gray-300 shadow-inner border border-gray-600/30">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center flex-1 ml-1 text-gray-300 text-xs">
         <span className="text-xs font-semibold tracking-wide text-gray-200 flex items-center justify-center">
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
 
          <div></div>
        </div>
        <Terminal />
      </div>
    </div>
  );
}
