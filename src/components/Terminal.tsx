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
    { output: "Weelcome to my portfolio! Type \"help\" to see available commands.", type: "welcome" }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const commands:Record<string, Command> = {
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
        { text: "•  help - Show this help message", color: "text-green-300" },
      ]
    },

    about: {
      type: "about",
      content: [
        { text: "Abeer Srivastava", color: "text-blue-400 font-bold text-lg" },
        { text: "Full Stack Developer | CSE @ SRMCEM", color: "text-blue-400" },
        { text: "", color: "" },
        { text: "I'm a Full Stack Developer who loves building scalable and user-friendly applications, with strong proficiency in Python, C++, and JavaScript. Passionate about cloud technologies and data science, continuously exploring emerging frameworks to solve real-world problems through innovative technology solutions..", color: "text-blue-300" }
      ]
    },

    skills: {
      type: "skills",
      content: [
        { text: "Technical Skills:", color: "text-purple-400 font-bold" },
        { text: "", color: "" },
        { text: "Languages:", color: "text-purple-300 font-semibold" },
        { text: "C++, C, Java, SQL, JavaScript, TypeScript, Python", color: "text-purple-300" },
        { text: "", color: "" },
        { text: "Frontend:", color: "text-purple-300 font-semibold" },
        { text: "React, TailwindCSS, JavaScript", color: "text-purple-300" },
        { text: "", color: "" },
        { text: "Backend:", color: "text-purple-300 font-semibold" },
        { text: "Node.js, Express.js", color: "text-purple-300" },
        { text: "", color: "" },
        { text: "Databases:", color: "text-purple-300 font-semibold" },
        { text: "MongoDb, PostgreSQL", color: "text-purple-300" },
        { text: "", color: "" },
        { text: "Cloud & DevOps:", color: "text-purple-300 font-semibold" },
        { text: "AWS Cloud, Google Cloud, IBM Cloud, CI/CD", color: "text-purple-300" },
        { text: "", color: "" },
        { text: "Domains:", color: "text-purple-300 font-semibold" },
        { text: "Fullstack Development, Data Science", color: "text-purple-300" }
      ]
    },

    projects: {
      type: "projects",
      content: [
        { text: "Featured Projects:", color: "text-orange-400 font-bold" },
        { text: "", color: "" },
        { text: "Second Brain", color: "text-orange-300 font-semibold" },
        { text: "Second Brain is a digital tool designed to help individuals capture, organize, and connect information like notes, tasks, and ideas.", color: "text-orange-300" },
        { text: "Tools: React, TailwindCSS, JavaScript", color: "text-orange-500" },
        { text: "", color: "" },
        { text: "GenAI Post Generator", color: "text-orange-300 font-semibold" },
        { text: "This tool is designed to help LinkedIn influencers generate new posts by learning from their past content. By analyzing previous posts.", color: "text-orange-300" },
        { text: "Tools: Python, Streamlit, Gemini Model", color: "text-orange-500" },
        { text: "", color: "" },
        { text: "Stock Trading Platform", color: "text-orange-300 font-semibold" },
        { text: "Developed a full-stack stock trading simulator using React.js (frontend) and Node.js (backend), integrated with a real-time market data API.", color: "text-orange-300" },
        { text: "Tools: JavaScript, React, Tailwind (Frontend), Node.js, Express (Backend)", color: "text-orange-500" }
      ]
    },

    experience: {
      type: "experience",
      content: [
        { text: "Working Experience:", color: "text-cyan-400 font-bold" },
        { text: "", color: "" },
        { text: "Technical Member - Computer Society of India (CSI) - SRMCEM", color: "text-cyan-300 font-semibold" },
        { text: "Lucknow, Uttar Pradesh | Oct 2023 - Jun 2024", color: "text-cyan-300" },
        { text: "• Collaborated with a 10-member team to organize 5+ tech workshops", color: "text-cyan-300" },
        { text: "• Enhanced leadership skills by leading a subgroup to develop a web-based project", color: "text-cyan-300" },
        { text: "• Gained hands-on experience in software technologies, including Python and Cloud Computing, through structured training sessions", color: "text-cyan-300" }
      ]
    },

    education: {
      type: "education",
      content: [
        { text: "Education:", color: "text-indigo-400 font-bold" },
        { text: "", color: "" },
        { text: "Bachelor of Technology in Computer Science and Engineering", color: "text-indigo-300 font-semibold" },
        { text: "Shri Ramswaroop Memorial College of Engineering and Management", color: "text-indigo-300" },
        { text: "GPA: 8.6/10.0 | Aug 2022 - Present", color: "text-indigo-300" },
        { text: "", color: "" },
        { text: "Senior Secondary (Class XII)", color: "text-indigo-300 font-semibold" },
        { text: "Kamla Nehru Institute of Child Education, Sultanpur | CBSE", color: "text-indigo-300" },
        { text: "94.3% | Apr 2021 - Mar 2022", color: "text-indigo-300" },
        { text: "", color: "" },
        { text: "Secondary (Class X)", color: "text-indigo-300 font-semibold" },
        { text: "Kamla Nehru Institute of Child Education, Sultanpur | CBSE", color: "text-indigo-300" },
        { text: "93.4% | Apr 2019 - Mar 2020", color: "text-indigo-300" }
      ]
    },

    contact: {
      type: "contact",
      content: [
        { text: "Contact Information:", color: "text-amber-400 font-bold" },
        { text: "", color: "" },
        { text: "Location:", color: "text-amber-300 font-semibold", inline: true },
        { text: " Lucknow", color: "text-amber-300" },
        { text: "Email:", color: "text-amber-300 font-semibold", inline: true },
        { text: " abeerSrivastava16@gmail.com", color: "text-amber-300" },
        { text: "Phone:", color: "text-amber-300 font-semibold", inline: true },
        { text: " +91 7355336760", color: "text-amber-300" },
        { text: "LinkedIn:", color: "text-amber-300 font-semibold", inline: true },
        { text: " LinkedIn Profile", color: "text-amber-300 hover:text-amber-300 cursor-pointer"},
        { text: "GitHub:", color: "text-amber-300 font-semibold", inline: true },
        { text: " GitHub Profile", color: "text-amber-300 hover:text-amber-300 cursor-pointer" }
      ]
    },

   resume: {
      type: "resume",
      content: [
        { text: "Download my resume here:", color: "text-pink-400" },
        {
          text: "📄 Abeer_srivastava_.pdf",
          color: "text-pink-500 hover:text-pink-400 cursor-pointer underline",
          href: "/Abeer_srivastava_.pdf"
        }
      ]
    }
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
