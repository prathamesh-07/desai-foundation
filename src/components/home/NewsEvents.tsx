import React from 'react';
import { motion } from 'framer-motion';

export const NewsEvents: React.FC = () => {
  return (
    <>
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* News Section */}
          <div className="mb-16">
            <h2 className="text-pink-500 dark:text-fuchsia-400 text-lg font-bold mb-2">News</h2>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">LATEST NEWS AND UPDATES</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main News Item */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden dark:shadow-fuchsia-900/30">
                <img
                  src="https://msmagazine.com/wp-content/uploads/2025/05/GettyImages-1090778782.jpg"
                  alt="Protest with period signs"
                  className="w-full h-64 object-cover dark:brightness-75 transition-all duration-500"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    OUR PERIODS ARE NOT YOUR POPULATION SOLUTION
                  </h4>
                  <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700">
                    VIEW ALL NEWS
                  </button>
                </div>
              </div>

              {/* Side News Items */}
              <div className="space-y-6">
                {[
                  {
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBDoXK3dB8EKk6af5GsMbee9V-pZDntu3hA&s",
                    title: "Making Strides – 2024",
                    link: "#"
                  },
                  {
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7SgtaMYXyS6rUZGfMMvhviwkTIJPMmefbdg&s",
                    title: "The Desai Foundation Reaches The Milestone Of Impacting Over 10 Million Lives In Rural India",
                    link: "#"
                  },
                  {
                    title: "The Transformative Influence Of Indian-Americans In The US",
                    link: "#"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm dark:bg-gray-800 dark:shadow-fuchsia-900/15">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0 dark:brightness-75 transition-all duration-500"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-white border rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-gray-700 dark:border-gray-600">
                        <span className="text-black dark:text-gray-200 font-bold text-xs">siliconindia</span>
                      </div>
                    )}
                    <div>
                      <h5 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h5>
                      <a href={item.link} className="text-pink-500 dark:text-fuchsia-400 text-sm font-semibold hover:underline">
                        LEARN MORE
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Events Section */}
          <div>
            <h2 className="text-pink-500 dark:text-fuchsia-400 text-lg font-bold mb-2">Events</h2>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">UPCOMING EVENTS</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-fuchsia-900/30">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Here's all the exciting things you can expect this year!
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  From the vibrant lights of Diwali on the Hudson in NYC to the cultural richness of the 
                  Lotus Festival in Boston, and the global charm of Cocktails and Chat, our events 
                  promise unforgettable moments.
                </p>
                <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition-colors dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700">
                  VIEW ALL EVENTS
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Diwali",
                    subtitle: "ON THE HUDSON",
                    description: "DIWALI ON THE HUDSON 2025",
                    bgColor: "bg-blue-900"
                  },
                  {
                    title: "LOTUS FESTIVAL",
                    subtitle: "CELEBRATING 25 YEARS OF SERVICE",
                    description: "LOTUS FESTIVAL 2025",
                    bgColor: "bg-gradient-to-r from-purple-400 to-pink-400"
                  }
                ].map((event, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden dark:shadow-fuchsia-900/30">
                    <div className={`${event.bgColor} text-white p-4 text-center`}>
                      <h5 className="text-lg font-bold">{event.title}</h5>
                      <p className="text-sm">{event.subtitle}</p>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 dark:text-gray-300 font-semibold mb-3">{event.description}</p>
                      <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-600 transition-colors dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up for Newsletter Section (New) */}
      <section className="py-20 bg-primary-700 text-white dark:bg-fuchsia-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Sign Up for Newsletter</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">JOIN THE COMMUNITY</p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-4 rounded-full bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white dark:bg-white/10 dark:placeholder-gray-400 dark:focus:ring-fuchsia-400"
              />
              <button
                type="submit"
                className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors dark:bg-fuchsia-600 dark:text-white dark:hover:bg-fuchsia-700"
              >
                SEND
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Instagram Section (New) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Instagram</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">FOLLOW THE DESAI FOUNDATION</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Stay connected with us on social media. We share inspiring stories from the field, real-time program insights, and more about our work. Follow us for daily updates!
            </p>
            <button className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700">
              FOLLOW
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {[...Array(9)].map((_, i) => (
              <img
                key={i}
                src={`https://www.desaifoundationtrust.org/wp-content/uploads/wp-social-ninja/instagram/desaifoundation/18057470543214908_full.jpg`}
                alt={`Instagram Post ${i + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md dark:brightness-75 transition-all duration-500"
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};