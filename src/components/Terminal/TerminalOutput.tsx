import { useEffect, useRef } from 'react';
import type { Theme } from '../../data/themes';
import type { CommandOutput } from '../../utils/commands';
import { useTypewriter } from '../../hooks/useTypewriter';

interface TerminalOutputProps {
  outputs: Array<{
    id: string;
    command: string;
    result: CommandOutput[];
    timestamp: Date;
  }>;
  theme: Theme;
  username: string;
}

function OutputLine({ output, theme, enableTypewriter }: { output: CommandOutput; theme: Theme; enableTypewriter: boolean }) {
  const { displayedText, isComplete } = useTypewriter(
    typeof output.content === 'string' ? output.content : '',
    20,
    enableTypewriter && output.type === 'text'
  );

  const getColor = () => {
    switch (output.type) {
      case 'error':
        return theme.colors.red;
      case 'text':
      default:
        return theme.colors.foreground;
    }
  };

  if (typeof output.content !== 'string') {
    return <div>{output.content}</div>;
  }

  return (
    <pre
      className={`whitespace-pre-wrap font-mono text-sm ${output.className || ''}`}
      style={{ color: getColor() }}
    >
      {enableTypewriter && output.type === 'text' ? displayedText : output.content}
    </pre>
  );
}

export function TerminalOutput({ outputs, theme, username }: TerminalOutputProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputs]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {outputs.map((output, index) => (
        <div key={output.id} className="space-y-1">
          {/* Command prompt */}
          <div className="flex items-center gap-2 font-mono text-sm">
            <span style={{ color: theme.colors.green }}>{username}@portfolio</span>
            <span style={{ color: theme.colors.foreground }}>:</span>
            <span style={{ color: theme.colors.blue }}>~</span>
            <span style={{ color: theme.colors.foreground }}>$</span>
            <span style={{ color: theme.colors.foreground }}>{output.command}</span>
          </div>

          {/* Command output */}
          <div className="pl-0">
            {output.result.map((line, lineIndex) => (
              <OutputLine
                key={lineIndex}
                output={line}
                theme={theme}
                enableTypewriter={index === outputs.length - 1}
              />
            ))}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
