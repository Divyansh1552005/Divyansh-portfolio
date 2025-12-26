// Skills Section Logo's - Import your logo images here
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb2.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.jpg";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import dockerLogo from "./assets/tech_logo/dockerlogo.png";
import awsLogo from "./assets/tech_logo/aws.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import langchainLogo from "./assets/tech_logo/langchain.png";
import openaiLogo from "./assets/tech_logo/openai.png";
import pineconeLogo from "./assets/tech_logo/pinecone.png";
import appwriteLogo from "./assets/tech_logo/appwrite.png";
import linuxLogo from "./assets/tech_logo/linux.png";
import socketioLogo from "./assets/tech_logo/socket.io.png";
import framermotionlogo from "./assets/tech_logo/framer-motion.svg";
import geminilogo from "./assets/tech_logo/gemini.svg";
import chromadb from "./assets/tech_logo/chromadb.png";
import lawbridgelogo from "./assets/work_logo/lawbridgelogo.png"
import zedlogo from "./assets/tech_logo/zed.png"
import renderlogo from "./assets/tech_logo/Renderlogo.svg"
import ytrag from "./assets/work_logo/ytrag.png"
import lawbridgechatbotlogo from "./assets/work_logo/lawbridgechatbot.png"
import { SiExpress } from "react-icons/si";

// Experience Section Logo's
import companyLogo from "./assets/company_logo/outlier.png";
import Philogo from "./assets/company_logo/Phi.png"

// Education Section Logo's
import iiitLogo from "./assets/education_logo/iiit_logo.png";
import bhiwaniLogo from "./assets/education_logo/bhiwani_logo.png";

// Project Section Logo's
import medicalChatbotLogo from "./assets/work_logo/medi.png";
import hospitalManagementLogo from "./assets/work_logo/curedesk.png";
import pdfToolkitLogo from "./assets/work_logo/pdf-toolkit.png";
import portfolioLogo from "./assets/work_logo/portfolio2.png";
import todoAppLogo from "./assets/work_logo/todo_app.png";
import passwordGenLogo from "./assets/work_logo/password_gen.png";
import ticmepng from "./assets/work_logo/tickme.png";
import blogspace from "./assets/work_logo/blogspace.png";

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
      {name: "Zed", logo: zedlogo, docs: "https://zed.dev/" },
      {name: "Render", logo: renderlogo, docs: "https://dashboard.render.com/"},
      
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
    desc: "Designed and developed the official website for Phi Launcher, focusing on a clean, minimal, and performance-oriented user experience. Built responsive UI components, optimized page load times, and ensured smooth navigation across devices. The website reflects the core philosophy of Phi Launcher — speed, simplicity, and zero clutter.",
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
      "A full-stack legal services platform connecting clients with verified lawyers for online consultations and appointment booking. Includes lawyer discovery by specialization, secure authentication, appointment scheduling, case inquiries, real-time chat, and online payments. Features an integrated AI legal assistant that supports intelligent legal search, contextual question answering, and maintains chat history for continuous case-related discussions.",
    image: lawbridgelogo,
    tags: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Role-Based Access",
      "Razorpay",
      "Stream Video API",
      "RAG Chatbot",
      "Chat History",
      "Legal Tech",
    ],
    github: "https://github.com/Divyansh1552005/Law_Bridge_Application",
    webapp: "https://github.com/Divyansh1552005/Law_Bridge_Application",
  },

  {
    id: 1,
    title: "Cure Desk - Hospital Management System",
    category: "webdev",
    description:
      "Comprehensive MERN Stack healthcare platform with integrated AI chatbot, patient management, and appointment scheduling. Includes doctor profiles, patient records, appointment booking, prescription management, and real-time notifications for efficient healthcare delivery.",
    image: hospitalManagementLogo,
    tags: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "JWT",
      "Redux",
      "JavaScript",
    ],
    github: "https://github.com/Divyansh1552005/Cure_Desk",
    webapp: "https://curedesk.vercel.app/",
  },

  {
    id: 2,
    title: "Medibot - AI Medical Chatbot (RAG)",
    category: "genai",
    description:
      "AI-powered medical chatbot built using Retrieval-Augmented Generation for accurate and context-aware healthcare responses. Utilizes vector databases for efficient document retrieval and advanced NLP techniques to answer medical queries safely.",
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
    id: 3,
    title: "BlogSpace - Modern Blogging Platform",
    category: "webdev",
    description:
      "A full-featured blogging platform built with React and Appwrite for seamless content creation and discovery. Includes rich text editor, secure authentication, image uploads, dark mode, real-time notifications, and a personalized dashboard.",
    image: blogspace,
    tags: [
      "React JS",
      "Tailwind CSS",
      "Redux Toolkit",
      "Appwrite",
      "React Hook Form",
      "TinyMCE",
      "Vite",
    ],
    github: "https://github.com/Divyansh1552005/BlogSpace",
    webapp: "https://blogspace-alpha.vercel.app/",
  },

  {
    id: 4,
    title: "Pdf Img Toolkit",
    category: "misc",
    description:
      "Cross-platform desktop application for PDF and image manipulation. Supports PDF-to-image, image-to-PDF conversion, batch processing, and modern UI, packaged using Electron for Windows and Linux.",
    image: pdfToolkitLogo,
    tags: [
      "React JS",
      "Tailwind CSS",
      "Electron",
      "File Processing",
      "Desktop App",
      "JavaScript",
    ],
    github: "https://github.com/Divyansh1552005/PDF-IMG-Toolkit.git",
    webapp: "https://pdf-img-editor-converter-toolkit-so.vercel.app/",
  },

  {
    id: 5,
    title: "List-Tasks Application",
    category: "webdev",
    description:
      "A responsive React-based task management application with categorized todos, real-time search, progress tracking, and full CRUD functionality. Includes priorities, due dates, and completion statistics.",
    image: todoAppLogo,
    tags: [
      "React JS",
      "Tailwind CSS",
      "Local Storage",
      "CRUD",
      "Responsive Design",
      "JavaScript",
    ],
    github:
      "https://github.com/Divyansh1552005/React_Beginner_Projects/tree/main/10TodoApp",
    webapp: "https://listtasks.vercel.app/",
  },

  {
    id: 6,
    title: "TickMe - Task Manager Extension",
    category: "misc",
    description:
      "A lightweight browser extension for managing daily tasks with reminder notifications. Features task creation, time-based alerts, dark/light theme toggle, and a clean minimal interface built using vanilla JavaScript.",
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
    webapp: "#",
  },

  {
    id: 7,
    title: "YouTube Video Chat (RAG)",
    category: "genai",
    description:
      "AI-powered application that enables interactive question answering with YouTube videos using transcript analysis. Implements Retrieval-Augmented Generation with FAISS vector search and Gemini AI for accurate, context-aware responses across long-form video content.",
    image: ytrag,
    tags: [
      "Python",
      "LangChain",
      "FAISS",
      "RAG",
      "Gemini API",
      "YouTube Transcript API",
      "NLP",
      "Vector Search",
    ],
    github: "https://github.com/Divyansh1552005/YoutubeVideo_Chat",
    webapp: "https://github.com/Divyansh1552005/YoutubeVideo_Chat",
  },

  {
    id: 8,
    title: "YT Chat - Multi-Source QnA Platform",
    category: "genai",
    description:
      "A multi-source AI-powered QnA platform supporting website page–based question answering, YouTube video QnA using transcript analysis, and document-based QnA for PDFs or other uploaded files. Uses Retrieval-Augmented Generation with vector search to provide accurate, context-aware responses across different content sources. Browser extension support will be added soon.",
    image: ytrag,
    tags: [
      "React JS",
      "FastAPI",
      "RAG",
      "LangChain",
      "Vector Database",
      "AI QnA",
      "PDF QnA",
      "YouTube QnA",
    ],
    github: "#",
    webapp: "#",
  },
  {
    id: 9,
    title: "LawBridge – AI Legal Chatbot",
    category: "genai",
    description:
      "AI-powered legal chatbot integrated into the LawBridge platform to provide context-aware legal assistance. The chatbot retains previous conversation context and securely stores complete chat history, enabling coherent multi-turn interactions and personalized follow-up responses. Built using modern NLP techniques to assist users with legal queries, intelligent legal search, and accurate information retrieval while prioritizing safety and reliability.",
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
  }

];


export const contactInfo = {
  email: "officialdslc1552005@gmail.com",
  linkedin: "https://linkedin.com/in/divyansh-sharma-b05897286",
  twitter: "https://x.com/divyansh1552005",
  github: "https://github.com/Divyansh1552005",
};

export const personalInfo = {
  name: "Divyansh Sharma",
  title: "Full-Stack Developer in the Making",
  description:
    "Currently mastering the MERN stack with a focus on backend development and integrating cutting-edge AI solutions into real-world applications. Passionate about leveraging AI and technology to tackle complex challenges, with a goal to create meaningful solutions that make a difference in people's lives.",
  location: "Una, Himachal Pradesh, India",
  currentStatus: "Open to work and collaboration opportunities",
};
