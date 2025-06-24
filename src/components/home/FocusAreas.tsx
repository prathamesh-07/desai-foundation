import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FocusAreas: React.FC = () => {
  const focusAreas = [
    {
      image: 'https://jgu.edu.in/blog/wp-content/uploads/2023/12/shutterstock_1456161239.jpg',
      title: 'HEALTH',
      link: '/health'
    },
    {
      image: 'https://livelihoods.eu/wp-content/uploads/2020/09/empower.jpg',
      title: 'LIVELIHOOD',
      link: '/livelihood'
    },
    {
      image: 'https://ignitenational.org/hubfs/Blog%20covers%20part%202%20%2843%29.png',
      title: 'MENSTRUAL EQUITY',
      link: '/menstrual-equity'
    },
    {
      image: 'https://image.cnbcfm.com/api/v1/image/103522845-GettyImages-456055617.jpg?v=1532564147',
      title: 'WOMEN & CHILDREN',
      link: '/women-children'
    },
  ];

  return (
    <>
      <section className="py-20 bg-secondary-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Focus</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              BUILDING RESILIENT COMMUNITIES AND CULTIVATING DIGNITY
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
            {focusAreas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative shadow-lg group overflow-hidden h-96"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 dark:brightness-75"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white dark:from-black/90 dark:to-transparent">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <Link to={item.link} className="text-white hover:text-gray-300 flex items-center mt-4">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Pledge Section (New) */}
      <section className="py-20 bg-gradient-to-br from-primary-100 to-primary-200 text-primary-900 dark:from-fuchsia-900 dark:to-fuchsia-950 dark:text-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-4xl font-bold mb-8">OUR PLEDGE</h2>
            <p className="text-xl font-bold opacity-70 max-w-3xl mx-auto">
              Every dollar raised goes directly to programs that change lives for women and girls in rural India. Our staff and infrastructure are supported by the founding endowment from the Desai Family and its Board Members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsor a Hero Section (New) */}
      <section className="py-20 section-padding bg-secondary-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <img
                src="https://www.desaifoundationtrust.org/wp-content/uploads/2025/06/supporting-health-livelihood-and-menstrual-equity-programs-1024x804.jpg"
                alt="Sponsor a Hero"
                className="max-w-md mx-auto dark:brightness-75 transition-all duration-500"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-6">
                <span className="text-primary-600 dark:text-fuchsia-400">Sponsor a Hero</span>
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Empower one of our community heroes for an entire year. Your sponsorship provides them with
                necessary on-the-job training, a stipend for their work, and a bicycle for transportation to
                ensure they are successful in their work.
              </p>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">OUR PERIODS ARE NOT YOUR POPULATION SOLUTION</h3>
                <Link to="#" className="btn-secondary mt-4 inline-block dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700">
                  Sponsor a Girl
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};