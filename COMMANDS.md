# 📖 Terminal Portfolio - Command Reference

Complete reference for all available commands in the terminal portfolio.

## Table of Contents
- [Core Commands](#core-commands)
- [System Commands](#system-commands)
- [Theme Commands](#theme-commands)
- [Utility Commands](#utility-commands)
- [Easter Eggs](#easter-eggs)

---

## Core Commands

### `help`
Display all available commands with descriptions.

**Usage:**
```bash
help
```

**Output:** List of all commands organized by category

---

### `about`
Learn more about Abeer Srivastava.

**Usage:**
```bash
about
```

**Output:** Personal information, education, and bio

---

### `skills`
View technical skills with proficiency levels.

**Usage:**
```bash
skills
```

**Output:** Skills organized by category with progress bars
- Frontend (React, TailwindCSS, JavaScript, HTML, CSS, TypeScript)
- Backend (Node.js, Express.js, RESTful APIs, JWT Auth)
- Database (MongoDB, Mongoose, Database Design)
- Languages (Python, C, C++, JavaScript)
- Tools (Git, GitHub, Linux, VS Code, Postman)
- Cloud & DS (AWS, ML, NumPy, Pandas)
- Currently Learning section

---

### `projects`
Browse all projects.

**Usage:**
```bash
projects
```

**Output:** List of 5 projects with:
- Project ID
- Name and description
- Tech stack
- Status (Completed/In Progress)
- GitHub and live demo links

---

### `project <id>`
View detailed information about a specific project.

**Usage:**
```bash
project 1
project 2
```

**Arguments:**
- `<id>` - Project ID (1-5)

**Output:** Detailed project information including:
- Full description
- Technologies used
- Key features list
- Links (GitHub, live demo)
- Current status

---

### `contact`
Get contact information.

**Usage:**
```bash
contact
```

**Output:** Contact details including:
- Email
- GitHub
- LinkedIn
- Twitter
- Portfolio website
- Location

---

### `social`
View social media links.

**Usage:**
```bash
social
socials  # alias
```

**Output:** Quick links to GitHub, LinkedIn, and Twitter

---

### `resume`
Download resume/CV.

**Usage:**
```bash
resume
cv  # alias
```

**Output:** Resume download information and alternative commands

---

### `clear`
Clear the terminal screen.

**Usage:**
```bash
clear
cls  # alias
```

**Effect:** Removes all previous output from the terminal

---

## System Commands

### `whoami`
Display current user.

**Usage:**
```bash
whoami
```

**Output:** Current username (`abeer`)

---

### `pwd`
Print working directory.

**Usage:**
```bash
pwd
```

**Output:** Current directory path (`/home/abeer`)

---

### `ls`
List directory contents.

**Usage:**
```bash
ls
```

**Output:** Files and directories in current location

---

### `cat <file>`
Display file contents.

**Usage:**
```bash
cat about.txt
cat skills.json
cat contact.vcf
```

**Arguments:**
- `<file>` - Filename to display

**Available files:**
- `about.txt` - About information
- `skills.json` - Skills data
- `contact.vcf` - Contact information

---

### `cd <directory>`
Change directory (simulated).

**Usage:**
```bash
cd projects
cd ..
cd ~
```

**Arguments:**
- `<directory>` - Directory name or path

---

### `echo <text>`
Print text to terminal.

**Usage:**
```bash
echo Hello World
echo "This is a test"
```

**Arguments:**
- `<text>` - Text to print

**Output:** Echoes the input text

---

### `date`
Display current date and time.

**Usage:**
```bash
date
```

**Output:** Full date and time with timezone

---

### `uptime`
Show system uptime.

**Usage:**
```bash
uptime
```

**Output:** Session duration in hours and minutes

---

### `neofetch`
Display system information in neofetch style.

**Usage:**
```bash
neofetch
screenfetch  # alias
```

**Output:** ASCII art with system information:
- OS (Terminal Portfolio v2.0)
- Host (React + TailwindCSS)
- Kernel (JavaScript ES2023)
- Uptime
- Shell
- Resolution
- Theme
- CPU, Memory, Disk

---

### `tree`
Show directory tree structure.

**Usage:**
```bash
tree
```

**Output:** ASCII tree visualization of file system

---

## Theme Commands

### `theme <name>`
Switch terminal theme.

**Usage:**
```bash
theme cyber
theme matrix
theme dracula
theme nord
theme monokai
theme solarized
```

**Arguments:**
- `<name>` - Theme name (see `themes` command for list)

**Effect:** Changes color scheme immediately

---

### `themes`
List all available themes.

**Usage:**
```bash
themes
```

**Output:** List of all 6 themes:
- cyber - Cyber Synthwave
- matrix - Matrix Green
- dracula - Dracula
- nord - Nord
- monokai - Monokai
- solarized - Solarized Dark

---

## Utility Commands

### `banner`
Display welcome banner.

**Usage:**
```bash
banner
```

**Output:** ASCII art welcome banner with typewriter effect

---

### `history`
View command history.

**Usage:**
```bash
history
```

**Output:** List of previously executed commands

---

### `cowsay <text>`
Make the ASCII cow say something.

**Usage:**
```bash
cowsay Hello!
cowsay "Moo moo!"
```

**Arguments:**
- `<text>` - Text for the cow to say (optional, defaults to "Moo!")

**Output:** ASCII cow with speech bubble

---

## Easter Eggs

### `snake`
Play the Snake game.

**Usage:**
```bash
snake
```

**Controls:**
- WASD or Arrow Keys - Move snake
- ESC - Exit game
- R - Restart (when game over)

**Features:**
- Score tracking
- High score persistence (localStorage)
- Collision detection
- Food spawning

---

### `matrix`
Enter the Matrix rain effect.

**Usage:**
```bash
matrix
cmatrix  # alias
```

**Controls:**
- ESC - Exit effect

**Features:**
- Full-screen falling green characters
- Auto-exit after 10 seconds
- Japanese katakana and alphanumeric characters

---

### `hack`
Initiate hacking sequence simulation.

**Usage:**
```bash
hack
```

**Output:** Multi-stage hacking animation:
- Port scanning
- Password cracking
- Firewall bypass
- Access granted message

---

### `joke`
Get a random programming joke.

**Usage:**
```bash
joke
```

**Output:** Random joke from collection of 5 programming jokes

---

### `quote`
Get an inspirational coding quote.

**Usage:**
```bash
quote
fortune  # alias
```

**Output:** Random inspirational quote from famous programmers

---

### `sudo <command>`
Try to run as superuser (Easter egg).

**Usage:**
```bash
sudo rm -rf /
sudo hack-nasa
```

**Arguments:**
- `<command>` - Any command

**Output:** Permission denied message with humor

---

### `exit`
Attempt to exit the terminal (Easter egg).

**Usage:**
```bash
exit
```

**Output:** Humorous message encouraging you to stay

---

## Keyboard Shortcuts

- **Tab** - Autocomplete current command
- **↑** - Previous command in history
- **↓** - Next command in history
- **Ctrl+C** - Clear current input
- **Ctrl+L** - Clear terminal screen
- **Ctrl+U** - Clear entire line
- **Ctrl+R** - Reverse search history (future feature)
- **ESC** - Exit games or special modes

---

## Tips & Tricks

1. **Autocomplete**: Start typing a command and press Tab to autocomplete
2. **History**: Use up/down arrows to navigate through previous commands
3. **Suggestions**: Command suggestions appear as you type
4. **Themes**: Try different themes to find your favorite aesthetic
5. **Games**: High scores are saved in localStorage
6. **Mobile**: Works great on mobile devices with touch support

---

## Command Aliases

| Command | Aliases |
|---------|---------|
| clear | cls |
| resume | cv |
| social | socials |
| neofetch | screenfetch |
| quote | fortune |
| matrix | cmatrix |

---

**Need help?** Type `help` in the terminal for a quick reference!
