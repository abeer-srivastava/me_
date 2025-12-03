export interface Theme {
    name: string;
    displayName: string;
    colors: {
        background: string;
        foreground: string;
        cursor: string;
        selection: string;
        black: string;
        red: string;
        green: string;
        yellow: string;
        blue: string;
        magenta: string;
        cyan: string;
        white: string;
        brightBlack: string;
        brightRed: string;
        brightGreen: string;
        brightYellow: string;
        brightBlue: string;
        brightMagenta: string;
        brightCyan: string;
        brightWhite: string;
    };
    effects?: {
        glow?: boolean;
        scanlines?: boolean;
        crt?: boolean;
    };
}

export const themes: Record<string, Theme> = {
    cyber: {
        name: 'cyber',
        displayName: 'Cyber Synthwave',
        colors: {
            background: '#0a0e27',
            foreground: '#00ff41', // Matrix green
            cursor: '#00d9ff', // Cyan
            selection: '#00ff4133',
            black: '#1a1a2e',
            red: '#ff0055',
            green: '#00ff41', // Enhanced Matrix green
            yellow: '#ffcc00',
            blue: '#0099ff',
            magenta: '#ff00ff',
            cyan: '#00d9ff',
            white: '#e0e0e0',
            brightBlack: '#555555',
            brightRed: '#ff0088',
            brightGreen: '#00ffcc',
            brightYellow: '#ffdd00',
            brightBlue: '#00bbff',
            brightMagenta: '#ff44ff',
            brightCyan: '#44ffff',
            brightWhite: '#ffffff',
        },
        effects: {
            glow: true, // Enable glow effects
            scanlines: true,
        },
    },
    matrix: {
        name: 'matrix',
        displayName: 'Matrix Green',
        colors: {
            background: '#000000',
            foreground: '#00ff00',
            cursor: '#00ff00',
            selection: '#00ff0033',
            black: '#000000',
            red: '#008800',
            green: '#00ff00',
            yellow: '#88ff00',
            blue: '#00aa00',
            magenta: '#00ff88',
            cyan: '#00ffaa',
            white: '#aaffaa',
            brightBlack: '#004400',
            brightRed: '#00aa00',
            brightGreen: '#00ff44',
            brightYellow: '#aaff00',
            brightBlue: '#00cc00',
            brightMagenta: '#00ffaa',
            brightCyan: '#00ffcc',
            brightWhite: '#ccffcc',
        },
        effects: {
            glow: false,
        },
    },
    dracula: {
        name: 'dracula',
        displayName: 'Dracula',
        colors: {
            background: '#282a36',
            foreground: '#f8f8f2',
            cursor: '#ff79c6',
            selection: '#44475a',
            black: '#21222c',
            red: '#ff5555',
            green: '#50fa7b',
            yellow: '#f1fa8c',
            blue: '#bd93f9',
            magenta: '#ff79c6',
            cyan: '#8be9fd',
            white: '#f8f8f2',
            brightBlack: '#6272a4',
            brightRed: '#ff6e6e',
            brightGreen: '#69ff94',
            brightYellow: '#ffffa5',
            brightBlue: '#d6acff',
            brightMagenta: '#ff92df',
            brightCyan: '#a4ffff',
            brightWhite: '#ffffff',
        },
    },
    nord: {
        name: 'nord',
        displayName: 'Nord',
        colors: {
            background: '#2e3440',
            foreground: '#d8dee9',
            cursor: '#88c0d0',
            selection: '#4c566a',
            black: '#3b4252',
            red: '#bf616a',
            green: '#a3be8c',
            yellow: '#ebcb8b',
            blue: '#81a1c1',
            magenta: '#b48ead',
            cyan: '#88c0d0',
            white: '#e5e9f0',
            brightBlack: '#4c566a',
            brightRed: '#d08770',
            brightGreen: '#a3be8c',
            brightYellow: '#ebcb8b',
            brightBlue: '#81a1c1',
            brightMagenta: '#b48ead',
            brightCyan: '#8fbcbb',
            brightWhite: '#eceff4',
        },
    },
    monokai: {
        name: 'monokai',
        displayName: 'Monokai',
        colors: {
            background: '#272822',
            foreground: '#f8f8f2',
            cursor: '#f8f8f0',
            selection: '#49483e',
            black: '#272822',
            red: '#f92672',
            green: '#a6e22e',
            yellow: '#f4bf75',
            blue: '#66d9ef',
            magenta: '#ae81ff',
            cyan: '#a1efe4',
            white: '#f8f8f2',
            brightBlack: '#75715e',
            brightRed: '#f92672',
            brightGreen: '#a6e22e',
            brightYellow: '#e6db74',
            brightBlue: '#66d9ef',
            brightMagenta: '#ae81ff',
            brightCyan: '#a1efe4',
            brightWhite: '#f9f8f5',
        },
    },
    solarized: {
        name: 'solarized',
        displayName: 'Solarized Dark',
        colors: {
            background: '#002b36',
            foreground: '#839496',
            cursor: '#93a1a1',
            selection: '#073642',
            black: '#073642',
            red: '#dc322f',
            green: '#859900',
            yellow: '#b58900',
            blue: '#268bd2',
            magenta: '#d33682',
            cyan: '#2aa198',
            white: '#eee8d5',
            brightBlack: '#002b36',
            brightRed: '#cb4b16',
            brightGreen: '#586e75',
            brightYellow: '#657b83',
            brightBlue: '#839496',
            brightMagenta: '#6c71c4',
            brightCyan: '#93a1a1',
            brightWhite: '#fdf6e3',
        },
    },
};

export const defaultTheme = 'cyber';
