import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText } from 'lucide-react';

const certificatesData = [
  {
    title: "Master Generative AI & Generative AI tools",
    href: "/Master Generative AI & Generative AI tools (ChatGPT & more).pdf",
    source: "Certification"
  },
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    href: "/Build Generative AI Apps and Solutions with No-Code Tools.pdf",
    source: "Certification"
  },
  {
    title: "ChhatGPT-4 Prompt Engineering",
    href: "/ChhatGPT-4 Prompt Engineering.pdf",
    source: "Certification"
  },
  {
    title: "DSA (Data Structures & Algorithms)",
    href: "/DSA.pdf",
    source: "Academic / Training"
  },
  {
    title: "Computational Theory",
    href: "/Computational Theory.pdf",
    source: "Academic / Training"
  },
  {
    title: "Introduction to hardware and Operating systems",
    href: "/Introduction to hardware and Operating systems.pdf",
    source: "Academic / Training"
  },
  {
    title: "OOPS (Object Oriented Programming)",
    href: "/OOPS.pdf",
    source: "Academic / Training"
  },
  {
    title: "UDEMYUAT",
    href: "/UDEMYUAT.pdf",
    source: "Udemy Course"
  },
  {
    title: "System Documentation",
    href: "/Documentation357.pdf",
    source: "Project / Training"
  }
];

const Training = () => {
  return (
    <section id="training" className="py-24 relative overflow-hidden bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Training & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            A comprehensive track record of my continuous learning and technical certifications. Click any card to view the official document.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative max-w-6xl mx-auto">
          {certificatesData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full glass p-6 rounded-2xl hover:-translate-y-2 group relative overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
                
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                    <FileText size={24} />
                  </div>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Award size={14} />
                    <span>{item.source}</span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Training;
