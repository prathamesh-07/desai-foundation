import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const GetInvolved: React.FC = () => {
  const [activeTab, setActiveTab] = useState('donate');

  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get Involved</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            HOW TO SUPPORT
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 flex-wrap">
          {['donate', 'sponsor', 'host', 'corporate', 'volunteer'].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 border border-gray-300 rounded-md mx-2 mb-2 ${
                activeTab === tab 
                  ? 'bg-primary-600 text-white dark:bg-fuchsia-600 dark:border-fuchsia-600' 
                  : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 hover:dark:bg-gray-700'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase().replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {activeTab === 'donate' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-lg p-8 dark:bg-gray-800 dark:shadow-fuchsia-900/30">
              <div className="flex justify-center">
                <img
                  src="https://www.desaifoundationtrust.org/wp-content/uploads/2025/03/Women-smiling-in-group-1024x681.jpg"
                  alt="Donate"
                  className="rounded-full w-80 h-80 object-cover shadow-md dark:brightness-75 transition-all duration-500"
                />
              </div>
              <div className="text-left">
                <h3 className="text-primary-600 dark:text-fuchsia-400 font-bold text-xl mb-4">Empower Change: Donate Today!</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mb-6">DONATE TO THE DESAI FOUNDATION</p>
                <ul className="text-gray-700 dark:text-gray-300 space-y-4">
                  <li><span className="font-bold">Transform Lives:</span> Empower health, education, and livelihood programs.</li>
                  <li><span className="font-bold">Support Menstrual Equity:</span> Ensure dignity for women and girls.</li>
                  <li><span className="font-bold">Healthcare Heroes:</span> Give for accessible healthcare in underserved areas.</li>
                  <li><span className="font-bold">Empower Women: Give Monthly!:</span> Champion gender equality through your support every month.</li>
                </ul>
                <Link
                  to="/donate"
                  className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors dark:bg-gray-700 dark:text-fuchsia-300 dark:hover:bg-gray-600"
                >
                  Donate Now <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          )}
          {/* Other tabs content would go here */}
        </div>
      </div>
    </section>
  );
};