export interface Project {
    id: number;
    name: string;
    description: string;
    tech: string[];
    features: string[];
    github: string;
    live: string;
    status: 'Completed' | 'In Progress' | 'Planning';
}

export const projects: Project[] = [
    {
        id: 1,
        name: 'Terminal Portfolio Website',
        description: 'Interactive CLI-based portfolio with terminal emulation',
        tech: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        features: [
            'Command-line interface simulation',
            'Multiple theme support (6 themes)',
            'ASCII art animations',
            'Easter egg mini-games (Snake, Matrix, Hack)',
            'Sound system with mechanical keyboard sounds',
            'File system simulation',
            'Autocomplete and command history',
        ],
        github: 'https://github.com/abeer/terminal-portfolio',
        live: 'https://abeer-terminal.vercel.app',
        status: 'Completed',
    },
    {
        id: 2,
        name: 'MERN Stack E-Commerce Platform',
        description: 'Full-featured online shopping platform',
        tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe'],
        features: [
            'User authentication & authorization',
            'Product catalog with search & filters',
            'Shopping cart & checkout',
            'Admin dashboard',
            'Payment integration (Stripe/PayPal)',
            'Order tracking and management',
        ],
        github: 'https://github.com/abeer/ecommerce-mern',
        live: 'https://shop-abeer.herokuapp.com',
        status: 'In Progress',
    },
    {
        id: 3,
        name: 'Real-Time Chat Application',
        description: 'WebSocket-based chat app with rooms',
        tech: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'Express'],
        features: [
            'Real-time messaging',
            'Multiple chat rooms',
            'User presence indicators',
            'Message history',
            'File sharing',
            'Typing indicators',
        ],
        github: 'https://github.com/abeer/realtime-chat',
        live: 'https://chat-abeer.vercel.app',
        status: 'Completed',
    },
    {
        id: 4,
        name: 'Weather Dashboard',
        description: 'Beautiful weather forecast app with geolocation',
        tech: ['React', 'OpenWeather API', 'TailwindCSS', 'Chart.js'],
        features: [
            'Current weather & 7-day forecast',
            'Location-based detection',
            'Favorite cities',
            'Weather alerts',
            'Responsive design',
            'Temperature charts',
        ],
        github: 'https://github.com/abeer/weather-dashboard',
        live: 'https://weather-abeer.netlify.app',
        status: 'Completed',
    },
    {
        id: 5,
        name: 'Task Management System',
        description: 'Kanban-style project management tool',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'DnD Kit'],
        features: [
            'Drag-and-drop interface',
            'Project boards',
            'Task assignment',
            'Due dates & reminders',
            'Team collaboration',
            'Activity timeline',
        ],
        github: 'https://github.com/abeer/task-manager',
        live: 'https://tasks-abeer.vercel.app',
        status: 'In Progress',
    },
];
