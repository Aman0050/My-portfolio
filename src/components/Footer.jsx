import { Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-xl overflow-hidden">
      {/* Subtle ambient light blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Brand & Description */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="text-3xl font-extrabold tracking-tighter group">
              <span className="text-white transition-colors duration-300">Aman</span>{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm">
                Naeem
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-md text-center md:text-left font-medium leading-relaxed">
              Full Stack Developer | GIS Analyst | Python Enthusiast
              <br className="hidden md:block" />
              <span className="mt-1 block text-slate-500">Building digital experiences that combine beautiful design with robust engineering.</span>
            </p>
          </div>
          
          {/* Premium Social Links */}
          <div className="flex items-center space-x-5">
            {[
              { icon: <FiGithub size={20} />, href: "https://github.com/amannaeem", label: "GitHub" },
              { icon: <FiLinkedin size={20} />, href: "https://linkedin.com/in/amannaeem", label: "LinkedIn" },
              { icon: <Mail size={20} />, href: "mailto:amannaeem78654@gmail.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-800/40 border border-slate-700/50 text-slate-300 transition-all duration-300 hover:bg-sky-500/10 hover:border-sky-500/50 hover:text-sky-400 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)] backdrop-blur-sm"
                aria-label={social.label}
              >
                {social.icon}
                <span className="absolute -bottom-10 scale-0 rounded-lg bg-slate-800 px-3 py-1 text-xs font-medium text-slate-200 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 border border-slate-700/50 shadow-lg whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Elegant Gradient Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/70 to-transparent my-10"></div>
        
        {/* Copyright & Made With */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-medium gap-6">
          <p className="flex items-center gap-1.5 hover:text-slate-400 transition-colors">
            <span className="text-lg">&copy;</span> {new Date().getFullYear()} Aman Naeem. All Rights Reserved.
          </p>
          <div className="flex items-center px-4 py-2 rounded-full bg-slate-900/60 border border-slate-800/60 shadow-inner backdrop-blur-sm group hover:border-slate-700/60 transition-colors">
            <span className="mr-2">Crafted with</span>
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></span>
            </span>
            <span className="font-semibold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
