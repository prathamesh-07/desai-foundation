import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Briefcase, 
  Droplets, 
  Leaf, 
  ArrowRight,
  Users,
  Target,
  Award,
  MapPin,
  TrendingUp
} from 'lucide-react';

const WhatWeDo: React.FC = () => {
  const programs = [
    {
      icon: Heart,
      title: 'Health',
      description: 'Comprehensive healthcare initiatives focused on maternal health, child nutrition, preventive care, and community wellness programs.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { beneficiaries: '25,000+', centers: '45', states: '8' },
      highlights: [
        'Community Health Centers',
        'Maternal & Child Health',
        'Nutrition Programs',
        'Health Worker Training'
      ],
      link: '/health'
    },
    {
      icon: Briefcase,
      title: 'Livelihood',
      description: 'Skill development and income generation programs to create sustainable economic opportunities for marginalized communities.',
      image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { beneficiaries: '15,000+', skills: '25+', employment: '85%' },
      highlights: [
        'Skill Development Training',
        'Microfinance Programs',
        'Women\'s Cooperatives',
        'Digital Literacy'
      ],
      link: '/livelihood'
    },
    {
      icon: Droplets,
      title: 'Menstrual Equity',
      description: 'Breaking barriers and building awareness for menstrual health and hygiene across rural and urban communities.',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { beneficiaries: '8,000+', schools: '150+', workshops: '300+' },
      highlights: [
        'Menstrual Health Education',
        'Hygiene Product Distribution',
        'School Programs',
        'Community Awareness'
      ],
      link: '/menstrual-equity'
    },
    {
      icon: Leaf,
      title: 'Climate Action',
      description: 'Environmental sustainability initiatives including renewable energy, water conservation, and green technology adoption.',
      image: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: { villages: '50+', panels: '500+', trees: '10,000+' },
      highlights: [
        'Solar Energy Projects',
        'Water Conservation',
        'Afforestation Programs',
        'Environmental Education'
      ],
      link: '/climate-action'
    }
  ];

  const approach = [
    {
      icon: Users,
      title: 'Community-Centered',
      description: 'We work directly with communities to understand their unique needs and develop culturally appropriate solutions.'
    },
    {
      icon: Target,
      title: 'Evidence-Based',
      description: 'Our programs are grounded in research and data, ensuring maximum effectiveness and sustainable impact.'
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'We maintain the highest standards in program delivery, monitoring, and evaluation of all our initiatives.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'We design programs that can be replicated and scaled across different contexts and geographies.'
    }
  ];

  const impactMetrics = [
    { number: '50,000+', label: 'Lives Directly Impacted' },
    { number: '200,000+', label: 'Indirect Beneficiaries' },
    { number: '15', label: 'States Covered' },
    { number: '100+', label: 'Active Programs' }
  ];

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
              What We Do
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We implement comprehensive programs across four key areas to create sustainable 
              change and empower communities throughout India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {metric.number}
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Areas */}
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
              Our Program Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Integrated programs designed to address the most pressing challenges 
              facing communities today.
            </p>
          </motion.div>

          <div className="space-y-20">
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
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="grid grid-cols-3 gap-4 text-white">
                        {Object.entries(program.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold">{value}</div>
                            <div className="text-sm capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-4xl font-bold text-gray-900">
                        {program.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {program.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Initiatives:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center space-x-2 text-gray-700"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={program.link}
                      className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
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
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in sustainable, community-driven solutions that create 
              lasting positive change.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
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
                Our Geographic Reach
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Project Sitaare operates across 15 states in India, with a focus on 
                underserved rural and semi-urban communities. Our regional approach 
                allows us to understand local contexts and develop culturally appropriate 
                solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-primary-600" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">15</div>
                      <div className="text-sm text-gray-600">States</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-primary-600" />
                    <div>
                      <div className="text-2xl font-bold text-gray-900">150+</div>
                      <div className="text-sm text-gray-600">Districts</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">Primary States:</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Maharashtra', 'Gujarat', 'Rajasthan', 'Madhya Pradesh', 
                    'Uttar Pradesh', 'Bihar', 'West Bengal', 'Odisha',
                    'Telangana', 'Karnataka', 'Tamil Nadu', 'Kerala'
                  ].map((state) => (
                    <span
                      key={state}
                      className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {state}
                    </span>
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
                src="https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Geographic Reach"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
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
              Stories of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from the communities we serve showcase the transformative 
              power of our integrated approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sunita Devi',
                location: 'Bihar',
                program: 'Health & Livelihood',
                story: 'From struggling to provide for her family to becoming a successful entrepreneur and community health leader.',
                image: 'https://images.pexels.com/photos/8923141/pexels-photo-8923141.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Rajesh Patel',
                location: 'Gujarat',
                program: 'Climate Action',
                story: 'Led his village to become the first solar-powered community in the district, inspiring 10+ neighboring villages.',
                image: 'https://images.pexels.com/photos/8923155/pexels-photo-8923155.jpeg?auto=compress&cs=tinysrgb&w=400'
              },
              {
                name: 'Meera Sharma',
                location: 'Rajasthan',
                program: 'Menstrual Equity',
                story: 'Broke traditional barriers to educate 500+ girls about menstrual health, improving school attendance by 40%.',
                image: 'https://images.pexels.com/photos/8923143/pexels-photo-8923143.jpeg?auto=compress&cs=tinysrgb&w=400'
              }
            ].map((story, index) => (
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
                    <p className="text-primary-600 font-medium">{story.location}</p>
                    <p className="text-sm text-gray-500">{story.program}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/beneficiary-stories"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors"
            >
              <span>Read More Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
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
              Partner With Us
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Whether through donations, volunteering, or organizational partnerships, 
              there are many ways to support our mission and amplify our impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Make a Donation
              </Link>
              <Link
                to="/partner-with-us"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;