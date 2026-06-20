import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800/60 py-12 mt-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link to="/" className="text-2xl font-extrabold tracking-tighter text-white">
              Aman <span className="text-sky-400">Naeem</span>
            </Link>
            <p className="text-slate-400 mt-2 text-sm max-w-sm font-medium">
              Full Stack Developer | GIS Analyst | Python Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/amannaeem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transform hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/amannaeem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transform hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:amannaeem78654@gmail.com"
              className="text-slate-400 hover:text-sky-400 transform hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-medium gap-4">
          <p>&copy; {new Date().getFullYear()} Aman Naeem. All Rights Reserved.</p>
          <p className="flex items-center">
            Made with <span className="text-red-500 mx-1 animate-pulse">❤️</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
