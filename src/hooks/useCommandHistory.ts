import { useState, useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useCommandHistory() {
    const [history, setHistory] = useLocalStorage<string[]>('terminal-history', []);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const addToHistory = useCallback((command: string) => {
        if (command.trim()) {
            setHistory((prev: string[]) => [...prev, command]);
            setHistoryIndex(-1);
        }
    }, [setHistory]);

    const navigateHistory = useCallback((direction: 'up' | 'down'): string | null => {
        if (history.length === 0) return null;

        let newIndex = historyIndex;

        if (direction === 'up') {
            newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        } else {
            newIndex = historyIndex === -1 ? -1 : Math.min(history.length - 1, historyIndex + 1);
        }

        setHistoryIndex(newIndex);
        return newIndex === -1 ? '' : history[newIndex];
    }, [history, historyIndex]);

    const clearHistory = useCallback(() => {
        setHistory([]);
        setHistoryIndex(-1);
    }, [setHistory]);

    return {
        history,
        addToHistory,
        navigateHistory,
        clearHistory,
    };
}
