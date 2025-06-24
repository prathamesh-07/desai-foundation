import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  CreditCard, 
  Shield, 
  Gift,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Calendar,
  Award
} from 'lucide-react';

const Donate: React.FC = () => {
  const [donationType, setDonationType] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(2000);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('general');

  const donationAmounts = [500, 1000, 2000, 5000, 10000];
  
  const programs = [
    { id: 'general', name: 'Where Most Needed', description: 'Support our most urgent priorities' },
    { id: 'health', name: 'Health Programs', description: 'Maternal health, child nutrition, and community wellness' },
    { id: 'livelihood', name: 'Livelihood Programs', description: 'Skill development and income generation' },
    { id: 'menstrual-equity', name: 'Menstrual Equity', description: 'Breaking barriers and building awareness' },
    { id: 'climate-action', name: 'Climate Action', description: 'Environmental sustainability and renewable energy' }
  ];

  const impactExamples = [
    {
      amount: 500,
      impact: 'Provides menstrual hygiene products for 5 girls for 6 months',
      icon: Gift,
      color: 'text-purple-600'
    },
    {
      amount: 1000,
      impact: 'Funds health check-ups for 10 pregnant women',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      amount: 2000,
      impact: 'Supports digital skills training for one woman entrepreneur',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      amount: 5000,
      impact: 'Provides complete maternal health care for 5 mothers',
      icon: Users,
      color: 'text-green-600'
    },
    {
      amount: 10000,
      impact: 'Installs solar lighting system for one rural household',
      icon: Award,
      color: 'text-yellow-600'
    }
  ];

  const donorBenefits = [
    'Tax deduction under Section 80G',
    'Regular impact updates and reports',
    'Invitation to exclusive donor events',
    'Direct communication with beneficiaries',
    'Annual impact certificate',
    'Recognition in our annual report'
  ];

  const paymentMethods = [
    { name: 'Credit/Debit Card', icon: CreditCard, available: true },
    { name: 'Net Banking', icon: Shield, available: true },
    { name: 'UPI', icon: DollarSign, available: true },
    { name: 'Bank Transfer', icon: Target, available: true }
  ];

  const monthlyImpact = [
    {
      amount: '₹500/month',
      impact: 'Supports one girl\'s education and menstrual health for a year',
      beneficiaries: '12 girls annually'
    },
    {
      amount: '₹1,000/month',
      impact: 'Provides healthcare for 10 families throughout the year',
      beneficiaries: '120 people annually'
    },
    {
      amount: '₹2,500/month',
      impact: 'Funds complete livelihood training for 3 women entrepreneurs',
      beneficiaries: '36 women annually'
    },
    {
      amount: '₹5,000/month',
      impact: 'Supports a community health center for rural healthcare',
      beneficiaries: '600+ people annually'
    }
  ];

  const getCurrentImpact = () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
    return impactExamples.find(example => example.amount <= amount) || impactExamples[0];
  };

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
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Make a Donation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your contribution directly impacts communities in need. Join thousands of 
              supporters helping us create lasting change across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose Your Contribution</h2>

              {/* Donation Type */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Donation Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setDonationType('one-time')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      donationType === 'one-time'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Gift className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-medium">One-time</div>
                  </button>
                  <button
                    onClick={() => setDonationType('monthly')}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      donationType === 'monthly'
                        ? 'border-primary-500 bg-primary-50 text-primary-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Calendar className="w-6 h-6 mx-auto mb-2" />
                    <div className="font-medium">Monthly</div>
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Select Amount (₹)
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-3 rounded-lg border-2 font-medium transition-colors ${
                        selectedAmount === amount && !customAmount
                          ? 'border-primary-500 bg-primary-50 text-primary-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* Program Selection */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Choose Program
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {programs.map((program, _index) => (
                    <option key={program.id} value={program.id}>
                      {program.name} - {program.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Payment Method
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {paymentMethods.map((method, _index) => (
                    <div
                      key={method.name}
                      className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      <method.icon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-primary-700 transition-colors shadow-lg"
              >
                Donate Now <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Impact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-8">Your Impact</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Every contribution, big or small, creates a ripple effect of positive change. 
                Here's what your donation can achieve:
              </p>
              
              {donationType === 'one-time' ? (
                <div className="space-y-6">
                  {impactExamples.map((example, _index) => (
                    <motion.div
                      key={example.amount}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: _index * 0.1 }}
                      className="flex items-start bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-30 mr-4">
                        <example.icon className={`w-5 h-5 ${example.color}`} />
                      </div>
                      <div>
                        <p className="font-bold text-xl">₹{example.amount.toLocaleString()}</p>
                        <p className="text-sm opacity-90">{example.impact}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {monthlyImpact.map((item, _index) => (
                    <motion.div
                      key={item.amount}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: _index * 0.1 }}
                      className="flex items-start bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-30 mr-4">
                        <Heart className="w-5 h-5 text-red-300" />
                      </div>
                      <div>
                        <p className="font-bold text-xl">{item.amount}</p>
                        <p className="text-sm opacity-90">{item.impact}</p>
                        <p className="text-xs opacity-70">Impacts: {item.beneficiaries}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donor Benefits */}
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
              Why Donate to Project Sitaare?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the impact, we offer transparency, accountability, and a chance to be part of a larger mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donorBenefits.map((benefit, _index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: _index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Your Generosity. Their Future.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-10"
          >
            Every donation helps us extend our reach, deepen our impact, and transform more lives. 
            Partner with us to build a healthier, more equitable, and sustainable future for all.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 transition-colors"
          >
            Donate Today
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Donate;