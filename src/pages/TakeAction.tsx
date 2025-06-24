import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Users, 
  Handshake, 
  ArrowRight,
  DollarSign,
  Clock,
  Target,
  Globe,
  Gift,
  Calendar,
  UserPlus,
  Building
} from 'lucide-react';

const TakeAction: React.FC = () => {
  const actionOptions = [
    {
      icon: Heart,
      title: 'Make a Donation',
      description: 'Support our programs with a financial contribution that directly impacts communities in need.',
      features: [
        'One-time or monthly donations',
        'Choose specific programs to support',
        'Tax-deductible contributions',
        'Transparent impact reporting'
      ],
      cta: 'Donate Now',
      link: '/donate',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Users,
      title: 'Get Involved',
      description: 'Join our community of volunteers and advocates working to create positive change.',
      features: [
        'Volunteer opportunities',
        'Skill-based volunteering',
        'Community advocacy',
        'Event participation'
      ],
      cta: 'Join Us',
      link: '/get-involved',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Handshake,
      title: 'Partner With Us',
      description: 'Collaborate with us as an organization to amplify impact and reach more communities.',
      features: [
        'Corporate partnerships',
        'Government collaboration',
        'NGO alliances',
        'Academic partnerships'
      ],
      cta: 'Explore Partnerships',
      link: '/partner-with-us',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50'
    }
  ];

  const donationImpact = [
    {
      amount: '₹500',
      impact: 'Provides menstrual hygiene products for 5 girls for 6 months',
      icon: Gift
    },
    {
      amount: '₹2,000',
      impact: 'Funds digital skills training for one woman entrepreneur',
      icon: Target
    },
    {
      amount: '₹5,000',
      impact: 'Supports maternal health care for 10 pregnant women',
      icon: Heart
    },
    {
      amount: '₹10,000',
      impact: 'Installs solar lighting system for one rural household',
      icon: Globe
    }
  ];

  const volunteerOpportunities = [
    {
      title: 'Health Program Volunteer',
      commitment: '4-6 hours/week',
      location: 'Multiple locations',
      description: 'Support community health workers and assist in health camps and awareness programs.'
    },
    {
      title: 'Digital Skills Trainer',
      commitment: '6-8 hours/week',
      location: 'Urban centers',
      description: 'Teach digital literacy and online business skills to women entrepreneurs.'
    },
    {
      title: 'Menstrual Health Educator',
      commitment: '3-4 hours/week',
      location: 'Schools and communities',
      description: 'Conduct awareness sessions and break taboos around menstrual health.'
    },
    {
      title: 'Environmental Advocate',
      commitment: '5-7 hours/week',
      location: 'Rural areas',
      description: 'Promote renewable energy adoption and environmental conservation practices.'
    }
  ];

  const partnershipTypes = [
    {
      type: 'Corporate Partners',
      description: 'Companies supporting our mission through CSR initiatives and employee engagement',
      benefits: ['Brand visibility', 'Employee engagement', 'Social impact', 'Tax benefits'],
      icon: Building
    },
    {
      type: 'Government Agencies',
      description: 'Collaboration with government departments for policy implementation and scale',
      benefits: ['Policy alignment', 'Resource sharing', 'Wider reach', 'Sustainability'],
      icon: Globe
    },
    {
      type: 'Academic Institutions',
      description: 'Universities and research institutions contributing knowledge and innovation',
      benefits: ['Research collaboration', 'Student engagement', 'Innovation', 'Capacity building'],
      icon: Target
    },
    {
      type: 'International Organizations',
      description: 'Global NGOs and foundations supporting cross-border knowledge exchange',
      benefits: ['Global best practices', 'Funding opportunities', 'Network expansion', 'Innovation'],
      icon: UserPlus
    }
  ];

  const impactStats = [
    { number: '₹2.5Cr+', label: 'Donations Received', icon: DollarSign },
    { number: '500+', label: 'Active Volunteers', icon: Users },
    { number: '25+', label: 'Partner Organizations', icon: Handshake },
    { number: '95%', label: 'Funds to Programs', icon: Target }
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
              Take Action
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join us in creating lasting change. Whether through donations, volunteering, 
              or partnerships, there are many ways to support our mission and amplify our impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Options */}
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
              Ways to Support Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the way that best fits your interests and capacity to make a difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {actionOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`${option.bgColor} p-8`}>
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${option.color} rounded-full flex items-center justify-center`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {option.description}
                  </p>
                </div>

                <div className="p-8">
                  <div className="space-y-3 mb-8">
                    {option.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={option.link}
                    className={`w-full bg-gradient-to-r ${option.color} text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2`}
                  >
                    <span>{option.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Impact */}
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
              Your Donation Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your contribution directly translates into meaningful change 
              in the lives of those we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationImpact.map((item, index) => (
              <motion.div
                key={item.amount}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-primary-600 mb-3">{item.amount}</div>
                <p className="text-gray-600 leading-relaxed">{item.impact}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/donate"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Heart className="w-5 h-5" />
              <span>Start Donating</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use your skills and passion to make a direct impact in communities. 
              Find the volunteer role that matches your interests and availability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {opportunity.title}
                </h3>
                
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{opportunity.commitment}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{opportunity.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {opportunity.description}
                </p>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/get-involved"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Users className="w-5 h-5" />
              <span>Explore All Opportunities</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
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
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborate with us to amplify impact and create sustainable change 
              at scale through strategic partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <motion.div
                key={partnership.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <partnership.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {partnership.type}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {partnership.description}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {partnership.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              to="/partner-with-us"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Handshake className="w-5 h-5" />
              <span>Explore Partnerships</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Get Involved in Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our upcoming events to connect with our community and 
              learn more about our work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Annual Beneficiary Conference',
                date: 'February 15, 2025',
                location: 'New Delhi',
                type: 'Conference'
              },
              {
                title: 'Digital Skills Workshop',
                date: 'January 20, 2025',
                location: 'Mumbai',
                type: 'Workshop'
              },
              {
                title: 'Climate Action Summit',
                date: 'March 10, 2025',
                location: 'Ahmedabad',
                type: 'Summit'
              }
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                  Register Now
                </button>
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
              to="/news-events"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors"
            >
              <span>View All Events</span>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Every action, no matter how small, contributes to creating positive change. 
              Choose your way to support our mission and join thousands of others 
              working towards a better future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/donate"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <Heart className="w-5 h-5" />
                <span>Donate Now</span>
              </Link>
              <Link
                to="/get-involved"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Users className="w-5 h-5" />
                <span>Volunteer Today</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TakeAction;