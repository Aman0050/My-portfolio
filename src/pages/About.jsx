import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

const About = () => {
  return (
    <PageWrapper>
      <div className="py-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-sky-400">Me</span>
          </h1>
          <p className="text-slate-400">Professional Summary & Background</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 md:p-12 space-y-6 text-slate-300 leading-relaxed text-lg"
        >
          <p>
            I am a <strong className="text-white font-semibold">B.Tech Computer Science graduate</strong> from Greater Noida Institute of Technology with a strong foundation in software engineering and web technologies.
          </p>
          <p>
            Currently, I am working as a <strong className="text-white font-semibold">GIS Analyst</strong> at Falcon Info Solutions, where I develop and maintain the company's official website using React.js and work on various GIS and telecom projects. Prior to this, I gained valuable experience as an <strong className="text-white font-semibold">Associate Trainer Intern</strong> at Face Prep, mentoring students and conducting training sessions.
          </p>
          <p>
            I have a deep passion for <strong className="text-sky-400 font-semibold">Full Stack Development</strong>. My expertise lies in building dynamic, responsive, and user-centric web applications using modern frameworks like React and Vite, combined with robust backend technologies.
          </p>
          <p>
            Equipped with strong problem-solving skills, I thrive in environments that challenge me to think critically and learn continuously. Whether it's debugging complex issues, designing scalable architectures, or exploring the intersection of web development and Geographic Information Systems, I am always eager to turn ideas into impactful technological solutions.
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default About;