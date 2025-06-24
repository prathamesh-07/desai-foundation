import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Clock, 
  MapPin,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  Globe,
  UserPlus,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const GetInvolved: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const categories = [
    { id: 'all', name: 'All Opportunities' },
    { id: 'health', name: 'Health' },
    { id: 'livelihood', name: 'Livelihood' },
    { id: 'menstrual-equity', name: 'Menstrual Equity' },
    { id: 'climate-action', name: 'Climate Action' },
    { id: 'administration', name: 'Administration' },
    { id: 'fundraising', name: 'Fundraising' }
  ];

  const locations = [
    'all', 'Remote', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 
    'Kolkata', 'Pune', 'Hyderabad', 'Ahmedabad', 'Jaipur'
  ];

  const volunteerOpportunities = [
    {
      id: 1,
      title: 'Community Health Volunteer',
      category: 'health',
      location: 'Multiple locations',
      commitment: '4-6 hours/week',
      duration: '6 months minimum',
      description: 'Support community health workers in conducting health camps, awareness programs, and follow-up visits with beneficiaries.',
      requirements: [
        'Basic understanding of health and hygiene',
        'Good communication skills',
        'Willingness to work in rural areas',
        'Commitment to regular participation'
      ],
      skills: ['Communication', 'Empathy', 'Basic Health Knowledge'],
      impact: 'Directly support 50+ families with health services',
      featured: true
    },
    {
      id: 2,
      title: 'Digital Skills Trainer',
      category: 'livelihood',
      location: 'Urban centers',
      commitment: '6-8 hours/week',
      duration: '3 months minimum',
      description: 'Teach digital literacy, online business skills, and e-commerce to women entrepreneurs in our livelihood programs.',
      requirements: [
        'Proficiency in computers and internet',
        'Experience in digital marketing or e-commerce',
        'Patience and teaching ability',
        'Fluency in local language'
      ],
      skills: ['Digital Marketing', 'Teaching', 'Computer Skills'],
      impact: 'Train 20+ women in digital entrepreneurship',
      featured: false
    },
    {
      id: 3,
      title: 'Menstrual Health Educator',
      category: 'menstrual-equity',
      location: 'Schools and communities',
      commitment: '3-4 hours/week',
      duration: '4 months minimum',
      description: 'Conduct awareness sessions in schools and communities to break taboos and educate about menstrual health and hygiene.',
      requirements: [
        'Comfortable discussing menstrual health',
        'Experience working with adolescents',
        'Cultural sensitivity',
        'Strong presentation skills'
      ],
      skills: ['Public Speaking', 'Health Education', 'Youth Engagement'],
      impact: 'Educate 200+ girls and women about menstrual health',
      featured: false
    },
    {
      id: 4,
      title: 'Environmental Advocate',
      category: 'climate-action',
      location: 'Rural areas',
      commitment: '5-7 hours/week',
      duration: '6 months minimum',
      description: 'Promote renewable energy adoption, environmental conservation, and sustainable practices in rural communities.',
      requirements: [
        'Knowledge of environmental issues',
        'Interest in renewable energy',
        'Ability to work in rural settings',
        'Problem-solving skills'
      ],
      skills: ['Environmental Knowledge', 'Community Engagement', 'Project Management'],
      impact: 'Help 10+ villages adopt sustainable practices',
      featured: false
    },
    {
      id: 5,
      title: 'Grant Writer',
      category: 'fundraising',
      location: 'Remote',
      commitment: '8-10 hours/week',
      duration: '12 months minimum',
      description: 'Research funding opportunities and write compelling grant proposals to secure funding for our programs.',
      requirements: [
        'Excellent writing skills',
        'Experience in grant writing',
        'Research abilities',
        'Understanding of nonprofit sector'
      ],
      skills: ['Grant Writing', 'Research', 'Proposal Development'],
      impact: 'Secure funding for multiple program expansions',
      featured: false
    },
    {
      id: 6,
      title: 'Social Media Manager',
      category: 'administration',
      location: 'Remote',
      commitment: '5-6 hours/week',
      duration: '6 months minimum',
      description: 'Manage our social media presence, create engaging content, and help spread awareness about our work.',
      requirements: [
        'Social media expertise',
        'Content creation skills',
        'Understanding of nonprofit messaging',
        'Graphic design skills (preferred)'
      ],
      skills: ['Social Media', 'Content Creation', 'Digital Marketing'],
      impact: 'Reach 10,000+ people with our mission',
      featured: false
    },
    {
      id: 7,
      title: 'Program Coordinator',
      category: 'administration',
      location: 'Delhi',
      commitment: '15-20 hours/week',
      duration: '12 months minimum',
      description: 'Coordinate program activities, manage volunteer teams, and ensure smooth implementation of initiatives.',
      requirements: [
        'Program management experience',
        'Leadership skills',
        'Excellent organizational abilities',
        'Nonprofit experience preferred'
      ],
      skills: ['Project Management', 'Leadership', 'Coordination'],
      impact: 'Oversee programs serving 1,000+ beneficiaries',
      featured: true
    },
    {
      id: 8,
      title: 'Financial Literacy Trainer',
      category: 'livelihood',
      location: 'Multiple locations',
      commitment: '4-5 hours/week',
      duration: '4 months minimum',
      description: 'Teach basic financial literacy, banking, and money management skills to women in our livelihood programs.',
      requirements: [
        'Financial background or certification',
        'Teaching experience',
        'Patience and empathy',
        'Local language proficiency'
      ],
      skills: ['Financial Knowledge', 'Teaching', 'Communication'],
      impact: 'Improve financial literacy for 100+ women',
      featured: false
    }
  ];

  const skillBasedOpportunities = [
    {
      skill: 'Technology',
      opportunities: [
        'Website development and maintenance',
        'Mobile app development for field workers',
        'Database management and analytics',
        'IT support for field offices'
      ],
      icon: Globe
    },
    {
      skill: 'Marketing & Communications',
      opportunities: [
        'Content creation and storytelling',
        'Social media management',
        'Public relations and media outreach',
        'Brand development and design'
      ],
      icon: Target
    },
    {
      skill: 'Finance & Legal',
      opportunities: [
        'Financial planning and budgeting',
        'Grant writing and fundraising',
        'Legal compliance and documentation',
        'Audit and financial reporting'
      ],
      icon: Briefcase
    },
    {
      skill: 'Training & Education',
      opportunities: [
        'Curriculum development',
        'Training program design',
        'Capacity building workshops',
        'Educational material creation'
      ],
      icon: GraduationCap
    }
  ];

  const volunteerBenefits = [
    'Meaningful impact on communities',
    'Professional skill development',
    'Networking opportunities',
    'Certificate of appreciation',
    'Reference letters for career growth',
    'Exclusive volunteer events and recognition'
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Apply Online',
      description: 'Fill out our volunteer application form with your interests and availability.'
    },
    {
      step: 2,
      title: 'Interview',
      description: 'Participate in a brief interview to discuss your motivations and match you with the right opportunity.'
    },
    {
      step: 3,
      title: 'Orientation',
      description: 'Attend our volunteer orientation to learn about our mission, programs, and guidelines.'
    },
    {
      step: 4,
      title: 'Training',
      description: 'Receive specific training for your chosen volunteer role and responsibilities.'
    },
    {
      step: 5,
      title: 'Start Volunteering',
      description: 'Begin your volunteer journey and start making a positive impact in communities.'
    }
  ];

  const filteredOpportunities = volunteerOpportunities.filter(opportunity => {
    const categoryMatch = selectedCategory === 'all' || opportunity.category === selectedCategory;
    const locationMatch = selectedLocation === 'all' || 
                         opportunity.location.toLowerCase().includes(selectedLocation.toLowerCase()) ||
                         (selectedLocation === 'Remote' && opportunity.location === 'Remote');
    return categoryMatch && locationMatch;
  });

  const featuredOpportunities = volunteerOpportunities.filter(opp => opp.featured);

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
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join our community of passionate volunteers and advocates working to create 
              positive change. Use your skills, time, and energy to make a lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Active Volunteers', icon: Users },
              { number: '50+', label: 'Volunteer Roles', icon: Target },
              { number: '15', label: 'States Covered', icon: MapPin },
              { number: '95%', label: 'Volunteer Satisfaction', icon: Award }
            ].map((stat, index) => (
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

      {/* Featured Opportunities */}
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
              Featured Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-impact volunteer roles where we currently need the most support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-sm text-gray-500">{opportunity.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {opportunity.title}
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{opportunity.commitment}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {opportunity.description}
                </p>

                <div className="bg-primary-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Target className="w-4 h-4 text-primary-600" />
                    <span className="font-medium text-primary-800">Your Impact:</span>
                  </div>
                  <p className="text-primary-700">{opportunity.impact}</p>
                </div>

                <button className="w-full bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Opportunities */}
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
              All Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect volunteer role that matches your skills, interests, and availability.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    opportunity.category === 'health' ? 'bg-red-100 text-red-800' :
                    opportunity.category === 'livelihood' ? 'bg-blue-100 text-blue-800' :
                    opportunity.category === 'menstrual-equity' ? 'bg-purple-100 text-purple-800' :
                    opportunity.category === 'climate-action' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {categories.find(c => c.id === opportunity.category)?.name}
                  </span>
                  {opportunity.featured && (
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {opportunity.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{opportunity.commitment}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{opportunity.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {opportunity.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-600 text-lg">
                No opportunities found matching your criteria. Try adjusting your filters.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Skill-Based Volunteering */}
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
              Skill-Based Volunteering
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use your professional skills to create maximum impact. We welcome 
              experts from all fields to contribute their expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillBasedOpportunities.map((category, index) => (
              <motion.div
                key={category.skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {category.skill}
                </h3>
                <div className="space-y-2">
                  {category.opportunities.map((opportunity) => (
                    <div key={opportunity} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{opportunity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
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
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple application process ensures we match you with the right 
              opportunity based on your skills and interests.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200 hidden lg:block"></div>

            <div className="space-y-12">
              {applicationProcess.map((step, index) => (
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

      {/* Volunteer Benefits */}
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
                Why Volunteer With Us?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Volunteering with Project Sitaare offers more than just the satisfaction 
                of helping others. You'll gain valuable experience, develop new skills, 
                and become part of a community dedicated to positive change.
              </p>
              
              <div className="space-y-4">
                {volunteerBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center space-x-2">
                <UserPlus className="w-5 h-5" />
                <span>Start Your Application</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/6995094/pexels-photo-6995094.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Volunteers"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
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
              Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our volunteer coordination team is here to help you find the perfect 
              opportunity and answer any questions you may have.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: 'Email Us',
                content: 'volunteers@projectsitaare.org',
                description: 'Send us your questions or application'
              },
              {
                icon: Phone,
                title: 'Call Us',
                content: '+91 98765 43210',
                description: 'Speak with our volunteer coordinator'
              },
              {
                icon: Calendar,
                title: 'Schedule a Call',
                content: 'Book a consultation',
                description: 'Discuss opportunities that match your interests'
              }
            ].map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-primary-600 font-medium mb-2">{contact.content}</p>
                <p className="text-gray-600 text-sm">{contact.description}</p>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join our community of volunteers and start creating positive change today. 
              Every skill, every hour, and every effort counts towards building a better future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <UserPlus className="w-5 h-5" />
                <span>Apply to Volunteer</span>
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

export default GetInvolved;