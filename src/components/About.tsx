import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import avatar from '@/assets/avatar.png';

const skills = [
  {
    icon: Brain,
    title: 'AI & NLP Research',
    description: 'Multi-agent LLM frameworks, EEG-based emotion classification, and keyword-guided abstractive summarization.',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'React, Next.js, Node.js, MongoDB expertise with REST APIs and responsive web applications.',
  },
  {
    icon: Trophy,
    title: 'Deep Learning',
    description: 'PyTorch, TensorFlow, CNN, LSTM architectures for computer vision and NLP applications.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 text-glow">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/15 dark:bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
              <img
                src={avatar}
                alt="Sai Pranay Bhamidi"
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-primary/30 neon-glow shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-exo text-base md:text-lg text-foreground/80 leading-relaxed">
              Final-year <span className="text-primary font-semibold">BTech Computer Science</span> student at{' '}
              <span className="text-accent font-semibold">NIT Patna</span> (GPA: 7.93/10.0) with hands-on research 
              and development experience in Artificial Intelligence, NLP, and agentic systems. Currently seeking 
              MS in Artificial Intelligence (Fall 2026).
            </p>
            <p className="font-exo text-base md:text-lg text-foreground/80 leading-relaxed mt-4">
              Worked on multi-agent LLM frameworks, EEG-based emotion classification, and keyword-guided abstractive 
              summarization. Passionate about building intelligent systems that push the boundaries of AI research 
              and real-world applications.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            >
              <Card className="glass-card h-full hover:neon-glow transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-orbitron text-lg md:text-xl font-semibold mb-3 text-center text-primary">
                    {skill.title}
                  </h3>
                  <p className="font-exo text-sm md:text-base text-foreground/70 text-center leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
