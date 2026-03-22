import React from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Database, Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-300 text-lg leading-relaxed relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 blur-2xl -z-10 rounded-full"></div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-6">
              <div className="relative shrink-0 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur group-hover:blur-md transition-all duration-300"></div>
                <img 
                  src="/PalakMishra.jpeg" 
                  alt="Palak Mishra" 
                  className="w-48 h-48 sm:w-40 sm:h-40 object-cover rounded-full relative z-10 border-2 border-white/20"
                />
              </div>
              <div>
                <p className="mb-4">
                  Hello! I'm <span className="text-white font-bold">Palak Mishra</span>, a dedicated Full Stack Developer with a passion for building scalable, high-performance web applications. I thrive at the intersection of design and engineering, crafting seamless digital experiences from the ground up.
                </p>
                <p>
                  My journey in software development has equipped me with a deep understanding of modern web technologies. Whether executing complex backend logic or refining pixel-perfect frontend interfaces, I bring a robust, problem-solving mindset to every project.
                </p>
              </div>
            </div>
            
            <div className="pt-2">
              <a 
                href="/PalakMishraCV2026.pdf" 
                download="PalakMishraCV2026.pdf"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-transparent border border-primary/50 rounded-lg hover:bg-primary/10 overflow-hidden"
              >
                {/* Sweeping shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                
                <span className="relative flex items-center gap-2">
                  <Download className="group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                  Download Resume
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {[
              { icon: Layout, title: "Frontend", desc: "React, Tailwind, Framer Motion" },
              { icon: Terminal, title: "Backend", desc: "Node.js, Express, REST APIs" },
              { icon: Database, title: "Database", desc: "MongoDB, PostgreSQL, Prisma" },
              { icon: Terminal, title: "DevOps", desc: "Git, Docker, CI/CD, AWS" }
            ].map((skill, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 group">
                <skill.icon className="text-primary mb-4 group-hover:animate-glow" size={32} />
                <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
