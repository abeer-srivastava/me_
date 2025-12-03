export interface Skill {
    name: string;
    level: number; // 0-100
    category: string;
}

export const skills: Skill[] = [
    // Frontend
    { name: 'React.js', level: 85, category: 'Frontend' },
    { name: 'TailwindCSS', level: 90, category: 'Frontend' },
    { name: 'JavaScript ES6+', level: 88, category: 'Frontend' },
    { name: 'HTML5', level: 95, category: 'Frontend' },
    { name: 'CSS3', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 75, category: 'Frontend' },

    // Backend
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Express.js', level: 82, category: 'Backend' },
    { name: 'RESTful APIs', level: 85, category: 'Backend' },
    { name: 'JWT Auth', level: 78, category: 'Backend' },

    // Database
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'Mongoose', level: 75, category: 'Database' },
    { name: 'Database Design', level: 70, category: 'Database' },

    // Languages
    { name: 'Python', level: 85, category: 'Languages' },
    { name: 'C', level: 75, category: 'Languages' },
    { name: 'C++', level: 78, category: 'Languages' },
    { name: 'JavaScript', level: 90, category: 'Languages' },

    // Tools
    { name: 'Git', level: 88, category: 'Tools' },
    { name: 'GitHub', level: 85, category: 'Tools' },
    { name: 'Linux', level: 80, category: 'Tools' },
    { name: 'VS Code', level: 95, category: 'Tools' },
    { name: 'Postman', level: 82, category: 'Tools' },

    // Cloud & Data Science
    { name: 'AWS Basics', level: 60, category: 'Cloud & DS' },
    { name: 'ML Fundamentals', level: 65, category: 'Cloud & DS' },
    { name: 'NumPy', level: 70, category: 'Cloud & DS' },
    { name: 'Pandas', level: 68, category: 'Cloud & DS' },
];

export const currentlyLearning = [
    'Docker & Kubernetes',
    'TypeScript',
    'GraphQL',
    'Next.js',
    'System Design',
];

export const skillCategories = [
    'Frontend',
    'Backend',
    'Database',
    'Languages',
    'Tools',
    'Cloud & DS',
];
