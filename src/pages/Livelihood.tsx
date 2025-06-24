import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  DollarSign, 
  Users, 
  TrendingUp,
  Award,
  Target,
  MapPin,
  Clock,
  Star
} from 'lucide-react';

const Livelihood: React.FC = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'Skill Development Training',
      description: 'Comprehensive training programs in high-demand skills including digital literacy, handicrafts, agriculture, and technical trades.',
      achievements: ['15,000+ people trained', '25+ skill categories', '85% job placement rate'],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: DollarSign,
      title: 'Microfinance & Credit',
      description: 'Financial inclusion through microfinance, self-help groups, and credit facilities to support small businesses and entrepreneurship.',
      achievements: ['₹50 crore disbursed', '5,000+ borrowers', '98% repayment rate'],
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Women\'s Cooperatives',
      description: 'Empowering women through cooperative societies, collective enterprises, and leadership development programs.',
      achievements: ['200+ cooperatives formed', '8,000+ women members', '₹2 crore annual turnover'],
      image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Briefcase,
      title: 'Enterprise Development',
      description: 'Supporting small and medium enterprises through business development services, mentoring, and market linkages.',
      achievements: ['500+ enterprises supported', '2,000+ jobs created', '60% revenue growth'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const impact = [
    { number: '15,000+', label: 'People Trained', icon: GraduationCap },
    { number: '85%', label: 'Employment Rate', icon: TrendingUp },
    { number: '12', label: 'States Covered', icon: MapPin },
    { number: '₹50Cr+', label: 'Credit Disbursed', icon: DollarSign }
  ];

  const skills = [
    'Digital Marketing',
    'Computer Skills',
    'Tailoring & Embroidery',
    'Food Processing',
    'Handicrafts',
    'Beauty & Wellness',
    'Electrical Work',
    'Plumbing',
    'Mobile Repair',
    'Agriculture Techniques',
    'Livestock Management',
    'Financial Literacy'
  ];

  const successStories = [
    {
      name: 'Sunita Devi',
      location: 'Bihar',
      program: 'Tailoring Training',
      story: 'After completing our 6-month tailoring program, Sunita started her own boutique. She now employs 5 other women and earns ₹15,000 monthly.',
      income: '₹15,000/month',
      image: 'https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Uttar Pradesh',
      program: 'Digital Marketing',
      story: 'From a daily wage laborer to a successful digital marketer, Rajesh now runs his own agency and has trained 50+ youth in his village.',
      income: '₹25,000/month',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Meera Cooperative',
      location: 'Rajasthan',
      program: 'Women\'s Cooperative',
      story: 'This 50-member women\'s cooperative produces organic food products and has achieved an annual turnover of ₹10 lakhs in just 2 years.',
      income: '₹10L turnover',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const partners = [
    'National Skill Development Corporation',
    'Ministry of Rural Development',
    'State Skill Development Missions',
    'Industry Associations',
    'Local Banks & Financial Institutions',
    'Technology Partners'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Livelihood Programs
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Creating sustainable economic opportunities through skill development, 
              microfinance, and enterprise support for marginalized communities.
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
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
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
              Our Livelihood Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to create sustainable income opportunities 
              and economic empowerment for communities.
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
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
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
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
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

      {/* Skills Training */}
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
              Skills We Teach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Market-relevant skills training programs designed to meet industry demands 
              and create immediate employment opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of transformation from beneficiaries who have built 
              sustainable livelihoods through our programs.
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
                    <p className="text-blue-600 font-medium">{story.location}</p>
                    <p className="text-sm text-gray-500">{story.program}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{story.story}</p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 font-bold text-lg">
                      Current Income: {story.income}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Process */}
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
              Our Training Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to skill development that ensures maximum 
              employment outcomes and sustainable livelihoods.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Individual skill assessment and career counseling to identify the best training program.',
                icon: Target
              },
              {
                step: '02',
                title: 'Training',
                description: '3-6 months of intensive hands-on training with industry-standard equipment and curriculum.',
                icon: GraduationCap
              },
              {
                step: '03',
                title: 'Certification',
                description: 'Government-recognized certification upon successful completion of training and assessment.',
                icon: Award
              },
              {
                step: '04',
                title: 'Placement',
                description: 'Job placement assistance and ongoing support for entrepreneurship and business development.',
                icon: Star
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <process.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-900">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
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
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with government agencies, industry partners, and financial 
              institutions to create comprehensive livelihood solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{partner}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Empower Through Employment
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Support our livelihood programs to create more opportunities for 
              skill development and sustainable employment in underserved communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Fund Training Programs
              </a>
              <a
                href="/get-involved"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
              >
                Become a Mentor
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Livelihood;