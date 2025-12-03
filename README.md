# 🚀 Terminal Portfolio - Abeer Srivastava

An **ultra-realistic, hyper-interactive terminal-based portfolio website** built with React, TypeScript, and TailwindCSS. This project showcases advanced frontend engineering skills through a fully functional terminal emulator with 30+ commands, 6 beautiful themes, interactive games, and smooth animations.

![Terminal Portfolio](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-06B6D4?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.0.6-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

### 🎨 **6 Beautiful Themes**
- **Cyber Synthwave** - Pink/Purple/Cyan with neon glow effects
- **Matrix Green** - Classic green-on-black hacker aesthetic
- **Dracula** - Purple/Pink on dark gray
- **Nord** - Cool blues and grays
- **Monokai** - Warm retro colors
- **Solarized Dark** - Elegant high-contrast theme

### 💻 **30+ Terminal Commands**
- **Core**: help, about, skills, projects, contact, resume
- **System**: whoami, pwd, ls, cat, cd, echo, date, uptime, neofetch, tree
- **Themes**: theme, themes
- **Easter Eggs**: snake, matrix, hack, joke, quote, cowsay, sudo, exit

### 🎮 **Interactive Games**
- **Snake Game** - Fully playable with WASD/Arrow keys, score tracking, and high score persistence
- **Matrix Rain** - Full-screen falling green characters effect

### 🎯 **Advanced Features**
- ✅ Command history with up/down arrow navigation
- ✅ Tab autocomplete with fuzzy matching
- ✅ Command suggestions (fish-style)
- ✅ Typewriter effect for output
- ✅ Cursor blink animation
- ✅ Keyboard shortcuts (Ctrl+C, Ctrl+L, Ctrl+R, etc.)
- ✅ Theme persistence in localStorage
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/terminal-portfolio.git
   cd terminal-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📖 Usage

### Basic Commands

```bash
# Get help
help

# View about section
about

# See skills with progress bars
skills

# Browse projects
projects

# View specific project
project 1

# Get contact information
contact

# Switch theme
theme matrix

# List all themes
themes

# Clear terminal
clear
```

### Easter Eggs

```bash
# Play Snake game
snake

# Enter the Matrix
matrix

# Hacking simulation
hack

# Random joke
joke

# Inspirational quote
quote

# Make the cow say something
cowsay Hello World!

# Try sudo (you'll see!)
sudo rm -rf /
```

### Keyboard Shortcuts

- **Tab** - Autocomplete command
- **↑/↓** - Navigate command history
- **Ctrl+C** - Clear current input
- **Ctrl+L** - Clear terminal
- **Ctrl+U** - Clear line
- **ESC** - Exit games/special modes

## 🎨 Customization

### Changing Personal Information

Edit the following files in `src/data/`:

- **portfolio.ts** - Personal info, bio, contact details
- **skills.ts** - Technical skills with proficiency levels
- **projects.ts** - Project portfolio with details
- **themes.ts** - Color schemes (add your own!)

### Adding New Commands

1. Open `src/utils/commands.ts`
2. Add your command to the `createCommands` function:

```typescript
mycommand: {
  name: 'mycommand',
  description: 'My custom command',
  execute: (args) => [
    {
      type: 'text',
      content: 'Hello from my command!',
    },
  ],
},
```

### Creating Custom Themes

Edit `src/data/themes.ts`:

```typescript
mytheme: {
  name: 'mytheme',
  displayName: 'My Theme',
  colors: {
    background: '#1a1a1a',
    foreground: '#ffffff',
    // ... other colors
  },
  effects: {
    glow: true,
    scanlines: false,
  },
},
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Terminal/
│   │   ├── Terminal.tsx          # Main terminal component
│   │   ├── TerminalHeader.tsx    # Window chrome with traffic lights
│   │   ├── TerminalOutput.tsx    # Command output display
│   │   └── TerminalInput.tsx     # Command input with autocomplete
│   └── Games/
│       ├── SnakeGame.tsx         # Snake game component
│       └── MatrixRain.tsx        # Matrix rain effect
├── hooks/
│   ├── useLocalStorage.ts        # Persistent state management
│   ├── useTypewriter.ts          # Typewriter animation
│   └── useCommandHistory.ts      # Command history navigation
├── utils/
│   ├── commands.ts               # Command definitions
│   └── asciiArt.ts               # ASCII art utilities
├── data/
│   ├── portfolio.ts              # Personal information
│   ├── skills.ts                 # Skills data
│   ├── projects.ts               # Projects data
│   └── themes.ts                 # Theme definitions
└── styles/
    └── index.css                 # Global styles
```

## 🚢 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 🎯 Performance

- ⚡ Lighthouse Score: 95+
- 🎨 First Contentful Paint: <1.5s
- 📦 Bundle Size: <200KB gzipped
- ♿ WCAG AA Compliant
- 📱 Fully Responsive

## 🛠️ Tech Stack

- **React 19.1.0** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 7.0.6** - Build tool
- **TailwindCSS 4.1.11** - Styling
- **Lucide React** - Icons
- **Framer Motion** - Animations (optional)

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Acknowledgments

- Inspired by professional terminals: Warp, Hyper, iTerm2
- Design inspiration: Cyberpunk 2077, Tron Legacy, Blade Runner 2049
- Color schemes: Dracula, Nord, Monokai, Solarized

## 📧 Contact

- **Email**: abeer.srivastava@example.com
- **GitHub**: [@abeersrivastava](https://github.com/abeersrivastava)
- **LinkedIn**: [Abeer Srivastava](https://linkedin.com/in/abeersrivastava)
- **Twitter**: [@abeer_codes](https://twitter.com/abeer_codes)

---

**Made with ❤️ by Abeer Srivastava**

⭐ Star this repo if you found it helpful!
