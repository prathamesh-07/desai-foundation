import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  ArrowRight,
  Filter,
  Search,
  Tag,
  Users,
  ExternalLink
} from 'lucide-react';

const NewsEvents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'health', name: 'Health' },
    { id: 'livelihood', name: 'Livelihood' },
    { id: 'menstrual-equity', name: 'Menstrual Equity' },
    { id: 'climate-action', name: 'Climate Action' },
    { id: 'awards', name: 'Awards & Recognition' },
    { id: 'partnerships', name: 'Partnerships' }
  ];

  const news = [
    {
      id: 1,
      title: 'Project Sitaare Wins National Health Excellence Award 2024',
      excerpt: 'Our maternal health program has been recognized by the Ministry of Health & Family Welfare for outstanding contribution to reducing maternal mortality.',
      content: 'Project Sitaare has been honored with the prestigious National Health Excellence Award 2024 for our innovative maternal health program. The award recognizes our comprehensive approach to maternal care, which has resulted in a 60% reduction in maternal mortality rates across our operational areas. The program combines community health workers, mobile health clinics, and digital health monitoring to ensure every pregnant woman receives quality care.',
      category: 'awards',
      date: '2024-12-15',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true
    },
    {
      id: 2,
      title: '1000 Women Complete Digital Skills Training Program',
      excerpt: 'Our digital literacy initiative reaches a major milestone, empowering women with essential technology skills for modern employment opportunities.',
      content: 'We are proud to announce that 1,000 women have successfully completed our comprehensive digital skills training program across 8 states. The program covers basic computer literacy, digital marketing, e-commerce, and online financial services. Of the graduates, 85% have found employment or started their own digital businesses, with an average income increase of 300%. This milestone represents our commitment to bridging the digital divide and creating economic opportunities for women in underserved communities.',
      category: 'livelihood',
      date: '2024-12-10',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 3,
      title: 'New Partnership with State Government for Climate Action',
      excerpt: 'Project Sitaare partners with Gujarat State Government to implement renewable energy solutions in 100 villages.',
      content: 'We have signed a landmark partnership agreement with the Gujarat State Government to implement comprehensive renewable energy solutions in 100 villages across the state. The ₹50 crore initiative will install solar panels, establish community energy grids, and train local technicians for maintenance. This partnership represents the largest climate action project in our history and will directly benefit over 50,000 people while reducing carbon emissions by 10,000 tons annually.',
      category: 'climate-action',
      date: '2024-12-05',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 4,
      title: 'Menstrual Health Program Reaches 10,000 Girls',
      excerpt: 'Our comprehensive menstrual equity initiative has now educated and supported 10,000 girls across rural and urban communities.',
      content: 'Our menstrual health and hygiene program has achieved a significant milestone by reaching 10,000 girls and young women across 12 states. The program has resulted in a 40% increase in school attendance among participating girls and has successfully changed attitudes toward menstruation in 200+ communities. We have distributed over 100,000 sanitary products and trained 500 peer educators who continue to spread awareness in their communities.',
      category: 'menstrual-equity',
      date: '2024-11-28',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 5,
      title: 'Mobile Health Clinics Expand to Remote Areas',
      excerpt: 'New fleet of mobile health clinics launched to serve the most remote and underserved communities across three states.',
      content: 'Project Sitaare has launched a new fleet of 10 mobile health clinics equipped with advanced diagnostic equipment and telemedicine capabilities. These clinics will serve remote communities in Bihar, Odisha, and Jharkhand, providing primary healthcare services to areas where the nearest hospital is over 50 kilometers away. Each clinic is staffed with qualified doctors, nurses, and community health workers, and can serve up to 100 patients per day.',
      category: 'health',
      date: '2024-11-20',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    },
    {
      id: 6,
      title: 'International Recognition for Community Development Work',
      excerpt: 'Project Sitaare receives international award for innovative community development approaches from UN-Habitat.',
      content: 'We are honored to receive the UN-Habitat Award for Excellence in Community Development for our integrated approach to rural development. The award recognizes our holistic model that combines health, livelihood, education, and environmental sustainability. Our work has been highlighted as a best practice for community-driven development and will be featured in UN-Habitat\'s global case study collection.',
      category: 'awards',
      date: '2024-11-15',
      image: 'https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Annual Beneficiary Conference 2025',
      description: 'Join us for our annual conference bringing together beneficiaries, partners, and stakeholders to share experiences and plan for the future.',
      date: '2025-02-15',
      time: '09:00 AM - 05:00 PM',
      location: 'New Delhi, India',
      type: 'Conference',
      category: 'partnerships',
      registrationOpen: true,
      capacity: 500,
      registered: 342
    },
    {
      id: 2,
      title: 'Digital Skills Training Workshop',
      description: 'Free digital skills training workshop for women entrepreneurs covering e-commerce, digital marketing, and online financial services.',
      date: '2025-01-20',
      time: '10:00 AM - 04:00 PM',
      location: 'Mumbai, Maharashtra',
      type: 'Workshop',
      category: 'livelihood',
      registrationOpen: true,
      capacity: 50,
      registered: 38
    },
    {
      id: 3,
      title: 'Community Health Camp',
      description: 'Free health screening and consultation camp for rural communities, including maternal health, child nutrition, and general health check-ups.',
      date: '2025-01-25',
      time: '08:00 AM - 06:00 PM',
      location: 'Patna, Bihar',
      type: 'Health Camp',
      category: 'health',
      registrationOpen: false,
      capacity: 200,
      registered: 200
    },
    {
      id: 4,
      title: 'Climate Action Summit',
      description: 'Regional summit on climate change adaptation and mitigation strategies for rural communities, featuring expert speakers and interactive sessions.',
      date: '2025-03-10',
      time: '09:00 AM - 05:00 PM',
      location: 'Ahmedabad, Gujarat',
      type: 'Summit',
      category: 'climate-action',
      registrationOpen: true,
      capacity: 300,
      registered: 156
    },
    {
      id: 5,
      title: 'Menstrual Health Awareness Week',
      description: 'Week-long awareness campaign in schools and communities to break taboos and promote menstrual health and hygiene.',
      date: '2025-02-01',
      time: 'All Day',
      location: 'Multiple Locations',
      type: 'Campaign',
      category: 'menstrual-equity',
      registrationOpen: false,
      capacity: null,
      registered: null
    }
  ];

  const filteredNews = news.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const searchMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const filteredEvents = events.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const searchMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const upcomingEvents = events.filter(event => new Date(event.date) > new Date()).slice(0, 3);
  const featuredNews = news.find(item => item.featured);

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
              News & Events
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Stay updated with our latest news, achievements, and upcoming events. 
              Join us in our mission to create positive change in communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
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
                  Featured News
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="rounded-2xl shadow-2xl w-full"
                />
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
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(featuredNews.date).toLocaleDateString()}</span>
                  </div>
                  <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-medium">
                    {categories.find(c => c.id === featuredNews.category)?.name}
                  </span>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900">
                  {featuredNews.title}
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {featuredNews.excerpt}
                </p>

                <button className="bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us at our upcoming events and be part of the change you want to see.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                    event.type === 'Health Camp' ? 'bg-red-100 text-red-800' :
                    event.type === 'Summit' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {event.type}
                  </span>
                  {event.registrationOpen && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      Registration Open
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {event.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  {event.capacity && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.registered}/{event.capacity} registered</span>
                    </div>
                  )}
                </div>

                {event.registrationOpen ? (
                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                    Register Now
                  </button>
                ) : (
                  <button className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-medium cursor-not-allowed">
                    Registration Closed
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab('news')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    activeTab === 'news'
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Latest News
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    activeTab === 'events'
                      ? 'bg-white text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  All Events
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          {activeTab === 'news' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs font-medium">
                        {categories.find(c => c.id === article.category)?.name}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-primary-600 font-medium text-sm">Read More</span>
                      <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-3">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          event.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                          event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                          event.type === 'Health Camp' ? 'bg-red-100 text-red-800' :
                          event.type === 'Summit' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {event.type}
                        </span>
                        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                          {categories.find(c => c.id === event.category)?.name}
                        </span>
                        {event.registrationOpen && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            Registration Open
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 mb-4">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-4">
                      {event.capacity && (
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            {event.registered}/{event.capacity}
                          </div>
                          <div className="text-sm text-gray-600">Registered</div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div 
                              className="bg-primary-600 h-2 rounded-full"
                              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

                      {event.registrationOpen ? (
                        <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                          <span>Register Now</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      ) : (
                        <button className="bg-gray-300 text-gray-600 px-6 py-3 rounded-lg font-medium cursor-not-allowed">
                          Registration Closed
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {((activeTab === 'news' && filteredNews.length === 0) || 
            (activeTab === 'events' && filteredEvents.length === 0)) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                No {activeTab} found matching your criteria. Try adjusting your filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
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
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest news, event updates, 
              and stories from the communities we serve.
            </p>
            <div className="max-w-md mx-auto flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;