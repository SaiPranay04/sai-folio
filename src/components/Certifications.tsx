import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import certNPTEL from '@/assets/cert-nptel.jpg';
import certAWS from '@/assets/cert-aws.jpg';
import certIEEE from '@/assets/cert-ieee.jpg';
import certSIH from '@/assets/cert-sih.jpg';

const certifications = [
  {
    title: 'NPTEL Deep Learning',
    description: 'Deep Learning Algorithms certification from NPTEL',
    image: certNPTEL,
  },
  {
    title: 'AWS ML Scholar 2025',
    description: 'AWS Machine Learning Scholarship Program',
    image: certAWS,
  },
  {
    title: 'IEEE Paper Presentation',
    description: 'Quantum Security Model research paper',
    image: certIEEE,
  },
  {
    title: 'Smart India Hackathon',
    description: 'Finalist in Smart India Hackathon 2024',
    image: certSIH,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <h3 className="font-orbitron text-base md:text-lg font-semibold mb-2 text-primary">
                    {cert.title}
                  </h3>
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
