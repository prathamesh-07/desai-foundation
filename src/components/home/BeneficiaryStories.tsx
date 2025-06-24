import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';

interface Story {
  image: string;
  name: string;
  age: number;
  location: string;
  quote: string;
}

const stories: Story[] = [
  {
    image: 'https://www.desaifoundationtrust.org/wp-content/uploads/2025/02/Geetaben-Patel-1.png',
    name: 'Sohani Jat',
    age: 20,
    location: 'Nohata village, Rajasthan',
    quote: 'I\'m Sohani Jat, 20, from Nohata village, Rajasthan. My family relies on farming, and my parents are illiterate...',
  },
  {
    image: 'https://www.desaifoundationtrust.org/wp-content/uploads/2025/02/IMG_0264-scaled-1-820x1024.jpg',
    name: 'Pooja Sharma',
    age: 25,
    location: 'Rural Gujarat',
    quote: 'The vocational training in tailoring provided by The Desai Foundation transformed my life...',
  },
  {
    image: 'https://www.desaifoundationtrust.org/wp-content/uploads/2025/02/IMG_0264-scaled-1-820x1024.jpg',
    name: 'Rajeshwari Devi',
    age: 30,
    location: 'Remote Village, MP',
    quote: 'Access to primary healthcare through Desai Foundation\'s camps has been a blessing...',
  },
];

export const BeneficiaryStories: React.FC = () => {
  const [currentStorySlide, setCurrentStorySlide] = useState(0);

  const nextStory = () => {
    setCurrentStorySlide((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const prevStory = () => {
    setCurrentStorySlide((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-500">
      <div className="w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Beneficiary Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            STORIES FROM THE GROUND
          </p>
        </motion.div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl shadow-2xl bg-primary-900 py-6 px-8 md:py-8 md:px-12 lg:py-10 lg:px-16 dark:bg-fuchsia-950 dark:shadow-fuchsia-900/50">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentStorySlide * 100}%)` }}
            >
              {stories.map((story, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full min-w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-center text-white text-left px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 flex justify-center lg:justify-start"
                  >
                    <img
                      src={story.image}
                      alt={story.name}
                      className="rounded-full w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover border-4 border-white shadow-lg dark:brightness-75 transition-all duration-500"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center relative flex-grow max-w-2xl"
                  >
                    <Quote size={80} className="absolute -top-8 -left-4 text-primary-600 opacity-20 dark:text-fuchsia-400 dark:opacity-30" />
                    <p className="text-lg md:text-xl italic mb-4 relative z-10 leading-relaxed">
                      "{story.quote}"
                    </p>
                    <div className="font-bold text-xl md:text-2xl mb-2">
                      - {story.name}
                    </div>
                    <p className="text-gray-300 text-base mb-6">
                      Beneficiary, {story.location}
                    </p>
                    <Link
                      to="/beneficiary-stories"
                      className="inline-flex items-center text-white font-semibold hover:underline hover:text-gray-200 transition-colors text-base dark:text-fuchsia-300 dark:hover:text-fuchsia-100"
                    >
                      Read More Stories <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevStory}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-primary-600 p-3 rounded-full focus:outline-none z-10 shadow-lg bg-white hover:bg-gray-50 transition-colors dark:text-fuchsia-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-fuchsia-900/30"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextStory}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary-600 p-3 rounded-full focus:outline-none z-10 shadow-lg bg-white hover:bg-gray-50 transition-colors dark:text-fuchsia-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-fuchsia-900/30"
          >
            <ChevronRight size={32} />
          </button>

          <div className="flex justify-center mt-8">
            {stories.map((_, idx) => (
              <button
                key={idx}
                className={`h-3 w-3 rounded-full mx-2 transition-colors ${
                  idx === currentStorySlide ? 'bg-primary-600 dark:bg-fuchsia-500' : 'bg-gray-400 hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600'
                }`}
                onClick={() => setCurrentStorySlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};