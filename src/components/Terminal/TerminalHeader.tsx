import { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Circle } from 'lucide-react';
import type { Theme } from '../../data/themes';

interface TerminalHeaderProps {
  theme: Theme;
  username: string;
}

export function TerminalHeader({ theme, username }: TerminalHeaderProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div
      className="flex items-center justify-between px-4 py-2 border-b select-none"
      style={{
        backgroundColor: theme.colors.black,
        borderColor: theme.colors.brightBlack,
      }}
    >
      {/* Traffic Lights */}
      <div className="flex items-center gap-2">
        <button
          className="w-3 h-3 rounded-full transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#ff5f56' }}
          title="Close"
        />
        <button
          className="w-3 h-3 rounded-full transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#ffbd2e' }}
          title="Minimize"
        />
        <button
          className="w-3 h-3 rounded-full transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#27c93f' }}
          title="Maximize"
        />
      </div>

      {/* Window Title */}
      <div
        className="flex items-center gap-2 text-sm font-medium"
        style={{ color: theme.colors.foreground }}
      >
        <TerminalIcon size={16} />
        <span>{username}@portfolio:~$</span>
      </div>

      {/* System Indicators */}
      <div
        className="flex items-center gap-3 text-xs"
        style={{ color: theme.colors.brightBlack }}
      >
        <div className="flex items-center gap-1">
          <Circle size={8} fill={theme.colors.green} stroke="none" />
          <span>Online</span>
        </div>
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}
