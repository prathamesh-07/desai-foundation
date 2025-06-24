import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Briefcase, 
  Droplets, 
  Leaf, 
  Filter,
  MapPin,
  Calendar,
  Quote,
  Play,
  ArrowRight
} from 'lucide-react';

const BeneficiaryStories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedState, setSelectedState] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stories', icon: Heart },
    { id: 'health', name: 'Health', icon: Heart },
    { id: 'livelihood', name: 'Livelihood', icon: Briefcase },
    { id: 'menstrual-equity', name: 'Menstrual Equity', icon: Droplets },
    { id: 'climate-action', name: 'Climate Action', icon: Leaf }
  ];

  const states = [
    'all', 'Bihar', 'Gujarat', 'Maharashtra', 'Rajasthan', 'Uttar Pradesh', 
    'West Bengal', 'Karnataka', 'Tamil Nadu', 'Odisha'
  ];

  const stories = [
    {
      id: 1,
      name: 'Sunita Devi',
      age: 32,
      location: 'Patna, Bihar',
      state: 'Bihar',
      category: 'health',
      program: 'Maternal Health Program',
      title: 'From High-Risk Pregnancy to Community Health Advocate',
      excerpt: 'Sunita\'s life changed when she received proper prenatal care through our health program. Now she helps other mothers in her community.',
      story: 'When Sunita was pregnant with her third child, she was considered high-risk due to complications from previous pregnancies. Through our community health program, she received regular check-ups, nutritional support, and health education. Not only did she have a safe delivery, but she also learned about maternal health best practices. Today, Sunita works as a community health volunteer, helping other pregnant women in her village access proper care. She has assisted in over 50 safe deliveries and continues to educate mothers about nutrition and child care.',
      impact: 'Assisted 50+ safe deliveries, trained 100+ mothers',
      image: 'https://images.pexels.com/photos/8923141/pexels-photo-8923141.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: true,
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      age: 28,
      location: 'Ahmedabad, Gujarat',
      state: 'Gujarat',
      category: 'livelihood',
      program: 'Digital Skills Training',
      title: 'From Daily Wage Laborer to Digital Marketing Expert',
      excerpt: 'Rajesh transformed his life through our digital skills program, now earning 10x his previous income and training others.',
      story: 'Rajesh worked as a daily wage laborer, earning barely enough to support his family. When he heard about our digital marketing training program, he was skeptical but decided to give it a try. The 6-month intensive course covered everything from basic computer skills to advanced digital marketing strategies. Within three months of completing the program, Rajesh landed a job with a local marketing agency. Today, he runs his own digital marketing consultancy, earning ₹50,000 per month. He has also trained over 100 youth in his community, helping them find employment in the digital economy.',
      impact: 'Income increased 10x, trained 100+ youth',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: false,
      date: '2024-02-20'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      age: 17,
      location: 'Jaipur, Rajasthan',
      state: 'Rajasthan',
      category: 'menstrual-equity',
      program: 'Menstrual Health Education',
      title: 'Breaking Taboos: From Shame to Advocacy',
      excerpt: 'Priya overcame menstrual stigma to become a peer educator, helping hundreds of girls in her district understand menstrual health.',
      story: 'Priya used to miss school regularly during her periods due to lack of proper menstrual hygiene products and the stigma surrounding menstruation in her community. When our menstrual health program was introduced in her school, everything changed. She learned about menstrual hygiene, received free sanitary products, and most importantly, understood that menstruation is natural and nothing to be ashamed of. Inspired by the program, Priya became a peer educator and has since conducted workshops in 25 schools across her district. She has directly helped over 500 girls understand menstrual health and has been instrumental in changing attitudes in her community.',
      impact: 'Educated 500+ girls, changed community attitudes',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: true,
      date: '2024-03-10'
    },
    {
      id: 4,
      name: 'Village Surajpur',
      age: null,
      location: 'Kutch, Gujarat',
      state: 'Gujarat',
      category: 'climate-action',
      program: 'Solar Electrification',
      title: 'From Darkness to Light: A Village\'s Solar Transformation',
      excerpt: 'An entire village transformed through solar energy, reducing costs by 70% and inspiring neighboring communities.',
      story: 'Surajpur was a remote village with no access to reliable electricity. Residents relied on kerosene lamps and diesel generators, which were expensive and harmful to health. Our solar electrification program installed solar panels on every household and established a community solar grid. The transformation was immediate - children could study after dark, women could work longer hours on their crafts, and small businesses flourished. The village now saves over ₹2 lakh annually on energy costs and has become a model for sustainable development. Ten neighboring villages have since adopted similar solar programs, creating a network of green communities.',
      impact: '70% cost reduction, 10 villages inspired',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: false,
      date: '2024-04-05'
    },
    {
      id: 5,
      name: 'Meera Cooperative',
      age: null,
      location: 'Udaipur, Rajasthan',
      state: 'Rajasthan',
      category: 'livelihood',
      program: 'Women\'s Cooperative',
      title: 'Collective Strength: Women\'s Cooperative Success',
      excerpt: '50 women came together to form a successful cooperative, achieving ₹10 lakh annual turnover in organic food products.',
      story: 'The Meera Women\'s Cooperative started with 50 women from rural Udaipur who wanted to create sustainable livelihoods. Through our women\'s empowerment program, they received training in organic farming, food processing, and business management. They started by producing organic spices and gradually expanded to include pickles, snacks, and traditional foods. The cooperative now has its own brand and supplies to stores across Rajasthan. Each member earns an average of ₹8,000 per month, and the cooperative has achieved an annual turnover of ₹10 lakhs. Their success has inspired the formation of 15 more women\'s cooperatives in the region.',
      impact: '₹10L turnover, 15 cooperatives inspired',
      image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: true,
      date: '2024-05-12'
    },
    {
      id: 6,
      name: 'Dr. Amit Patel',
      age: 29,
      location: 'Bhavnagar, Gujarat',
      state: 'Gujarat',
      category: 'health',
      program: 'Rural Doctor Training',
      title: 'Bringing Healthcare to the Doorstep',
      excerpt: 'A young doctor trained through our program now serves 5,000+ patients in remote areas through mobile health clinics.',
      story: 'Dr. Amit Patel completed his medical degree but was hesitant to work in rural areas due to lack of infrastructure and resources. Our rural healthcare training program equipped him with skills for community health management, telemedicine, and mobile clinic operations. He now operates three mobile health clinics covering 15 villages in rural Gujarat. Dr. Patel has treated over 5,000 patients, conducted 200+ health camps, and trained 50 community health workers. His innovative approach to rural healthcare delivery has been recognized by the state government and replicated in other districts.',
      impact: '5,000+ patients treated, 50 health workers trained',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: false,
      date: '2024-06-18'
    },
    {
      id: 7,
      name: 'Kavita Singh',
      age: 24,
      location: 'Lucknow, Uttar Pradesh',
      state: 'Uttar Pradesh',
      category: 'livelihood',
      program: 'Beauty & Wellness Training',
      title: 'From Unemployment to Entrepreneurship',
      excerpt: 'Kavita built a successful beauty salon chain after completing our beauty and wellness training program.',
      story: 'Kavita was unemployed after completing her graduation and struggled to find work that matched her interests. She enrolled in our beauty and wellness training program, which provided comprehensive training in hair styling, skincare, makeup, and business management. After completing the 4-month course, she started with a small beauty parlor in her neighborhood. Her skills and customer service quickly gained recognition, and she expanded to three locations within two years. Kavita now employs 12 women and has trained over 80 girls through our program. Her success story has motivated many young women in her community to pursue entrepreneurship.',
      impact: 'Employs 12 women, trained 80+ girls',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: true,
      date: '2024-07-22'
    },
    {
      id: 8,
      name: 'Green School Initiative',
      age: null,
      location: 'Jodhpur, Rajasthan',
      state: 'Rajasthan',
      category: 'climate-action',
      program: 'Environmental Education',
      title: 'Students Leading Environmental Change',
      excerpt: 'Students from 20 schools planted 2,000 trees and created a green belt, improving local air quality and biodiversity.',
      story: 'The Green School Initiative started when students from 20 schools in Jodhpur participated in our environmental education program. They learned about climate change, biodiversity, and sustainable practices. Inspired by the program, students organized tree plantation drives, waste segregation campaigns, and water conservation projects. Over two years, they planted 2,000 trees, created school gardens, and established recycling centers. The initiative has improved air quality in the area and created a green belt around the schools. The program has been so successful that it has been adopted by 50 more schools across Rajasthan, with students becoming environmental ambassadors in their communities.',
      impact: '2,000 trees planted, 50 schools adopted program',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: false,
      date: '2024-08-15'
    },
    {
      id: 9,
      name: 'Rashida Begum',
      age: 26,
      location: 'Kolkata, West Bengal',
      state: 'West Bengal',
      category: 'health',
      program: 'Maternal Health Program',
      title: 'Safe Motherhood Champion',
      excerpt: 'After receiving life-saving maternal care, Rashida became a community advocate for safe motherhood practices.',
      story: 'Rashida faced complications during her first pregnancy and nearly lost her life due to lack of proper medical care. When she became pregnant again, she was terrified. Through our maternal health program, she received comprehensive prenatal care, nutritional support, and health education. She had a safe delivery and a healthy baby. Grateful for the care she received, Rashida became a community health volunteer. She has since helped over 100 pregnant women access proper healthcare, conducted awareness sessions on maternal health, and has been instrumental in reducing maternal mortality in her area. Her dedication has earned her recognition from local health authorities.',
      impact: 'Helped 100+ pregnant women, reduced maternal mortality',
      image: 'https://images.pexels.com/photos/8923143/pexels-photo-8923143.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: true,
      date: '2024-09-08'
    }
  ];

  const filteredStories = stories.filter(story => {
    const categoryMatch = selectedCategory === 'all' || story.category === selectedCategory;
    const stateMatch = selectedState === 'all' || story.state === selectedState;
    return categoryMatch && stateMatch;
  });

  const featuredStory = stories[0];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Stories of Transformation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real stories from the communities we serve, showcasing the transformative 
              power of our programs and the resilience of the human spirit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                Featured Story
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={featuredStory.image}
                alt={featuredStory.name}
                className="rounded-2xl shadow-2xl w-full"
              />
              {featuredStory.video && (
                <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary-600 ml-1" />
                  </div>
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{featuredStory.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(featuredStory.date).toLocaleDateString()}</span>
                </div>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
                {featuredStory.title}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {featuredStory.excerpt}
              </p>

              <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500">
                <Quote className="w-6 h-6 text-primary-600 mb-2" />
                <p className="text-primary-800 font-medium">
                  "{featuredStory.story.substring(0, 200)}..."
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                <p className="text-gray-700">{featuredStory.impact}</p>
              </div>

              <button className="bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2">
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 text-gray-700">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter Stories</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  By Program
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* State Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  By State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state === 'all' ? 'All States' : state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Stories ({filteredStories.length})
            </h2>
            <p className="text-gray-600">
              Discover more inspiring stories of transformation from our beneficiaries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {story.video && (
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                      <Play className="w-3 h-3" />
                      <span>Video</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      story.category === 'health' ? 'bg-red-500' :
                      story.category === 'livelihood' ? 'bg-blue-500' :
                      story.category === 'menstrual-equity' ? 'bg-purple-500' :
                      'bg-green-500'
                    }`}>
                      {categories.find(c => c.id === story.category)?.name}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{story.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(story.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {story.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>

                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <p className="text-sm font-medium text-gray-900">
                      Impact: {story.impact}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      {story.name}{story.age && `, Age ${story.age}`}
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                No stories found matching your filters. Try adjusting your selection.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Collective Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These individual stories represent the broader impact of our programs 
              across communities throughout India.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50,000+', label: 'Lives Transformed' },
              { number: '200+', label: 'Success Stories' },
              { number: '15', label: 'States Covered' },
              { number: '95%', label: 'Positive Outcomes' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Be Part of More Stories
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your support can help create more success stories like these. 
              Join us in transforming lives and building stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Support Our Mission
              </a>
              <a
                href="/get-involved"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
              >
                Share Your Story
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BeneficiaryStories;