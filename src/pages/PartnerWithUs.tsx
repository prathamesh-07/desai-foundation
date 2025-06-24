import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Building, 
  Globe, 
  Target,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Heart,
  Briefcase,
  GraduationCap,
  Shield,
  Zap
} from 'lucide-react';

const PartnerWithUs: React.FC = () => {
  const [selectedPartnershipType, setSelectedPartnershipType] = useState('corporate');

  const partnershipTypes = [
    {
      id: 'corporate',
      name: 'Corporate Partnerships',
      icon: Building,
      description: 'Strategic partnerships with companies through CSR initiatives and employee engagement programs.',
      benefits: [
        'Enhanced brand reputation and visibility',
        'Employee engagement and team building',
        'Measurable social impact reporting',
        'Tax benefits under CSR compliance',
        'Access to our beneficiary network',
        'Co-branded marketing opportunities'
      ],
      opportunities: [
        'CSR program implementation',
        'Employee volunteer programs',
        'Skill-based volunteering initiatives',
        'Product and service donations',
        'Sponsored program funding',
        'Joint awareness campaigns'
      ],
      requirements: [
        'Commitment to social impact',
        'Alignment with our mission and values',
        'Minimum 12-month partnership duration',
        'Dedicated partnership liaison',
        'Regular impact measurement and reporting'
      ]
    },
    {
      id: 'government',
      name: 'Government Collaboration',
      icon: Shield,
      description: 'Working with government agencies to implement policy initiatives and scale successful programs.',
      benefits: [
        'Policy alignment and compliance',
        'Access to government resources',
        'Wider geographical reach',
        'Sustainable program scaling',
        'Regulatory support and guidance',
        'Public sector credibility'
      ],
      opportunities: [
        'Policy implementation support',
        'Government scheme execution',
        'Public-private partnerships',
        'Capacity building programs',
        'Research and documentation',
        'Best practice development'
      ],
      requirements: [
        'Proven track record in development work',
        'Compliance with government regulations',
        'Transparent financial management',
        'Regular reporting and documentation',
        'Alignment with government priorities'
      ]
    },
    {
      id: 'academic',
      name: 'Academic Institutions',
      icon: GraduationCap,
      description: 'Collaborating with universities and research institutions for knowledge exchange and innovation.',
      benefits: [
        'Access to research and innovation',
        'Student engagement opportunities',
        'Academic credibility and validation',
        'Knowledge sharing and learning',
        'Capacity building support',
        'Publication and documentation'
      ],
      opportunities: [
        'Research collaboration projects',
        'Student internship programs',
        'Faculty exchange initiatives',
        'Curriculum development support',
        'Innovation labs and incubators',
        'Academic conferences and seminars'
      ],
      requirements: [
        'Commitment to evidence-based approaches',
        'Openness to research and evaluation',
        'Student mentorship capabilities',
        'Academic integrity and standards',
        'Long-term collaboration vision'
      ]
    },
    {
      id: 'international',
      name: 'International Organizations',
      icon: Globe,
      description: 'Partnerships with global NGOs, foundations, and international development agencies.',
      benefits: [
        'Global best practices and knowledge',
        'International funding opportunities',
        'Cross-border learning exchange',
        'Enhanced credibility and reach',
        'Innovation and technology transfer',
        'Global network access'
      ],
      opportunities: [
        'Joint program implementation',
        'Knowledge sharing initiatives',
        'Capacity building exchanges',
        'Technology transfer programs',
        'International conferences',
        'Global advocacy campaigns'
      ],
      requirements: [
        'International development experience',
        'Cultural sensitivity and awareness',
        'Multi-language capabilities',
        'Global reporting standards',
        'Cross-cultural team management'
      ]
    }
  ];

  const currentPartners = [
    {
      name: 'TechCorp India',
      type: 'Corporate',
      partnership: 'Digital Skills Training Program',
      impact: 'Trained 500+ women in digital marketing',
      duration: '2 years',
      logo: Building
    },
    {
      name: 'State Health Department',
      type: 'Government',
      partnership: 'Maternal Health Initiative',
      impact: 'Reduced maternal mortality by 40%',
      duration: '3 years',
      logo: Shield
    },
    {
      name: 'National University',
      type: 'Academic',
      partnership: 'Research on Rural Development',
      impact: 'Published 5 research papers',
      duration: '18 months',
      logo: GraduationCap
    },
    {
      name: 'Global Health Foundation',
      type: 'International',
      partnership: 'Community Health Program',
      impact: 'Established 20 health centers',
      duration: '4 years',
      logo: Globe
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: 'Initial Discussion',
      description: 'Connect with our partnership team to discuss your organization\'s goals and explore collaboration opportunities.'
    },
    {
      step: 2,
      title: 'Needs Assessment',
      description: 'We conduct a comprehensive assessment to understand mutual needs and identify the best partnership model.'
    },
    {
      step: 3,
      title: 'Proposal Development',
      description: 'Our team develops a detailed partnership proposal outlining objectives, activities, and expected outcomes.'
    },
    {
      step: 4,
      title: 'Agreement Signing',
      description: 'Formalize the partnership through a comprehensive agreement that outlines roles, responsibilities, and commitments.'
    },
    {
      step: 5,
      title: 'Implementation',
      description: 'Begin collaborative activities with regular monitoring, reporting, and communication throughout the partnership.'
    }
  ];

  const impactMetrics = [
    { number: '25+', label: 'Active Partners', icon: Handshake },
    { number: '₹50Cr+', label: 'Partnership Value', icon: TrendingUp },
    { number: '100+', label: 'Joint Programs', icon: Target },
    { number: '200,000+', label: 'Lives Impacted', icon: Users }
  ];

  const caseStudies = [
    {
      partner: 'TechCorp India',
      program: 'Digital Empowerment Initiative',
      challenge: 'Bridging the digital divide for women in rural areas',
      solution: 'Comprehensive digital literacy and entrepreneurship training program',
      impact: [
        '500+ women trained in digital skills',
        '85% employment rate post-training',
        '300% average income increase',
        '15 digital centers established'
      ],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      partner: 'State Health Department',
      program: 'Maternal Health Excellence',
      challenge: 'High maternal mortality rates in rural districts',
      solution: 'Integrated maternal health program with community health workers',
      impact: [
        '40% reduction in maternal mortality',
        '5,000+ safe deliveries facilitated',
        '20 health centers upgraded',
        '200 health workers trained'
      ],
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
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
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
              <Handshake className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Partner With Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join forces with Project Sitaare to amplify your impact and create 
              sustainable change at scale. Together, we can build stronger communities 
              and transform lives across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
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
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric.number}</div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
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
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer diverse partnership models tailored to different types of 
              organizations and their unique capabilities.
            </p>
          </motion.div>

          {/* Partnership Type Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              {partnershipTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedPartnershipType(type.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
                    selectedPartnershipType === type.id
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <type.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{type.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Partnership Details */}
          {partnershipTypes.map((type) => (
            selectedPartnershipType === type.id && (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{type.name}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {type.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4">Benefits for Partners:</h4>
                        <div className="space-y-2">
                          {type.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Collaboration Opportunities:</h4>
                      <div className="space-y-2">
                        {type.opportunities.map((opportunity) => (
                          <div key={opportunity} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{opportunity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Requirements:</h4>
                      <div className="space-y-2">
                        {type.requirements.map((requirement) => (
                          <div key={requirement} className="flex items-start space-x-3">
                            <Target className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{requirement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                      <span>Start Partnership Discussion</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </section>

      {/* Current Partners */}
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
              Our Current Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to work with leading organizations across sectors to 
              create meaningful impact in communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                  <partner.logo className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
                  {partner.name}
                </h3>
                <p className="text-primary-600 text-center text-sm font-medium mb-3">
                  {partner.type} Partner
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>
                    <span className="font-medium">Partnership:</span>
                    <p>{partner.partnership}</p>
                  </div>
                  <div>
                    <span className="font-medium">Impact:</span>
                    <p>{partner.impact}</p>
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span>
                    <p>{partner.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Partnership Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real examples of how our partnerships have created transformative 
              impact in communities across India.
            </p>
          </motion.div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.partner}
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
                    src={study.image}
                    alt={study.program}
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {study.program}
                      </h3>
                      <p className="text-primary-600 font-medium">
                        Partnership with {study.partner}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Impact Achieved:</h4>
                        <div className="space-y-2">
                          {study.impact.map((impact) => (
                            <div key={impact} className="flex items-center space-x-3">
                              <Award className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{impact}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
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
              Partnership Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures successful partnerships that create 
              maximum impact for all stakeholders.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200 hidden lg:block"></div>

            <div className="space-y-12">
              {partnershipProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10 hidden lg:flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center space-x-3 mb-3 lg:hidden">
                        <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{step.step}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hidden lg:block">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Start a Partnership
            </h2>
            <p className="text-xl text-gray-600">
              Ready to create impact together? Fill out this form and our 
              partnership team will get in touch with you.
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Enter your organization name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partnership Type *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select partnership type</option>
                    <option value="corporate">Corporate Partnership</option>
                    <option value="government">Government Collaboration</option>
                    <option value="academic">Academic Institution</option>
                    <option value="international">International Organization</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your.email@organization.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Areas of Interest *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Health', 'Livelihood', 'Menstrual Equity', 'Climate Action'].map((area) => (
                    <label key={area} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Goals *
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Describe your organization's goals for this partnership and how you envision working together..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Background
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Brief description of your organization, mission, and relevant experience..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
              >
                <Handshake className="w-5 h-5" />
                <span>Submit Partnership Inquiry</span>
              </button>
            </form>
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
              Let's Create Impact Together
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join our network of partners who are making a real difference in communities 
              across India. Together, we can achieve more than we ever could alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <Handshake className="w-5 h-5" />
                <span>Start Partnership</span>
              </button>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnerWithUs;