import { useState, useEffect, useCallback } from 'react';
import { TerminalHeader } from './TerminalHeader';
import { TerminalOutput } from './TerminalOutput';
import { TerminalInput } from './TerminalInput';
import { themes, defaultTheme } from '../../data/themes';
import { createCommands, type CommandOutput } from '../../utils/commands';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useCommandHistory } from '../../hooks/useCommandHistory';
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

  const theme = themes[currentTheme] || themes[defaultTheme];

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

  const commands = createCommands(handleThemeChange, currentTheme, startTime);

  const executeCommand = useCallback(
    (input: string) => {
      const trimmedInput = input.trim();
      if (!trimmedInput) return;

      addToHistory(trimmedInput);

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
  const commandNames = Object.keys(commands);

  // Apply theme to root element
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-color', theme.colors.background);
    root.style.setProperty('--fg-color', theme.colors.foreground);
    root.style.setProperty('--cursor-color', theme.colors.cursor);
  }, [theme]);

  return (
    <div
      className="h-screen w-screen flex items-center justify-center p-4"
      style={{
        backgroundColor: theme.colors.black,
        backgroundImage: theme.effects?.scanlines
          ? 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)'
          : undefined,
      }}
    >
      <div
        className="w-full max-w-5xl h-full max-h-[800px] rounded-lg overflow-hidden shadow-2xl flex flex-col"
        style={{
          backgroundColor: theme.colors.background,
          boxShadow: theme.effects?.glow
            ? `0 0 40px ${theme.colors.foreground}33`
            : '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        <TerminalHeader theme={theme} username={portfolioData.username} />
        <TerminalOutput outputs={outputs} theme={theme} username={portfolioData.username} />
        <TerminalInput
          theme={theme}
          username={portfolioData.username}
          onCommand={executeCommand}
          onHistoryNavigate={navigateHistory}
          suggestions={commandNames}
        />
      </div>

      {/* Game Overlays */}
      {showSnake && <SnakeGame theme={theme} onExit={() => setShowSnake(false)} />}
      {showMatrix && <MatrixRain theme={theme} onExit={() => setShowMatrix(false)} />}
    </div>
  );
}
