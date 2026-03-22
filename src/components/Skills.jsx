import React from 'react';
import { motion } from 'framer-motion';

// Importing respective icons
import { SiCplusplus, SiJavascript, SiPhp, SiTailwindcss, SiJquery, SiFramer, SiExpress, SiLaravel, SiFastapi, SiFirebase, SiMongodb, SiMysql, SiPostgresql, SiXampp, SiPostman } from 'react-icons/si';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaServer, FaDatabase, FaLock, FaUsers, FaBrain, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import { VscJson, VscCode } from 'react-icons/vsc';
import { TbApi, TbSql } from 'react-icons/tb';
import { BsGithub, BsGit } from 'react-icons/bs';

const defaultAnimations = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "text-yellow-400" },
      { name: "PHP", icon: SiPhp, color: "text-indigo-400" },
      { name: "SQL", icon: TbSql, color: "text-blue-400" },
    ]
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
      { name: "jQuery", icon: SiJquery, color: "text-blue-600" },
      { name: "JSON", icon: VscJson, color: "text-gray-300" },
      { name: "Framer Motion", icon: SiFramer, color: "text-fuchsia-500" },
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", icon: FaReact, color: "text-cyan-400" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "FastAPI", icon: SiFastapi, color: "text-teal-400" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    ]
  },
  {
    title: "Backend & Security",
    skills: [
      { name: "RESTful APIs", icon: TbApi, color: "text-green-400" },
      { name: "CRUD Operations", icon: FaDatabase, color: "text-blue-300" },
      { name: "JWT Authentication", icon: FaShieldAlt, color: "text-pink-500" },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: BsGit, color: "text-orange-600" },
      { name: "GitHub", icon: BsGithub, color: "text-white" },
      { name: "VS Code", icon: VscCode, color: "text-blue-500" },
      { name: "XAMPP", icon: SiXampp, color: "text-orange-500" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={defaultAnimations}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              variants={defaultAnimations}
              className={`glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group ${idx === skillCategories.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent blur-2xl -z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-white/10 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group/skill cursor-default"
                  >
                    <skill.icon className={`text-xl ${skill.color} group-hover/skill:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
