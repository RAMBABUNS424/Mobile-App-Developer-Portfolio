import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

interface LogLine {
  text: string;
  type: "input" | "output" | "error" | "ascii";
}

export function Terminal() {
  const [history, setHistory] = useState<LogLine[]>([
    { text: "Rambabu Dev OS v1.0.4 - Interactive Terminal", type: "output" },
    { text: "Type 'help' to see list of available commands.", type: "output" },
    { text: "", type: "output" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newLines: LogLine[] = [
      { text: `visitor@rambabu-dev:~$ ${cmd}`, type: "input" }
    ];

    switch (trimmedCmd) {
      case "help":
        newLines.push(
          { text: "Available commands:", type: "output" },
          { text: "  neofetch    - Show system profile info", type: "output" },
          { text: "  skills      - List main engineering skills", type: "output" },
          { text: "  projects    - Show commercial projects", type: "output" },
          { text: "  experience  - Show work history", type: "output" },
          { text: "  contact     - Reveal contact options", type: "output" },
          { text: "  clear       - Clear screen history", type: "output" }
        );
        break;
      case "neofetch":
        newLines.push({
          text: `
                 ██████╗  █████╗ ███╗   ███╗
                 ██╔══██╗██╔══██╗████╗ ████║
                 ██████╔╝███████║██╔████╔██║
                 ██╔══██╗██╔══██║██║╚██╔╝██║
                 ██║  ██║██║  ██║██║ ╚═╝ ██║
                 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝`,
          type: "ascii"
        }, {
          text: `------------------------------
OS: Rambabu DevOS v1.0.4 (macOS Client)
Title: Software Developer / React Native Specialist
Experience: 4 Years
Location: Chennai, India
Shell: zsh (interactive)
Base: React + TypeScript + Tailwind v4`,
          type: "output"
        });
        break;
      case "skills":
        newLines.push(
          { text: "Languages & Frameworks:", type: "output" },
          { text: "  • Core: React Native, React.js, Redux, JavaScript, TypeScript", type: "output" },
          { text: "  • Platforms: Android (Java/Kotlin), iOS (Swift)", type: "output" },
          { text: "  • Backend & DB: Node.js, REST APIs, Firebase, Supabase, MongoDB, SQL", type: "output" },
          { text: "  • Workflows: Agile/Scrum, Git/Github, Azure DevOps", type: "output" }
        );
        break;
      case "projects":
        newLines.push(
          { text: "Sulekha NRI App:", type: "output" },
          { text: "  - Led React Native development for Indian expats services. Integrated payments, bookings.", type: "output" },
          { text: "  - Outcome: +30% user engagement increase in 1st quarter.", type: "output" },
          { text: "Sulekha Business App:", type: "output" },
          { text: "  - Designed core business profile, lead tracking and communications dashboard in React Native.", type: "output" }
        );
        break;
      case "experience":
        newLines.push(
          { text: "Software Developer | Sulekha (June 2022 - Present)", type: "output" },
          { text: "  • Building high-performance cross-platform apps using React Native and Redux.", type: "output" },
          { text: "  • Optimizing UI rendering, coordinating with product owners and launching store builds.", type: "output" }
        );
        break;
      case "contact":
        newLines.push(
          { text: "Contact Information:", type: "output" },
          { text: "  • Email: rambabunehru@gmail.com", type: "output" },
          { text: "  • Phone: +91 8248887070", type: "output" },
          { text: "  • LinkedIn: linkedin.com/in/rambabu-n-620467302", type: "output" }
        );
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        newLines.push({ text: "", type: "output" });
        break;
      default:
        newLines.push({
          text: `Command not found: '${cmd}'. Type 'help' for support.`,
          type: "error"
        });
    }

    setHistory((prev) => [...prev, ...newLines]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputValue);
      setInputValue("");
    }
  };

  return (
    <div
      onClick={focusInput}
      className="glass-card rounded-xl overflow-hidden font-mono border border-neon-cyan/20 w-full max-w-2xl mx-auto shadow-2xl"
    >
      {/* Window Header */}
      <div className="bg-black/60 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center space-x-1.5 text-xs text-gray-400 select-none">
          <TerminalIcon className="w-3.5 h-3.5 text-neon-cyan" />
          <span>terminal - rambabu@developer-core</span>
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Terminal Content */}
      <div className="p-4 h-72 overflow-y-auto text-sm leading-relaxed flex flex-col space-y-1.5 text-gray-300 bg-black/40">
        {history.map((line, index) => {
          if (line.type === "input") {
            return (
              <div key={index} className="text-neon-cyan font-semibold">
                {line.text}
              </div>
            );
          }
          if (line.type === "error") {
            return (
              <div key={index} className="text-red-400">
                {line.text}
              </div>
            );
          }
          if (line.type === "ascii") {
            return (
              <pre key={index} className="text-neon-purple leading-tight font-bold whitespace-pre">
                {line.text}
              </pre>
            );
          }
          return <div key={index}>{line.text}</div>;
        })}
        <div ref={terminalEndRef} />

        {/* Input Prompter */}
        <div className="flex items-center space-x-1">
          <span className="text-neon-cyan font-semibold">visitor@rambabu-dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-white font-mono caret-neon-cyan p-0"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
