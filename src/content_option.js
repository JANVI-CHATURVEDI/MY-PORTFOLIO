import { FaPython, FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaJava } from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiSqlite, SiPostgresql, SiGithub, SiFirebase, SiFigma } from "react-icons/si";
import { GiPositionMarker } from "react-icons/gi"; // for Leaflet map (marker icon)

import img from "./assets/images/homeimg.jfif";
import tweetimg from "./assets/images/tweetlanding.png" ;
import cofeeimg from "./assets/images/cofeelanding.png" ;
import devlinktreeimg from "./assets/images/devlinktreelanding.png" ;
import travelimg from "./assets/images/travellanding.png" ;
import onetimeimg from "./assets/images/onetimelanding.png" ;

const logotext = "JANVI";
const meta = {
    title: "Janvi Chaturvedi",
    description: "I’m Janvi Chaturvedi, a frontend developer passionate about building clean UI and responsive designs.",
};

const introdata = {
    title: "I’m Janvi ",
    animated: {
        first: "I craft responsive UIs",
        second: "I build modern web apps",
        third: "I develop scalable backends",
        fourth: "I solve real-world problems with code",
        fifth: "I blend creativity with logic",
    },
    description: "Full-stack developer passionate about creating clean, scalable, and user-friendly applications. Skilled in both frontend and backend technologies, I enjoy transforming ideas into impactful digital solutions.",
    your_img_url: img,
};


const dataabout = {
    title: "About Me",
    aboutme: [
        "I am a full-stack developer with expertise in Python, Django, React, and modern CSS frameworks like Tailwind and Bootstrap. I design and develop end-to-end web applications — from intuitive UIs to robust backends and databases. I thrive on solving real-world problems, continuously improving my skills, and building scalable digital products with clean architecture and responsive design.",
       
        "Outside of tech, I am a sports enthusiast who has won medals in Kho-Kho, and I enjoy listening to music, which keeps me inspired and creative."
    ],
};



const skills = [
  // Backend (Main Strengths)
  { name: "Python", value: 90, icon: <FaPython color="black" size={24} /> },
  { name: "Django", value: 85, icon: <SiDjango color="black" size={24} /> },
  { name: "Java", value: 75, icon: <FaJava color="black" size={24} /> },

  // Frontend
  { name: "JavaScript", value: 80, icon: <FaJsSquare color="black" size={24} /> },
  { name: "React", value: 75, icon: <FaReact color="black" size={24} /> },
  
  { name: "HTML5", value: 95, icon: <FaHtml5 color="black" size={24} /> },
  { name: "CSS3", value: 90, icon: <FaCss3Alt color="black" size={24} /> },
  { name: "Bootstrap", value: 85, icon: <FaBootstrap color="black" size={24} /> },
  { name: "Tailwind CSS", value: 80, icon: <SiTailwindcss color="black" size={24} /> },

  // Database
  { name: "SQLite", value: 80, icon: <SiSqlite color="black" size={24} /> },
  { name: "PostgreSQL", value: 75, icon: <SiPostgresql color="black" size={24} /> },

  // Tools
  { name: "Git", value: 85, icon: <FaGitAlt color="black" size={24} /> },
  { name: "GitHub", value: 85, icon: <SiGithub color="black" size={24} /> },
  { name: "Firebase", value: 80, icon: <SiFirebase color="black" size={24} /> },
  { name: "Appwrite", value: 75, icon: <SiGithub color="black" size={24} /> },
  { name: "Figma", value: 70, icon: <SiFigma color="black" size={24} /> },
  { name: "Leaflet Map", value: 70, icon: <GiPositionMarker color="black" size={24} /> },
];



const services = [

    {
        title: "Full-Stack Development",
        description: "Building robust and scalable web applications using Python, Django, JavaScript, React, and modern CSS frameworks like Tailwind and Bootstrap.",
    },
    {
        title: "Database & Backend",
        description: "Designing and managing databases with SQLite and PostgreSQL, creating APIs, handling authentication, and implementing server-side logic efficiently.",
    },
    {
        title: "UI/UX & Frontend",
        description: "Crafting clean, responsive, and user-friendly interfaces with HTML, CSS, JavaScript, React, and Figma designs.",
    },
    
];


const dataportfolio = [
  {
    // Twitter-like app image variable you already used
    img: tweetimg,
    description: "Twitter Clone — A simple Twitter-like web app where users can post and view tweets. Built with Django (Python), Tailwind CSS, and PostgreSQL.",
    link: "#",
    github: "#",
    status: "completed",
  },
  {
    img: devlinktreeimg,
    description: "Dev LinkTree — A customizable 'Link in Bio' tool to visually build a personal profile layout with images, notes, background styles, and social links. Frontend: HTML + Tailwind + vanilla JS.",
    link: "https://dev-link-tree.vercel.app/",
    github: "#",
    status: "in-progress",
  },
  {
    img: cofeeimg,
    description: "Cofeeshop Landing Page — A clean, modern landing page for a coffee shop. Fully responsive and styled with Tailwind CSS.",
    link: "https://cofeeshop-kappa.vercel.app/",
    github: "#",
    status: "completed",
  },
  {
    img: onetimeimg,
    description: "One-Time Secret App — Send messages that self-destruct after first view. Built with React, Appwrite, and Tailwind CSS.",
    link: "https://one-time-msg.vercel.app/",
    github: "#",
    status: "completed",
  },
  {
    img: travelimg,
    description: "Travel Destination Explorer — Discover places, filter by vibes, and explore on a map. Built with React, Tailwind CSS, and Leaflet.js.",
    link: "https://travel-destination-explorer-neon.vercel.app/",
    github: "#",
    status: "in-progress",
  },
];


const contactConfig = {
    YOUR_EMAIL: "janvichaturvedi82@gmail.com",
    
    description: "Feel free to connect with me for collaboration, internship opportunities, or frontend projects.",
    // creat an emailjs.com account if you want to enable contact form
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/JANVI-CHATURVEDI",
    linkedin: "https://linkedin.com/in/janvi1010",
    twitter: "https://x.com/janvi_0x",
    email: "mailto:janvichaturvedi82@gmail.com",
};

export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
