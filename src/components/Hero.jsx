import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const titleContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const titleItem = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/80 to-background z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm"
          >
            <span className="text-primary font-medium tracking-wider text-sm">WELCOME TO MY DIGITAL UNIVERSE</span>
          </motion.div>

          <motion.h1 
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2"
          >
            <motion.span variants={titleItem} className="inline-block">Hi,</motion.span>
            <motion.span variants={titleItem} className="inline-block">I'm</motion.span>
            <br className="md:hidden" />
            <motion.span 
              variants={titleItem}
              className="inline-block text-transparent bg-clip-text bg-[length:200%_auto] bg-gradient-to-r from-primary via-accent to-primary animate-[gradient_4s_linear_infinite]"
            >
              Palak Mishra
            </motion.span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-2xl md:text-4xl text-gray-400 font-light mb-10 max-w-3xl"
          >
            A passionate <span className="text-white font-semibold">Full Stack Developer</span> crafting digital experiences that are out of this world.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="#projects" className="group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest overflow-hidden rounded-md transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" size={20} />
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-in-out z-0"></div>
            </a>

            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com/PalakMishraGit", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/palakmishra2005", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/palakmishra2005", label: "Twitter" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
