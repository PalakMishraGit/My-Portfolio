import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-background min-h-screen text-white font-sans overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Achievements />
        <Contact />
      </main>
      
      {/* Simple Footer directly within App.jsx */}
      <footer className="py-8 text-center border-t border-white/10 mt-10">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Palak Mishra. All rights reserved. Built with React & Tailwind.
        </p>
      </footer>
    </div>
  );
}

export default App;
