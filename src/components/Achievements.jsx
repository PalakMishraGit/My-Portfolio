import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Technology - CSE",
    institution: "Lovely Professional University, Phagwara, Punjab",
    score: "CGPA: 7.59",
    date: "Since August 2023",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: School,
    degree: "Intermediate (12th Grade)",
    institution: "Kendriya Vidyalaya No.1 AFS Adampur, Punjab",
    score: "Percentage: 74.6%",
    date: "April 2022 – March 2023",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: BookOpen,
    degree: "Matriculation (10th Grade)",
    institution: "Kendriya Vidyalaya No.1 AFS Adampur, Punjab",
    score: "Percentage: 88.8%",
    date: "April 2020 – March 2020",
    color: "from-green-400 to-emerald-500"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative overflow-hidden group hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 border border-white/5 hover:border-white/20 flex flex-col items-center text-center"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-[50px] opacity-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <div className={`p-4 rounded-full bg-gradient-to-br ${item.color} bg-opacity-10 backdrop-blur-sm mb-6 inline-block`}>
                <item.icon size={36} className="text-white drop-shadow-lg" />
              </div>
              
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
                <div className="text-gray-400 text-sm mb-4 leading-relaxed">{item.institution}</div>
              </div>
              
              <div className="w-full pt-4 border-t border-white/10 mt-auto relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold">{item.score}</span>
                  <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
