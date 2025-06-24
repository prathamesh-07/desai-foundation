import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Award, Users, Heart, Globe } from 'lucide-react';

const OurTeam: React.FC = () => {
  const leadership = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Founder & Executive Director',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'With over 15 years of experience in public health and community development, Dr. Kumar founded Project Sitaare to address systemic inequalities in healthcare and education.',
      expertise: ['Public Health', 'Community Development', 'Policy Advocacy'],
      email: 'rajesh@projectsitaare.org',
      linkedin: '#'
    },
    {
      name: 'Priya Sharma',
      position: 'Director of Programs',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Priya leads our program implementation across all focus areas, bringing 12+ years of experience in international development and women\'s empowerment.',
      expertise: ['Program Management', 'Women\'s Empowerment', 'International Development'],
      email: 'priya@projectsitaare.org',
      linkedin: '#'
    },
    {
      name: 'Dr. Amit Patel',
      position: 'Head of Health Programs',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'A qualified physician with expertise in rural healthcare delivery, Dr. Patel oversees our comprehensive health initiatives and community health worker training programs.',
      expertise: ['Rural Healthcare', 'Medical Training', 'Health Systems'],
      email: 'amit@projectsitaare.org',
      linkedin: '#'
    },
    {
      name: 'Meera Joshi',
      position: 'Director of Operations',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Meera ensures efficient operations across all our programs, with a background in organizational management and logistics coordination for large-scale initiatives.',
      expertise: ['Operations Management', 'Logistics', 'Team Leadership'],
      email: 'meera@projectsitaare.org',
      linkedin: '#'
    }
  ];

  const departmentHeads = [
    {
      name: 'Ravi Gupta',
      position: 'Head of Livelihood Programs',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Skill Development', 'Microfinance', 'Entrepreneurship']
    },
    {
      name: 'Sunita Reddy',
      position: 'Head of Menstrual Equity',
      image: 'https://images.pexels.com/photos/3823489/pexels-photo-3823489.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Women\'s Health', 'Education', 'Community Outreach']
    },
    {
      name: 'Arjun Singh',
      position: 'Head of Climate Action',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Environmental Science', 'Renewable Energy', 'Sustainability']
    },
    {
      name: 'Kavitha Nair',
      position: 'Head of Communications',
      image: 'https://images.pexels.com/photos/3823490/pexels-photo-3823490.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Public Relations', 'Digital Marketing', 'Storytelling']
    },
    {
      name: 'Vikram Mehta',
      position: 'Head of Finance',
      image: 'https://images.pexels.com/photos/3785078/pexels-photo-3785078.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Financial Management', 'Compliance', 'Grant Management']
    },
    {
      name: 'Deepika Roy',
      position: 'Head of Monitoring & Evaluation',
      image: 'https://images.pexels.com/photos/3823491/pexels-photo-3823491.jpeg?auto=compress&cs=tinysrgb&w=400',
      expertise: ['Data Analysis', 'Impact Assessment', 'Research Methods']
    }
  ];

  const advisors = [
    {
      name: 'Prof. Sanjay Desai',
      position: 'Senior Advisor - Health Policy',
      organization: 'All Institute of Medical Sciences',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Dr. Rashmi Bansal',
      position: 'Advisor - Women\'s Empowerment',
      organization: 'Women\'s Development Corporation',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Mr. Anil Khanna',
      position: 'Advisor - Sustainable Development',
      organization: 'Environmental Research Institute',
      image: 'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Combined Experience', icon: Award },
    { number: '10+', label: 'Languages Spoken', icon: Globe },
    { number: '100%', label: 'Passion for Impact', icon: Heart }
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
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Passionate professionals dedicated to creating lasting change through innovative 
              programs and community-centered approaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our senior leadership brings decades of experience in public health, development, 
              and social impact to guide Project Sitaare's mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary-100"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary-600 font-medium mb-4">
                        {member.position}
                      </p>
                      <div className="flex space-x-3 mb-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-400 hover:text-primary-600 transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                        <a
                          href={member.linkedin}
                          className="text-gray-400 hover:text-primary-600 transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Heads */}
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
              Department Heads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized leaders who drive excellence in their respective program areas 
              and ensure effective implementation of our initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentHeads.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.position}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
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
              Advisory Board
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distinguished experts and thought leaders who provide strategic guidance 
              and oversight to ensure our programs achieve maximum impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-primary-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {advisor.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {advisor.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {advisor.organization}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
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
              Join Our Team
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're always looking for passionate individuals who share our commitment 
              to creating positive change in communities across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@projectsitaare.org"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
              >
                Send Your Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;