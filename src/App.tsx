import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import OurTeam from './pages/OurTeam';
import WhatWeDo from './pages/WhatWeDo';
import Health from './pages/Health';
import Livelihood from './pages/Livelihood';
import MenstrualEquity from './pages/MenstrualEquity';
import ClimateAction from './pages/ClimateAction';
import BeneficiaryStories from './pages/BeneficiaryStories';
import NewsEvents from './pages/NewsEvents';
import OurImpact from './pages/OurImpact';
import TakeAction from './pages/TakeAction';
import Donate from './pages/Donate';
import GetInvolved from './pages/GetInvolved';
import PartnerWithUs from './pages/PartnerWithUs';
import IndiaSite from './pages/IndiaSite';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/health" element={<Health />} />
              <Route path="/livelihood" element={<Livelihood />} />
              <Route path="/menstrual-equity" element={<MenstrualEquity />} />
              <Route path="/climate-action" element={<ClimateAction />} />
              <Route path="/beneficiary-stories" element={<BeneficiaryStories />} />
              <Route path="/news-events" element={<NewsEvents />} />
              <Route path="/our-impact" element={<OurImpact />} />
              <Route path="/take-action" element={<TakeAction />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/partner-with-us" element={<PartnerWithUs />} />
              <Route path="/india-site" element={<IndiaSite />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.main>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;