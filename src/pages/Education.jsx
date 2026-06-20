import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import PageWrapper from "../components/PageWrapper";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      institute: "Greater Noida Institute of Technology",
      duration: "2021 – 2025",
      grade: "Percentage: 68%",
      coursework: ["Data Structures & Algorithms", "Database Management Systems", "Operating Systems", "Computer Networks", "Web Technologies"],
    },
    {
      degree: "Senior Secondary School (PCM)",
      institute: "Bal Vidyalaya Noor Nagar",
      duration: "Graduated: Aug 2021",
      grade: "Percentage: 81.2%",
      coursework: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
    {
      degree: "Secondary School",
      institute: "National Public School",
      duration: "Graduated: May 2019",
      grade: "Percentage: 79%",
      coursework: ["Science", "Mathematics", "Social Studies", "English"],
    },
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
            My <span className="text-sky-400">Education</span>
          </h1>
          <p className="text-slate-400">My academic journey and qualifications.</p>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {educationData.map((edu, index) => (
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
                <GraduationCap size={20} />
              </div>

              {/* Card Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 md:p-8 relative overflow-hidden group hover:border-sky-400/50 transition-all duration-300 shadow-xl shadow-black/20 rounded-[20px]">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-400/20 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col gap-2 mb-4">
                    <span className="text-sky-400 font-bold bg-sky-400/10 px-3 py-1.5 rounded-[12px] text-xs w-max uppercase tracking-wider">
                      {edu.duration}
                    </span>
                    <h3 className="text-2xl font-bold text-white leading-tight">{edu.degree}</h3>
                  </div>
                  
                  <h4 className="text-lg text-slate-300 font-medium mb-2 flex items-center gap-2">
                    {edu.institute}
                  </h4>
                  
                  <p className="text-slate-400 mb-6 font-medium text-sm border-b border-slate-700/50 pb-4">{edu.grade}</p>
                  
                  <div>
                    <p className="text-xs text-slate-500 mb-3 uppercase tracking-widest font-bold">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-medium text-slate-300 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-[12px] hover:border-sky-400/30 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
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

export default Education;
