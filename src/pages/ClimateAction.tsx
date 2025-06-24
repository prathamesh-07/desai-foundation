import React from 'react';
import { motion } from 'framer-motion';
import { 
  Leaf, 
  Sun, 
  Droplets, 
  TreePine, 
  Zap,
  Award,
  Target,
  MapPin,
  TrendingUp,
  Recycle
} from 'lucide-react';

const ClimateAction: React.FC = () => {
  const programs = [
    {
      icon: Sun,
      title: 'Solar Energy Projects',
      description: 'Installing solar panels and promoting renewable energy adoption in rural communities to reduce carbon footprint and energy costs.',
      achievements: ['500+ solar panels installed', '50+ villages electrified', '60% energy cost reduction'],
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Implementing rainwater harvesting, watershed management, and water-efficient irrigation systems to combat water scarcity.',
      achievements: ['100+ water structures built', '30% water table improvement', '2,000+ farmers benefited'],
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: TreePine,
      title: 'Afforestation Programs',
      description: 'Large-scale tree plantation drives and forest conservation initiatives to restore degraded lands and improve biodiversity.',
      achievements: ['10,000+ trees planted', '500 hectares restored', '25 species conserved'],
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Recycle,
      title: 'Waste Management',
      description: 'Promoting circular economy through waste segregation, recycling initiatives, and composting programs in communities.',
      achievements: ['80% waste reduction', '200+ composting units', '50+ recycling centers'],
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const impact = [
    { number: '50+', label: 'Villages Transformed', icon: MapPin },
    { number: '500+', label: 'Solar Installations', icon: Sun },
    { number: '10,000+', label: 'Trees Planted', icon: TreePine },
    { number: '60%', label: 'Carbon Reduction', icon: TrendingUp }
  ];

  const technologies = [
    'Solar Panel Systems',
    'Biogas Plants',
    'Rainwater Harvesting',
    'Drip Irrigation',
    'LED Lighting',
    'Solar Water Heaters',
    'Waste-to-Energy',
    'Organic Composting',
    'Water Purification',
    'Energy-Efficient Cookstoves'
  ];

  const successStories = [
    {
      name: 'Village Surajpur',
      location: 'Gujarat',
      program: 'Solar Electrification',
      story: 'This remote village became completely solar-powered, reducing electricity costs by 70% and inspiring 10 neighboring villages to adopt renewable energy.',
      impact: '70% cost reduction, 10 villages inspired',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Farmer Collective',
      location: 'Maharashtra',
      program: 'Water Conservation',
      story: 'A group of 200 farmers implemented our water conservation techniques, increasing crop yield by 40% despite reduced rainfall.',
      impact: '40% yield increase, 200 farmers',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Green School Initiative',
      location: 'Rajasthan',
      program: 'Environmental Education',
      story: 'Students from 20 schools planted 2,000 trees and created a green belt, improving local air quality and biodiversity.',
      impact: '2,000 trees, 20 schools involved',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const climateGoals = [
    {
      title: 'Carbon Neutrality',
      target: '2030',
      description: 'Achieve carbon neutrality across all our program areas through renewable energy and carbon offset initiatives.',
      progress: 65
    },
    {
      title: 'Renewable Energy',
      target: '100%',
      description: 'Transition all partner communities to 100% renewable energy sources for their basic electricity needs.',
      progress: 45
    },
    {
      title: 'Water Security',
      target: '2028',
      description: 'Ensure water security for all communities through conservation and efficient management systems.',
      progress: 70
    },
    {
      title: 'Forest Cover',
      target: '25%',
      description: 'Increase forest cover by 25% in our operational areas through afforestation and conservation efforts.',
      progress: 55
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Climate Action
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Leading environmental sustainability initiatives through renewable energy, 
              conservation, and community-based climate resilience programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Goals */}
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
              Our Climate Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ambitious targets aligned with global climate commitments to create 
              sustainable and resilient communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {climateGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{goal.title}</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Target: {goal.target}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {goal.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-green-600">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Climate Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive environmental initiatives addressing climate change 
              through technology, conservation, and community engagement.
            </p>
          </motion.div>

          <div className="space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {program.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {program.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Achievements:
                      </h4>
                      <div className="space-y-2">
                        {program.achievements.map((achievement) => (
                          <div
                            key={achievement}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Green Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative and sustainable technologies we deploy to create 
              environmentally friendly solutions for communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Environmental Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Communities that have transformed their environmental footprint 
              through our climate action programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-green-600 font-medium">{story.location}</p>
                    <p className="text-sm text-gray-500">{story.program}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{story.story}</p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 font-medium text-sm">
                      Impact: {story.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">
                Measuring Our Environmental Impact
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We track and measure our environmental impact through rigorous 
                monitoring and evaluation systems to ensure our programs are 
                creating meaningful change.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="text-xl font-bold text-gray-900">ISO 14001</div>
                      <div className="text-sm text-gray-600">Certified</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="text-xl font-bold text-gray-900">SDG</div>
                      <div className="text-sm text-gray-600">Aligned</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Metrics:</h3>
                <div className="space-y-2">
                  {[
                    'Carbon footprint reduction: 60%',
                    'Renewable energy adoption: 500+ installations',
                    'Water conservation: 30% improvement in water table',
                    'Waste reduction: 80% in partner communities',
                    'Biodiversity conservation: 25 species protected'
                  ].map((metric) => (
                    <div key={metric} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Environmental Impact"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Join the Climate Movement
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Support our climate action initiatives to build sustainable communities 
              and combat climate change. Every contribution helps create a greener future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Fund Green Projects
              </a>
              <a
                href="/get-involved"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all transform hover:scale-105"
              >
                Volunteer for Climate
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClimateAction;