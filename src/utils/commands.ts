import { portfolioData } from '../data/portfolio';
import { skills, skillCategories, currentlyLearning } from '../data/skills';
import { projects } from '../data/projects';
import { banner, neofetch, createProgressBar, dividers, cowsay, tree } from '../utils/asciiArt';
import { themes } from '../data/themes';

export interface CommandOutput {
    type: 'text' | 'component' | 'error';
    content: string | React.ReactNode;
    className?: string;
}

export interface Command {
    name: string;
    description: string;
    usage?: string;
    aliases?: string[];
    execute: (args: string[]) => CommandOutput[];
}

const formatDate = () => {
    const now = new Date();
    return now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });
};

const getUptime = (startTime: number) => {
    const uptime = Date.now() - startTime;
    const hours = Math.floor(uptime / (1000 * 60 * 60));
    const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours} hours, ${minutes} minutes`;
};

export const createCommands = (
    setTheme: (theme: string) => void,
    currentTheme: string,
    startTime: number
): Record<string, Command> => ({
    help: {
        name: 'help',
        description: 'Display available commands',
        execute: () => [
            {
                type: 'text',
                content: `
${dividers.double}
  AVAILABLE COMMANDS
${dividers.double}

CORE COMMANDS:
  help          - Display this help message
  about         - Learn more about me
  skills        - View my technical skills
  projects      - Browse my projects
  project <id>  - View detailed project information
  contact       - Get my contact information
  social        - View my social media links
  resume        - Download my resume
  clear / cls   - Clear the terminal

SYSTEM COMMANDS:
  whoami        - Display current user
  pwd           - Print working directory
  ls            - List directory contents
  cat <file>    - Display file contents
  cd <dir>      - Change directory
  echo <text>   - Print text to terminal
  date          - Display current date and time
  uptime        - Show system uptime
  neofetch      - Display system information
  tree          - Show directory tree

THEME COMMANDS:
  theme <name>  - Switch terminal theme
  themes        - List available themes

UTILITY COMMANDS:
  history       - View command history
  banner        - Display welcome banner
  search <term> - Search portfolio content
  man <cmd>     - Show command manual

EASTER EGGS:
  hack          - Initiate hacking sequence
  matrix        - Enter the Matrix
  snake         - Play Snake game
  joke          - Get a random joke
  quote         - Get an inspirational quote
  cowsay <text> - Make the cow say something
  sudo <cmd>    - Try to run as superuser
  exit          - Attempt to exit

${dividers.double}
Type any command to get started!
`,
            },
        ],
    },

    about: {
        name: 'about',
        description: 'Learn more about me',
        execute: () => [
            {
                type: 'text',
                content: `
${dividers.double}
  ABOUT ME
${dividers.double}

Name:       ${portfolioData.name}
Role:       ${portfolioData.role}
Location:   ${portfolioData.location}
Education:  ${portfolioData.degree}
University: ${portfolioData.university}
Year:       ${portfolioData.year}
Status:     ${portfolioData.status}

${dividers.single}

${portfolioData.bio}

${dividers.double}
`,
            },
        ],
    },

    skills: {
        name: 'skills',
        description: 'View my technical skills',
        execute: () => {
            const output: CommandOutput[] = [
                {
                    type: 'text',
                    content: `
${dividers.double}
  TECHNICAL SKILLS
${dividers.double}
`,
                },
            ];

            skillCategories.forEach((category) => {
                const categorySkills = skills.filter((s) => s.category === category);
                if (categorySkills.length > 0) {
                    output.push({
                        type: 'text',
                        content: `\n${category.toUpperCase()}:`,
                    });
                    categorySkills.forEach((skill) => {
                        output.push({
                            type: 'text',
                            content: `  ${skill.name.padEnd(20)} ${createProgressBar(skill.level)}`,
                        });
                    });
                }
            });

            output.push({
                type: 'text',
                content: `
${dividers.single}

CURRENTLY LEARNING:
${currentlyLearning.map((item) => `  • ${item}`).join('\n')}

${dividers.double}
`,
            });

            return output;
        },
    },

    projects: {
        name: 'projects',
        description: 'Browse my projects',
        execute: () => {
            const output: CommandOutput[] = [
                {
                    type: 'text',
                    content: `
${dividers.double}
  MY PROJECTS
${dividers.double}
`,
                },
            ];

            projects.forEach((project) => {
                output.push({
                    type: 'text',
                    content: `
[${project.id}] ${project.name}
    ${project.description}
    Tech: ${project.tech.join(', ')}
    Status: ${project.status}
    GitHub: ${project.github}
    Live: ${project.live}
`,
                });
            });

            output.push({
                type: 'text',
                content: `
${dividers.single}
Type 'project <id>' to view detailed information about a project.
${dividers.double}
`,
            });

            return output;
        },
    },

    project: {
        name: 'project',
        description: 'View detailed project information',
        usage: 'project <id>',
        execute: (args) => {
            if (args.length === 0) {
                return [
                    {
                        type: 'error',
                        content: 'Usage: project <id>\nExample: project 1',
                    },
                ];
            }

            const id = parseInt(args[0]);
            const project = projects.find((p) => p.id === id);

            if (!project) {
                return [
                    {
                        type: 'error',
                        content: `Project with ID ${id} not found.\nUse 'projects' to see all available projects.`,
                    },
                ];
            }

            return [
                {
                    type: 'text',
                    content: `
${dividers.double}
  ${project.name.toUpperCase()}
${dividers.double}

Description:
  ${project.description}

Technologies:
  ${project.tech.join(', ')}

Key Features:
${project.features.map((f) => `  • ${f}`).join('\n')}

Links:
  GitHub: ${project.github}
  Live Demo: ${project.live}

Status: ${project.status}

${dividers.double}
`,
                },
            ];
        },
    },

    contact: {
        name: 'contact',
        description: 'Get my contact information',
        execute: () => [
            {
                type: 'text',
                content: `
${dividers.double}
  CONTACT INFORMATION
${dividers.double}

Email:     ${portfolioData.email}
GitHub:    ${portfolioData.github}
LinkedIn:  ${portfolioData.linkedin}
Twitter:   ${portfolioData.twitter}
Portfolio: ${portfolioData.portfolio}
Location:  ${portfolioData.location}

${dividers.single}

Feel free to reach out! I'm always open to interesting
conversations and collaboration opportunities.

${dividers.double}
`,
            },
        ],
    },

    social: {
        name: 'social',
        description: 'View my social media links',
        aliases: ['socials'],
        execute: () => [
            {
                type: 'text',
                content: `
${dividers.double}
  SOCIAL MEDIA
${dividers.double}

  GitHub:   ${portfolioData.github}
  LinkedIn: ${portfolioData.linkedin}
  Twitter:  ${portfolioData.twitter}

${dividers.double}
`,
            },
        ],
    },

    resume: {
        name: 'resume',
        description: 'Download my resume',
        aliases: ['cv'],
        execute: () => [
            {
                type: 'text',
                content: `
${dividers.double}
  RESUME
${dividers.double}

Resume download functionality would be available here.
In a production environment, this would trigger a PDF download.

For now, you can view my:
  • Skills: Type 'skills'
  • Projects: Type 'projects'
  • Contact: Type 'contact'

${dividers.double}
`,
            },
        ],
    },

    clear: {
        name: 'clear',
        description: 'Clear the terminal',
        aliases: ['cls'],
        execute: () => [{ type: 'text', content: 'CLEAR_TERMINAL' }],
    },

    whoami: {
        name: 'whoami',
        description: 'Display current user',
        execute: () => [
            {
                type: 'text',
                content: portfolioData.username,
            },
        ],
    },

    pwd: {
        name: 'pwd',
        description: 'Print working directory',
        execute: () => [
            {
                type: 'text',
                content: `/home/${portfolioData.username}`,
            },
        ],
    },

    ls: {
        name: 'ls',
        description: 'List directory contents',
        execute: () => [
            {
                type: 'text',
                content: `about.txt  skills.json  projects/  contact.vcf  resume.pdf  .config/`,
            },
        ],
    },

    cat: {
        name: 'cat',
        description: 'Display file contents',
        usage: 'cat <filename>',
        execute: (args) => {
            if (args.length === 0) {
                return [{ type: 'error', content: 'Usage: cat <filename>' }];
            }

            const file = args[0];
            const fileMap: Record<string, () => CommandOutput[]> = {
                'about.txt': () => createCommands(setTheme, currentTheme, startTime).about.execute([]),
                'skills.json': () => createCommands(setTheme, currentTheme, startTime).skills.execute([]),
                'contact.vcf': () => createCommands(setTheme, currentTheme, startTime).contact.execute([]),
            };

            if (fileMap[file]) {
                return fileMap[file]();
            }

            return [
                {
                    type: 'error',
                    content: `cat: ${file}: No such file or directory`,
                },
            ];
        },
    },

    echo: {
        name: 'echo',
        description: 'Print text to terminal',
        usage: 'echo <text>',
        execute: (args) => [
            {
                type: 'text',
                content: args.join(' '),
            },
        ],
    },

    date: {
        name: 'date',
        description: 'Display current date and time',
        execute: () => [
            {
                type: 'text',
                content: formatDate(),
            },
        ],
    },

    uptime: {
        name: 'uptime',
        description: 'Show system uptime',
        execute: () => [
            {
                type: 'text',
                content: `Session uptime: ${getUptime(startTime)}`,
            },
        ],
    },

    neofetch: {
        name: 'neofetch',
        description: 'Display system information',
        aliases: ['screenfetch'],
        execute: () => {
            const resolution = `${window.innerWidth}x${window.innerHeight}`;
            const themeName = themes[currentTheme]?.displayName || currentTheme;
            const uptimeStr = getUptime(startTime);

            return [
                {
                    type: 'text',
                    content: neofetch
                        .replace('{uptime}', uptimeStr)
                        .replace('{resolution}', resolution)
                        .replace('{theme}', themeName),
                },
            ];
        },
    },

    tree: {
        name: 'tree',
        description: 'Show directory tree',
        execute: () => [
            {
                type: 'text',
                content: tree,
            },
        ],
    },

    theme: {
        name: 'theme',
        description: 'Switch terminal theme',
        usage: 'theme <name>',
        execute: (args) => {
            if (args.length === 0) {
                return [
                    {
                        type: 'error',
                        content: "Usage: theme <name>\nUse 'themes' to see available themes.",
                    },
                ];
            }

            const themeName = args[0].toLowerCase();
            if (themes[themeName]) {
                setTheme(themeName);
                return [
                    {
                        type: 'text',
                        content: `Theme changed to: ${themes[themeName].displayName}`,
                    },
                ];
            }

            return [
                {
                    type: 'error',
                    content: `Theme '${themeName}' not found.\nUse 'themes' to see available themes.`,
                },
            ];
        },
    },

    themes: {
        name: 'themes',
        description: 'List available themes',
        execute: () => {
            const themeList = Object.values(themes)
                .map((t) => `  • ${t.name.padEnd(12)} - ${t.displayName}`)
                .join('\n');

            return [
                {
                    type: 'text',
                    content: `
${dividers.double}
  AVAILABLE THEMES
${dividers.double}

${themeList}

${dividers.single}
Usage: theme <name>
Example: theme matrix

${dividers.double}
`,
                },
            ];
        },
    },

    banner: {
        name: 'banner',
        description: 'Display welcome banner',
        execute: () => [
            {
                type: 'text',
                content: banner,
            },
        ],
    },

    history: {
        name: 'history',
        description: 'View command history',
        execute: () => [
            {
                type: 'text',
                content: 'Command history will be displayed here.',
            },
        ],
    },

    cowsay: {
        name: 'cowsay',
        description: 'Make the cow say something',
        usage: 'cowsay <text>',
        execute: (args) => {
            const text = args.join(' ') || 'Moo!';
            return [
                {
                    type: 'text',
                    content: cowsay(text),
                },
            ];
        },
    },

    sudo: {
        name: 'sudo',
        description: 'Try to run as superuser',
        usage: 'sudo <command>',
        execute: (args) => {
            const command = args.length > 0 ? args.join(' ') : 'command';
            return [
                {
                    type: 'error',
                    content: `[sudo] password for ${portfolioData.username}: 
Permission denied. Nice try! 😏
You tried to run: sudo ${command}`,
                },
            ];
        },
    },

    exit: {
        name: 'exit',
        description: 'Attempt to exit',
        execute: () => [
            {
                type: 'text',
                content: "Why would you want to leave? 🥺\nThere's so much more to explore!",
            },
        ],
    },

    hack: {
        name: 'hack',
        description: 'Initiate hacking sequence',
        execute: () => [
            {
                type: 'text',
                content: `
Initializing hacking sequence...
[████████████████████] 100%

Scanning ports... Done!
Cracking password... Done!
Bypassing firewall... Done!

ACCESS GRANTED! 🎉

Just kidding! This is a portfolio, not a hacking tool. 😄
`,
            },
        ],
    },

    joke: {
        name: 'joke',
        description: 'Get a random programming joke',
        execute: () => {
            const jokes = [
                "Why do programmers prefer dark mode?\nBecause light attracts bugs!",
                "How many programmers does it take to change a light bulb?\nNone. It's a hardware problem.",
                "Why do Java developers wear glasses?\nBecause they don't C#!",
                "What's a programmer's favorite hangout place?\nFoo Bar!",
                "Why did the programmer quit his job?\nBecause he didn't get arrays!",
            ];
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            return [{ type: 'text', content: randomJoke }];
        },
    },

    quote: {
        name: 'quote',
        description: 'Get an inspirational quote',
        aliases: ['fortune'],
        execute: () => {
            const quotes = [
                '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
                '"First, solve the problem. Then, write the code." - John Johnson',
                '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
                '"In order to be irreplaceable, one must always be different." - Coco Chanel',
                '"The best error message is the one that never shows up." - Thomas Fuchs',
            ];
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            return [{ type: 'text', content: randomQuote }];
        },
    },

    snake: {
        name: 'snake',
        description: 'Play Snake game',
        execute: () => [
            {
                type: 'component',
                content: 'SNAKE_GAME',
            },
        ],
    },

    matrix: {
        name: 'matrix',
        description: 'Enter the Matrix',
        aliases: ['cmatrix'],
        execute: () => [
            {
                type: 'component',
                content: 'MATRIX_RAIN',
            },
        ],
    },
});
