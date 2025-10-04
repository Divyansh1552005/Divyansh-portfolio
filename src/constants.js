// Skills Section Logo's - Import your logo images here
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import reduxLogo from './assets/tech_logo/redux.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb2.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import dockerLogo from './assets/tech_logo/dockerlogo.png';
import awsLogo from './assets/tech_logo/aws.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import langchainLogo from './assets/tech_logo/langchain.png';
import openaiLogo from './assets/tech_logo/openai.png';
import pineconeLogo from './assets/tech_logo/pinecone.png';
import appwriteLogo from './assets/tech_logo/appwrite.png';
import linuxLogo from './assets/tech_logo/linux.png';
import socketioLogo from './assets/tech_logo/socket.io.png';
import framermotionlogo from './assets/tech_logo/framer-motion.svg';


// Experience Section Logo's
import companyLogo from './assets/company_logo/outlier.png';

// Education Section Logo's
import iiitLogo from './assets/education_logo/iiit_logo.png';
import bhiwaniLogo from './assets/education_logo/bhiwani_logo.png';

// Project Section Logo's
import medicalChatbotLogo from './assets/work_logo/medical_chatbot.png';
import hospitalManagementLogo from './assets/work_logo/hospital_management.png';
import pdfToolkitLogo from './assets/work_logo/pdf-toolkit.png';
import portfolioLogo from './assets/work_logo/portfolio2.png';
import todoAppLogo from './assets/work_logo/todo_app.png';
import passwordGenLogo from './assets/work_logo/password_gen.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', logo: htmlLogo, docs: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS3', logo: cssLogo, docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'JavaScript', logo: javascriptLogo, docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'React JS', logo: reactjsLogo, docs: 'https://react.dev/' },
      // { name: 'Next JS', logo: nextjsLogo, docs: 'https://nextjs.org/docs' },
      { name: 'Redux', logo: reduxLogo, docs: 'https://redux.js.org/' },
      { name: 'Tailwind CSS', logo: tailwindcssLogo, docs: 'https://tailwindcss.com/docs' },
      // { name: 'React Router', logo: reactjsLogo, docs: 'https://reactrouter.com/' },
      // { name: 'React Hook Form', logo: reacthookform, docs: 'https://react-hook-form.com/' },
      // { name: 'Vite', logo: viteLogo, docs: 'https://vitejs.dev/' },
      { name: 'Framer Motion', logo: framermotionlogo, docs: 'https://www.framer.com/motion/' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo, docs: 'https://nodejs.org/en/docs/' },
      { name: 'Express JS', logo: expressjsLogo, docs: 'https://expressjs.com/' },
      // { name: 'Socket.io', logo: socketioLogo, docs: 'https://socket.io/docs/v4/' },
      { name: 'MongoDB', logo: mongodbLogo, docs: 'https://docs.mongodb.com/' },
      { name: 'MySQL', logo: mysqlLogo, docs: 'https://dev.mysql.com/doc/' },
      { name: 'PostgreSQL', logo: postgreLogo, docs: 'https://www.postgresql.org/docs/' },
      // { name: 'Firebase', logo: firebaseLogo, docs: 'https://firebase.google.com/docs' },
      { name: 'Appwrite', logo: appwriteLogo, docs: 'https://appwrite.io/docs' },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo, docs: 'https://en.cppreference.com/w/c' },
      { name: 'C++', logo: cppLogo, docs: 'https://en.cppreference.com/w/cpp' },
      { name: 'JavaScript', logo: javascriptLogo, docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'Python', logo: pythonLogo, docs: 'https://docs.python.org/3/' },
    ],
  },
  {
    title: 'Generative AI',
    skills: [
      { name: 'LangChain', logo: langchainLogo, docs: 'https://python.langchain.com/docs/get_started/introduction' },
      { name: 'OpenAI', logo: openaiLogo, docs: 'https://platform.openai.com/docs/' },
      { name: 'Pinecone', logo: pineconeLogo, docs: 'https://docs.pinecone.io/' },
    ],
  },
  {
    title: 'Core Subjects',
    skills: [
      { name: 'Data Structures & Algorithms', logo: cppLogo, docs: 'https://www.geeksforgeeks.org/data-structures/' },
      { name: 'Operating Systems', logo: linuxLogo, docs: 'https://www.kernel.org/doc/html/latest/' },
      { name: 'Computer Networks', logo: linuxLogo, docs: 'https://tools.ietf.org/rfc/' },
      { name: 'Object-Oriented Programming', logo: cppLogo, docs: 'https://en.cppreference.com/w/cpp/language/classes' },
      { name: 'RDBMS', logo: mysqlLogo, docs: 'https://dev.mysql.com/doc/refman/8.0/en/' },
      { name: 'Computer Organisation', logo: cppLogo, docs: 'https://www.tutorialspoint.com/computer_organization_and_architecture/index.htm' },
      { name: 'Theory of Computation', logo: cppLogo, docs: 'https://www.tutorialspoint.com/automata_theory/index.htm' },
      { name: 'System Design', logo: cppLogo, docs: 'https://github.com/donnemartin/system-design-primer' },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Git', logo: gitLogo, docs: 'https://git-scm.com/doc' },
      { name: 'GitHub', logo: githubLogo, docs: 'https://docs.github.com/' },
      { name: 'VS Code', logo: vscodeLogo, docs: 'https://code.visualstudio.com/docs' },
      { name: 'Postman', logo: postmanLogo, docs: 'https://learning.postman.com/docs/getting-started/introduction/' },
      { name: 'AWS', logo: awsLogo, docs: 'https://docs.aws.amazon.com/' },
      { name: 'Vercel', logo: vercelLogo, docs: 'https://vercel.com/docs' },
      // { name: 'Netlify', logo: netlifyLogo, docs: 'https://docs.netlify.com/' },
      { name: 'Linux', logo: linuxLogo, docs: 'https://www.kernel.org/doc/html/latest/' },
      { name: 'Docker', logo: dockerLogo, docs: 'https://docs.docker.com/' },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: companyLogo,
    role: "Full-Stack Developer",
    company: "Tech Solutions Inc.",
    date: "June 2024 - Present",
    desc: "Currently working as a Full-Stack Developer, building scalable web applications using the MERN stack. Responsible for developing responsive user interfaces, implementing RESTful APIs, and optimizing application performance. Collaborating with cross-functional teams in an agile environment to deliver high-quality software solutions.",
    skills: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
      "Redux",
      "Git",
      "AWS",
    ],
  },
  {
    id: 1,
    img: companyLogo,
    role: "Backend Developer Intern",
    company: "InnovateTech Solutions",
    date: "January 2024 - May 2024",
    desc: "Gained hands-on experience in backend development, working with Node.js and Express.js to build robust server-side applications. Designed and implemented database schemas using MongoDB and MySQL. Participated in code reviews and learned best practices for writing clean, maintainable code.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "Git",
      "Postman",
    ],
  },
  {
    id: 2,
    img: companyLogo,
    role: "Frontend Development Trainee",
    company: "Digital Innovations Ltd.",
    date: "August 2023 - December 2023",
    desc: "Started my professional journey as a Frontend Development Trainee, focusing on modern web technologies. Built responsive web applications using React.js and learned about state management with Redux. Worked closely with senior developers to understand industry standards and best practices.",
    skills: [
      "React JS",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux",
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
    title: "AI Medical Chatbot (RAG)",
    description:
      "Intelligent Healthcare Assistant powered by Retrieval-Augmented Generation. Built with advanced NLP techniques for accurate medical query responses. The system uses vector databases for efficient document retrieval and provides contextually relevant medical information while maintaining safety and accuracy.",
    image: medicalChatbotLogo,
    tags: ["Python", "LangChain", "Pinecone", "OpenAI", "RAG", "NLP", "Vector DB"],
    github: "https://github.com/Divyansh1552005/Medical_Chatbot_OpenAI.git",
    webapp: "#",
  },
  {
    id: 1,
    title: "Hospital Management System",
    description:
      "Comprehensive MERN Stack Healthcare Platform with integrated AI chatbot, patient management, and appointment scheduling system. Features include doctor profiles, patient records, appointment booking, prescription management, and real-time notifications for enhanced healthcare delivery.",
    image: hospitalManagementLogo,
    tags: ["React JS", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Redux", "JavaScript"],
    github: "https://github.com/Divyansh1552005/prescripto-full-stack",
    webapp: "#",
  },
  {
    id: 2,
    title: "PDF IMG Toolkit",
    description:
      "Professional desktop application for PDF and image manipulation. Features PDF-to-image conversion, image-to-PDF, batch processing, and cross-platform support for Windows & Linux. Built with modern web technologies and packaged as a desktop application.",
    image: pdfToolkitLogo,
    tags: ["React JS", "Tailwind CSS", "Electron", "File Processing", "Desktop App", "JavaScript"],
    github: "https://github.com/Divyansh1552005/PDF-IMG-Toolkit.git",
    webapp: "https://pdf-img-editor-converter-toolkit-so.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "Portfolio Website",
  //   description:
  //     "A modern, responsive personal portfolio built with the latest web technologies, showcasing projects, skills, and the developer's journey with smooth performance and clean UI. Features dark/light theme, smooth animations, and optimized performance.",
  //   image: portfolioLogo,
  //   tags: ["React JS", "Tailwind CSS", "EmailJS", "React Toastify", "JavaScript", "Responsive Design"],
  //   github: "https://github.com/Divyansh1552005/Divyansh-portfolio",
  //   webapp: "#",
  // },
  {
    id: 4,
    title: "List-Tasks Application",
    description:
      "A feature-rich, mobile-responsive React Todo app with categorized task management, real-time search, progress tracking, Tailwind UI, and full CRUD via collapsible sidebar navigation. Includes task priorities, due dates, and completion statistics.",
    image: todoAppLogo,
    tags: ["React JS", "Tailwind CSS", "Local Storage", "CRUD", "Responsive Design", "JavaScript"],
    github: "https://github.com/Divyansh1552005/React_Beginner_Projects/tree/main/10TodoApp",
    webapp: "https://listtasks.vercel.app/",
  },
  {
    id: 5,
    title: "Password Generator",
    description:
      "A secure password generator built with React, featuring customizable length, character sets, and real-time strength indicators for enhanced security. Includes password history, copy to clipboard functionality, and security recommendations.",
    image: passwordGenLogo,
    tags: ["React JS", "Tailwind CSS", "JavaScript", "Lucide Icons"],
    github: "https://github.com/Divyansh1552005/React_Beginner_Projects/tree/main/5_Password_generator",
    webapp: "https://securepasswordgeneratordsc.vercel.app/",
  },
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
  description: "Currently mastering the MERN stack with a focus on backend development and integrating cutting-edge AI solutions into real-world applications. Passionate about leveraging AI and technology to tackle complex challenges, with a goal to create meaningful solutions that make a difference in people's lives.",
  location: "Una, Himachal Pradesh, India",
  currentStatus: "Open to work and collaboration opportunities",
};