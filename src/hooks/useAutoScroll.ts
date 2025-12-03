import { useEffect, useRef, useState, useCallback } from 'react';

interface AutoScrollOptions {
    threshold?: number; // Distance from bottom to trigger auto-scroll (default: 50px)
    enabled?: boolean; // Enable/disable auto-scroll (default: true)
}

interface AutoScrollReturn {
    scrollRef: React.RefObject<HTMLDivElement | null>;
    isNearBottom: boolean;
    scrollToBottom: () => void;
    shouldAutoScroll: boolean;
}

/**
 * Custom hook for intelligent auto-scrolling behavior
 * Detects user scroll intent and manages auto-scroll state
 */
export function useAutoScroll(
    dependencies: any[] = [],
    options: AutoScrollOptions = {}
): AutoScrollReturn {
    const {
        threshold = 50,
        enabled = true,
    } = options;

    const scrollRef = useRef<HTMLDivElement>(null);
    const [isNearBottom, setIsNearBottom] = useState(true);
    const [userScrolled, setUserScrolled] = useState(false);
    const scrollTimeoutRef = useRef<number | undefined>(undefined);

    // Check if user is near bottom of scroll container
    const checkScrollPosition = useCallback(() => {
        if (!scrollRef.current) return false;

        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
        const nearBottom = distanceFromBottom < threshold;

        setIsNearBottom(nearBottom);
        return nearBottom;
    }, [threshold]);

    // Smooth scroll to bottom
    const scrollToBottom = useCallback(() => {
        if (!scrollRef.current) return;

        scrollRef.current.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: 'smooth',
        });

        setUserScrolled(false);
        setIsNearBottom(true);
    }, []);

    // Handle scroll events to detect user intent
    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        const handleScroll = () => {
            // Clear existing timeout
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            // Check if user manually scrolled up
            const nearBottom = checkScrollPosition();

            // Set a timeout to detect if user stopped scrolling
            scrollTimeoutRef.current = window.setTimeout(() => {
                if (!nearBottom) {
                    setUserScrolled(true);
                } else {
                    setUserScrolled(false);
                }
            }, 150);
        };

        element.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            element.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, [checkScrollPosition]);

    // Auto-scroll when dependencies change (new content added)
    useEffect(() => {
        if (!enabled || !scrollRef.current) return;

        // Only auto-scroll if user hasn't manually scrolled up
        if (!userScrolled && isNearBottom) {
            // Use requestAnimationFrame for smooth performance
            requestAnimationFrame(() => {
                scrollToBottom();
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [...dependencies, enabled, userScrolled, isNearBottom]);

    return {
        scrollRef,
        isNearBottom,
        scrollToBottom,
        shouldAutoScroll: !userScrolled && isNearBottom,
    };
}
