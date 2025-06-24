import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  ArrowRight, 
  MapPin,
  Users,
  Heart,
  ExternalLink,
  Flag,
  Building,
  Phone,
  Mail
} from 'lucide-react';

const IndiaSite: React.FC = () => {
  const regionalOffices = [
    {
      region: 'North India',
      cities: ['Delhi', 'Chandigarh', 'Jaipur'],
      states: ['Delhi', 'Punjab', 'Haryana', 'Rajasthan', 'Uttar Pradesh'],
      programs: ['Health', 'Livelihood', 'Menstrual Equity'],
      contact: {
        address: '123 Connaught Place, New Delhi - 110001',
        phone: '+91 11 2345 6789',
        email: 'north@projectsitaare.org'
      }
    },
    {
      region: 'West India',
      cities: ['Mumbai', 'Pune', 'Ahmedabad'],
      states: ['Maharashtra', 'Gujarat', 'Goa', 'Madhya Pradesh'],
      programs: ['Climate Action', 'Livelihood', 'Health'],
      contact: {
        address: '456 Marine Drive, Mumbai - 400001',
        phone: '+91 22 2345 6789',
        email: 'west@projectsitaare.org'
      }
    },
    {
      region: 'South India',
      cities: ['Bangalore', 'Chennai', 'Hyderabad'],
      states: ['Karnataka', 'Tamil Nadu', 'Telangana', 'Kerala', 'Andhra Pradesh'],
      programs: ['Health', 'Climate Action', 'Menstrual Equity'],
      contact: {
        address: '789 MG Road, Bangalore - 560001',
        phone: '+91 80 2345 6789',
        email: 'south@projectsitaare.org'
      }
    },
    {
      region: 'East India',
      cities: ['Kolkata', 'Bhubaneswar'],
      states: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand'],
      programs: ['Health', 'Livelihood', 'Climate Action'],
      contact: {
        address: '321 Park Street, Kolkata - 700016',
        phone: '+91 33 2345 6789',
        email: 'east@projectsitaare.org'
      }
    }
  ];

  const statePrograms = [
    {
      state: 'Maharashtra',
      programs: 4,
      beneficiaries: 12000,
      centers: 15,
      focus: 'Livelihood & Health'
    },
    {
      state: 'Gujarat',
      programs: 3,
      beneficiaries: 8500,
      centers: 12,
      focus: 'Climate Action'
    },
    {
      state: 'Bihar',
      programs: 5,
      beneficiaries: 15000,
      centers: 18,
      focus: 'Health & Education'
    },
    {
      state: 'Karnataka',
      programs: 3,
      beneficiaries: 7200,
      centers: 10,
      focus: 'Technology & Skills'
    },
    {
      state: 'Rajasthan',
      programs: 4,
      beneficiaries: 9800,
      centers: 14,
      focus: 'Menstrual Equity'
    },
    {
      state: 'West Bengal',
      programs: 3,
      beneficiaries: 6500,
      centers: 8,
      focus: 'Health & Nutrition'
    }
  ];

  const languageSupport = [
    'Hindi', 'English', 'Marathi', 'Gujarati', 'Bengali', 'Tamil', 
    'Telugu', 'Kannada', 'Malayalam', 'Punjabi', 'Rajasthani', 'Odia'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-green-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
              <Flag className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Project Sitaare India
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive information about our programs, regional offices, and 
              impact across India. Find local resources and connect with our teams 
              in your state.
            </p>
          </motion.div>
        </div>
      </section>

      {/* India Overview */}
      <section className="py-20">
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
                Our Presence Across India
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Project Sitaare operates across 15 states in India, with regional offices 
                strategically located to serve diverse communities. Our programs are 
                culturally adapted and delivered in local languages to ensure maximum 
                effectiveness and community engagement.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">15</div>
                  <div className="text-sm text-gray-700">States Covered</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">150+</div>
                  <div className="text-sm text-gray-700">Districts Reached</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-sm text-gray-700">Villages Served</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">12</div>
                  <div className="text-sm text-gray-700">Languages Supported</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-100 to-green-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Language Support:</h3>
                <div className="flex flex-wrap gap-2">
                  {languageSupport.map((language) => (
                    <span
                      key={language}
                      className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700"
                    >
                      {language}
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
                alt="India Map"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
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
              Regional Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our regional offices ensure localized program delivery and 
              community engagement across different parts of India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regionalOffices.map((office, index) => (
              <motion.div
                key={office.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{office.region}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Major Cities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.cities.map((city) => (
                        <span
                          key={city}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">States Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.states.map((state) => (
                        <span
                          key={state}
                          className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs"
                        >
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Programs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {office.programs.map((program) => (
                        <span
                          key={program}
                          className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Contact Information:</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{office.contact.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span>{office.contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <span>{office.contact.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* State-wise Programs */}
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
              State-wise Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed overview of our programs and impact across major states in India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statePrograms.map((state, index) => (
              <motion.div
                key={state.state}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{state.state}</h3>
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                    <Flag className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{state.programs}</div>
                      <div className="text-xs text-gray-600">Active Programs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{state.centers}</div>
                      <div className="text-xs text-gray-600">Service Centers</div>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-1">
                      {state.beneficiaries.toLocaleString()}+
                    </div>
                    <div className="text-sm text-gray-600">Beneficiaries Served</div>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-gray-900 mb-1">Primary Focus:</div>
                    <div className="text-sm text-gray-600">{state.focus}</div>
                  </div>

                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm">
                    View State Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Resources */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Local Resources & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access local resources, find nearby programs, and connect with 
              our teams in your area.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Find Local Programs',
                description: 'Search for Project Sitaare programs and services available in your district or state.',
                icon: MapPin,
                action: 'Search Programs',
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Connect with Teams',
                description: 'Get in touch with our local teams and coordinators for support and information.',
                icon: Users,
                action: 'Contact Teams',
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Local Volunteer Opportunities',
                description: 'Find volunteer opportunities and community engagement programs in your area.',
                icon: Heart,
                action: 'Join Locally',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${resource.color} rounded-full flex items-center justify-center`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{resource.description}</p>
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2 mx-auto">
                  <span>{resource.action}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Partnerships */}
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
              Government Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work closely with central and state governments to implement 
              policy initiatives and scale successful programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                level: 'Central Government',
                partnerships: 5,
                schemes: ['Ayushman Bharat', 'Skill India', 'Swachh Bharat'],
                focus: 'Policy Implementation'
              },
              {
                level: 'State Governments',
                partnerships: 12,
                schemes: ['State Health Mission', 'Rural Development', 'Women Empowerment'],
                focus: 'Program Scaling'
              },
              {
                level: 'District Administration',
                partnerships: 45,
                schemes: ['District Health Plans', 'Local Skill Centers', 'Community Programs'],
                focus: 'Local Implementation'
              },
              {
                level: 'Panchayati Raj',
                partnerships: 150,
                schemes: ['Village Development', 'Self Help Groups', 'Local Governance'],
                focus: 'Grassroots Engagement'
              }
            ].map((partnership, index) => (
              <motion.div
                key={partnership.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{partnership.level}</h3>
                </div>

                <div className="space-y-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{partnership.partnerships}</div>
                    <div className="text-xs text-gray-600">Active Partnerships</div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Schemes:</h4>
                    <div className="space-y-1">
                      {partnership.schemes.map((scheme) => (
                        <div key={scheme} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                          {scheme}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary-50 p-2 rounded text-center">
                    <div className="text-xs font-medium text-primary-800">
                      Focus: {partnership.focus}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redirect Notice */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center">
              <Globe className="w-10 h-10 text-orange-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Visit Our Dedicated India Portal
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              For comprehensive information about our India operations, local programs, 
              and regional resources, visit our dedicated India website with content 
              in multiple Indian languages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Globe className="w-5 h-5" />
                <span>Visit India Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Contact Local Office</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IndiaSite;