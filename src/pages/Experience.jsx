import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import PageWrapper from "../components/PageWrapper";

const Experience = () => {
  const experiences = [
    {
      role: "GIS Analyst",
      company: "Falcon Info Solutions",
      duration: "Aug 2025 – Present",
      responsibilities: [
        "Developed and maintained the company's official website using React.js, improving responsiveness and user experience.",
        "Worked on GIS and telecom projects involving ArcGIS, DTP Planning, and OFC network planning.",
        "Managed GIS datasets and shapefiles for mapping, analysis, and reporting.",
        "Collaborated with cross-functional teams on requirement analysis, testing, documentation, and feature implementation."
      ],
      technologies: ["React.js", "ArcGIS", "QGIS", "Python", "SQL"],
    },
    {
      role: "Associate Trainer Intern",
      company: "Face Prep",
      duration: "Mar 2025 – Jul 2025",
      responsibilities: [
        "Successfully conducted over 15+ training sessions on LinkedIn, aimed at enhancing the skills of college students.",
        "Collaborated closely with lead trainers to organize and deliver interactive workshops and mock tests.",
        "Proactively addressed and resolved student queries in a timely manner, providing personalized support.",
        "Received positive feedback from 90+ participants for effective training delivery and engagement."
      ],
      technologies: ["Mentoring", "Training", "Communication", "LinkedIn"],
    }
  ];

  return (
    <PageWrapper>
      <div className="py-12 max-w-4xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-sky-400">Experience</span>
          </h1>
          <p className="text-slate-400">My professional background and internships.</p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 text-sky-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg shadow-sky-500/20 z-10">
                <Briefcase size={20} />
              </div>

              {/* Card Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8 relative overflow-hidden group hover:border-sky-400/50 transition-all duration-300 shadow-xl shadow-black/20 rounded-[20px]">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-400/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-sky-400 font-bold bg-sky-400/10 px-3 py-1.5 rounded-[12px] text-xs w-max uppercase tracking-wider">
                      {exp.duration}
                    </span>
                    <h3 className="text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                  </div>
                  
                  <h4 className="text-lg text-slate-300 font-medium mb-4 flex items-center gap-2">
                    {exp.company}
                  </h4>

                  <ul className="space-y-3 mb-6 text-slate-400 border-b border-slate-700/50 pb-6 text-sm leading-relaxed">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-sky-400 mt-1.5 text-[10px]">●</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-medium text-sky-300 bg-sky-400/10 border border-sky-400/20 px-3 py-1.5 rounded-[12px] hover:bg-sky-400/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Experience;