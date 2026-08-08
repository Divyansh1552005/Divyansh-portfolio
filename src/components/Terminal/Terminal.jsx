import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  SkillsInfo,
  experiences,
  education,
  projects,
  contactInfo,
} from "../../constants";
import fedoraLogo from "../../assets/company_logo/fedora.webp";

const RESUME_URL =
  "https://drive.google.com/file/d/1TlMn3Q2Hpkjpc50PSwnppJvvdR_piFSm/view?usp=drive_link";
const BLOG_URL = "https://divyanshblogs.hashnode.dev/";

const SECTION_ALIASES = {
  about: "about",
  experience: "experience",
  work: "work",
  projects: "work",
  skills: "skills",
  education: "education",
  contact: "contact",
};

const WELCOME_LINES = [
  "Welcome to Divyansh's terminal.",
  "Type 'help' to see what this thing can do.",
];

const HELP_LINES = [
  "Available commands:",
  "  about              short bio",
  "  skills             tech stack, grouped",
  "  experience         work history",
  "  education          academic background",
  "  projects           things I've built",
  "  contact            how to reach me",
  "  social             social + profile links",
  "  resume             open my resume in a new tab",
  "  goto <section>      scroll to a section (about, experience, work, skills, education, contact)",
  "  ls / cat <file>    poke around like it's a filesystem",
  "  theme <dark|light> switch the site theme",
  "  whoami             who you are, apparently",
  "  date               current date and time",
  "  echo <text>        repeats text back",
  "  clear              clear the screen",
  "  help               show this list",
];

const FILES = {
  "about.txt": [
    "Divyansh Sharma — Fullstack & Gen AI Developer.",
    "I love building things that are useful to me or others.",
    "I mostly od a JS full-stack dev (backend-leaning), into Linux, Docker, AWS,",
    "and lately building RAG chatbots for my web apps.",
  ],
  "contact.sh": [
    `email:    ${contactInfo.email}`,
    `github:   ${contactInfo.github}`,
    `linkedin: ${contactInfo.linkedin}`,
    `twitter:  ${contactInfo.twitter}`,
  ],
  "skills.json": SkillsInfo.map(
    (cat) => `${cat.title}: [${cat.skills.map((s) => s.name).join(", ")}]`
  ),
  "education.md": education.map(
    (e) => `${e.degree} — ${e.school} (${e.date}) — ${e.grade}`
  ),
};

function Terminal() {
  const [history, setHistory] = useState([
    { type: "output", lines: WELCOME_LINES },
  ]);
  const [input, setInput] = useState("");
  const [cmdLog, setCmdLog] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const pushOutput = (lines) => {
    setHistory((prev) => [...prev, { type: "output", lines }]);
  };

  const runCommand = (raw) => {
    const trimmed = raw.trim();
    setHistory((prev) => [...prev, { type: "input", text: trimmed }]);
    if (!trimmed) return;

    const [cmd, ...args] = trimmed.split(/\s+/);
    const lower = cmd.toLowerCase();

    switch (lower) {
      case "help":
        pushOutput(HELP_LINES);
        break;

      case "about":
        pushOutput(FILES["about.txt"]);
        break;

      case "skills":
        pushOutput(FILES["skills.json"]);
        break;

      case "experience":
        pushOutput(
          experiences.map(
            (e) => `${e.role} @ ${e.company}  (${e.date})`
          )
        );
        break;

      case "education":
        pushOutput(FILES["education.md"]);
        break;

      case "projects":
        pushOutput(
          projects.map((p) => `${p.title}\n  ${p.github}`)
        );
        break;

      case "contact":
        pushOutput(FILES["contact.sh"]);
        break;

      case "social":
        pushOutput([
          `github:   ${contactInfo.github}`,
          `linkedin: ${contactInfo.linkedin}`,
          `twitter:  ${contactInfo.twitter}`,
          `blog:     ${BLOG_URL}`,
        ]);
        break;

      case "resume":
        window.open(RESUME_URL, "_blank", "noopener,noreferrer");
        pushOutput(["Opening resume in a new tab..."]);
        break;

      case "goto":
      case "cd": {
        const target = SECTION_ALIASES[args[0]?.toLowerCase()];
        if (!target) {
          pushOutput([
            `goto: unknown section '${args[0] || ""}'`,
            "try: about, experience, work, skills, education, contact",
          ]);
          break;
        }
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
        pushOutput([`scrolling to #${target}...`]);
        break;
      }

      case "ls":
        pushOutput([Object.keys(FILES).join("  ")]);
        break;

      case "cat": {
        const file = args[0];
        if (!file) {
          pushOutput(["usage: cat <file>"]);
        } else if (FILES[file]) {
          pushOutput(FILES[file]);
        } else {
          pushOutput([`cat: ${file}: No such file or directory`]);
        }
        break;
      }

      case "theme": {
        const mode = args[0]?.toLowerCase();
        if (mode !== "dark" && mode !== "light") {
          pushOutput(["usage: theme <dark|light>"]);
          break;
        }
        document.documentElement.classList.toggle("dark", mode === "dark");
        localStorage.setItem("theme", mode);
        pushOutput([`theme switched to ${mode}`]);
        break;
      }

      case "whoami":
        pushOutput(["a curious visitor poking around my portfolio"]);
        break;

      case "date":
        pushOutput([new Date().toString()]);
        break;

      case "echo":
        pushOutput([args.join(" ")]);
        break;

      case "sudo":
        pushOutput(["Permission denied: nice try 😄"]);
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        pushOutput([
          `command not found: ${cmd}`,
          "type 'help' to see available commands",
        ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      if (input.trim()) {
        setCmdLog((prev) => [...prev, input.trim()]);
      }
      setCmdIndex(-1);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!cmdLog.length) return;
      const nextIndex =
        cmdIndex === -1 ? cmdLog.length - 1 : Math.max(0, cmdIndex - 1);
      setCmdIndex(nextIndex);
      setInput(cmdLog[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIndex === -1) return;
      const nextIndex = cmdIndex + 1;
      if (nextIndex >= cmdLog.length) {
        setCmdIndex(-1);
        setInput("");
      } else {
        setCmdIndex(nextIndex);
        setInput(cmdLog[nextIndex]);
      }
    }
  };

  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-800 to-transparent"></div>
      <section
        id="terminal"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0b0b0b] font-sans"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Try the Terminal
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 mt-4 rounded-full mx-auto" />
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
              A real shell into this portfolio — type{" "}
              <span className="font-mono text-blue-600 dark:text-blue-400">
                help
              </span>{" "}
              to get started. (Made it since I saw everyone using it in portfolio's and thought it looks cool! So why not add it here! 😏
)
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => inputRef.current?.focus()}
            className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl bg-gray-50 dark:bg-[#0d0d0d]"
          >
            {/* Title bar - GNOME/Linux terminal style */}
            <div className="flex items-center justify-between px-3 py-2.5 bg-gray-100 dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-white/5">
              <div className="flex items-center gap-2">
                <img
                  src={fedoraLogo}
                  alt="Fedora"
                  className="w-5 h-5 flex-shrink-0 rounded-full"
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  zsh — divyansh-portfolio
                </span>
              </div>
            </div>

            {/* Body */}
            <div
              ref={bodyRef}
              className="h-80 sm:h-96 overflow-y-auto px-4 py-4 font-mono text-xs sm:text-sm space-y-1"
            >
              {history.map((entry, i) =>
                entry.type === "input" ? (
                  <div key={i} className="text-gray-800 dark:text-gray-200">
                    <span className="text-green-600 dark:text-green-400 font-bold">➜</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400 font-bold">~</span>{" "}
                    {entry.text}
                  </div>
                ) : (
                  entry.lines.map((line, j) => (
                    <div
                      key={`${i}-${j}`}
                      className="text-gray-600 dark:text-gray-400 whitespace-pre-wrap break-words"
                    >
                      {line}
                    </div>
                  ))
                )
              )}

              {/* Live input line */}
              <div className="flex items-center text-gray-800 dark:text-gray-200">
                <span className="text-green-600 dark:text-green-400 font-bold">➜</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold mx-2">~</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  className="flex-1 bg-transparent outline-none border-none text-gray-900 dark:text-gray-100 caret-blue-500"
                  aria-label="Terminal input"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Terminal;
