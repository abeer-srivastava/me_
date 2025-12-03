import { useEffect, useRef } from 'react';
import type { Theme } from '../../data/themes';

interface MatrixRainProps {
  theme: Theme;
  onExit: () => void;
}

export function MatrixRain({ theme, onExit }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Characters to use
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const draw = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = theme.colors.green;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    // Handle ESC key to exit
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onExit();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Auto-exit after 10 seconds
    const autoExit = setTimeout(onExit, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(autoExit);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [theme, onExit]);

  return (
    <div className="fixed inset-0 z-50" style={{ backgroundColor: '#000' }}>
      <canvas ref={canvasRef} className="w-full h-full" />
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm"
        style={{ color: theme.colors.green, opacity: 0.6 }}
      >
        Press ESC to exit • Auto-exit in 10s
      </div>
    </div>
  );
}
