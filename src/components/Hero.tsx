import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-20 dark:opacity-30"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 animated-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/90 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow">
            Hi, I'm{' '}
            <span className="gradient-text">Sai Pranay Bhamidi</span>{' '}
            <span className="inline-block animate-float">⚡</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-exo text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10"
          >
            Building intelligent systems and futuristic web experiences powered by{' '}
            <span className="text-primary font-semibold">AI & Deep Learning</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="projects" smooth={true} duration={800} offset={-80}>
              <Button 
                size="lg" 
                className="font-exo text-base px-8 py-6 neon-glow hover:neon-glow-intense transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                View My Work
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={800} offset={-80}>
              <Button 
                size="lg" 
                variant="outline"
                className="font-exo text-base px-8 py-6 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <Link to="about" smooth={true} duration={800} offset={-80}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer text-primary/60 hover:text-primary transition-colors"
            >
              <ChevronDown size={32} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
