import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'AI Intern',
    company: 'NetoAI',
    location: 'Chennai, India',
    period: 'May 2025 – July 2025',
    description: 'Architected dynamic multi-agent orchestration framework using LangGraph and Mistral-7B. Developed CAA, LOA, and ESA workflows. Built Flask backend integrating HubSpot REST API for 100+ marketing properties.',
  },
  {
    title: 'Freelance Web Developer',
    company: 'RT Marine Consulting',
    location: 'Dubai (Remote)',
    period: 'Sept 2025 – Oct 2025',
    description: 'Developed modern corporate website with secure admin panel, NextAuth authentication, Turkish localization, SEO optimization, and Google Analytics integration.',
  },
  {
    title: 'Software Development Intern',
    company: 'PY Headhunters',
    location: 'Bangalore, India',
    period: 'May 2024 – August 2024',
    description: 'Engineered full-stack web application for sustainable footprint management. Integrated React.js frontend with Node.js backend and MongoDB. Collaborated in Agile environment with bi-weekly sprints.',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 animated-grid opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 text-glow">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 neon-glow" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center neon-glow animate-glow-pulse">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card p-6 hover:neon-glow transition-all duration-300">
                  <span className="font-exo text-sm text-accent font-medium">{exp.period}</span>
                  <h3 className="font-orbitron text-xl md:text-2xl font-semibold text-primary mt-2 mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="font-exo text-base md:text-lg text-foreground/80 mb-1">
                    {exp.company}
                  </h4>
                  <p className="font-exo text-sm text-foreground/60 mb-3 italic">{exp.location}</p>
                  <p className="font-exo text-sm md:text-base text-foreground/70 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
