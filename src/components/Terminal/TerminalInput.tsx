import { useState, useRef, useEffect, type KeyboardEvent } from 'react';
import type { Theme } from '../../data/themes';

interface TerminalInputProps {
  theme: Theme;
  username: string;
  onCommand: (command: string) => void;
  onHistoryNavigate: (direction: 'up' | 'down') => string | null;
  suggestions: string[];
}

export function TerminalInput({
  theme,
  username,
  onCommand,
  onHistoryNavigate,
  suggestions,
}: TerminalInputProps) {
  const [input, setInput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Click anywhere to focus input
  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Handle Enter
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        onCommand(input);
        setInput('');
        setSelectedSuggestion(0);
      }
      return;
    }

    // Handle Tab for autocomplete
    if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setInput(suggestions[selectedSuggestion]);
      }
      return;
    }

    // Handle Up/Down arrows for history
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const historyCommand = onHistoryNavigate('up');
      if (historyCommand !== null) {
        setInput(historyCommand);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const historyCommand = onHistoryNavigate('down');
      if (historyCommand !== null) {
        setInput(historyCommand);
      }
      return;
    }

    // Handle Ctrl+L to clear
    if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      onCommand('clear');
      setInput('');
      return;
    }

    // Handle Ctrl+C to clear input
    if (e.ctrlKey && e.key === 'c') {
      e.preventDefault();
      setInput('');
      return;
    }

    // Handle Ctrl+U to clear line
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      setInput('');
      return;
    }
  };

  const filteredSuggestions = suggestions.filter((cmd) =>
    cmd.toLowerCase().startsWith(input.toLowerCase())
  );

  return (
    <div className="border-t p-4" style={{ borderColor: theme.colors.brightBlack }}>
      {/* Suggestions */}
      {input && filteredSuggestions.length > 0 && (
        <div
          className="mb-2 text-xs opacity-60"
          style={{ color: theme.colors.brightBlack }}
        >
          Suggestions: {filteredSuggestions.slice(0, 5).join(', ')}
          {filteredSuggestions.length > 5 && '...'}
        </div>
      )}

      {/* Input line */}
      <div className="flex items-center gap-2 font-mono text-sm">
        <span style={{ color: theme.colors.green }}>{username}@portfolio</span>
        <span style={{ color: theme.colors.foreground }}>:</span>
        <span style={{ color: theme.colors.blue }}>~</span>
        <span style={{ color: theme.colors.foreground }}>$</span>
        <div className="flex-1 relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent outline-none border-none"
            style={{ color: theme.colors.foreground }}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
          />
          {showCursor && (
            <span
              className="absolute inline-block w-2 h-4 ml-0.5"
              style={{
                backgroundColor: theme.colors.cursor,
                left: `${input.length * 0.6}em`,
                animation: 'blink 1s infinite',
              }}
            />
          )}
        </div>
      </div>

      {/* Hints */}
      <div
        className="mt-2 text-xs opacity-40"
        style={{ color: theme.colors.brightBlack }}
      >
        Press Tab for autocomplete • ↑↓ for history • Ctrl+L to clear
      </div>
    </div>
  );
}
