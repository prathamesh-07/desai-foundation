import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rose-950 via-pink-900 to-rose-900 text-white relative overflow-hidden dark:from-gray-950 dark:via-gray-800 dark:to-gray-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-15 dark:opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full blur-xl animate-pulse dark:from-purple-400 dark:to-blue-500"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-fuchsia-400 to-pink-500 rounded-full blur-xl animate-pulse delay-1000 dark:from-yellow-400 dark:to-orange-500"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-lg animate-pulse delay-500 dark:from-green-400 dark:to-teal-500"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-r from-pink-300 to-fuchsia-400 rounded-full blur-lg animate-pulse delay-700 dark:from-red-400 dark:to-purple-400"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pink-300 rounded-full animate-pulse dark:bg-gray-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6 group">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 via-rose-500 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 ease-out dark:from-blue-400 dark:via-purple-500 dark:to-pink-500">
                  <Heart className="w-7 h-7 text-white drop-shadow-sm animate-pulse" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-500 to-fuchsia-500 rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity duration-300 dark:from-blue-400 dark:via-purple-500 dark:to-pink-500"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white via-pink-100 to-rose-200 bg-clip-text text-transparent tracking-tight dark:from-white dark:to-gray-300">
                  Desai
                </h2>
                <p className="text-sm text-pink-300 font-medium tracking-wide dark:text-indigo-300">Foundation Trust</p>
              </div>
            </div>
            <p className="text-rose-100 text-sm leading-relaxed font-light dark:text-gray-300">
              Dedicated to empowering communities through comprehensive health, livelihood, 
              menstrual equity, and climate action initiatives across India.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, color: 'hover:text-pink-300 hover:bg-pink-500/20 dark:hover:text-blue-400 dark:hover:bg-white/10' },
                { Icon: Twitter, color: 'hover:text-rose-300 hover:bg-rose-500/20 dark:hover:text-sky-400 dark:hover:bg-white/10' },
                { Icon: Instagram, color: 'hover:text-fuchsia-300 hover:bg-fuchsia-500/20 dark:hover:text-pink-400 dark:hover:bg-white/10' },
                { Icon: Linkedin, color: 'hover:text-pink-400 hover:bg-pink-600/20 dark:hover:text-blue-500 dark:hover:bg-white/10' }
              ].map(({ Icon, color }, index) => (
                <a 
                  key={index}
                  href="#" 
                  className={`text-rose-300 ${color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 p-2 rounded-full backdrop-blur-sm border border-pink-400/20 dark:text-gray-400 dark:border-transparent`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white via-pink-100 to-rose-200 bg-clip-text text-transparent relative dark:from-white dark:to-gray-300">
              Quick Links
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-500 rounded-full shadow-lg shadow-pink-500/30 dark:from-indigo-400 dark:to-purple-500 dark:shadow-none"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/about", text: "About Us" },
                { to: "/what-we-do", text: "What We Do" },
                { to: "/our-impact", text: "Our Impact" },
                { to: "/news-events", text: "News & Events" },
                { to: "/contact", text: "Contact Us" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-rose-200 hover:text-white transition-all duration-300 text-sm font-light hover:font-normal relative group inline-block hover:translate-x-1 dark:text-gray-300 dark:hover:text-white"
                  >
                    <span className="relative z-10">{link.text}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 group-hover:w-full transition-all duration-300 ease-out shadow-sm shadow-pink-400/50 dark:from-indigo-400 dark:to-purple-500 dark:shadow-none"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white via-rose-100 to-pink-200 bg-clip-text text-transparent relative dark:from-white dark:to-gray-300">
              Our Programs
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-fuchsia-500 rounded-full shadow-lg shadow-rose-500/30 dark:from-pink-400 dark:to-red-500 dark:shadow-none"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/health", text: "Health" },
                { to: "/livelihood", text: "Livelihood" },
                { to: "/menstrual-equity", text: "Menstrual Equity" },
                { to: "/climate-action", text: "Climate Action" },
                { to: "/beneficiary-stories", text: "Success Stories" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-rose-200 hover:text-white transition-all duration-300 text-sm font-light hover:font-normal relative group inline-block hover:translate-x-1 dark:text-gray-300 dark:hover:text-white"
                  >
                    <span className="relative z-10">{link.text}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 group-hover:w-full transition-all duration-300 ease-out shadow-sm shadow-rose-400/50 dark:from-pink-400 dark:to-red-500 dark:shadow-none"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white via-fuchsia-100 to-pink-200 bg-clip-text text-transparent relative dark:from-white dark:to-gray-300">
              Contact Info
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-500 rounded-full shadow-lg shadow-fuchsia-500/30 dark:from-green-400 dark:to-blue-500 dark:shadow-none"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-pink-400/20 to-rose-500/20 backdrop-blur-sm group-hover:from-pink-400/30 group-hover:to-rose-500/30 transition-all duration-300 border border-pink-400/20 dark:from-green-400/20 dark:to-blue-500/20 dark:hover:from-green-400/30 dark:hover:to-blue-500/30 dark:border-transparent">
                  <MapPin className="w-5 h-5 text-pink-300 flex-shrink-0 dark:text-green-400" />
                </div>
                <p className="text-rose-100 text-sm font-light leading-relaxed dark:text-gray-300">
                  123 Foundation Street<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-rose-400/20 to-fuchsia-500/20 backdrop-blur-sm group-hover:from-rose-400/30 group-hover:to-fuchsia-500/30 transition-all duration-300 border border-rose-400/20 dark:from-blue-400/20 dark:to-purple-500/20 dark:hover:from-blue-400/30 dark:hover:to-purple-500/30 dark:border-transparent">
                  <Phone className="w-5 h-5 text-rose-300 flex-shrink-0 dark:text-blue-400" />
                </div>
                <p className="text-rose-100 text-sm font-light dark:text-gray-300">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-400/20 to-pink-500/20 backdrop-blur-sm group-hover:from-fuchsia-400/30 group-hover:to-pink-500/30 transition-all duration-300 border border-fuchsia-400/20 dark:from-pink-400/20 dark:to-red-500/20 dark:hover:from-pink-400/30 dark:hover:to-red-500/30 dark:border-transparent">
                  <Mail className="w-5 h-5 text-fuchsia-300 flex-shrink-0 dark:text-pink-400" />
                </div>
                <p className="text-rose-100 text-sm font-light dark:text-gray-300">info@desaifoundation.org</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gradient-to-r from-transparent via-pink-400/30 to-transparent relative dark:via-gray-700 dark:shadow-none">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent shadow-sm shadow-pink-400/50 dark:via-indigo-400 dark:shadow-none"></div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-rose-200 text-sm font-light dark:text-gray-400">
              © 2024 Desai Foundation Trust. All rights reserved.
            </p>
            <div className="flex space-x-8">
              {[
                { to: "#", text: "Privacy Policy" },
                { to: "#", text: "Terms of Service" },
                { to: "#", text: "Cookie Policy" }
              ].map((link, index) => (
                <Link 
                  key={index}
                  to={link.to} 
                  className="text-rose-300 hover:text-white text-sm font-light transition-all duration-300 relative group dark:text-gray-400 dark:hover:text-white"
                >
                  <span className="relative z-10">{link.text}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-pink-400 to-rose-400 group-hover:w-full transition-all duration-300 ease-out shadow-sm shadow-pink-400/50 dark:from-indigo-400 dark:to-purple-500 dark:shadow-none"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay with enhanced pink glow */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-500 via-rose-400 to-fuchsia-500 shadow-lg shadow-pink-500/50 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 dark:shadow-none"></div>
    </footer>
  );
};

export default Footer;