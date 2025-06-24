import React from 'react';
import { Heart, Target, Users, Award, Globe, TrendingUp, MapPin } from 'lucide-react';
import { BeneficiaryStories } from '../components/home/BeneficiaryStories';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner with Children */}
      <section className="relative h-[400px] bg-gradient-to-r from-pink-200 via-purple-200 to-pink-300 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ORFvzQwfcTzGKDsplz9OhXp6AMtPoqbAqw&s" 
            alt="Happy children celebrating"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30"></div>
        </div>
        
        {/* Top navigation placeholder */}
        <div className="absolute top-4 right-4 flex space-x-4 text-white">
          <button className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">Home</button>
          <button className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">About</button>
          <button className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">Programs</button>
          <button className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm">Contact</button>
          <button className="px-4 py-2 bg-pink-600 rounded-lg">Donate</button>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Video Section */}
        <section className="mb-16">
        <div className="relative shadow-2xl rounded-xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/JiGzZkab6JA"
                title="Hillary Clinton on The Desai Foundation's Heroes for Humanity"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-pink-600">Our Mission</h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Project Sitaare works to ensure that every community has equitable access to quality 
                healthcare, educational opportunities, and livelihood programs that address the fundamental 
                barriers to health and development.
              </p>
              <p>
                We believe that health is not just about providing life-saving treatment, but about 
                addressing the root causes that prevent people from living healthy lives.
              </p>
              <p>
                We are driven by the vision that everyone everywhere should be able to live a healthy, 
                fulfilling life, regardless of who they are, where they live, or how much money they have.
              </p>
              <p>
                Our strategies and our programs are developed based on deep conversations with communities 
                to ensure their life experiences and insights influence our solutions.
              </p>
              <p>
                We work to create positive, sustainable change by building long-term partnerships and 
                supporting local leaders who understand their communities' needs best.
              </p>
              <p>
                Progress is to be able to realize measurable, meaningful change that significantly improves 
                the quality of life for the communities we serve.
              </p>
            </div>
          </div>
          <div>
              <img
                src="https://www.desaifoundationtrust.org/wp-content/uploads/2025/02/Mission-Circle-1024x964.png"
                alt="Our Mission"
                className="max-w-md mx-auto"
              />
          </div>
        </section>

        {/* Impact Statistics Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center text-pink-600">Our Impact</h2>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Top row */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-pink-100">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-pink-600">10 MIL+ PEOPLE</div>
              <div className="text-sm text-gray-600 mt-1">People Reached Through Our Programs</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-pink-100">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-pink-600">5 MIL+</div>
              <div className="text-sm text-gray-600 mt-1">Direct Beneficiaries</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-pink-100">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-pink-600">2.7 MILLION</div>
              <div className="text-sm text-gray-600 mt-1">Health Consultations Provided</div>
            </div>
            
            {/* Bottom row */}
            <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-pink-100">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-pink-600">5.5 MILLION</div>
              <div className="text-sm text-gray-600 mt-1">People Trained in Life Skills</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-pink-100">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-pink-600">75,000+</div>
              <div className="text-sm text-gray-600 mt-1">Women and Girls Reached</div>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg border border-pink-100">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-pink-600">350,000+</div>
              <div className="text-sm text-gray-600 mt-1">Climate Action Beneficiaries</div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-pink-600">Our Story</h2>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                In 2007, three visionaries came together - fueled by the shared vision of a world 
                where anyone who needs it can access the world most advanced health innovations, 
                regardless of where they live.
              </p>
              <p>
                Today, Project Sitaare stands out as a global pioneer in designing solutions that 
                benefit everyone. No matter how their backgrounds compare or how much money they 
                earn. Our pioneering approaches and innovative solutions have made us a reference 
                point for many organisations at national and global levels.
              </p>
              <p>
                From the beginning, the Project Sitaare Foundation chose to develop partnerships and 
                initiatives that could have positive ramifications for all demographics, including 
                women and children who are most challenged by the health issues.
              </p>
              <p>
                As the organisation has evolved over the years, the Project Foundation pioneered 
                approaches to work with communities to understand what they want, and address the 
                problems most important to them.
              </p>
              <p>
                Today, the Project Foundation continues 17 nations, working closely with 
                government and organizations we are working to strengthen the health system 
                infrastructure, and develop new ways to strengthen systems more innovative.
              </p>
              <p>
                People are at the heart of our efforts. Having built strong relationships across 
                sectors to generate innovation and collaboration to develop the foundations of 
                systemic transformation is important to the future.
              </p>
            </div>
          </div>
          
          {/* Leadership Profile */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-8 text-white">
            <div className="flex items-start space-x-4">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150" 
                alt="Dr. Rajesh Kumar"
                className="w-20 h-20 rounded-full object-cover border-3 border-white"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-purple-100 text-sm mb-4">Founder & Executive Director</p>
                <div className="space-y-3 text-sm">
                  <p>
                    "At Project Sitaare, we believe that sustainable change begins with understanding 
                    the unique needs of each community we serve."
                  </p>
                  <p>
                    "Our approach is not just about providing services, but about building lasting 
                    partnerships that empower people to become agents of their own transformation."
                  </p>
                  <p>
                    "We measure success not just by numbers reached, but by the sustainable 
                    improvements in quality of life and community resilience."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Beneficiary Stories Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <BeneficiaryStories />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-pink-600">Our History</h2>
            <p className="text-gray-600">A Timeline - 2007 - Present</p>
          </div>

          {/* Milestone Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 max-w-md mx-auto text-center">
            <img 
              src="https://images.pexels.com/photos/5428271/pexels-photo-5428271.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="Happy family"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <div className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
              10 MILLION!
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              2024: A Year of Phenomenal Growth and Innovation
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              In September, the Project Sitaare Foundation celebrated a monumental achievement: 
              reaching 10 million lives impacted through our comprehensive health, education, 
              and livelihood programs. This milestone represents years of dedicated work, 
              community partnerships, and innovative approaches to addressing the most pressing 
              challenges facing underserved populations. 
              We've expanded our reach to 15 states, 
              introducing new technologies and evidence-based interventions that continue to 
              strengthen health systems and empower communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2023: Expanding Our Footprint</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expanded operations to 5 new states, establishing 20 new community health centers and 
                launching our first large-scale climate action initiatives in rural areas.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2020: National Recognition</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Received the 'National Health Innovator Award' for our pioneering work in digital health 
                solutions for last-mile communities, impacting 1 million lives.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2015: Livelihood Empowerment</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Launched comprehensive livelihood programs, empowering over 50,000 women through 
                skill development, micro-enterprise support, and market linkages.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2010: Education & Awareness</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Initiated large-scale education and awareness campaigns on menstrual health and 
                hygiene, reaching over 200,000 adolescent girls and women in rural India.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2007: Inception & Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Project Sitaare Foundation was founded with a vision to create equitable access to 
                health and development opportunities for underserved communities in India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;