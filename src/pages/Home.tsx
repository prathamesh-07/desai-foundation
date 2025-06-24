import React from 'react';
import { 
  HeroBanner, 
  ImpactNumbers, 
  MissionSection,
  FocusAreas,
  BeneficiaryStories,
  GetInvolved,
  NewsEvents
} from '@/components/home';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <HeroBanner />
      <ImpactNumbers />
      <MissionSection />
      <FocusAreas />
      <BeneficiaryStories />
      <GetInvolved />
      <NewsEvents />
    </div>
  );
};

export default Home;