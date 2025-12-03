import { useState, useEffect, useCallback, useMemo } from 'react';
import { TerminalHeader } from './TerminalHeader';
import { TerminalOutput } from './TerminalOutput';
import { TerminalInput } from './TerminalInput';
import { ScrollToBottom } from './ScrollToBottom';
import { themes, defaultTheme } from '../../data/themes';
import { createCommands, type CommandOutput } from '../../utils/commands';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useCommandHistory } from '../../hooks/useCommandHistory';
import { useAutoScroll } from '../../hooks/useAutoScroll';
import { portfolioData } from '../../data/portfolio';
import { banner } from '../../utils/asciiArt';
import { SnakeGame } from '../Games/SnakeGame';
import { MatrixRain } from '../Games/MatrixRain';

interface OutputEntry {
  id: string;
  command: string;
  result: CommandOutput[];
  timestamp: Date;
}

export function Terminal() {
  const [currentTheme, setCurrentTheme] = useLocalStorage('terminal-theme', defaultTheme);
  const [outputs, setOutputs] = useState<OutputEntry[]>([]);
  const [startTime] = useState(Date.now());
  const { addToHistory, navigateHistory } = useCommandHistory();
  const [showSnake, setShowSnake] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);

  const theme = themes[currentTheme] || themes[defaultTheme];

  // Auto-scroll hook
  const { scrollRef, isNearBottom, scrollToBottom } = useAutoScroll([outputs], {
    threshold: 50,
    enabled: true,
  });

  // Initialize with welcome message
  useEffect(() => {
    setOutputs([
      {
        id: 'welcome',
        command: '',
        result: [
          {
            type: 'text',
            content: banner,
          },
        ],
        timestamp: new Date(),
      },
    ]);
  }, []);

  const handleThemeChange = useCallback((newTheme: string) => {
    setCurrentTheme(newTheme);
  }, [setCurrentTheme]);

  const commands = useMemo(
    () => createCommands(handleThemeChange, currentTheme, startTime),
    [handleThemeChange, currentTheme, startTime]
  );

  const executeCommand = useCallback(
    (input: string) => {
      const trimmedInput = input.trim();
      if (!trimmedInput) return;

      addToHistory(trimmedInput);

      // Terminal flicker effect on command execution
      setIsFlickering(true);
      setTimeout(() => setIsFlickering(false), 100);

      // Parse command and arguments
      const parts = trimmedInput.split(' ');
      const commandName = parts[0].toLowerCase();
      const args = parts.slice(1);

      // Check for aliases
      let command = commands[commandName];
      if (!command) {
        // Check if any command has this as an alias
        const aliasedCommand = Object.values(commands).find((cmd) =>
          cmd.aliases?.includes(commandName)
        );
        if (aliasedCommand) {
          command = aliasedCommand;
        }
      }

      let result: CommandOutput[];

      if (command) {
        result = command.execute(args);

        // Handle special CLEAR_TERMINAL command
        if (result.length === 1 && result[0].content === 'CLEAR_TERMINAL') {
          setOutputs([]);
          return;
        }

        // Handle special component commands
        if (result.length === 1 && result[0].type === 'component') {
          if (result[0].content === 'SNAKE_GAME') {
            setShowSnake(true);
            return;
          }
          if (result[0].content === 'MATRIX_RAIN') {
            setShowMatrix(true);
            return;
          }
        }
      } else {
        result = [
          {
            type: 'error',
            content: `Command not found: ${commandName}\nType 'help' to see available commands.`,
          },
        ];
      }

      setOutputs((prev) => [
        ...prev,
        {
          id: `${Date.now()}-${Math.random()}`,
          command: trimmedInput,
          result,
          timestamp: new Date(),
        },
      ]);
    },
    [commands, addToHistory]
  );

  // Get all available command names for suggestions
  const commandNames = useMemo(() => Object.keys(commands), [commands]);

  // Apply theme to root element
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', theme.colors.background);
    root.style.setProperty('--fg-color', theme.colors.foreground);
    root.style.setProperty('--cursor-color', theme.colors.cursor);
  }, [theme]);

  return (
    <div
      className={`h-screen w-screen flex items-center justify-center container-padding ${
        theme.effects?.scanlines ? 'scanlines' : ''
      }`}
      style={{
        backgroundColor: theme.colors.black,
      }}
    >
      <div
        className={`w-full max-w-5xl h-full max-h-[800px] rounded-lg overflow-hidden shadow-2xl flex flex-col terminal-container smooth-transition ${
          isFlickering ? 'animate-flicker' : ''
        } ${theme.effects?.glow ? 'animate-glow-pulse' : ''}`}
        style={{
          backgroundColor: theme.colors.background,
          border: `1px solid ${theme.colors.foreground}33`,
          boxShadow: theme.effects?.glow
            ? `0 0 40px ${theme.colors.foreground}33, 0 0 80px ${theme.colors.foreground}20`
            : '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        <TerminalHeader theme={theme} username={portfolioData.username} />
        
        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          <TerminalOutput outputs={outputs} theme={theme} username={portfolioData.username} />
        </div>

        <TerminalInput
          theme={theme}
          username={portfolioData.username}
          onCommand={executeCommand}
          onHistoryNavigate={navigateHistory}
          suggestions={commandNames}
        />
      </div>

      {/* Scroll to Bottom Button */}
      {!isNearBottom && <ScrollToBottom onClick={scrollToBottom} theme={theme} />}

      {/* Game Overlays */}
      {showSnake && <SnakeGame theme={theme} onExit={() => setShowSnake(false)} />}
      {showMatrix && <MatrixRain theme={theme} onExit={() => setShowMatrix(false)} />}
    </div>
  );
}

