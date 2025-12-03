import { useEffect, useRef } from 'react';
import type { Theme } from '../../data/themes';
import type { CommandOutput } from '../../utils/commands';

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

function OutputLine({ output, theme }: { output: CommandOutput; theme: Theme }) {
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
    return <div className="animate-fade-in">{output.content}</div>;
  }

  return (
    <pre
      className={`whitespace-pre-wrap font-mono text-sm animate-fade-in ${output.className || ''}`}
      style={{ 
        color: getColor(),
        lineHeight: 'var(--line-height-base)',
      }}
    >
      {output.content}
    </pre>
  );
}

export function TerminalOutput({ outputs, theme, username }: TerminalOutputProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputs]);

  return (
    <div className="flex-1 overflow-y-auto output-block-padding space-y-3 terminal-output">
      {outputs.map((output) => (
        <div key={output.id} className="space-y-1">
          {/* Command prompt - only show if command exists */}
          {output.command && (
            <div className="flex items-center gap-2 font-mono text-sm command-prompt-padding">
              <span style={{ color: theme.colors.green }} className="font-bold">
                {username}@portfolio
              </span>
              <span style={{ color: theme.colors.foreground }}>:</span>
              <span style={{ color: theme.colors.blue }}>~</span>
              <span style={{ color: theme.colors.foreground }}>$</span>
              <span style={{ color: theme.colors.foreground }}>{output.command}</span>
            </div>
          )}

          {/* Command output */}
          <div className="pl-0">
            {output.result.map((line, lineIndex) => (
              <OutputLine
                key={lineIndex}
                output={line}
                theme={theme}
              />
            ))}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
