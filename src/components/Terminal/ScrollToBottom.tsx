import React from 'react';
import { ArrowDown } from 'lucide-react';

interface ScrollToBottomProps {
  onClick: () => void;
  theme: {
    colors: {
      foreground: string;
      background: string;
    };
  };
}

export const ScrollToBottom: React.FC<ScrollToBottomProps> = ({ onClick, theme }) => {
  return (
    <button
      onClick={onClick}
      className="animate-float-in fixed bottom-24 right-8 z-50 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer border-2"
      style={{
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.foreground,
        color: theme.colors.foreground,
        boxShadow: `0 0 20px ${theme.colors.foreground}40, 0 4px 12px rgba(0, 0, 0, 0.3)`,
      }}
      aria-label="Scroll to bottom"
      title="Scroll to bottom"
    >
      <ArrowDown
        size={20}
        strokeWidth={2.5}
        className="animate-pulse"
        style={{
          filter: `drop-shadow(0 0 4px ${theme.colors.foreground})`,
        }}
      />
    </button>
  );
};
