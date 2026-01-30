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
    title: 'EEG-Based Emotion Classification (Research)',
    description: 'Comprehensive study of ML, DL, and LLM approaches for classifying valence, arousal, dominance from EEG signals. Achieved 70.5% accuracy with Random Forest. Submitted to Jordan Journal of Electrical Engineering.',
    image: projectEEG,
    tags: ['PyTorch', 'CNN', 'BiLSTM', 'Mistral LLM', 'MNE', 't-SNE'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Keyword-Guided Abstractive Summarization (Research)',
    description: 'Hybrid keyword extraction pipeline with NER, TF-IDF, and KeyBERT. Fine-tuned BART on 11K samples using keyword-augmented prompts, improving relevance and factual alignment.',
    image: projectTask,
    tags: ['BART', 'DeepSeek LLM', 'HuggingFace', 'spaCy', 'ROUGE'],
    github: '#',
    demo: '#',
  },
  {
    title: 'RT Marine Consulting – Corporate Website',
    description: 'Modern corporate website for Dubai-based marine firm with admin panel, role-based auth, Turkish localization, SEO optimization, and Google Analytics integration.',
    image: projectMarine,
    tags: ['Next.js', 'NextAuth', 'MongoDB', 'Vercel', 'SEO'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Protect+AI: ANPR Module',
    description: 'CNN-based character recognition model with Canny edge detection achieving 90%+ accuracy. NodeJS backend with MongoDB for real-time plate verification against registered vehicles.',
    image: projectTask,
    tags: ['TensorFlow', 'OpenCV', 'Node.js', 'MongoDB', 'CNN'],
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

        <div className="grid md:grid-cols-2 gap-8">
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
