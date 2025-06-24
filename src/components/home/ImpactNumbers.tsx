import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Headset, Droplet, Baby, HeartPulse, GraduationCap, Home as HomeIcon } from 'lucide-react';

interface ImpactStat {
  number: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

const impactStats: ImpactStat[][] = [
  [
    { number: '10 MILLION+', label: 'People Have Been Directly Impacted By Our Programs', icon: Users },
    { number: '3,400+', label: 'Rural Communities Reached', icon: HomeIcon },
    { number: '2.7 MILLION+', label: 'Reached From Help Desk', icon: Headset },
    { number: '10 MILLION+', label: 'Sanitary Napkins Produced', icon: Droplet },
    { number: '75,000+', label: 'Children Have Attended Our Health Camps', icon: Baby },
    { number: '333,000+', label: 'Children Reached With Primary Health & Hygiene', icon: HeartPulse }
  ],
  [
    { number: '121,075+', label: 'Women\'s Health & Hygiene Programs', icon: Users },
    { number: '16,400+', label: 'Vocational Training Graduates', icon: GraduationCap },
    { number: '34,000+', label: 'Computer Literate Women', icon: Headset },
    { number: '10,700+', label: 'Sanitary Napkin Production', icon: Droplet },
    { number: '23,400+', label: 'Youth in Mentorship Programs', icon: Baby },
    { number: '11,000+', label: 'Children in Education Programs', icon: HeartPulse }
  ]
];

export const ImpactNumbers: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide(prev => (prev === 0 ? 1 : 0));
  const prevSlide = () => setCurrentSlide(prev => (prev === 1 ? 0 : 0));

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-[-50px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-100/80 via-primary-50/50 to-transparent blur-3xl rounded-full -z-10 dark:from-fuchsia-900/60 dark:via-fuchsia-950/40 dark:to-transparent"></div>
            <img src="/public/impact_numbers.png" alt="We've Impacted 10,000,000 Lives" className="w-full max-w-sm" />
          </motion.div>

          <motion.div 
            className="w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative shadow-2xl rounded-xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/JiGzZkab6JA"
                title="Hillary Clinton on The Desai Foundation's Heroes for Humanity"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};