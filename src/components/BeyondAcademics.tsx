import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Music, Palette, BookOpen, Trophy, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const clubs = [
  {
    role: 'Design Coordinator',
    organization: 'Science and Environmental Club, NITP',
    period: '2023 - Present',
    description: 'Led design team for campus events, guiding team members to create impactful visual content and posters.',
    icon: Palette,
  },
  {
    role: 'Design Lead',
    organization: 'Robotics Club, NITP',
    period: '2024',
    description: 'Managed design team to create promotional materials for technical events organized by the club.',
    icon: Users,
  },
  {
    role: 'Treasurer',
    organization: 'Saptak - Music Club, NITP',
    period: '2024',
    description: 'Managed financial operations, budget planning, and fund allocation for club events and equipment acquisition.',
    icon: Music,
  },
];

const talents = [
  {
    title: 'Music & Performance',
    skills: ['Singing', 'Piano'],
    events: [
      { name: 'Taraang - Multi Cultural Fest', role: 'Organizer', date: 'December 2025' },
    ],
    icon: Music,
    color: 'text-accent',
  },
  {
    title: 'Graphic Design',
    skills: ['Visual Design', 'Poster Creation'],
    events: [
      { name: 'Treasure Hunt Event', role: 'Designer', date: 'October 2023', organization: 'Desco Design Club' },
    ],
    icon: Palette,
    color: 'text-primary',
  },
  {
    title: 'Sports & Recreation',
    skills: ['Badminton'],
    events: [],
    icon: Trophy,
    color: 'text-accent',
  },
  {
    title: 'Reading & Learning',
    skills: ['Book Reading'],
    events: [],
    icon: BookOpen,
    color: 'text-primary',
  },
];

const BeyondAcademics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="beyond-academics" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 animated-grid opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4 text-glow">
            Beyond <span className="gradient-text">Academics</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto neon-glow" />
        </motion.div>

        {/* Clubs Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="font-orbitron text-2xl md:text-3xl font-semibold text-primary">
              Clubs & Leadership
            </h3>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {clubs.map((club, index) => {
              const Icon = club.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={club.role}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6`}
                >
                  {/* Icon/Visual Element */}
                  <div className={`flex-shrink-0 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="w-24 h-24 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center border-2 border-primary/30 neon-glow">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:order-2 md:text-left' : 'md:order-1 md:text-right'}`}>
                    <Card className="glass-card p-6 hover:neon-glow transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                          <h4 className="font-orbitron text-lg md:text-xl font-semibold text-primary">
                            {club.role}
                          </h4>
                          <Badge variant="outline" className="font-exo text-xs border-accent/30 text-accent w-fit">
                            {club.period}
                          </Badge>
                        </div>
                        <p className="font-exo text-sm text-foreground/70 mb-2 italic">
                          {club.organization}
                        </p>
                        <p className="font-exo text-sm md:text-base text-foreground/80 leading-relaxed">
                          {club.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Talent/Skills Subsection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Music className="w-6 h-6 text-accent" />
            <h3 className="font-orbitron text-2xl md:text-3xl font-semibold text-accent">
              Talents & Skills
            </h3>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {talents.map((talent, index) => {
              const Icon = talent.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={talent.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6`}
                >
                  {/* Icon/Visual Element */}
                  <div className={`flex-shrink-0 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <div className={`w-24 h-24 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center border-2 border-accent/30 neon-glow-accent`}>
                      <Icon className={`w-12 h-12 ${talent.color}`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:order-2 md:text-left' : 'md:order-1 md:text-right'}`}>
                    <Card className="glass-card p-6 hover:neon-glow-accent transition-all duration-300">
                      <CardContent className="p-0">
                        <h4 className={`font-orbitron text-lg md:text-xl font-semibold mb-4 ${talent.color}`}>
                          {talent.title}
                        </h4>
                        
                        {/* Skills */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2 mb-2">
                            {talent.skills.map((skill) => (
                              <Badge 
                                key={skill}
                                variant="outline" 
                                className={`font-exo text-xs border-primary/30 text-primary/80 hover:bg-primary/10 ${isEven ? '' : 'md:ml-auto md:mr-0'}`}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Events */}
                        {talent.events.length > 0 && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="w-4 h-4 text-accent" />
                              <span className="font-exo text-xs font-semibold text-accent">Events</span>
                            </div>
                            {talent.events.map((event, eventIndex) => (
                              <div 
                                key={eventIndex}
                                className={`font-exo text-sm text-foreground/70 ${isEven ? 'text-left' : 'md:text-right'}`}
                              >
                                <span className="font-semibold text-foreground/90">{event.name}</span>
                                {' • '}
                                <span className="text-accent">{event.role}</span>
                                {event.organization && (
                                  <>
                                    {' • '}
                                    <span className="text-foreground/60 italic">{event.organization}</span>
                                  </>
                                )}
                                {event.date && (
                                  <>
                                    {' • '}
                                    <span className="text-foreground/60">{event.date}</span>
                                  </>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeyondAcademics;
