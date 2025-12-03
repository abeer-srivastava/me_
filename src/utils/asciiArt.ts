// Pre-rendered ASCII banner for instant display (no blocking operations)
export const banner = `
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│       █████╗ ██████╗ ███████╗███████╗██████╗                           │
│      ██╔══██╗██╔══██╗██╔════╝██╔════╝██╔══██╗                          │
│      ███████║██████╔╝█████╗  █████╗  ██████╔╝                          │
│      ██╔══██║██╔══██╗██╔══╝  ██╔══╝  ██╔══██╗                          │
│      ██║  ██║██████╔╝███████╗███████╗██║  ██║                          │
│      ╚═╝  ╚═╝╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝                          │
│                                                                        │
│ ███████╗██████╗ ██╗██╗   ██╗ █████╗ ███████╗████████╗ █████╗ ██╗   ██╗ │
│ ██╔════╝██╔══██╗██║██║   ██║██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██║   ██║ │
│ ███████╗██████╔╝██║██║   ██║███████║███████╗   ██║   ███████║██║   ██║ │
│ ╚════██║██╔══██╗██║╚██╗ ██╔╝██╔══██║╚════██║   ██║   ██╔══██║╚██╗ ██╔╝ │
│ ███████║██║  ██║██║ ╚████╔╝ ██║  ██║███████║   ██║   ██║  ██║ ╚████╔╝  │
│ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝  ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝  ╚═══╝   │
│                                                                        │
│      Full Stack Developer | Cloud & Data Science Enthusiast            │
│             CSE Student @ SRMCEM Lucknow                               │
│                                                                        │
│     Type 'help' to get started • Type 'contact' to connect             │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
`;

export const neofetch = `
                   -\`                  abeer@portfolio
                  .o+\`                 ───────────────────────
                 \`ooo/                 OS: Arch Linux (Web)
                \`+oooo:                Host: SRMCEM Lab / Localhost
               \`+oooooo:               Kernel: JavaScript V8
               -+oooooo+:              Uptime: {uptime}
             \`/:-:++oooo+:             Shell: zsh (simulated)
            \`/++++/+++++++:            Resolution: {resolution}
           \`/++++++++++++++:           Theme: Dark Modern
          \`/+++ooooooooooooo/\`         CPU: Full Stack Dev
         ./ooosssso++osssssso+\`        Memory: Highly Optimized
        .oossssso-\`\`\`\`/ossssss+\`       Location: Lucknow, IN
       -osssssso.      :ssssssso.      
      :osssssss/        osssso+++.     
     /ossssssss/        +ssssooo/-     
   \`/ossssso+/:-        -:/+osssso+-   
  \`+sso+:-\`                 \`.-/+oso:  
 \`++:.                           \`-/+/ 
 .\`                                 \`/
`;

export const dividers = {
    double: '═'.repeat(72),
    single: '─'.repeat(72),
    thick: '━'.repeat(72),
    dotted: '·'.repeat(72),
};

export const createProgressBar = (percentage: number, width: number = 20): string => {
    const filled = Math.round((percentage / 100) * width);
    const empty = width - filled;
    // Using gradient-like blocks for a cleaner look
    return `[${'█'.repeat(filled)}${'░'.repeat(empty)}] ${percentage}%`;
};

export const createBox = (title: string, content: string[]): string => {
    const maxWidth = Math.max(title.length, ...content.map(line => line.length)) + 4;
    const topBorder = `╭${'─'.repeat(maxWidth - 2)}╮`;
    const bottomBorder = `╰${'─'.repeat(maxWidth - 2)}╯`;
    const titleLine = `│ ${title.padEnd(maxWidth - 4)} │`;
    const separator = `├${'─'.repeat(maxWidth - 2)}┤`;
    const contentLines = content.map(line => `│ ${line.padEnd(maxWidth - 4)} │`);

    return [topBorder, titleLine, separator, ...contentLines, bottomBorder].join('\n');
};

export const cowsay = (text: string): string => {
    const lines = text.split('\n');
    const maxLength = Math.max(...lines.map(l => l.length));
    const border = '-'.repeat(maxLength + 2);

    return `
 ${border}
< ${text.padEnd(maxLength)} >
 ${border}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;
};

export const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

export const tree = `
/home/abeer-srivastava/
├── about.md
├── skills.json
├── education/
│   └── srmcem-lucknow.txt
├── projects/
│   ├── full-stack-portfolio.md
│   ├── data-science-viz.py
│   ├── cloud-deployment.sh
│   └── react-dashboard.tsx
├── contact.vcf
└── .config/
    └── theme-settings.json
`;