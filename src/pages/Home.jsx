import { motion } from "framer-motion";
import { Download, FolderOpen, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageWrapper>
      <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-100px)] py-12 text-center overflow-hidden">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse"></div>

        <motion.div 
          className="space-y-8 max-w-4xl relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-2"
          >
            <span className="bg-slate-800/80 backdrop-blur-sm text-slate-300 px-5 py-2.5 rounded-full text-sm font-semibold border border-slate-700/50 shadow-lg shadow-black/20">
              👋 Hello, I'm
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white leading-tight">
            Aman <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-600">Naeem</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-300 font-medium tracking-wide uppercase mt-4">
            Full Stack Developer <span className="text-sky-500 mx-2">|</span> GIS Analyst <span className="text-sky-500 mx-2">|</span> Python Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mt-6">
            Passionate about building modern web applications, GIS solutions, and solving real-world problems with technology. I enjoy creating clean user interfaces and scalable architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
            <a 
              href="/Aman_Naeem_Resume.pdf" 
              download="Aman_Naeem_Resume.pdf"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-[20px] font-bold transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transform hover:-translate-y-1"
            >
              <Download size={20} /> Download Resume
            </a>
            <Link to="/projects" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700 text-white px-8 py-4 rounded-[20px] font-bold transition-all duration-300 border border-slate-700 hover:border-slate-600 transform hover:-translate-y-1">
              <FolderOpen size={20} /> View Projects
            </Link>
            <Link to="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-slate-800/50 text-white px-8 py-4 rounded-[20px] font-bold transition-all duration-300 border border-slate-700 hover:border-slate-600 transform hover:-translate-y-1">
              <Mail size={20} /> Hire Me
            </Link>
          </div>

          <div className="flex justify-center gap-8 pt-12 text-slate-400 relative z-20">
            <a href="https://github.com/amannaeem" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors transform hover:-translate-y-1 hover:scale-110 duration-300" aria-label="GitHub"><FiGithub size={28} /></a>
            <a href="https://linkedin.com/in/amannaeem" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors transform hover:-translate-y-1 hover:scale-110 duration-300" aria-label="LinkedIn"><FiLinkedin size={28} /></a>
            <a href="mailto:amannaeem78654@gmail.com" className="hover:text-sky-400 transition-colors transform hover:-translate-y-1 hover:scale-110 duration-300" aria-label="Email"><Mail size={28} /></a>
          </div>
        </motion.div>
      </section>
    </PageWrapper>
  );
};

export default Home;