import  { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import type { ChangeEvent } from 'react';

interface CommandContent {
  text: string;
  color?: string;
  href?: string;
  inline?: boolean;
}

interface Command {
  type: string;
  content: CommandContent[];
}

interface Line {
  prompt?: string;
  output: string | CommandContent[];
  type: string;
}

const Terminal = () => {
  const [lines, setLines] = useState<Line[]>([
    { output: "Welcome to my portfolio! Type \"help\" to see available commands.", type: "welcome" }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

 const commands: Record<string, Command> = {
  help: {
    type: "help",
    content: [
      { text: "Available commands:", color: "text-green-400" },
      { text: "• about - Learn about me", color: "text-green-300" },
      { text: "• skills - View my technical skills", color: "text-green-300" },
      { text: "• projects - See my projects", color: "text-green-300" },
      { text: "• experience - View my work experience", color: "text-green-300" },
      { text: "• education - View my education", color: "text-green-300" },
      { text: "• resume - Download my resume", color: "text-green-300" },
      { text: "• contact - Get my contact information", color: "text-green-300" },
      { text: "• clear - Clear the terminal", color: "text-green-300" },
      { text: "• help - Show this help message", color: "text-green-300" },
    ],
  },

  about: {
    type: "about",
    content: [
      { text: "Abeer Srivastava", color: "text-blue-400 font-bold text-lg" },
      { text: "Full Stack Developer | CSE @ SRMCEM", color: "text-blue-400" },
      { text: "", color: "" },
      {
        text: "I'm a passionate Full-Stack Developer skilled in software engineering, cloud computing, and scalable solution design. Experienced in applying AI/ML to build innovative, high-performance applications that combine creativity and technology.",
        color: "text-blue-300",
      },
    ],
  },

  skills: {
    type: "skills",
    content: [
      { text: "Technical Skills:", color: "text-purple-400 font-bold" },
      { text: "", color: "" },
      { text: "Programming Languages:", color: "text-purple-300 font-semibold" },
      { text: "C++, C, Java, Python, JavaScript, TypeScript, SQL", color: "text-purple-300" },
      { text: "", color: "" },
      { text: "Web & Full-Stack Development:", color: "text-purple-300 font-semibold" },
      { text: "React.js, Next.js, Express.js, EJS, REST APIs, WebSockets", color: "text-purple-300" },
      { text: "", color: "" },
      { text: "Databases:", color: "text-purple-300 font-semibold" },
      { text: "MongoDB, PostgreSQL, MySQL", color: "text-purple-300" },
      { text: "", color: "" },
      { text: "Cloud & DevOps:", color: "text-purple-300 font-semibold" },
      { text: "AWS Cloud, Google Cloud, IBM Cloud", color: "text-purple-300" },
      { text: "", color: "" },
      { text: "Data & AI/ML:", color: "text-purple-300 font-semibold" },
      { text: "Data Science, Machine Learning, Artificial Intelligence", color: "text-purple-300" },
    ],
  },

  projects: {
    type: "projects",
    content: [
      { text: "Featured Projects:", color: "text-orange-400 font-bold" },
      { text: "", color: "" },

      { text: "EchoBox", color: "text-orange-300 font-semibold" },
      { text: "A full-stack platform for collecting anonymous event feedback with secure authentication, email verification, and AI-powered question suggestions.", color: "text-orange-300" },
      { text: "Tools: Next.js, React, TailwindCSS, Framer Motion, NextAuth.js, MongoDB, Resend, Google Gemini API, Zod", color: "text-orange-500" },
      { text: "", color: "" },

      { text: "PostGenie", color: "text-orange-300 font-semibold" },
      { text: "An AI-powered content generation tool that analyzes LinkedIn posts to extract tone, style, and key themes, automating post creation in the user’s unique voice.", color: "text-orange-300" },
      { text: "Tools: Python, Streamlit, Generative AI, Google Gemini API", color: "text-orange-500" },
      { text: "", color: "" },

      { text: "Second Brain", color: "text-orange-300 font-semibold" },
      { text: "A knowledge management platform with tagging, categorization, and JWT-secured sharing. Integrated Qdrant VectorDB and Gemini API for AI-powered search and knowledge retrieval.", color: "text-orange-300" },
      { text: "Tools: React, TypeScript, TailwindCSS, Node.js, Express, MongoDB, JWT, Qdrant, Google Gemini API", color: "text-orange-500" },
    ],
  },

  experience: {
    type: "experience",
    content: [
      { text: "Leadership & Involvement:", color: "text-cyan-400 font-bold" },
      { text: "", color: "" },
      { text: "Technical Member - Computer Society of India (CSI), SRMCEM", color: "text-cyan-300 font-semibold" },
      { text: "Lucknow, Uttar Pradesh | Oct 2023 - Jun 2024", color: "text-cyan-300" },
      { text: "• Organized 5+ technical workshops with a 10-member team, engaging 200+ students.", color: "text-cyan-300" },
      { text: "• Gained hands-on experience with Python and Cloud Computing through structured sessions.", color: "text-cyan-300" },
      { text: "• Strengthened leadership and collaboration skills through event coordination and project development.", color: "text-cyan-300" },
    ],
  },

  education: {
    type: "education",
    content: [
      { text: "Education:", color: "text-indigo-400 font-bold" },
      { text: "", color: "" },
      { text: "Bachelor of Technology in Computer Science and Engineering", color: "text-indigo-300 font-semibold" },
      { text: "Shri Ramswaroop Memorial College of Engineering and Management, Lucknow", color: "text-indigo-300" },
      { text: "GPA: 8.6/10.0 | Aug 2022 - Present", color: "text-indigo-300" },
      { text: "", color: "" },
      { text: "Senior Secondary (Class XII)", color: "text-indigo-300 font-semibold" },
      { text: "Kamla Nehru Institute of Child Education, Sultanpur | CBSE", color: "text-indigo-300" },
      { text: "94.3% | Apr 2021 - Mar 2022", color: "text-indigo-300" },
      { text: "", color: "" },
      { text: "Secondary (Class X)", color: "text-indigo-300 font-semibold" },
      { text: "Kamla Nehru Institute of Child Education, Sultanpur | CBSE", color: "text-indigo-300" },
      { text: "93.4% | Apr 2019 - Mar 2020", color: "text-indigo-300" },
    ],
  },

  contact: {
    type: "contact",
    content: [
      { text: "Contact Information:", color: "text-amber-400 font-bold" },
      { text: "", color: "" },
      { text: "Location:", color: "text-amber-300 font-semibold", inline: true },
      { text: " Lucknow", color: "text-amber-300" },
      { text: "Email:", color: "text-amber-300 font-semibold", inline: true },
      { text: " abeersrivastava16@gmail.com", color: "text-amber-300" },
      { text: "Phone:", color: "text-amber-300 font-semibold", inline: true },
      { text: " +91 7355336760", color: "text-amber-300" },
      { text: "LinkedIn:", color: "text-amber-300 font-semibold", inline: true },
      { text: " linkedin.com/in/abeer-srivastava-a90797290", color: "text-amber-300 hover:text-amber-300 cursor-pointer" },
      { text: "GitHub:", color: "text-amber-300 font-semibold", inline: true },
      { text: " github.com/abeer-srivastava", color: "text-amber-300 hover:text-amber-300 cursor-pointer" },
    ],
  },

  resume: {
    type: "resume",
    content: [
      { text: "Download my resume here:", color: "text-pink-400" },
      {
        text: "📄 Abeer_Srivastava_Resume.pdf",
        color: "text-pink-500 hover:text-pink-400 cursor-pointer underline",
        href: "/Abeer_srivastava_.pdf",
      },
    ],
  },
};

const handleCommand = (cmd:string) => {
    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    const command = commands[cmd];
    if (command) {
      setLines([...lines, {
        prompt: `abeer@portfolio : ~ $ ${cmd}`,
        output: command.content,
        type: command.type
      }]);
    } else {
      setLines([...lines, {
        prompt: `abeer@portfolio : ~ $ ${cmd}`,
        output: [{ text: `Command not found: ${cmd}`, color: "text-red-400" }],
        type: "error"
      }]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input.trim());
      setInput("");
    }
  };

  
  const renderOutput = (output: string | CommandContent[], type?: string) => {
    if (typeof output === 'string') {
      if (type === 'welcome') {
        return <TypewriterText text={output} className="text-emerald-500" speed={20} />;
      }
      return <div className="text-emerald-500">{output}</div>;
    }

    return output.map((item, index) => {
      if (item.text === '') {
        return <div key={index} className="h-2"></div>;
      }
      if (item.href) {
        return (
          <a
            key={index}
            href={item.href}
            download
            className={`${item.color} block`}
          >
            {item.text}
          </a>
        );
      }
      return (
        <div key={index} className={`${item.color} ${item.inline ? 'inline' : ''}`}>
          {item.text}
        </div>
      );
    });
  };

  return (
    <div className="bg-[#0f172a] rounded-b-lg p-4 shadow-md border border-gray-600/30 h-[75vh] overflow-y-auto">
      {lines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.03 }}
          className="mb-2"
        >
          {line.prompt && (
            <div className="text-sm text-emerald-400 mb-1">{line.prompt}</div>
          )}
          <div className="text-sm">
            {renderOutput(line.output, line.type)}
          </div>
        </motion.div>
      ))}
      <div className="flex items-center mt-4">
        <span className="text-emerald-400">abeer@portfolio : ~ $</span>
        <input
          className="bg-transparent outline-none ml-2 text-white flex-1"
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
      <div ref={bottomRef} />
    </div>
  );
};

export default Terminal;

