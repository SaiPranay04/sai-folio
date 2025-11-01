import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectEEG from '@/assets/project-eeg.jpg';
import projectTask from '@/assets/project-taskmanager.jpg';
import projectMarine from '@/assets/project-marine.jpg';

const projects = [
  {
    title: 'EEG Emotion Recognition System',
    description: 'Predict human emotions using EEG signals and deep learning models with advanced neural network architectures.',
    image: projectEEG,
    tags: ['Python', 'TensorFlow', 'Mistral LLM', 'Deep Learning'],
    github: '#',
    demo: '#',
  },
  {
    title: "Let's Do IT - AI Task Manager",
    description: 'An intelligent assistant that plans, tracks, and organizes tasks conversationally using LangGraph and Ollama.',
    image: projectTask,
    tags: ['Next.js', 'LangGraph', 'Ollama', 'AI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'RT Marine Consulting Website',
    description: 'Corporate site for a Dubai-based marine firm with multilingual support and enterprise-grade features.',
    image: projectMarine,
    tags: ['Next.js', 'Tailwind', 'Node.js', 'GoDaddy DNS'],
    github: '#',
    demo: '#',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 animated-grid opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 text-glow">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="glass-card overflow-hidden h-full hover:neon-glow transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                    <a
                      href={project.github}
                      className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 text-primary" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-orbitron text-lg md:text-xl font-semibold mb-3 text-primary">
                    {project.title}
                  </h3>
                  <p className="font-exo text-sm md:text-base text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="font-exo text-xs border-primary/30 text-primary/80 hover:bg-primary/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
