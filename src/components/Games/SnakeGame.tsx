import { useState, useEffect, useCallback } from 'react';
import type { Theme } from '../../data/themes';

interface SnakeGameProps {
  theme: Theme;
  onExit: () => void;
}

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE: Position[] = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION: Direction = 'RIGHT';
const GAME_SPEED = 150;

export function SnakeGame({ theme, onExit }: SnakeGameProps) {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [food, setFood] = useState<Position>({ x: 15, y: 10 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('snake-high-score');
    return saved ? parseInt(saved) : 0;
  });

  const generateFood = useCallback((): Position => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }, []);

  const checkCollision = useCallback((head: Position): boolean => {
    // Wall collision
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    // Self collision
    return snake.some((segment) => segment.x === head.x && segment.y === head.y);
  }, [snake]);

  const moveSnake = useCallback(() => {
    if (gameOver) return;

    setSnake((prevSnake) => {
      const head = { ...prevSnake[0] };

      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      if (checkCollision(head)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [head, ...prevSnake];

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => {
          const newScore = prev + 10;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem('snake-high-score', newScore.toString());
          }
          return newScore;
        });
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, checkCollision, generateFood, highScore]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.key === 'Escape') {
        onExit();
        return;
      }

      if (gameOver && e.key === 'r') {
        setSnake(INITIAL_SNAKE);
        setDirection(INITIAL_DIRECTION);
        setFood(generateFood());
        setGameOver(false);
        setScore(0);
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          setDirection((prev) => (prev !== 'DOWN' ? 'UP' : prev));
          break;
        case 's':
        case 'arrowdown':
          setDirection((prev) => (prev !== 'UP' ? 'DOWN' : prev));
          break;
        case 'a':
        case 'arrowleft':
          setDirection((prev) => (prev !== 'RIGHT' ? 'LEFT' : prev));
          break;
        case 'd':
        case 'arrowright':
          setDirection((prev) => (prev !== 'LEFT' ? 'RIGHT' : prev));
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameOver, onExit, generateFood]);

  useEffect(() => {
    const gameLoop = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameLoop);
  }, [moveSnake]);

  return (
    <div
      className="flex flex-col items-center justify-center p-8"
      style={{ color: theme.colors.foreground }}
    >
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold mb-2" style={{ color: theme.colors.green }}>
          SNAKE GAME
        </h2>
        <div className="flex gap-8 justify-center text-sm">
          <div>
            Score: <span style={{ color: theme.colors.yellow }}>{score}</span>
          </div>
          <div>
            High Score: <span style={{ color: theme.colors.cyan }}>{highScore}</span>
          </div>
        </div>
      </div>

      <div
        className="relative border-2 mb-4"
        style={{
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE,
          borderColor: theme.colors.brightBlack,
          backgroundColor: theme.colors.black,
        }}
      >
        {/* Snake */}
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              backgroundColor: index === 0 ? theme.colors.green : theme.colors.brightGreen,
              border: `1px solid ${theme.colors.background}`,
            }}
          />
        ))}

        {/* Food */}
        <div
          className="absolute"
          style={{
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
            backgroundColor: theme.colors.red,
            borderRadius: '50%',
          }}
        />

        {/* Game Over Overlay */}
        {gameOver && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold mb-2" style={{ color: theme.colors.red }}>
                GAME OVER!
              </div>
              <div className="text-lg mb-4">
                Final Score: <span style={{ color: theme.colors.yellow }}>{score}</span>
              </div>
              <div className="text-sm" style={{ color: theme.colors.brightBlack }}>
                Press R to restart • ESC to exit
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-xs text-center" style={{ color: theme.colors.brightBlack }}>
        <div>Controls: WASD or Arrow Keys</div>
        <div>Press ESC to exit</div>
      </div>
    </div>
  );
}
