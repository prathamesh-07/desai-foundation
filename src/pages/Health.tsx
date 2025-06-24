import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Baby, 
  Stethoscope, 
  Shield, 
  Users, 
  MapPin,
  TrendingUp,
  Award,
  Clock,
  Target
} from 'lucide-react';

const Health: React.FC = () => {
  const programs = [
    {
      icon: Baby,
      title: 'Maternal & Child Health',
      description: 'Comprehensive care for mothers and children, including prenatal care, safe delivery services, immunization, and nutrition programs.',
      achievements: ['5,000+ safe deliveries', '12,000+ children immunized', '85% reduction in infant mortality'],
      image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Stethoscope,
      title: 'Community Health Centers',
      description: 'Primary healthcare facilities providing essential medical services, diagnostic facilities, and preventive care in underserved areas.',
      achievements: ['45 health centers', '25,000+ patients served', '95% patient satisfaction'],
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Focus on disease prevention through health education, screening programs, vaccination drives, and community awareness campaigns.',
      achievements: ['50,000+ screenings', '200+ awareness camps', '80% vaccination coverage'],
      image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Health Worker Training',
      description: 'Training and capacity building for community health workers, nurses, and medical professionals to improve healthcare delivery.',
      achievements: ['500+ health workers trained', '15 training centers', '90% job placement rate'],
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const impact = [
    { number: '25,000+', label: 'Patients Served Annually', icon: Heart },
    { number: '45', label: 'Health Centers', icon: MapPin },
    { number: '8', label: 'States Covered', icon: Target },
    { number: '85%', label: 'Patient Satisfaction', icon: TrendingUp }
  ];

  const services = [
    'General Medicine',
    'Pediatric Care',
    'Gynecology & Obstetrics',
    'Emergency Services',
    'Laboratory Services',
    'Pharmacy',
    'Health Education',
    'Telemedicine',
    'Ambulance Services',
    'Mental Health Support',
    'Nutrition Counseling',
    'Chronic Disease Management'
  ];

  const successStories = [
    {
      name: 'Rashida Begum',
      location: 'West Bengal',
      story: 'Thanks to our maternal health program, Rashida had a safe delivery and her baby is now healthy and thriving. She now advocates for prenatal care in her community.',
      impact: 'Became a community health advocate',
      image: 'https://images.pexels.com/photos/8923141/pexels-photo-8923141.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Priya Sharma',
      location: 'Rajasthan',
      story: 'A young doctor who received training through our program, Dr. Sharma now runs a successful practice in rural Rajasthan, serving over 1,000 patients monthly.',
      impact: '1,000+ patients served monthly',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Village of Khairpur',
      location: 'Uttar Pradesh',
      story: 'After establishing a community health center, this village saw a 60% reduction in preventable diseases and became a model for neighboring communities.',
      impact: '60% reduction in preventable diseases',
      image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Health Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Providing comprehensive healthcare services and building resilient health systems 
              in underserved communities across India.
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
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
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
              Our Health Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare initiatives designed to improve health outcomes 
              and build sustainable healthcare systems.
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
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
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
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
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

      {/* Services Offered */}
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
              Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare services available at our community health centers 
              and through our mobile medical units.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{service}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Stories of Healing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from beneficiaries whose lives have been transformed 
              through our health programs.
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
                    <p className="text-red-600 font-medium">{story.location}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{story.story}</p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-red-800 font-medium text-sm">
                      Impact: {story.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
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
                Quality & Standards
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We maintain the highest standards of healthcare delivery through 
                rigorous quality assurance programs, continuous training, and 
                regular monitoring and evaluation.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="text-xl font-bold text-gray-900">ISO</div>
                      <div className="text-sm text-gray-600">Certified</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="text-xl font-bold text-gray-900">24/7</div>
                      <div className="text-sm text-gray-600">Emergency Care</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Our Commitments:</h3>
                <div className="space-y-2">
                  {[
                    'Evidence-based treatment protocols',
                    'Regular staff training and certification',
                    'Patient feedback and satisfaction monitoring',
                    'Compliance with national health standards',
                    'Transparent reporting and accountability'
                  ].map((commitment) => (
                    <div key={commitment} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-gray-700">{commitment}</span>
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
                src="https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality Healthcare"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Support Our Health Mission
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Help us expand our healthcare services and reach more communities in need. 
              Every contribution helps save lives and build healthier communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Donate for Health
              </a>
              <a
                href="/get-involved"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-all transform hover:scale-105"
              >
                Volunteer with Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Health;