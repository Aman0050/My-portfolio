import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { Code, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="text-sky-400 mb-6" size={32} />,
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <Database className="text-purple-400 mb-6" size={32} />,
      skills: ["Python", "SQL"],
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="text-orange-400 mb-6" size={32} />,
      skills: ["Git", "GitHub", "VS Code", "ArcGIS", "QGIS"],
    },
  ];

  return (
    <PageWrapper>
      <div className="py-12 max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-sky-400">Skills</span>
          </h1>
          <p className="text-slate-400">Technologies and tools I work with.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 text-center flex flex-col items-center hover:border-sky-400/50 transition-all duration-300 h-full"
            >
              {category.icon}
              <h2 className="text-2xl font-bold text-white mb-8">{category.title}</h2>
              <div className="flex flex-wrap justify-center gap-3 mt-auto">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-slate-800 border border-slate-700 text-slate-200 px-4 py-2 rounded-[20px] text-sm font-medium hover:bg-sky-500/10 hover:text-sky-400 hover:border-sky-400/50 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
