import {
    HelpCircle,
    User,
    Wrench,
    FolderOpen,
    Search,
    Mail,
    Globe,
    FileText,
    Eraser,
    FolderTree,
    List,
    FileCode,
    MessageSquare,
    Calendar,
    Clock,
    Info,
    Palette,
    History,
    Sparkles,
    Zap,
    Gamepad2,
    Laugh,
    Quote,
    MessageCircle,
    Shield,
    LogOut,
    type LucideIcon,
} from 'lucide-react';

export interface CommandIconConfig {
    icon: LucideIcon;
    color: string;
    label: string;
}

export const iconMapping: Record<string, CommandIconConfig> = {
    // Core Commands
    help: { icon: HelpCircle, color: '#00d9ff', label: 'HELP' },
    about: { icon: User, color: '#00ff9f', label: 'ABOUT' },
    skills: { icon: Wrench, color: '#ffcc00', label: 'SKILLS' },
    projects: { icon: FolderOpen, color: '#ff00ff', label: 'PROJECTS' },
    project: { icon: Search, color: '#ff00ff', label: 'VIEW' },
    contact: { icon: Mail, color: '#00ff9f', label: 'CONTACT' },
    social: { icon: Globe, color: '#00d9ff', label: 'SOCIAL' },
    socials: { icon: Globe, color: '#00d9ff', label: 'SOCIAL' },
    resume: { icon: FileText, color: '#ffcc00', label: 'RESUME' },
    cv: { icon: FileText, color: '#ffcc00', label: 'RESUME' },
    clear: { icon: Eraser, color: '#ff0055', label: 'CLEAR' },
    cls: { icon: Eraser, color: '#ff0055', label: 'CLEAR' },

    // Unix-Style Commands
    whoami: { icon: User, color: '#00ff9f', label: 'USER' },
    pwd: { icon: FolderTree, color: '#00d9ff', label: 'PATH' },
    ls: { icon: List, color: '#ffcc00', label: 'LIST' },
    cat: { icon: FileCode, color: '#ff00ff', label: 'READ' },
    cd: { icon: FolderTree, color: '#00d9ff', label: 'CD' },
    echo: { icon: MessageSquare, color: '#00ff9f', label: 'ECHO' },
    date: { icon: Calendar, color: '#ffcc00', label: 'DATE' },
    uptime: { icon: Clock, color: '#00d9ff', label: 'UPTIME' },
    neofetch: { icon: Info, color: '#ff00ff', label: 'INFO' },
    screenfetch: { icon: Info, color: '#ff00ff', label: 'INFO' },
    tree: { icon: FolderTree, color: '#00ff9f', label: 'TREE' },

    // Theme Commands
    theme: { icon: Palette, color: '#ff00ff', label: 'THEME' },
    themes: { icon: Palette, color: '#ff00ff', label: 'THEMES' },

    // Utility Commands
    history: { icon: History, color: '#00d9ff', label: 'HISTORY' },
    banner: { icon: Sparkles, color: '#00ff9f', label: 'BANNER' },
    search: { icon: Search, color: '#ffcc00', label: 'SEARCH' },
    man: { icon: FileText, color: '#00d9ff', label: 'MANUAL' },

    // Easter Eggs
    hack: { icon: Zap, color: '#ff0055', label: 'HACK' },
    matrix: { icon: Sparkles, color: '#00ff00', label: 'MATRIX' },
    cmatrix: { icon: Sparkles, color: '#00ff00', label: 'MATRIX' },
    snake: { icon: Gamepad2, color: '#00ff9f', label: 'SNAKE' },
    joke: { icon: Laugh, color: '#ffcc00', label: 'JOKE' },
    quote: { icon: Quote, color: '#00d9ff', label: 'QUOTE' },
    fortune: { icon: Quote, color: '#00d9ff', label: 'QUOTE' },
    cowsay: { icon: MessageCircle, color: '#ff00ff', label: 'COWSAY' },
    sudo: { icon: Shield, color: '#ff0055', label: 'SUDO' },
    exit: { icon: LogOut, color: '#ff0055', label: 'EXIT' },
};

export const getCommandIcon = (commandName: string): CommandIconConfig | null => {
    return iconMapping[commandName.toLowerCase()] || null;
};
