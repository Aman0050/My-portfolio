import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, Activity, Star, Zap, Code, ShieldCheck, Smartphone, Building, Users, BookOpen, Layers, Lightbulb, AlertTriangle, Bot, GraduationCap, Briefcase, Rocket, Palette, Library } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import PageWrapper from "../components/PageWrapper";

const Projects = () => {
  const featuredProjects = [
    {
      id: "fitxeno",
      title: "FitXeno",
      badge: "💼 Client Project | ⭐ Featured | 🌐 Live",
      description: "Developed a multi-tenant Gym Management SaaS for managing members, attendance, membership, and payments. Built a responsive frontend using React.js, HTML5, CSS3, and JavaScript for a seamless cross-device experience. Integrated secure REST APIs with JWT authentication for scalable and secure data management. Implemented attendance, payment, inventory, analytics, and reporting modules to streamline gym operations.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1400",
      techStack: ["React.js", "JavaScript", "Bootstrap 5", "Node.js", "Express.js"],
      stats: [
        { label: "Responsive", icon: <Smartphone className="text-sky-400" size={24} /> },
        { label: "Performance", icon: <Zap className="text-yellow-400" size={24} /> },
        { label: "Modern UI", icon: <Star className="text-purple-400" size={24} /> },
        { label: "Production Ready", icon: <ShieldCheck className="text-green-400" size={24} /> },
      ],
      link: "https://www.fitxeno.in/",
      glowPrimary: "bg-sky-500/10 group-hover:bg-sky-400/20",
      glowSecondary: "bg-purple-500/10 group-hover:bg-purple-400/20",
      badgeColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    },
    {
      id: "smart-college",
      title: "Smart College Management System",
      badge: "🎓 Full Stack Project | 📊 Dashboard",
      description: "Developed a comprehensive College Management System that streamlines academic administration through role-based dashboards, student management, faculty management, attendance tracking, examination management, and administrative workflows.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1400",
      techStack: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "React Router", "Framer Motion"],
      stats: [
        { label: "Responsive", icon: <Smartphone className="text-emerald-400" size={24} /> },
        { label: "Performance", icon: <Zap className="text-yellow-400" size={24} /> },
        { label: "Modern UI", icon: <Star className="text-purple-400" size={24} /> },
        { label: "Production Ready", icon: <ShieldCheck className="text-green-400" size={24} /> },
      ],
      link: "https://smart-college-management-system-olive.vercel.app/",
      glowPrimary: "bg-emerald-500/10 group-hover:bg-emerald-400/20",
      glowSecondary: "bg-teal-500/10 group-hover:bg-teal-400/20",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      id: "ai-study-planner",
      title: "AI Study Planner",
      badge: "🤖 AI Powered | 🚀 Featured",
      description: "Built an AI-powered study planning application that helps students generate personalized study schedules, organize learning goals, and improve productivity using intelligent planning.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1400",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "AI API Integration", "Framer Motion"],
      stats: [
        { label: "Responsive", icon: <Smartphone className="text-violet-400" size={24} /> },
        { label: "Performance", icon: <Zap className="text-yellow-400" size={24} /> },
        { label: "Modern UI", icon: <Star className="text-purple-400" size={24} /> },
        { label: "Production Ready", icon: <ShieldCheck className="text-green-400" size={24} /> },
      ],
      link: "https://ai-study-planner-rust-nine.vercel.app/",
      glowPrimary: "bg-violet-500/10 group-hover:bg-violet-400/20",
      glowSecondary: "bg-fuchsia-500/10 group-hover:bg-fuchsia-400/20",
      badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    }
  ];

  const otherProjects = [
    {
      title: "Personal Portfolio",
      badge: "🎨 Portfolio",
      description: "Developed a responsive portfolio using React.js, Vite, and Tailwind CSS to showcase skills and projects. Implemented smooth animations with Framer Motion and client-side routing using React Router. Optimized performance and responsiveness while integrating GitHub repositories and live project links.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      badges: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "E-Learning Platform",
      badge: "📚 Learning Platform",
      description: "Developed an interactive e-learning platform featuring YouTube API integration, local storage, responsive layouts, and an intuitive interface to enhance online learning.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
      badges: ["HTML", "CSS", "JavaScript", "LocalStorage", "YouTube API"],
      demoLink: "#",
      githubLink: "#",
    }
  ];

  return (
    <PageWrapper>
      <div className="py-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            🔥 Featured <span className="text-sky-400">Projects</span>
          </h1>
          <p className="text-slate-400">Showcasing my best and most recent work.</p>
        </motion.div>

        {/* --- FEATURED PROJECTS --- */}
        <div className="space-y-24">
          {featuredProjects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative glass-card rounded-[20px] overflow-hidden border border-slate-700/50 shadow-[0_0_50px_rgba(0,0,0,0.5)] group"
            >
              {/* Animated Background Glow */}
              <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -z-10 transition-colors duration-700 ${project.glowPrimary}`}></div>
              <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl -z-10 transition-colors duration-700 ${project.glowSecondary}`}></div>

              <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-12 lg:p-16">
                
                {/* Left Side: Visuals */}
                <div className="relative flex flex-col justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-[20px] overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/50"
                  >
                    <img 
                      src={project.image} 
                      alt={`${project.title} Website`} 
                      loading="lazy"
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  </motion.div>
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`${project.badgeColor} border px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase`}>
                      {project.badge}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-6 tracking-tight group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h2>
                  
                  <p className="text-lg text-slate-300 font-medium mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="bg-slate-800/50 border border-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {project.stats.map((stat, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-800 p-4 rounded-2xl flex items-center gap-3 group-hover:border-slate-700/50 transition-colors">
                        {stat.icon}
                        <span className="text-sm font-medium text-slate-300">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 mt-auto">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-6 py-4 rounded-[20px] font-bold transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transform hover:-translate-y-1"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </a>
                    <a 
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-4 rounded-[20px] font-bold transition-all border border-slate-700 hover:border-slate-600 transform hover:-translate-y-1"
                    >
                      <FiGithub size={20} /> GitHub
                    </a>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- OTHER PROJECTS --- */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">📂 Other Projects</h2>
            <div className="flex-1 h-px bg-slate-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="glass-card group overflow-hidden flex flex-col h-full border border-slate-700 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] rounded-[20px]"
              >
                <div className="relative aspect-video w-full overflow-hidden border-b border-slate-700/50">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-slate-900/80 backdrop-blur-md text-sky-400 border border-slate-700/50 px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg">
                      {project.badge}
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.badges.map((badge, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-4 py-2.5 rounded-[20px] font-medium transition-colors"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-[20px] font-medium transition-colors border border-slate-700"
                    >
                      <FiGithub size={20} /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

export default Projects;