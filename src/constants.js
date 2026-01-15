// Skills Section Logo's - Import your logo images here
import htmlLogo from "./assets/tech_logo/html.webp";
import cssLogo from "./assets/tech_logo/css.webp";
import javascriptLogo from "./assets/tech_logo/javascript.webp";
import reactjsLogo from "./assets/tech_logo/reactjs.webp";
import nodejsLogo from "./assets/tech_logo/nodejs.webp";
import expressjsLogo from "./assets/tech_logo/express.webp";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.webp";
import reduxLogo from "./assets/tech_logo/redux.webp";
import mysqlLogo from "./assets/tech_logo/mysql.webp";
import mongodbLogo from "./assets/tech_logo/mongodb2.webp";
import postgreLogo from "./assets/tech_logo/postgre.webp";
import cLogo from "./assets/tech_logo/c.webp";
import cppLogo from "./assets/tech_logo/cpp.webp";
import pythonLogo from "./assets/tech_logo/python.webp";
import gitLogo from "./assets/tech_logo/git.webp";
import githubLogo from "./assets/tech_logo/github.webp";
import vscodeLogo from "./assets/tech_logo/vscode.webp";
import postmanLogo from "./assets/tech_logo/postman.webp";
import dockerLogo from "./assets/tech_logo/dockerlogo.webp";
import awsLogo from "./assets/tech_logo/aws.webp";
import vercelLogo from "./assets/tech_logo/vercel.webp";
import langchainLogo from "./assets/tech_logo/langchain.webp";
import openaiLogo from "./assets/tech_logo/openai.webp";
import pineconeLogo from "./assets/tech_logo/pinecone.webp";
import appwriteLogo from "./assets/tech_logo/appwrite.webp";
import linuxLogo from "./assets/tech_logo/linux.webp";
import socketioLogo from "./assets/tech_logo/socket.io.webp";
import framermotionlogo from "./assets/tech_logo/framer-motion.webp";
import geminilogo from "./assets/tech_logo/gemini.webp";
import chromadb from "./assets/tech_logo/chromadb.webp";
import lawbridgelogo from "./assets/work_logo/lawbridgelogo.webp";
import zedlogo from "./assets/tech_logo/zed.webp";
import renderlogo from "./assets/tech_logo/Renderlogo.webp";
import ytrag from "./assets/work_logo/ytrag.webp";
import lawbridgechatbotlogo from "./assets/work_logo/lawbridgechatbot.webp";
import { SiExpress } from "react-icons/si";

// Experience Section Logo's
import companyLogo from "./assets/company_logo/outlier.webp";
import Philogo from "./assets/company_logo/Phi.webp";

// Education Section Logo's
import iiitLogo from "./assets/education_logo/iiit_logo.webp";
import bhiwaniLogo from "./assets/education_logo/bhiwani_logo.webp";

// Project Section Logo's
import medicalChatbotLogo from "./assets/work_logo/medi.webp";
import hospitalManagementLogo from "./assets/work_logo/curedesk.webp";
import pdfToolkitLogo from "./assets/work_logo/pdf-toolkit.webp";
import todoAppLogo from "./assets/work_logo/todo_app.webp";
import ticmepng from "./assets/work_logo/tickme.webp";
import blogspace from "./assets/work_logo/blogspace.webp";
import linkshrinklogo from "./assets/work_logo/linkshrinklogo.webp";
import querynestlogo from "./assets/work_logo/querynestlogo.webp";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        logo: htmlLogo,
        docs: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        logo: cssLogo,
        docs: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JavaScript",
        logo: javascriptLogo,
        docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "React JS", logo: reactjsLogo, docs: "https://react.dev/" },
      // { name: 'Next JS', logo: nextjsLogo, docs: 'https://nextjs.org/docs' },
      { name: "Redux", logo: reduxLogo, docs: "https://redux.js.org/" },
      {
        name: "Tailwind CSS",
        logo: tailwindcssLogo,
        docs: "https://tailwindcss.com/docs",
      },
      // { name: 'React Router', logo: reactjsLogo, docs: 'https://reactrouter.com/' },
      // { name: 'React Hook Form', logo: reacthookform, docs: 'https://react-hook-form.com/' },
      // { name: 'Vite', logo: viteLogo, docs: 'https://vitejs.dev/' },
      {
        name: "Framer Motion",
        logo: framermotionlogo,
        docs: "https://www.framer.com/motion/",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node JS",
        logo: nodejsLogo,
        docs: "https://nodejs.org/en/docs/",
      },
      {
        name: "Express JS",
        logo: expressjsLogo,
        docs: "https://expressjs.com/",
      },
      // { name: 'Socket.io', logo: socketioLogo, docs: 'https://socket.io/docs/v4/' },
      { name: "MongoDB", logo: mongodbLogo, docs: "https://docs.mongodb.com/" },
      { name: "MySQL", logo: mysqlLogo, docs: "https://dev.mysql.com/doc/" },
      {
        name: "PostgreSQL",
        logo: postgreLogo,
        docs: "https://www.postgresql.org/docs/",
      },
      // { name: 'Firebase', logo: firebaseLogo, docs: 'https://firebase.google.com/docs' },
      {
        name: "Appwrite",
        logo: appwriteLogo,
        docs: "https://appwrite.io/docs",
      },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo, docs: "https://en.cppreference.com/w/c" },
      { name: "C++", logo: cppLogo, docs: "https://en.cppreference.com/w/cpp" },
      {
        name: "JavaScript",
        logo: javascriptLogo,
        docs: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { name: "Python", logo: pythonLogo, docs: "https://docs.python.org/3/" },
    ],
  },
  {
    title: "Generative AI",
    skills: [
      { name: "Python", logo: pythonLogo, docs: "https://docs.python.org/3/" },
      {
        name: "LangChain",
        logo: langchainLogo,
        docs: "https://python.langchain.com/docs/get_started/introduction",
      },
      {
        name: "OpenAI",
        logo: openaiLogo,
        docs: "https://platform.openai.com/docs/",
      },
      {
        name: "Gemini",
        logo: geminilogo,
        docs: "https://gemini.google.com/",
      },
      {
        name: "ChromaDB",
        logo: chromadb,
        docs: "https://docs.trychroma.com/docs/overview/introduction",
      },
      {
        name: "Pinecone",
        logo: pineconeLogo,
        docs: "https://docs.pinecone.io/",
      },
    ],
  },
  {
    title: "Core Subjects",
    skills: [
      {
        name: "Data Structures & Algorithms",
        logo: cppLogo,
        docs: "https://www.geeksforgeeks.org/data-structures/",
      },
      {
        name: "Operating Systems",
        logo: linuxLogo,
        docs: "https://www.kernel.org/doc/html/latest/",
      },
      {
        name: "Computer Networks",
        logo: linuxLogo,
        docs: "https://tools.ietf.org/rfc/",
      },
      {
        name: "Object-Oriented Programming",
        logo: cppLogo,
        docs: "https://en.cppreference.com/w/cpp/language/classes",
      },
      {
        name: "RDBMS",
        logo: mysqlLogo,
        docs: "https://dev.mysql.com/doc/refman/8.0/en/",
      },
      {
        name: "Computer Organisation",
        logo: cppLogo,
        docs: "https://www.tutorialspoint.com/computer_organization_and_architecture/index.htm",
      },
      {
        name: "Theory of Computation",
        logo: cppLogo,
        docs: "https://www.tutorialspoint.com/automata_theory/index.htm",
      },
      {
        name: "System Design",
        logo: cppLogo,
        docs: "https://github.com/donnemartin/system-design-primer",
      },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", logo: gitLogo, docs: "https://git-scm.com/doc" },
      { name: "GitHub", logo: githubLogo, docs: "https://docs.github.com/" },
      {
        name: "VS Code",
        logo: vscodeLogo,
        docs: "https://code.visualstudio.com/docs",
      },
      {
        name: "Postman",
        logo: postmanLogo,
        docs: "https://learning.postman.com/docs/getting-started/introduction/",
      },
      { name: "AWS", logo: awsLogo, docs: "https://docs.aws.amazon.com/" },
      { name: "Vercel", logo: vercelLogo, docs: "https://vercel.com/docs" },
      // { name: 'Netlify', logo: netlifyLogo, docs: 'https://docs.netlify.com/' },
      {
        name: "Linux",
        logo: linuxLogo,
        docs: "https://www.kernel.org/doc/html/latest/",
      },
      { name: "Docker", logo: dockerLogo, docs: "https://docs.docker.com/" },
      { name: "Zed", logo: zedlogo, docs: "https://zed.dev/" },
      {
        name: "Render",
        logo: renderlogo,
        docs: "https://dashboard.render.com/",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: Philogo,
    role: "Frontend Developer",
    company: "Phi Launcher",
    date: "Oct 2025 - Dec 2025",
    desc: "Improved website performance drastically by implementing lazy loading and route-based code splitting on pages. Designed the whole UI and followed all modern practices for React. Optimized performance, accessibility and SEO using Google Lighthouse and React Profiler. Made on-demand loading of iframes to reduce initial load times.",
    skills: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
      "Performance Optimization",
      "Git",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: bhiwaniLogo,
    school: "Bhiwani Public School",
    date: "Mar 2019 - Mar 2020",
    grade: "96.8%",
    desc: "Completed High School (Class 10th) with outstanding academic performance across all core subjects. Achieved the following scores: Mathematics (100), Science (95), English (94), Social Science (97), Hindi (98), and Information Technology (96) as an additional subject. Demonstrated a strong aptitude in both STEM and humanities subjects.",
    degree: "CBSE(X), All Subjects with Information Technology",
  },
  {
    id: 1,
    img: bhiwaniLogo,
    school: "Bhiwani Public School",
    date: "Mar 2021 - Jul 2022",
    grade: "93.6%",
    desc: "Completed Senior Secondary (Class 12th) in the Non-Medical stream with Computer Science as an optional subject. Achieved excellent scores across core subjects: English (92), Physics (95), Chemistry (97), Mathematics (97), and Computer Science (87). Strong foundation in analytical and problem-solving skills, with a passion for both science and technology.",
    degree: "CBSE(XII), Non-Medical with Computer Science",
  },
  {
    id: 2,
    img: iiitLogo,
    school: "Indian Institute of Information Technology Una",
    date: "Aug 2023 - Jul 2027",
    grade: "Current CGPA: 8.66",
    desc: "Currently pursuing Bachelor of Technology in Computer Science from IIIT Una. Gaining comprehensive knowledge in computer science fundamentals, software engineering, and emerging technologies. Actively participating in coding competitions, hackathons, and technical workshops. Developing strong foundation in algorithms, data structures, and system design.",
    degree: "Bachelor of Technology - BTech, Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "LawBridge - Online Lawyer Appointment Platform",
    category: "webdev",
    description:
      "A full-stack legal services platform connecting clients with verified lawyers for online consultations and appointment booking. Features lawyer discovery, secure authentication, appointment scheduling, real-time chat, online payments, and an integrated AI legal assistant for intelligent legal search and case-related discussions.",
    image: lawbridgelogo,
    tags: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Stream Video",
      "RAG Chatbot",
      "Tailwind CSS",
    ],
    github: "https://github.com/Divyansh1552005/Law_Bridge_Application",
    webapp: "https://github.com/Divyansh1552005/Law_Bridge_Application",
  },

  {
    id: 1,
    title: "Cure Desk - Hospital Management System",
    category: "webdev",
    description:
      "Comprehensive MERN Stack healthcare platform with integrated AI chatbot for patient management and appointment scheduling. Features doctor profiles, patient records, prescription management, and real-time notifications for efficient healthcare delivery.",
    image: hospitalManagementLogo,
    tags: ["React JS", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Divyansh1552005/Cure_Desk",
    webapp: "https://curedesk.vercel.app/",
  },

  {
    id: 2,
    title: "QueryNest - RAG-Based QnA Platform",
    category: "genai",
    description:
      "QueryNest is a FAISS-first Retrieval-Augmented Generation platform supporting QnA over websites, YouTube videos, and documents. Designed as a modular CLI-first system with future web and extension support, it focuses on efficient retrieval, clean architecture, and scalable GenAI workflows.",
    image: querynestlogo,
    tags: [
      "Python",
      "FAISS",
      "RAG",
      "LangChain",
      "Gemini API",
      "CLI Tool",
      "Vector Search",
      "GenAI",
    ],
    github: "https://github.com/Divyansh1552005/QueryNest",
    webapp: "https://github.com/Divyansh1552005/QueryNest",
  },

  {
    id: 3,
    title: "LawBridge – AI Legal Chatbot",
    category: "genai",
    description:
      "AI-powered legal chatbot for context-aware legal assistance integrated into LawBridge. Retains conversation context and securely stores chat history for coherent multi-turn interactions. Built using modern NLP for intelligent legal search and accurate information retrieval.",
    image: lawbridgechatbotlogo,
    tags: [
      "Python",
      "FastAPI",
      "Gemini",
      "Embeddings",
      "Pinecone",
      "Context Management",
      "Conversation History",
      "REST APIs",
    ],
    github: "https://github.com/Divyansh1552005/Law_Bridge_Application",
    webapp: "https://github.com/Divyansh1552005/Law_Bridge_Application",
  },

  {
    id: 4,
    title: "YouTube Video Chat (RAG)",
    category: "genai",
    description:
      "AI-powered application for interactive Q&A with YouTube videos using transcript analysis. Implements RAG with FAISS vector search and Gemini AI for accurate, context-aware responses.",
    image: ytrag,
    tags: [
      "Python",
      "LangChain",
      "FAISS",
      "RAG",
      "Gemini API",
      "YouTube Transcript API",
    ],
    github: "https://github.com/Divyansh1552005/YoutubeVideo_Chat",
    webapp: "https://github.com/Divyansh1552005/YoutubeVideo_Chat",
  },

  {
    id: 5,
    title: "Medibot - AI Medical Chatbot (RAG)",
    category: "genai",
    description:
      "AI-powered medical chatbot using Retrieval-Augmented Generation for accurate healthcare responses. Utilizes vector databases and advanced NLP techniques to answer medical queries safely and contextually.",
    image: medicalChatbotLogo,
    tags: [
      "Python",
      "LangChain",
      "Pinecone",
      "OpenAI",
      "RAG",
      "NLP",
      "Vector DB",
      "Embeddings",
      "Flask",
    ],
    github: "https://github.com/Divyansh1552005/Medical_Chatbot_OpenAI.git",
    webapp: "#",
  },

  {
    id: 6,
    title: "BlogSpace - Modern Blogging Platform",
    category: "webdev",
    description:
      "A modern blogging platform built with React and Appwrite for seamless content creation. Features rich text editor, secure authentication, image uploads, dark mode, and a personalized dashboard.",
    image: blogspace,
    tags: [
      "React JS",
      "Tailwind CSS",
      "Redux Toolkit",
      "Appwrite",
      "React Hook Form",
      "TinyMCE",
    ],
    github: "https://github.com/Divyansh1552005/BlogSpace",
    webapp: "https://blogspace-alpha.vercel.app/",
  },

  {
    id: 7,
    title: "Pdf Img Toolkit",
    category: "misc",
    description:
      "Cross-platform desktop application for PDF and image manipulation. Supports PDF-to-image conversion, image-to-PDF conversion, and batch processing with a modern UI built using Electron.",
    image: pdfToolkitLogo,
    tags: [
      "React JS",
      "Tailwind CSS",
      "Electron",
      "File Processing",
      "Desktop App",
    ],
    github: "https://github.com/Divyansh1552005/PDF-IMG-Toolkit.git",
    webapp: "https://pdf-img-editor-converter-toolkit-so.vercel.app/",
  },

  {
    id: 8,
    title: "TickMe - Task Manager Extension",
    category: "misc",
    description:
      "A lightweight browser extension for managing daily tasks with reminder notifications. Features task creation, time-based alerts, theme toggle, and a clean minimal interface.",
    image: ticmepng,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Browser Extension",
      "Notifications API",
      "Task Manager",
    ],
    github: "https://github.com/Divyansh1552005/TickMe",
    webapp: "https://github.com/Divyansh1552005/TickMe",
  },

  {
    id: 9,
    title: "LinkShrink - URL Shortener Platform",
    category: "webdev",
    description:
      "LinkShrink is a lightweight and scalable URL shortener built using the PERN stack with Docker-based containerization. It provides fast and reliable URL shortening, redirection, and analytics with a clean backend architecture optimized for performance and scalability.",
    image: linkshrinklogo,
    tags: [
      "PostgreSQL",
      "Express.js",
      "React JS",
      "Node.js",
      "Docker",
      "REST APIs",
      "URL Shortener",
      "Scalable Architecture",
    ],
    github: "https://github.com/Divyansh1552005/link-shrink",
    webapp: "https://github.com/Divyansh1552005/link-shrink",
  },
];

export const contactInfo = {
  email: "officialdslc1552005@gmail.com",
  linkedin: "https://linkedin.com/in/divyansh-sharma-b05897286",
  twitter: "https://x.com/divyansh1552005",
  github: "https://github.com/Divyansh1552005",
};
