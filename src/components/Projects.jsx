import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, ExternalLink } from 'lucide-react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { TbApi, TbDeviceAnalytics } from 'react-icons/tb';

const projects = [
  {
    title: "Blog Management System",
    description: "A comprehensive full-stack blog platform engineered with role-based access control (Admin, Contributor, Reader). Features seamless blog creation, rich text editing, interactive comment management, and robust content moderation. Built for scale and lightning-fast performance.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    tags: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "REST APIs", icon: TbApi, color: "text-green-400" }
    ],
    github: "https://github.com/PalakMishraGit/Blog_System"
  },
  {
    title: "Smart IoT Crop Monitoring",
    description: "An advanced IoT-integrated agricultural platform utilizing precision IR-Sensors. Delivers a sophisticated user authentication workflow with secure password recovery, culminating in a crystal-clear, real-time dashboard for proactive crop health visibility and management.",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1200",
    tags: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
      { name: "IoT Devices", icon: TbDeviceAnalytics, color: "text-primary" }
    ],
    github: "https://github.com/PalakMishraGit/Smart-IoT-Crop-Monitoring"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Works</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)]"></div>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 relative`}>

                {/* Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="w-full lg:w-1/2 relative group perspective-1000"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass transform transition-transform duration-700 group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] md:h-[400px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                  </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  <span className="text-primary font-mono text-sm tracking-widest uppercase mb-4 block">Project 0{index + 1}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{project.title}</h3>

                  <div className="glass p-6 md:p-8 rounded-xl border border-white/5 shadow-xl mb-8 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-xl"></div>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-10">
                    {project.tags.map((tag, tIdx) => (
                      <div
                        key={tIdx}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-colors group/tag"
                      >
                        <tag.icon className={`text-lg ${tag.color} group-hover/tag:scale-110 transition-transform`} />
                        <span className="text-sm font-medium text-gray-200">{tag.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-white text-black font-bold uppercase tracking-wider rounded-lg hover:bg-primary transition-colors focus:ring-4 focus:ring-primary/50"
                    >
                      <Github size={20} />
                      Source Code
                    </a>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 text-center"
        >
          <a href="https://github.com/PalakMishraGit" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl glass border border-primary/30 text-white hover:border-primary hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300">
            <Code2 size={24} className="text-primary group-hover:animate-pulse" />
            <span className="font-bold tracking-wide">Explore More on GitHub</span>
            <ExternalLink size={20} className="text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
