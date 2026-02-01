import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const courses = [
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

const awards = [
  {
    title: 'Cambridge English PET (Preliminary)',
    organization: 'Cambridge Assessment English',
    year: '2015',
    description: 'Cambridge Preliminary English Test - Level A2',
    image: '/PET.png',
  },
  {
    title: 'Cambridge English KET (Key)',
    organization: 'Cambridge Assessment English',
    year: '2014',
    description: 'Cambridge Key English Test - Level A2',
    image: '/KET.png',
  },
  {
    title: 'UIEO - All India Rank 16',
    organization: 'Unified Council',
    year: '2014',
    description: 'Unified International English Olympiad 2014 - All India Rank 16, scored 90% marks with Excellent performance',
    image: '/uieo-2014.jpg',
  },
  {
    title: 'AMTI National Mathematics Talent Contest - Top 10%',
    organization: 'Association of Mathematics Teachers of India',
    year: '2015',
    description: '47th National Mathematics Talent Contest - Top 10% scorer in Primary level screening test',
    image: '/amti-2015.jpg',
  },
  {
    title: 'SIMO Mathematics Olympiad - Outstanding',
    organization: 'SIMO Education',
    year: '2015',
    description: 'All India Level Mathematics (SIMO) Olympiad - Screening Test Performance: Outstanding',
    image: '/simo-2015.jpg',
  },
  {
    title: 'Kalaparichayam - Music & Dance Performance',
    organization: 'AP Cultural Dept - Govt Music College Rajahmundry',
    year: '2009',
    description: 'Cultural arts performance certificate - Vocal, Tabla, Singing, Keyboard, Veena participation in Kalaparichayam event',
    image: '/music-2009.png',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeTab, setActiveTab] = useState<'courses' | 'awards'>('courses');

  const currentCertifications = activeTab === 'courses' ? courses : awards;

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    // Reset scroll position when switching tabs
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
    // Delay to ensure container is rendered
    setTimeout(() => {
      checkScrollButtons();
    }, 100);
  }, [activeTab]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const pageWidth = container.clientWidth; // Width of visible area (one page)
      
      container.scrollBy({
        left: direction === 'right' ? pageWidth : -pageWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="certifications" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 text-glow">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <Button
            onClick={() => setActiveTab('courses')}
            className={`font-orbitron text-base px-8 py-6 transition-all duration-300 ${
              activeTab === 'courses'
                ? 'bg-primary text-primary-foreground neon-glow'
                : 'bg-card/50 text-foreground/70 hover:bg-card hover:text-primary border border-primary/30'
            }`}
          >
            Courses & Certifications
          </Button>
          <Button
            onClick={() => setActiveTab('awards')}
            className={`font-orbitron text-base px-8 py-6 transition-all duration-300 ${
              activeTab === 'awards'
                ? 'bg-primary text-primary-foreground neon-glow'
                : 'bg-card/50 text-foreground/70 hover:bg-card hover:text-primary border border-primary/30'
            }`}
          >
            Competitions & Awards
          </Button>
        </motion.div>

        {/* Scrollable Container with Arrow Buttons */}
        <div className="relative max-w-7xl mx-auto">
          {/* Left Arrow Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 hover:bg-card backdrop-blur-sm border border-primary/20 rounded-full w-12 h-12 shadow-lg neon-glow transition-opacity ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>

          {/* Scrollable Grid Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
          >
            <div className="inline-flex gap-6" style={{ height: '600px' }}>
              {/* Group certifications into pages of 6 (3x2 grid) */}
              {Array.from({ length: Math.ceil(currentCertifications.length / 6) }).map((_, pageIndex) => (
                <div 
                  key={pageIndex} 
                  className="flex-shrink-0 grid grid-cols-3 gap-6 snap-start w-full max-w-7xl px-4"
                  style={{ width: '100%', minWidth: '100%' }}
                >
                  {currentCertifications.slice(pageIndex * 6, pageIndex * 6 + 6).map((cert, index) => {
                    const globalIndex = pageIndex * 6 + index;
                    return (
                      <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: globalIndex * 0.1 }}
                        className="cert-card w-full"
                      >
                        <Card className="glass-card overflow-hidden h-full hover:neon-glow transition-all duration-300 group cursor-pointer">
                          {cert.image ? (
                            <div className="relative overflow-hidden">
                              <img
                                src={cert.image}
                                alt={cert.title}
                                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                            </div>
                          ) : (
                            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center">
                              <div className="text-center p-4">
                                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/30 flex items-center justify-center">
                                  <span className="text-2xl">🎓</span>
                                </div>
                                <p className="font-exo text-xs text-foreground/60">Certificate</p>
                              </div>
                            </div>
                          )}
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
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card/80 hover:bg-card backdrop-blur-sm border border-primary/20 rounded-full w-12 h-12 shadow-lg neon-glow transition-opacity ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
