import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import PageWrapper from "../components/PageWrapper";

const Certificates = () => {
  const certificates = [
    {
      title: "HackerRank CSS",
      issuer: "HackerRank",
      date: "2024",
      credentialId: "HR-CSS-12345",
      icon: <Award size={32} className="text-sky-400" />
    },
    {
      title: "HackerRank JavaScript",
      issuer: "HackerRank",
      date: "2024",
      credentialId: "HR-JS-67890",
      icon: <Award size={32} className="text-yellow-400" />
    },
    {
      title: "HackerRank Python",
      issuer: "HackerRank",
      date: "2025",
      credentialId: "HR-PY-11223",
      icon: <Award size={32} className="text-blue-500" />
    },
    {
      title: "7-Day Web Development Bootcamp",
      issuer: "DevTown",
      date: "2023",
      credentialId: "DT-WEB-99887",
      icon: <Award size={32} className="text-purple-500" />
    }
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
            My <span className="text-sky-400">Certificates</span>
          </h1>
          <p className="text-slate-400">Professional certifications and achievements.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 flex flex-col sm:flex-row items-start gap-6 group hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-400/30 transition-all duration-300 h-full rounded-[20px]"
            >
              <div className="bg-slate-900 p-4 rounded-[20px] shadow-inner group-hover:scale-110 transition-transform duration-300 shrink-0">
                {cert.icon}
              </div>
              
              <div className="flex flex-col h-full w-full">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-slate-400 font-medium mb-4">{cert.issuer}</p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-slate-500 mb-6 mt-auto">
                  <span className="font-semibold text-slate-300">Issued: {cert.date}</span>
                  <span className="hidden sm:inline text-slate-600">•</span>
                  <span className="font-mono text-xs bg-slate-800/80 px-3 py-1.5 rounded-[12px] border border-slate-700">ID: {cert.credentialId}</span>
                </div>
                
                <button className="flex items-center gap-2 text-sm text-white bg-slate-800 border border-slate-700 hover:bg-sky-500/20 hover:border-sky-400 hover:text-sky-300 transition-all font-medium px-4 py-2 rounded-[20px] w-max">
                  <CheckCircle size={16} /> Verify Certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Certificates;