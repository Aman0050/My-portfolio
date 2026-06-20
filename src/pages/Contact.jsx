import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <PageWrapper>
      <div className="py-12 max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-sky-400">Touch</span>
          </h1>
          <p className="text-slate-400">Let's work together or just say hi!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8 h-full"
          >
            <div className="glass-card p-8 flex-1 rounded-[20px]">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700/50 pb-4">Contact Info</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-slate-900/80 border border-slate-700 p-3 rounded-[16px] text-sky-400 group-hover:bg-sky-500/20 group-hover:text-sky-300 transition-all duration-300 shadow-lg shadow-black/20">
                    <Mail size={24} />
                  </div>
                  <div className="flex flex-col justify-center h-12">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:amannaeem78654@gmail.com" className="text-base font-medium text-slate-300 hover:text-sky-400 transition-colors">
                      amannaeem78654@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-slate-900/80 border border-slate-700 p-3 rounded-[16px] text-sky-400 group-hover:bg-sky-500/20 group-hover:text-sky-300 transition-all duration-300 shadow-lg shadow-black/20">
                    <Phone size={24} />
                  </div>
                  <div className="flex flex-col justify-center h-12">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:+917827392589" className="text-base font-medium text-slate-300 hover:text-sky-400 transition-colors">
                      +91 7827392589
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-slate-900/80 border border-slate-700 p-3 rounded-[16px] text-sky-400 group-hover:bg-sky-500/20 group-hover:text-sky-300 transition-all duration-300 shadow-lg shadow-black/20">
                    <MapPin size={24} />
                  </div>
                  <div className="flex flex-col justify-center h-12">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Location</p>
                    <p className="text-base font-medium text-slate-300">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700/50">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">Connect With Me</p>
                <div className="flex gap-4">
                  <a href="https://github.com/amannaeem" className="bg-slate-900/80 border border-slate-700 p-3 rounded-[16px] text-slate-400 hover:bg-sky-500 hover:text-white hover:border-sky-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/20">
                    <FiGithub size={24} />
                  </a>
                  <a href="https://linkedin.com/in/amannaeem" className="bg-slate-900/80 border border-slate-700 p-3 rounded-[16px] text-slate-400 hover:bg-sky-500 hover:text-white hover:border-sky-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/20">
                    <FiLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card h-64 overflow-hidden relative group p-1 rounded-[20px]">
              <iframe 
                src="https://maps.google.com/maps?q=New%20Delhi,%20India&t=&z=11&ie=UTF8&iwloc=&output=embed" 
                className="w-full h-full rounded-[16px] filter invert-[90%] hue-rotate-180 opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-full"
          >
            <div className="glass-card p-8 h-full rounded-[20px] flex flex-col">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700/50 pb-4">Send a Message</h2>
              
              <form className="space-y-6 flex flex-col flex-1" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold tracking-wide text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-[20px] px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-inner"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold tracking-wide text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-[20px] px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-inner"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div className="space-y-2 flex-1 flex flex-col">
                  <label htmlFor="message" className="text-sm font-bold tracking-wide text-slate-300">Message</label>
                  <textarea 
                    id="message" 
                    className="w-full flex-1 min-h-[200px] bg-slate-900/80 border border-slate-700 rounded-[20px] px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none shadow-inner"
                    placeholder="Hello Aman, I'd like to discuss a project..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-lg py-4 px-6 rounded-[20px] transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transform hover:-translate-y-1 mt-4"
                >
                  <Send size={24} /> Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
