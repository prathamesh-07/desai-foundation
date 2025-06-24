import React from 'react';
import { motion } from 'framer-motion';
import { 
  Droplets, 
  BookOpen, 
  Users, 
  School, 
  Heart,
  Award,
  Target,
  MapPin,
  TrendingUp,
  Shield
} from 'lucide-react';

const MenstrualEquity: React.FC = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'Menstrual Health Education',
      description: 'Comprehensive education programs addressing myths, taboos, and providing accurate information about menstrual health and hygiene.',
      achievements: ['8,000+ girls educated', '300+ workshops conducted', '95% knowledge improvement'],
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Droplets,
      title: 'Hygiene Product Distribution',
      description: 'Providing access to affordable, quality menstrual hygiene products including biodegradable pads and menstrual cups.',
      achievements: ['50,000+ products distributed', '150+ distribution points', '80% cost reduction'],
      image: 'https://images.pexels.com/photos/6129378/pexels-photo-6129378.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: School,
      title: 'School Programs',
      description: 'Implementing menstrual health programs in schools, including infrastructure development and teacher training.',
      achievements: ['150+ schools covered', '5,000+ students reached', '40% attendance improvement'],
      image: 'https://images.pexels.com/photos/8923143/pexels-photo-8923143.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Community Mobilization',
      description: 'Engaging communities, families, and local leaders to create supportive environments and break menstrual taboos.',
      achievements: ['200+ communities engaged', '1,000+ mothers trained', '70% attitude change'],
      image: 'https://images.pexels.com/photos/8923155/pexels-photo-8923155.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const impact = [
    { number: '8,000+', label: 'Girls Educated', icon: BookOpen },
    { number: '150+', label: 'Schools Covered', icon: School },
    { number: '10', label: 'States Reached', icon: MapPin },
    { number: '40%', label: 'Attendance Increase', icon: TrendingUp }
  ];

  const challenges = [
    {
      title: 'Social Stigma',
      description: 'Deep-rooted cultural taboos and misconceptions surrounding menstruation',
      solution: 'Community engagement and education programs involving all stakeholders'
    },
    {
      title: 'Lack of Access',
      description: 'Limited availability and high cost of menstrual hygiene products',
      solution: 'Subsidized distribution and local manufacturing initiatives'
    },
    {
      title: 'Poor Infrastructure',
      description: 'Inadequate sanitation facilities in schools and public spaces',
      solution: 'Infrastructure development and maintenance programs'
    },
    {
      title: 'Limited Awareness',
      description: 'Lack of accurate information about menstrual health and hygiene',
      solution: 'Comprehensive education and awareness campaigns'
    }
  ];

  const successStories = [
    {
      name: 'Priya Kumari',
      age: '16',
      location: 'Bihar',
      story: 'After attending our menstrual health workshop, Priya became a peer educator in her school, helping 200+ girls understand menstrual health and hygiene.',
      impact: 'Peer educator for 200+ girls',
      image: 'https://images.pexels.com/photos/8923143/pexels-photo-8923143.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sunita Devi',
      age: '35',
      location: 'Rajasthan',
      story: 'A mother who initially opposed menstrual education, Sunita now advocates for her daughter\'s rights and has convinced 50+ families to support the program.',
      impact: 'Changed 50+ family attitudes',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Greenfield School',
      location: 'West Bengal',
      story: 'This rural school saw a 45% increase in girls\' attendance after implementing our comprehensive menstrual health program and installing proper facilities.',
      impact: '45% attendance increase',
      image: 'https://images.pexels.com/photos/8923155/pexels-photo-8923155.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const initiatives = [
    'Menstrual Health Awareness Campaigns',
    'Peer Educator Training Programs',
    'Teacher Training Workshops',
    'Parent-Community Engagement',
    'School Infrastructure Development',
    'Subsidized Product Distribution',
    'Local Manufacturing Support',
    'Policy Advocacy',
    'Research & Documentation',
    'Digital Health Platforms'
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              <Droplets className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Menstrual Equity
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Breaking barriers and building awareness for menstrual health and hygiene 
              to ensure every girl and woman can manage menstruation with dignity.
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
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge */}
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
              The Challenge We Address
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Menstrual health remains a significant barrier to girls' education and women's 
              participation in society across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-purple-600">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {challenge.description}
                </p>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-sm font-medium text-gray-900">Our Solution:</p>
                  <p className="text-sm text-gray-600">{challenge.solution}</p>
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
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive initiatives addressing all aspects of menstrual health 
              and hygiene through education, access, and advocacy.
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
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
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
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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

      {/* Our Initiatives */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multi-faceted approach to creating lasting change in menstrual health 
              awareness and access across communities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{initiative}</h3>
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
              Stories of Change
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories of transformation from girls, women, and communities 
              who have benefited from our menstrual equity programs.
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
                    <p className="text-purple-600 font-medium">{story.age ? `Age ${story.age}, ` : ''}{story.location}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{story.story}</p>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-800 font-medium text-sm">
                      Impact: {story.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
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
              The Impact of Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable changes in knowledge, attitudes, and practices around 
              menstrual health in the communities we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '95%', label: 'Knowledge Improvement', description: 'Girls showing improved understanding of menstrual health' },
              { number: '70%', label: 'Attitude Change', description: 'Families with positive attitude towards menstruation' },
              { number: '40%', label: 'Attendance Increase', description: 'Improvement in girls\' school attendance' },
              { number: '80%', label: 'Cost Reduction', description: 'Reduction in menstrual product costs for families' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Support Menstrual Equity
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Help us break the silence and stigma around menstruation. Support our 
              programs to ensure every girl can manage her periods with dignity and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Donate for Dignity
              </a>
              <a
                href="/get-involved"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105"
              >
                Become an Advocate
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MenstrualEquity;