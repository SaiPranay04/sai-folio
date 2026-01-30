import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  {
    title: 'Advanced Learning Algorithms',
    organization: 'DeepLearning.AI (Coursera)',
    year: '2026',
    description: 'Advanced machine learning algorithms and neural networks',
    image: '/deep ng.png',
  },
  {
    title: 'Supervised Machine Learning',
    organization: 'DeepLearning.AI (Coursera)',
    year: '2025',
    description: 'Regression and Classification techniques by Andrew Ng',
    image: '/ml ng.png',
  },
  {
    title: 'AI Agents Using RAG and LangChain',
    organization: 'IBM (Coursera)',
    year: '2025',
    description: 'Fundamentals of AI Agents with RAG and LangChain',
    image: '/Langchain.png',
  },
  {
    title: 'Local LLM Crash Course',
    organization: 'Udemy - Zoltan C. Toth',
    year: '2024',
    description: 'Building AI Chatbots with local LLMs',
    image: '/LLM.png',
  },
  {
    title: 'IT Automation using Python',
    organization: 'Google (Coursera)',
    year: '2024',
    description: 'Python automation and scripting for IT tasks',
    image: '/python.png',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="certifications" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 text-glow">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="glass-card overflow-hidden h-full hover:neon-glow transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-orbitron text-base md:text-lg font-semibold mb-1 text-primary">
                    {cert.title}
                  </h3>
                  <p className="font-exo text-xs text-accent font-medium mb-2">{cert.organization} • {cert.year}</p>
                  <p className="font-exo text-xs md:text-sm text-foreground/70 leading-relaxed">
                    {cert.description}
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

export default Certifications;
