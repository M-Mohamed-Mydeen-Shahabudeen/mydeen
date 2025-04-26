import React, { useEffect, useRef } from 'react';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            
            const skillElements = entry.target.querySelectorAll('.skill-item');
            skillElements.forEach((element, index) => {
              setTimeout(() => {
                (element as HTMLElement).style.transform = 'translateY(0)';
                (element as HTMLElement).style.opacity = '1';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Technical <span className="text-emerald-600 dark:text-emerald-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-600 dark:bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I've acquired a diverse range of technical skills throughout my academic journey and personal projects.
          </p>
        </div>

        <div 
          ref={skillsRef}
          className="opacity-0 transition-opacity duration-1000"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="skill-item bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform opacity-0 translate-y-8"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-4">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    {skill.name}
                  </h3>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                    <div
                      className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{skill.level}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
              Additional Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Git & Version Control",
                "UI/UX Design",
                "RESTful APIs",
                "Testing & Debugging",
                "Problem Solving",
                "DevOps Basics"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-slate-700 px-4 py-3 rounded-lg text-center text-slate-700 dark:text-slate-200 text-sm font-medium transform hover:-translate-y-1 transition-transform duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;