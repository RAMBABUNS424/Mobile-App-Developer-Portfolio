import { useState, useEffect } from "react";
import {
  Menu, X, Mail, Linkedin, Github, MapPin, Phone, Download, Code2, Database, GitBranch, Briefcase, GraduationCap, Award,
  ChevronRight, Sparkles, Terminal as TerminalIcon, MessageSquare, Zap, Cpu, Shield, Settings, CheckCircle2, AlertTriangle, ArrowRight,
  Smartphone, CreditCard, User, LayoutDashboard, Globe, TerminalSquare, Laptop, Coffee, ExternalLink, Play, Star
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectCard } from "./components/ProjectCard";
import { ThreeBackground } from "./components/ThreeBackground";
import { Terminal } from "./components/Terminal";
import { Chatbot } from "./components/Chatbot";
import { ContributionGraph } from "./components/ContributionGraph";
import { PhoneSimulator } from "./components/PhoneSimulator";

import myImage from "../assets/44852c7404437b80f0d96b8c3a4e567561cf2437.png";
import myResume from "../Document/RAMBABU_N.pdf";

// Type definition matching the component expectations
interface ScreenData {
  name: string;
  title: string;
  description: string;
  icon: any;
  details: string[];
}

interface StatData {
  metric: string;
  value: string;
  label: string;
}

interface ProjectData {
  title: string;
  description: string;
  image: string;
  tags: string[];
  duration?: string;
  demoUrl?: string;
  githubUrl?: string;
  stats: StatData[];
  screens: ScreenData[];
}

const detailedProjects: ProjectData[] = [
  {
    title: "Sulekha NRI App",
    description: "Led end-to-end development of a dedicated platform for Non-Resident Indians. Implemented robust localization services, localized listings, high-speed image caches, and deep-linked notification routing.",
    image: "https://play-lh.googleusercontent.com/fPm0rCLBvuakinuiTEaQnq5WpJNi1gy1ZxUEDjxVfWnU1X6HQcpzAgQ6iQXMXa-7wvI",
    tags: ["React Native", "Redux Flow", "iOS (Swift)", "Android (Kotlin)", "Payment Gateways"],
    duration: "300 Days",
    stats: [
      { metric: "Crash-Free Rate", value: "99.8%", label: "Stability Index" },
      { metric: "User Engagement", value: "+30%", label: "Quarterly Growth" },
      { metric: "App Rating", value: "4.8★", label: "Store Average" },
      { metric: "Active Expats", value: "150k+", label: "Monthly Users" }
    ],
    screens: [
      {
        name: "Home",
        title: "Expats Core Services",
        description: "Tailored services dashboard for NRIs, featuring real-time localized listings and recommendation carousels.",
        icon: Smartphone,
        details: ["Intelligent feed parsing algorithms", "One-click international booking", "Dynamic currency & timezone offsets"]
      },
      {
        name: "Payment",
        title: "Secure Checkout Gateway",
        description: "Multi-currency secure billing panel integrating Apple Pay, Credit Cards, and local banks securely.",
        icon: CreditCard,
        details: ["PCI-DSS compliant SDK integration", "Automated invoice receipt routing", "Failed transaction recovery flows"]
      },
      {
        name: "Profile",
        title: "Unified Expats Registry",
        description: "Sophisticated profile management allowing documents upload, booking logs, and instant chat histories.",
        icon: User,
        details: ["Secure local keychain token storage", "Offline support & synchronization", "Deep-linked activity logs"]
      }
    ]
  },
  {
    title: "Sulekha Business App",
    description: "Built the comprehensive lead-generation dashboard and CRM interface for local service vendors. Empowered business owners to capture, nurture, and convert consumer leads directly on their mobile device.",
    image: "https://play-lh.googleusercontent.com/fPm0rCLBvuakinuiTEaQnq5WpJNi1gy1ZxUEDjxVfWnU1X6HQcpzAgQ6iQXMXa-7wvI",
    tags: ["React Native", "Redux Toolkit", "Websockets", "Geofencing", "Analytics SDK"],
    duration: "3 Months",
    stats: [
      { metric: "Response Time", value: "-45%", label: "Lead Response Rate" },
      { metric: "Active Merchants", value: "25k+", label: "Daily Business" },
      { metric: "Promoter Score", value: "72", label: "NPS Index" },
      { metric: "Conversions", value: "+22%", label: "Lead Conversions" }
    ],
    screens: [
      {
        name: "Dashboard",
        title: "Merchant Command Panel",
        description: "Unified center for business lead management, campaign tracking, and daily activity logs.",
        icon: LayoutDashboard,
        details: ["Real-time websocket telemetry", "Interactive business analytics charts", "Push notification alert routing"]
      },
      {
        name: "Leads",
        title: "Instant Lead Dispatcher",
        description: "Geofenced instant lead matching system bringing clients and local businesses together.",
        icon: Zap,
        details: ["Geospatial index querying", "Swipe-to-accept lead actions", "Customer calling integration"]
      },
      {
        name: "Chat",
        title: "Vendor-Client Messenger",
        description: "Instant peer-to-peer messaging channel with media attachments and predefined response templates.",
        icon: MessageSquare,
        details: ["Encrypted payload transfer", "Instant chat notifications", "Offline message queue sync"]
      }
    ]
  },
  {
    title: "React.js Web Platforms",
    description: "Developed and optimized multiple high-performance web applications using React.js with Redux state management, focusing on Lighthouse audits, bundle reduction, and SEO optimization.",
    image: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_hybrid&w=740&q=80",
    tags: ["React.js", "Redux", "JavaScript (ES6+)", "Vite", "Tailwind CSS"],
    stats: [
      { metric: "Lighthouse Audit", value: "98/100", label: "Performance Score" },
      { metric: "Bundle Optimization", value: "-35%", label: "Bundle Size" },
      { metric: "Initial Page Load", value: "0.8s", label: "Speed Index" },
      { metric: "FCP Index", value: "0.4s", label: "First Paint" }
    ],
    screens: [
      {
        name: "Console",
        title: "Admin Console Panel",
        description: "Elegant analytical dashboard tracking operations, transaction throughput, and service status.",
        icon: Code2,
        details: ["Custom chart integration", "Real-time logs streaming", "Role-based access panels"]
      },
      {
        name: "Config",
        title: "Dynamic JSON Configurator",
        description: "Visual schema editor with full validation, draft histories, and automated publishing pipelines.",
        icon: Settings,
        details: ["Real-time AST schema checking", "Interactive dark mode flow", "Optimized state updates"]
      }
    ]
  },
  {
    title: "Cross-Platform DevOps",
    description: "Designed seamless automated continuous integration pipelines to build, sign, and publish packages to Google Play Console and Apple App Store Connect automatically.",
    image: "https://media.istockphoto.com/id/1189378904/vector/mobile-apps-creation-of-a-mobile-application-web-page-created-from-separate-blocks-user.jpg?s=612x612&w=0&k=20&c=HIiI8lu3-_-IhUS-Jj20zw0AS-w1FIKXGn_l4qdHAzQ=",
    tags: ["Azure Pipelines", "Fastlane", "Git/GitHub Actions", "App Center"],
    stats: [
      { metric: "Code Reuse", value: "88%", label: "Cross-Platform Reuse" },
      { metric: "Build Speed", value: "-50%", label: "Pipeline Duration" },
      { metric: "APK Weight", value: "14MB", label: "Production APK" },
      { metric: "Memory Usage", value: "120MB", label: "Runtime Footprint" }
    ],
    screens: [
      {
        name: "Settings",
        title: "Global Configurations",
        description: "Modern platform customizer enabling device-specific configurations and feature toggling.",
        icon: Shield,
        details: ["Biometric authorization flows", "Hardware acceleration toggle", "Localized language bundles"]
      },
      {
        name: "DevOps",
        title: "Automated Build Hub",
        description: "Seamless CI/CD build tracker with status updates, version controlling, and release deployments.",
        icon: GitBranch,
        details: ["Azure pipelines status polling", "Automated testers distribution", "Fastlane store deploy scripts"]
      }
    ]
  }
];

const certifications = [
  "React Native: The Practical Guide (Udemy)",
  "Fundamentals Of Database Engineering",
  "HDCA (Hardware & Digital Applications Course)",
  "Sun Certified Java Programmer (SCJP Foundation)"
];

const skillsCategories = [
  {
    title: "Mobile Core Engineering",
    icon: Smartphone,
    color: "from-blue-500 to-cyan-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
    items: [
      { name: "React Native", level: 98 },
      { name: "Redux Flow & Toolkit", level: 95 },
      { name: "Android (Kotlin/Java)", level: 85 },
      { name: "iOS (Swift/Obj-C)", level: 80 }
    ]
  },
  {
    title: "Web & Frontend Layers",
    icon: Globe,
    color: "from-purple-500 to-pink-500",
    glowColor: "rgba(139, 92, 246, 0.4)",
    items: [
      { name: "React.js", level: 92 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "CSS3 / HTML5 / Tailwind", level: 90 },
      { name: "TypeScript", level: 90 },
    ]
  },
  {
    title: "Backend & Systems",
    icon: Cpu,
    color: "from-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.4)",
    items: [
      { name: "RESTful API Testing", level: 90 },
      { name: "SQL & Databases", level: 85 },
      { name: "OOP Principles", level: 92 },
      { name: "Websockets", level: 88 }
    ]
  },
  {
    title: "Tooling & Workflows",
    icon: GitBranch,
    color: "from-yellow-500 to-orange-500",
    glowColor: "rgba(245, 158, 11, 0.4)",
    items: [
      { name: "Git & GitHub", level: 95 },
      { name: "Azure Repos / DevOps", level: 88 },
      { name: "Agile & Scrum Sprints", level: 90 },
      { name: "Fastlane & Build Tooling", level: 85 }
    ]
  }
];

// Pure React Typing Text Component
function TypingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const handle = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(handle);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 60 : 120, 40));

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index, words]);

  return (
    <span className="font-mono text-neon-cyan">
      {words[index].substring(0, subIndex)}
      <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  );
}

// Pure React Counter Component
function Counter({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMilliseconds = duration;
    const incrementTime = Math.abs(Math.floor(totalMilliseconds / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, Math.max(incrementTime, 20));

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
}

// Helper function
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bioTab, setBioTab] = useState<"standard" | "cli">("standard");

  // Contact Form States
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Monitor Scroll for Active Section and Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }

      // Determine active section
      const sections = ["home", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: "", email: "", message: "" };
    let hasError = false;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      hasError = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      hasError = true;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen text-gray-100 overflow-x-hidden font-sans">
      {/* 3D Moving Particle Canvas */}
      <ThreeBackground />

      {/* Global Holographic Chatbot Assistant */}
      <Chatbot />

      {/* Scroll Progress Bar at very top */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple z-[60] transition-all duration-75"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Glassmorphic Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-5xl glass-nav rounded-full px-6 py-2.5 z-50 flex items-center justify-between border border-white/10 shadow-lg shadow-black/40"
      >
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 3 }}
            className="w-9 h-9 rounded-full bg-gradient-to-tr from-neon-blue to-neon-cyan flex items-center justify-center p-0.5"
          >
            <img src={myImage} alt="Avatar Mini" className="w-full h-full rounded-full object-cover" />
          </motion.div>
          <span className="text-sm font-display font-bold tracking-wider bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            RAMBABU NEHRU
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-1">
          {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => {
            const sectionId = item.toLowerCase();
            const isActive = activeSection === sectionId;
            return (
              <motion.button
                key={item}
                onClick={() => scrollToSection(sectionId)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${isActive
                  ? "bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30"
                  : "text-gray-400 hover:text-white border border-transparent"
                  }`}
              >
                {item}
              </motion.button>
            );
          })}
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute top-16 left-0 right-0 glass-card rounded-2xl p-4 border border-white/10 flex flex-col space-y-2 md:hidden"
            >
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setMenuOpen(false);
                  }}
                  className="block py-2 text-sm text-gray-300 hover:text-neon-cyan text-left pl-2 rounded-lg hover:bg-white/5 transition-all"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Futuristic Floating Neon Blobs */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-neon-blue/15 rounded-full blur-[100px] animate-pulse-slow -z-20" />
        <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] bg-neon-purple/10 rounded-full blur-[120px] animate-float -z-20" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[90px] animate-float-delayed -z-20" />

        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Hero Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-neon-cyan animate-spin-slow" />
              <span className="text-[11px] uppercase tracking-wider font-bold text-neon-cyan">
                Interactive Developer Console
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight leading-none"
            >
              Hi, I am <br />
              <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent text-glow-cyan">
                Rambabu Nehru
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-display font-bold flex items-center justify-center lg:justify-start gap-2.5 text-gray-300"
            >
              <span>Specialized in</span>
              <TypingText words={["React Native Apps", "Third Party Intergration", "High-Performance UIs"]} />
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Mobile Engineer with 4 years of professional experience building and releasing premium commercial applications. Highly skilled in Agile workflows, Redux architecture, store submission protocols, and multi-threaded rendering optimization.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4 justify-center lg:justify-start flex-wrap pt-2"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3.5 bg-gradient-to-r from-neon-blue to-neon-cyan text-white font-semibold rounded-xl transition-all flex items-center gap-2 cursor-pointer border border-white/10 shadow-lg"
              >
                <span>Launch App Simulator</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                href={myResume}
                download="RAMBABU_N_Resume.pdf"
                whileHover={{ scale: 1.05, bg: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3.5 border-2 border-neon-cyan text-neon-cyan font-semibold rounded-xl hover:bg-neon-cyan/5 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Micro badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-6 justify-center lg:justify-start text-xs text-gray-400 flex-wrap"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-neon-cyan" />
                <span>Chennai, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-neon-purple" />
                <span>4 Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-neon-blue" />
                <span>4+ Store Apps</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Avatar Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.2 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 select-none"
            >
              {/* Spinning glowing border rings */}
              <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-neon-blue/30 animate-spin-slow" />
              <div className="absolute -inset-4 rounded-3xl border border-neon-cyan/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              <div className="absolute -inset-2 bg-gradient-to-tr from-neon-blue via-neon-cyan to-neon-purple rounded-3xl opacity-20 blur-xl animate-pulse-slow" />

              {/* Glass container for avatar */}
              <div className="absolute inset-2 glass-card rounded-2xl overflow-hidden p-2 border border-white/10 shadow-2xl">
                <img
                  src={myImage}
                  alt="Rambabu Nehru Portrait"
                  className="w-full h-full object-cover rounded-xl transition-all duration-500 hover:scale-105"
                />
              </div>

              {/* Floating micro badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 glass-card px-3 py-1 rounded-full border border-neon-cyan/35 flex items-center space-x-1"
              >
                <Smartphone className="w-3.5 h-3.5 text-neon-cyan animate-bounce" />
                <span className="text-[10px] font-bold text-neon-cyan">Mobile App </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-3 -left-3 glass-card px-3 py-1 rounded-full border border-neon-purple/35 flex items-center space-x-1"
              >
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-[10px] font-bold text-gray-200">Software Devloper</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* About Section & Live Console Toggle */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Developer Profile
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Explore my background using either the standardized modern layout or the interactive developer command line terminal console.
            </p>

            {/* Layout Toggle Selector */}
            <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10 mt-6 select-none">
              <button
                onClick={() => setBioTab("standard")}
                className={`px-6 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${bioTab === "standard"
                  ? "bg-neon-blue text-white shadow-md shadow-neon-blue/20"
                  : "text-gray-400 hover:text-gray-200"
                  }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Standard Bio</span>
              </button>
              <button
                onClick={() => setBioTab("cli")}
                className={`px-6 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${bioTab === "cli"
                  ? "bg-neon-cyan text-black shadow-md shadow-neon-cyan/20"
                  : "text-gray-400 hover:text-gray-200"
                  }`}
              >
                <TerminalIcon className="w-3.5 h-3.5" />
                <span>Interactive Terminal</span>
              </button>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {bioTab === "standard" ? (
              <motion.div
                key="standard-bio"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Standard Bio Text Grid */}
                <div className="lg:col-span-7 flex flex-col justify-between glass-card p-8 rounded-2xl border border-white/5 relative">
                  <div className="space-y-4">
                    <h3 className="text-xl text-white font-bold mb-2"> Fluid Mobile Products</h3>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                      I am a specialized Mobile Developer dedicated to crafting fluid, responsive, and robust applications. My experience centers around the **React Native** ecosystem, leveraging the shared-layer speed of JavaScript combined with target-specific platform capabilities on iOS and Android.
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                      Through close integration with designers and product managers under Agile methodologies, I drive components from initial sketch to final release. I excel in optimizing bundle footprints, configuring CI/CD lanes, and handling asynchronous states reliably.
                    </p>
                  </div>

                  {/* Languages & Interests Sub-grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/5">
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mb-2">Native Tongues</p>
                      <div className="flex flex-wrap gap-1.5">
                        {["Tamil", "English", "Telugu"].map((lang) => (
                          <span key={lang} className="px-2.5 py-1 bg-white/5 text-gray-300 border border-white/5 rounded-lg text-xs">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black mb-2">Personal Hobbies</p>
                      <div className="flex flex-wrap gap-1.5">
                        {["⚽ Football", "🎵 Music Production", "✈️ Travel"].map((hobby) => (
                          <span key={hobby} className="px-2.5 py-1 bg-white/5 text-gray-300 border border-white/5 rounded-lg text-xs">
                            {hobby}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Telemetry Counters Dashboard */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">

                  <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center shadow-lg relative group">
                    <div className="absolute top-3 right-3 bg-neon-blue/10 p-1.5 rounded-lg border border-neon-blue/20">
                      <Briefcase className="w-4 h-4 text-neon-blue" />
                    </div>
                    <div className="text-3xl font-mono font-black text-white mb-1">
                      <Counter value={4} suffix="+" />
                    </div>
                    <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">Years Experience</p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center shadow-lg relative group">
                    <div className="absolute top-3 right-3 bg-neon-cyan/10 p-1.5 rounded-lg border border-neon-cyan/20">
                      <Smartphone className="w-4 h-4 text-neon-cyan" />
                    </div>
                    <div className="text-3xl font-mono font-black text-white mb-1">
                      <Counter value={4} suffix="+" />
                    </div>
                    <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">Apps Published</p>
                  </div>



                  <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center shadow-lg relative group">
                    <div className="absolute top-3 right-3 bg-neon-purple/10 p-1.5 rounded-lg border border-neon-purple/20">
                      <GitBranch className="w-4 h-4 text-neon-purple" />
                    </div>
                    <div className="text-3xl font-mono font-black text-white mb-1">
                      <Counter value={200} suffix="+" duration={2500} />
                    </div>
                    <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">Commits Checked</p>
                  </div>

                  <div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center text-center shadow-lg relative group">
                    <div className="absolute top-3 right-3 bg-emerald-500/10 p-1.5 rounded-lg border border-emerald-500/20">
                      <Award className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-3xl font-mono font-black text-white mb-1">
                      <Counter value={99} suffix=".9%" duration={2500} />
                    </div>
                    <p className="text-[11px] text-zinc-400 font-semibold uppercase tracking-wider">Crash-Free Rate</p>
                  </div>

                  {/* High Quality Certifications Widget */}
                  <div className="col-span-2 glass-card p-5 rounded-2xl border border-white/5 relative">
                    <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3.5 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-neon-cyan animate-pulse" />
                      <span>Professional Accreditation</span>
                    </h4>
                    <div className="space-y-2.5 max-h-40 overflow-y-auto">
                      {certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-300 bg-white/5 px-3 py-2 rounded-xl border border-white/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ) : (
              <motion.div
                key="cli-bio"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Embed CLI Terminal component */}
                <Terminal />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              Employment Timeline
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              A history of engineering products that have met stringent market guidelines and business expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Experience timeline card left */}
            <div className="lg:col-span-7 space-y-6">

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-neon-blue/20 relative overflow-hidden group shadow-xl"
              >
                {/* Inner ambient glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center flex-shrink-0 border border-white/10 shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-xl text-white font-bold">Software Developer</h3>
                      <span className="px-3 py-1 bg-neon-blue/15 border border-neon-blue/30 text-neon-blue rounded-full text-[10px] font-bold uppercase tracking-wider">
                        Active Client
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-neon-cyan mt-1">Sulekha (Commercial Products Developer)</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-1.5 font-medium">
                      <GraduationCap className="w-3.5 h-3.5 text-zinc-500" />
                      <span>June 2022 - Present (4 Years)</span>
                    </p>
                  </div>
                </div>

                <div className="mt-8 ml-0 sm:ml-16 space-y-4 pt-6 border-t border-white/5">

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <ChevronRight className="w-3 h-3 text-neon-blue" />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                      **Spearheaded mobile development** using React Native and Redux pipelines, building responsive products deployed cleanly to Apple App Store and Google Play Store.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <ChevronRight className="w-3 h-3 text-neon-blue" />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                      **Optimized asynchronous requests** and list rendering bottlenecks, using Native modules and flat list image loaders to capture stable frames.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <ChevronRight className="w-3 h-3 text-neon-blue" />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                      **Collaborated with cross-functional teams** including UI design divisions and server architects in standard Agile sprints to resolve blocking dependencies swiftly.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <ChevronRight className="w-3 h-3 text-neon-blue" />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">
                      **Managed release builds**, generating signed credentials, handling keystores, and implementing push notifications for robust user conversion loops.
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* Education Grid within timeline section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="glass-card p-5 rounded-2xl border border-white/5 relative group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-3 text-neon-purple group-hover:text-white transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Master of Computer Applications</h4>
                  <p className="text-xs text-neon-purple font-medium">PSNA College of Eng & Tech</p>
                  <p className="text-[10px] text-gray-500 mt-2">Class of 2021 | Dindigul, India</p>
                </div>

                <div className="glass-card p-5 rounded-2xl border border-white/5 relative group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 mb-3 text-neon-cyan group-hover:text-white transition-colors">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">Bachelor of Computer Applications</h4>
                  <p className="text-xs text-neon-cyan font-medium">Theni Kammavar Arts & Sci</p>
                  <p className="text-[10px] text-gray-500 mt-2">Class of 2019 | Theni - Grade 78%</p>
                </div>

              </div>

            </div>

            {/* Engineer Activity Graph right */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="glass-card p-6 rounded-2xl border border-white/5">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3.5 flex items-center gap-1.5">
                    <GitBranch className="w-4 h-4 text-emerald-400" />
                    <span>Engineering Commits Graph</span>
                  </h4>
                  <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                    Below is my interactive commit grid representing system milestones and features integrated across my commercial code repositories.
                  </p>
                  {/* ContributionGraph component */}
                  <ContributionGraph />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section with Live Phone Simulator */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Featured Commercial Works
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Select any project below to activate its preview screens directly inside the mobile phone simulator.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Project Selection Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detailedProjects.map((proj, idx) => (
                <div key={idx} className="h-full">
                  <ProjectCard
                    project={proj}
                    isSelected={selectedProjectIndex === idx}
                    onSelect={() => setSelectedProjectIndex(idx)}
                  />
                </div>
              ))}
            </div>

            {/* Interactive Phone Simulator sticky right */}
            <div className="lg:col-span-5">
              <div className="bg-white/[0.02] p-6 rounded-3xl border border-white/5 backdrop-blur-md shadow-2xl relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/5 rounded-full blur-2xl" />
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-5 flex items-center justify-center gap-1.5 select-none">
                  <Smartphone className="w-4 h-4 text-neon-cyan animate-pulse" />
                  <span>Virtual Device Simulator</span>
                </h4>

                {/* PhoneSimulator component */}
                <PhoneSimulator project={detailedProjects[selectedProjectIndex]} />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Core Tech Engineering
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Categorized matrix mapping my tech competency. Hover cards to reveal engineering layers and progress rings.
            </p>
          </motion.div>

          {/* Interactive Skills Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {skillsCategories.map((category, catIdx) => {
              const IconComp = category.icon;
              return (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.1 }}
                  whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.15)" }}
                  className="glass-card p-6 rounded-2xl border border-white/5 relative flex flex-col justify-between"
                >
                  <div>
                    {/* Header of skill category */}
                    <div className="flex items-center space-x-3.5 mb-6">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center border border-white/10 shadow-lg text-white`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-wide">{category.title}</h3>
                    </div>

                    {/* Skill progress bars list */}
                    <div className="space-y-4">
                      {category.items.map((skill, skIdx) => (
                        <div key={skIdx} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-neon-cyan font-mono font-bold">{skill.level}%</span>
                          </div>
                          {/* Progress slot */}
                          <div className="h-1.5 bg-black/45 rounded-full overflow-hidden border border-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: skIdx * 0.1 }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Micro label foot */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    <Shield className="w-3.5 h-3.5 text-zinc-600" />
                    <span>Verified commercial stack</span>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/30 relative">
        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Initiate Connections
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Interested in launching high-fidelity cross platform products? Drop me a line below or reach out via direct pathways.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">

            {/* Contact Direct Pathways left */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">

              <motion.a
                whileHover={{ x: 6, scale: 1.01, borderColor: "rgba(59,130,246,0.3)" }}
                href="mailto:rambabunehru@gmail.com"
                className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:shadow-xl transition-all shadow-md group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center text-white border border-white/10 shadow-lg group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Mail Client</p>
                  <p className="text-sm font-bold text-gray-200 mt-0.5">rambabunehru@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ x: 6, scale: 1.01, borderColor: "rgba(16,185,129,0.3)" }}
                href="tel:+918248887070"
                className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:shadow-xl transition-all shadow-md group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white border border-white/10 shadow-lg group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Direct Voice Call</p>
                  <p className="text-sm font-bold text-gray-200 mt-0.5">+91 8248887070</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ x: 6, scale: 1.01, borderColor: "rgba(6,182,212,0.3)" }}
                href="https://www.linkedin.com/in/rambabu-n-620467302"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:shadow-xl transition-all shadow-md group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-xl flex items-center justify-center text-white border border-white/10 shadow-lg group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">LinkedIn Professional</p>
                  <p className="text-sm font-bold text-gray-200 mt-0.5">rambabu-n-620467302</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 p-5 bg-white/[0.02] border border-white/5 rounded-2xl shadow-md select-none">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-zinc-400 border border-white/5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Location Base</p>
                  <p className="text-sm font-bold text-gray-300 mt-0.5">Chennai, Tamil Nadu, India</p>
                </div>
              </div>

            </div>

            {/* Glassmorphism Contact Form right */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 relative h-full flex flex-col justify-between"
              >
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-lg text-white font-bold mb-4">Send a Secure Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Input */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-600 focus:outline-none transition-colors ${errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-neon-cyan/50"
                          }`}
                      />
                      {errors.name && <span className="text-[10px] text-red-400">{errors.name}</span>}
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-600 focus:outline-none transition-colors ${errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-neon-cyan/50"
                          }`}
                      />
                      {errors.email && <span className="text-[10px] text-red-400">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Hi Rambabu, I'd like to discuss a project..."
                      className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-600 focus:outline-none transition-colors resize-none ${errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/10 focus:border-neon-cyan/50"
                        }`}
                    />
                    {errors.message && <span className="text-[10px] text-red-400">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-xl text-xs font-bold tracking-wider text-white uppercase shadow-lg hover:shadow-neon-cyan/10 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending secure logs...</span>
                      </>
                    ) : (
                      <>
                        <Zap className="w-4 h-4 fill-current text-white animate-pulse" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-emerald-500/10 border border-emerald-500/30 p-3.5 rounded-xl flex items-center gap-2.5"
                      >
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                        <span className="text-xs text-emerald-400 font-semibold">Message securely transmitted! Rambabu will get in touch shortly.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/85 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative z-10 text-center select-none">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-center space-x-2.5">
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neon-cyan font-bold font-display text-xs">
              R
            </div>
            <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase">
              Rambabu Nehru Ponnaiah
            </span>
          </div>

          <p className="text-[11px] text-zinc-500 max-w-md mx-auto leading-relaxed">
            Designed as an immersive visual developer console. Built using React, Motion & Tailwind CSS v4.
          </p>

          <p className="text-[10px] text-zinc-600 font-mono">
            &copy; 2026 Developer Core OS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}