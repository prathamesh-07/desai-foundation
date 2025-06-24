import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  MapPin, 
  Award,
  Heart,
  Briefcase,
  Droplets,
  Leaf,
  Target,
  BarChart3
} from 'lucide-react';
import { BeneficiaryStories } from '../components/home/BeneficiaryStories';

const OurImpact: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<'2024' | '2023' | '2022' | '2021' | '2020'>('2024');
  const [selectedProgram, setSelectedProgram] = useState('all');

  const years = ['2024', '2023', '2022', '2021', '2020'];
  const programs = [
    { id: 'all', name: 'All Programs', icon: Target },
    { id: 'health', name: 'Health', icon: Heart },
    { id: 'livelihood', name: 'Livelihood', icon: Briefcase },
    { id: 'menstrual-equity', name: 'Menstrual Equity', icon: Droplets },
    { id: 'climate-action', name: 'Climate Action', icon: Leaf }
  ];

  const overallImpact = {
    totalBeneficiaries: 50000,
    directBeneficiaries: 25000,
    indirectBeneficiaries: 175000,
    statesCovered: 15,
    districtsCovered: 150,
    villagesCovered: 500,
    programsCompleted: 100,
    ongoingPrograms: 45,
    partnersActive: 25
  };

  const programImpact = {
    health: {
      patientsServed: 25000,
      healthCenters: 45,
      healthWorkersTrained: 500,
      maternalDeaths: 60, // percentage reduction
      childMortality: 45, // percentage reduction
      vaccinationCoverage: 95
    },
    livelihood: {
      peopleTrained: 15000,
      employmentRate: 85,
      incomeIncrease: 300, // percentage
      womenCooperatives: 200,
      creditDisbursed: 50, // crores
      businessesSupported: 500
    },
    menstrualEquity: {
      girlsEducated: 8000,
      schoolsCovered: 150,
      attendanceIncrease: 40, // percentage
      attitudeChange: 70, // percentage
      productsDistributed: 50000,
      peerEducators: 300
    },
    climateAction: {
      villagesTransformed: 50,
      solarInstallations: 500,
      treesPlanted: 10000,
      carbonReduction: 60, // percentage
      waterConservation: 30, // percentage improvement
      wasteReduction: 80 // percentage
    }
  };

  const yearlyProgress = {
    2024: { beneficiaries: 50000, programs: 100, states: 15 },
    2023: { beneficiaries: 42000, programs: 85, states: 12 },
    2022: { beneficiaries: 35000, programs: 70, states: 10 },
    2021: { beneficiaries: 28000, programs: 55, states: 8 },
    2020: { beneficiaries: 20000, programs: 40, states: 6 }
  };

  const awards = [
    {
      title: 'National Health Excellence Award',
      year: '2024',
      organization: 'Ministry of Health & Family Welfare',
      category: 'Maternal Health',
      description: 'Recognition for outstanding contribution to reducing maternal mortality rates'
    },
    {
      title: 'UN-Habitat Award for Community Development',
      year: '2024',
      organization: 'United Nations',
      category: 'Community Development',
      description: 'International recognition for innovative community-driven development approaches'
    },
    {
      title: 'Best NGO for Women Empowerment',
      year: '2023',
      organization: 'National Women\'s Council',
      category: 'Women Empowerment',
      description: 'Excellence in creating economic opportunities for women'
    },
    {
      title: 'Climate Action Leadership Award',
      year: '2023',
      organization: 'Environmental Protection Agency',
      category: 'Climate Action',
      description: 'Leadership in renewable energy and environmental sustainability'
    },
    {
      title: 'Excellence in Rural Development',
      year: '2022',
      organization: 'Ministry of Rural Development',
      category: 'Rural Development',
      description: 'Comprehensive approach to rural community development'
    }
  ];

  const sdgAlignment = [
    { goal: 'SDG 1', name: 'No Poverty', progress: 75, color: 'bg-red-500' },
    { goal: 'SDG 3', name: 'Good Health', progress: 85, color: 'bg-green-500' },
    { goal: 'SDG 4', name: 'Quality Education', progress: 70, color: 'bg-blue-500' },
    { goal: 'SDG 5', name: 'Gender Equality', progress: 80, color: 'bg-orange-500' },
    { goal: 'SDG 6', name: 'Clean Water', progress: 65, color: 'bg-cyan-500' },
    { goal: 'SDG 7', name: 'Clean Energy', progress: 60, color: 'bg-yellow-500' },
    { goal: 'SDG 8', name: 'Decent Work', progress: 85, color: 'bg-purple-500' },
    { goal: 'SDG 13', name: 'Climate Action', progress: 70, color: 'bg-green-600' }
  ];

  return (
    <React.Fragment>
      <div className="pt-20">
        <BeneficiaryStories />
      </div>

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
                Our Impact
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Measuring the difference we make in communities across India through 
                comprehensive programs and sustainable development initiatives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overall Impact Statistics */}
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
                Impact at a Glance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our cumulative impact across all programs and initiatives since inception.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  number: overallImpact.totalBeneficiaries.toLocaleString() + '+', 
                  label: 'Total Beneficiaries', 
                  icon: Users,
                  description: 'Lives directly and indirectly impacted'
                },
                { 
                  number: overallImpact.statesCovered.toString(), 
                  label: 'States Covered', 
                  icon: MapPin,
                  description: 'Across diverse geographical regions'
                },
                { 
                  number: overallImpact.programsCompleted.toString() + '+', 
                  label: 'Programs Completed', 
                  icon: Target,
                  description: 'Successful program implementations'
                },
                { 
                  number: overallImpact.partnersActive.toString() + '+', 
                  label: 'Active Partners', 
                  icon: Award,
                  description: 'Government and institutional partnerships'
                },
                { 
                  number: overallImpact.districtsCovered.toString() + '+', 
                  label: 'Districts Reached', 
                  icon: BarChart3,
                  description: 'Administrative units covered'
                },
                { 
                  number: overallImpact.villagesCovered.toString() + '+', 
                  label: 'Villages Transformed', 
                  icon: TrendingUp,
                  description: 'Rural communities empowered'
                }
              ].map((stat, _index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: _index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Program-wise Impact */}
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
                Program-wise Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed impact metrics across our four core program areas.
              </p>
            </motion.div>

            {/* Program Selector */}
            <div className="flex justify-center mb-12">
              <div className="bg-white p-2 rounded-lg shadow-lg">
                {programs.map((program, _index) => (
                  <button
                    key={program.id}
                    onClick={() => setSelectedProgram(program.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
                      selectedProgram === program.id
                        ? 'bg-primary-600 text-white'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <program.icon className="w-4 h-4" />
                    <span>{program.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Health Program Impact */}
            {(selectedProgram === 'all' || selectedProgram === 'health') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Health Program Impact</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { number: programImpact.health.patientsServed.toLocaleString() + '+', label: 'Patients Served' },
                      { number: programImpact.health.healthCenters.toString(), label: 'Health Centers' },
                      { number: programImpact.health.healthWorkersTrained.toString() + '+', label: 'Health Workers Trained' },
                      { number: programImpact.health.maternalDeaths.toString() + '%', label: 'Reduction in Maternal Deaths' },
                      { number: programImpact.health.childMortality.toString() + '%', label: 'Reduction in Child Mortality' },
                      { number: programImpact.health.vaccinationCoverage.toString() + '%', label: 'Vaccination Coverage' }
                    ].map((metric) => (
                      <div key={metric.label} className="text-center p-4 bg-red-50 rounded-lg">
                        <div className="text-2xl font-bold text-red-600 mb-1">{metric.number}</div>
                        <div className="text-sm text-gray-700">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Livelihood Program Impact */}
            {(selectedProgram === 'all' || selectedProgram === 'livelihood') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Livelihood Program Impact</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { number: programImpact.livelihood.peopleTrained.toLocaleString() + '+', label: 'People Trained' },
                      { number: programImpact.livelihood.employmentRate.toString() + '%', label: 'Employment Rate' },
                      { number: programImpact.livelihood.incomeIncrease.toString() + '%', label: 'Average Income Increase' },
                      { number: programImpact.livelihood.womenCooperatives.toString() + '+', label: 'Women\'s Cooperatives' },
                      { number: '₹' + programImpact.livelihood.creditDisbursed.toString() + 'Cr+', label: 'Credit Disbursed' },
                      { number: programImpact.livelihood.businessesSupported.toString() + '+', label: 'Businesses Supported' }
                    ].map((metric) => (
                      <div key={metric.label} className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{metric.number}</div>
                        <div className="text-sm text-gray-700">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Menstrual Equity Program Impact */}
            {(selectedProgram === 'all' || selectedProgram === 'menstrual-equity') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                      <Droplets className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Menstrual Equity Program Impact</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { number: programImpact.menstrualEquity.girlsEducated.toLocaleString() + '+', label: 'Girls Educated' },
                      { number: programImpact.menstrualEquity.schoolsCovered.toString() + '+', label: 'Schools Covered' },
                      { number: programImpact.menstrualEquity.attendanceIncrease.toString() + '%', label: 'Attendance Increase' },
                      { number: programImpact.menstrualEquity.attitudeChange.toString() + '%', label: 'Positive Attitude Change' },
                      { number: programImpact.menstrualEquity.productsDistributed.toLocaleString() + '+', label: 'Products Distributed' },
                      { number: programImpact.menstrualEquity.peerEducators.toString() + '+', label: 'Peer Educators Trained' }
                    ].map((metric) => (
                      <div key={metric.label} className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 mb-1">{metric.number}</div>
                        <div className="text-sm text-gray-700">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Climate Action Program Impact */}
            {(selectedProgram === 'all' || selectedProgram === 'climate-action') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Climate Action Program Impact</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { number: programImpact.climateAction.villagesTransformed.toString() + '+', label: 'Villages Transformed' },
                      { number: programImpact.climateAction.solarInstallations.toString() + '+', label: 'Solar Installations' },
                      { number: programImpact.climateAction.treesPlanted.toLocaleString() + '+', label: 'Trees Planted' },
                      { number: programImpact.climateAction.carbonReduction.toString() + '%', label: 'Carbon Reduction' },
                      { number: programImpact.climateAction.waterConservation.toString() + '%', label: 'Water Conservation' },
                      { number: programImpact.climateAction.wasteReduction.toString() + '%', label: 'Waste Reduction' }
                    ].map((metric) => (
                      <div key={metric.label} className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 mb-1">{metric.number}</div>
                        <div className="text-sm text-gray-700">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Yearly Progress */}
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
                Growth Over Time
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our consistent growth and expanding impact year over year.
              </p>
            </motion.div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {years.map((year, _index) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year as '2024' | '2023' | '2022' | '2021' | '2020')}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 
                      ${selectedYear === year ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {year}
                  </button>
                ))}
              </div>

              {/* Annual Progress Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="text-5xl font-bold text-primary-600 mb-3">{yearlyProgress[selectedYear].beneficiaries.toLocaleString()}+</div>
                  <div className="text-lg font-semibold text-gray-900">Beneficiaries Reached</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="text-5xl font-bold text-green-600 mb-3">{yearlyProgress[selectedYear].programs}+</div>
                  <div className="text-lg font-semibold text-gray-900">Programs Implemented</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white p-8 rounded-xl shadow-lg text-center"
                >
                  <div className="text-5xl font-bold text-purple-600 mb-3">{yearlyProgress[selectedYear].states}+</div>
                  <div className="text-lg font-semibold text-gray-900">States Covered</div>
                </motion.div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {programs.map((program, _index) => (
                  <button
                    key={program.id}
                    onClick={() => setSelectedProgram(program.id)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 
                      ${selectedProgram === program.id ? 'bg-primary-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    <program.icon className="w-5 h-5" />
                    <span>{program.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SDG Alignment */}
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
                Our Alignment with SDGs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Contributing to the United Nations Sustainable Development Goals.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sdgAlignment.map((sdg, _index) => (
                <motion.div
                  key={sdg.goal}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: _index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">{sdg.goal}: {sdg.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${sdg.color} text-white`}>
                      {sdg.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`${sdg.color} h-2.5 rounded-full`}
                      style={{ width: `${sdg.progress}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards and Recognition */}
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
                Awards & Recognition
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our work has been recognized by leading organizations and institutions 
                for excellence and innovation in community development.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {awards.map((award, _index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: _index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start mb-4">
                    <Award className="w-8 h-8 text-primary-500 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{award.title}</h3>
                      <p className="text-gray-600 text-sm">{award.organization} ({award.year})</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{award.description}</p>
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
                Amplify Our Impact
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Help us reach more communities and create greater impact. Your support 
                enables us to expand our programs and transform more lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/donate"
                  className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                >
                  Support Our Mission
                </a>
                <a
                  href="/partner-with-us"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
                >
                  Partner With Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default OurImpact;