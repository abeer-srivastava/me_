import React from 'react';
import { getCommandIcon } from '../../utils/iconMapping';

interface CommandIconProps {
  commandName: string;
  size?: number;
  showLabel?: boolean;
  className?: string;
}

export const CommandIcon: React.FC<CommandIconProps> = ({
  commandName,
  size = 16,
  showLabel = true,
  className = '',
}) => {
  const iconConfig = getCommandIcon(commandName);

  if (!iconConfig) {
    return null;
  }

  const Icon = iconConfig.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${className}`}
      style={{
        color: iconConfig.color,
        filter: 'drop-shadow(0 0 4px currentColor)',
      }}
    >
      <Icon size={size} strokeWidth={2.5} />
      {showLabel && (
        <span className="font-bold text-xs tracking-wider">{iconConfig.label}</span>
      )}
    </span>
  );
};

// Variant for inline command display in help menu
export const CommandIconInline: React.FC<{ commandName: string; description: string }> = ({
  commandName,
  description,
}) => {
  const iconConfig = getCommandIcon(commandName);

  return (
    <div className="flex items-center gap-3 py-1">
      {iconConfig && (
        <span
          className="inline-flex items-center justify-center w-6"
          style={{
            color: iconConfig.color,
            filter: 'drop-shadow(0 0 3px currentColor)',
          }}
        >
          <iconConfig.icon size={14} strokeWidth={2.5} />
        </span>
      )}
      <span className="font-mono">
        <span className="font-bold">{commandName.padEnd(14)}</span>
        <span className="opacity-80">- {description}</span>
      </span>
    </div>
  );
};
