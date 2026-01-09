import { useState } from "react";
import { Menu, X, Mail, Linkedin, Github, MapPin, Phone, Download, Code2, Database, GitBranch, Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "motion/react";
import { ProjectCard } from "./components/ProjectCard";
import { ThreeBackground } from "./components/ThreeBackground";

import myImage from "../assets/44852c7404437b80f0d96b8c3a4e567561cf2437.png";

const skills = [
  "React Native", "React.js", "Redux", "JavaScript", "TypeScript",
  "HTML", "CSS", "API Testing", "Azure Repo", "Github",
  "OOPS", "SQL", "Agile"
];

const certifications = [
  "React Native: The Practical Guide",
  "Fundamentals Of Database",
  "HDCA",
  // "Sun JAVA"
];


const projects = [
  {
    title: "Sulekha NRI App",
    description: "Led end-to-end development of a platform for Non-Resident Indians, implementing service listings, user profiles, booking systems, and payment integration. Achieved 30% increase in user engagement within first quarter.",
    image: "https://play-lh.googleusercontent.com/fPm0rCLBvuakinuiTEaQnq5WpJNi1gy1ZxUEDjxVfWnU1X6HQcpzAgQ6iQXMXa-7wvI",
    tags: ["React Native", "Redux", "iOS", "Android", "Payment Integration"],
    duration: "300 Days"
  },
  {
    title: "Sulekha Buisness App",
    description: "Led end-to-end development of a platform for Non-Resident Indians, implementing service listings, user profiles, booking systems, and payment integration. Achieved 30% increase in user engagement within first quarter.",
    image: "https://play-lh.googleusercontent.com/fPm0rCLBvuakinuiTEaQnq5WpJNi1gy1ZxUEDjxVfWnU1X6HQcpzAgQ6iQXMXa-7wvI",
    tags: ["React Native", "Redux", "iOS", "Android"],
    duration: "3 months"
  },
  {
    title: "React.js Web Applications",
    description: "Developed multiple web applications using React.js with Redux state management, focusing on performance optimization and responsive design principles.",
    image: "https://images.unsplash.com/photo-1646737554389-49329965ef01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzY3Nzg5MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React.js", "Redux", "JavaScript", "CSS", "HTML"]
  },
  {
    title: "Cross-Platform Solutions",
    description: "Implemented seamless cross-platform mobile applications with analytics integration, code reviews, and performance optimizations for enhanced user experience.",
    image: "https://images.unsplash.com/photo-1707528041466-83a325f01a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY3NzQ3MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React Native", "API Testing", "Azure", "Github"]
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Helper function
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">

      {/* min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-950 */}
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md shadow-lg shadow-blue-500/20 z-50 border-b border-blue-500/20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold"
            >

              <div className="flex items-center space-x-4 h-16">
                <img src={myImage} alt="Portfolio Visual" className="w-10 h-10 object-contain" />
                <span className="text-lg font-semibold text-white">
                Porfolio
                </span>
              </div>

            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  whileHover={{ scale: 1.1, color: "#60a5fa" }}
                  className="text-gray-300 transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </div>



            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-gray-300"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="md:hidden py-4 border-t border-blue-500/20"
            >
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setMenuOpen(false);
                  }}
                  className="block py-2 text-gray-300 hover:text-blue-400 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </motion.div>
          )}

        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center">
            {/* <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-40 h-40 mx-auto mb-8 relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-xl -z-10"
              />
              <img src={myImage} alt="Portfolio Visual" className="w-64 h-auto" />
            </motion.div> */}

            <motion.h1
              {...fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                RAMBABU NEHRU PONNAIAH
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-2xl sm:text-3xl mb-3 text-black-400"
            >
              Software Developer
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl sm:text-2xl mb-6 text-blue-400"
            >
              React Native Developer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-black-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Mobile App Developer with 3+ years of professional experience delivering production-ready mobile and web applications. Strong in JavaScript ecosystems, Agile development, and end-to-end feature delivery. Known for solving complex problems, learning quickly, and consistently meeting business goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex gap-4 justify-center flex-wrap mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl transition-all shadow-lg shadow-blue-500/50"
              >
                View My Work
              </motion.a>


              <motion.a
                href="/Document/RAMBABU_N.pdf"
                download="Rambabu_N_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-xl hover:bg-blue-500/10 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>



            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-6 justify-center text-gray-300 flex-wrap text-sm"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                Chennai, India
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-400" />
                3+ Years Experience
              </div>
            </motion.div>
          </div>
        </div>
      </section >

      {/* About Section */}
      < section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-sm" >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                I am a Mobile App Developer with a proven track record of creating successful
                Mobile and Web Javascript applications. I employ Agile practices to ensure
                business deadlines are met.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                As a self-starter and constant learner, I'm passionate about solving complex
                problems and delivering high-quality solutions. My experience spans React Native,
                React.js with Redux flow, and various modern development tools.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-500/20"
            >
              <h3 className="text-2xl mb-6 text-gray-100">Languages & Interests</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 mb-2">Languages:</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30">Tamil</span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30">English</span>
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30">Telugu</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Hobbies:</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30">⚽ Football</span>
                    <span className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30">🎵 Music</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section >

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-500/20 relative overflow-hidden"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-3xl"
            />

            <div className="relative">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-1 text-gray-100">Software Developer</h3>
                  <p className="text-xl text-blue-400 mb-2">React Native Developer</p>
                  <p className="text-gray-300 mb-2">Sulekha</p>
                  <p className="text-gray-400 text-sm">June 2022 - Present</p>
                </div>
              </div>

              <div className="ml-16 space-y-3">
                <p className="text-gray-300 leading-relaxed">
                  • Working extensively with React Native and React.js with Redux flow
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • Spearheaded end-to-end development of mobile applications ensuring seamless
                  performance across iOS and Android platforms
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • Collaborated with cross-functional teams including designers, product managers,
                  and backend developers
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • Implemented responsive design principles and optimized app performance
                </p>
                <p className="text-gray-300 leading-relaxed">
                  • Conducted regular code reviews, performance optimizations, and bug fixes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section >

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-sm" >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section >

      {/* Skills Section */}
      < section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Key Skills
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-blue-500/30 hover:border-blue-400"
              >
                <span className="text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl text-gray-100">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-gray-300">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section >

      {/* Education Section */}
      < section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40 backdrop-blur-sm" >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-1 text-gray-100">Master of Computer Applications (MCA)</h3>
                  <p className="text-blue-400 mb-1">Computer and Applications</p>
                  <p className="text-gray-300 text-sm mb-1">P.S.N.A College of Engineering and Technology, Dindigul</p>
                  <p className="text-gray-400 text-sm">2021</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-1 text-gray-100">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-blue-400 mb-1">Computers - Grade: 78%</p>
                  <p className="text-gray-300 text-sm mb-1">Theni Kammavar Sangam College Of Arts And Science, Theni</p>
                  <p className="text-gray-400 text-sm">2019</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-300 text-lg">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-blue-500/20"
          >
            <div className="space-y-6">
              <motion.a
                whileHover={{ scale: 1.02, x: 5 }}
                href="mailto:rambabunehru@gmail.com"
                className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl hover:shadow-lg transition-all border border-blue-500/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-200">rambabunehru@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, x: 5 }}
                href="tel:+918248887070"
                className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl hover:shadow-lg transition-all border border-blue-500/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-gray-200">+91 8248887070</p>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02, x: 5 }}
                href="https://www.linkedin.com/in/rambabu-n-620467302"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl hover:shadow-lg transition-all border border-blue-500/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-500 rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="text-gray-200">Connect on LinkedIn</p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-400 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-gray-200">Chennai, Tamil Nadu, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section >

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20" >
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-4"
          >
            © 2026 Rambabu NEHRU PONNAIAH - React Native Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-sm"
          >
            Built with React, TypeScript & Motion
          </motion.p>
        </div>
      </footer >
    </div >
  );
}