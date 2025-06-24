import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Heart, GraduationCap, Gavel, Handshake, Leaf, Building2, IndianRupee, Lightbulb, Scale } from 'lucide-react';

export const MissionSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const impactStats = [
    { number: '1M+', label: 'People impacted annually', icon: Users },
    { number: '270K+', label: 'Women educated on menstrual health', icon: Heart },
    { number: '115K+', label: 'Women provided with vocational skills', icon: GraduationCap },
    { number: '34K+', label: 'Girls in rural areas attending school', icon: Gavel },
    { number: '1.2M+', label: 'Meals served to children', icon: Handshake },
    { number: '100+', label: 'Villages adopted', icon: Building2 },
    { number: '500+', label: 'Cleanliness drives conducted', icon: Leaf },
    { number: '30+', label: 'Solar energy projects implemented', icon: Lightbulb },
    { number: '20K+', label: 'Farmers supported with sustainable practices', icon: Scale },
    { number: '5M+', label: 'Rupees disbursed as micro-loans', icon: IndianRupee },
    { number: '50K+', label: 'Trees planted', icon: Leaf },
    { number: '150+', label: 'Health camps conducted', icon: Heart },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : prev - 1));
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  return (
    <>
      <section className="py-20 bg-secondary-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-6">
                <span className="text-primary-600 dark:text-fuchsia-400">Our Mission</span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The Desai Foundation empowers women and children through community programming designed to elevate health, livelihood, and menstrual equity in rural India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <img
                src="https://www.desaifoundationtrust.org/wp-content/uploads/2025/02/Mission-Circle-1024x964.png"
                alt="Our Mission"
                className="max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Impact - Creating Lasting Change Section (New) */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">OUR IMPACT</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              CREATING LASTING CHANGE
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {/* Slide 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-shrink-0 w-full">
                  {impactStats.slice(0, 6).map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-500 text-center dark:bg-gray-800 dark:border-fuchsia-500 dark:shadow-fuchsia-900/30"
                      >
                        <div className="text-5xl font-bold text-primary-600 dark:text-fuchsia-400 mb-2">
                          {stat.number}
                        </div>
                        <div className="text-primary-500 dark:text-fuchsia-300 mb-4 flex justify-center">
                          {Icon && <Icon size={48} />}
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                          {stat.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Slide 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-shrink-0 w-full">
                  {impactStats.slice(6, 12).map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary-500 text-center dark:bg-gray-800 dark:border-fuchsia-500 dark:shadow-fuchsia-900/30"
                      >
                        <div className="text-5xl font-bold text-primary-600 dark:text-fuchsia-400 mb-2">
                          {stat.number}
                        </div>
                        <div className="text-primary-500 dark:text-fuchsia-300 mb-4 flex justify-center">
                          {Icon && <Icon size={48} />}
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                          {stat.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-10 transform -translate-y-1/2 text-primary-600 dark:text-fuchsia-400 p-2 rounded-full focus:outline-none dark:hover:bg-fuchsia-900/20 transition-colors duration-200"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-10 transform -translate-y-1/2 text-primary-600 dark:text-fuchsia-400 p-2 rounded-full focus:outline-none dark:hover:bg-fuchsia-900/20 transition-colors duration-200"
            >
              <ChevronRight size={48} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8">
            {[0, 1].map((idx) => (
              <button
                key={idx}
                className={`h-3 w-3 rounded-full mx-1 ${idx === currentSlide ? 'bg-primary-600 dark:bg-fuchsia-500' : 'bg-gray-300 hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
                onClick={() => setCurrentSlide(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Awards / Recognition Section (Indian CSR) (New) */}
      <section className="py-12 bg-white dark:bg-gray-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary-50 p-8 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8 dark:bg-gray-800 dark:shadow-xl dark:shadow-fuchsia-900/30"
          >
            <div className="text-center md:text-left">
              <h3 className="font-bold text-sm uppercase text-primary-600 dark:text-fuchsia-400 mb-2">Recent Awards</h3>
              <p className="text-xl font-semibold text-secondary-800 dark:text-gray-200">
                Awarded one of the 'Top 20 Most Trusted NGO's' by The Indian CSR Awards.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://www.desaifoundationtrust.org/wp-content/uploads/2025/02/indian-csr-awards-logo.png"
                alt="Indian CSR Awards"
                className="h-20 dark:brightness-75 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};