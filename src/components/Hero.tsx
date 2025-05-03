import React, { useEffect, useRef } from 'react';

import profileImage from '../assets/images/md.jpg';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div ref={textRef} className="lg:w-1/2 opacity-0 transition-opacity duration-1000">
            <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">Hello, I'm a</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white mb-4">
              mohamed mydeen {' '}
              <span className="text-emerald-600 dark:text-emerald-400">Developer</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 max-w-lg">
              Passionate about developing innovative solutions and learning new technologies.
              Currently focused on web development,Problems Solving, and software engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-lg hover:bg-emerald-700 transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white rounded-lg shadow-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl animate-fadeIn">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-5"></div>
              <img
                src={profileImage}
                alt="Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
