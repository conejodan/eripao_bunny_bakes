import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StarGallery } from './components/StarGallery';
import { MenuSection } from './components/MenuSection';
import { ScheduleSection } from './components/ScheduleSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PastryModal } from './components/PastryModal';
import { PureCodeModal } from './components/PureCodeModal';
import { pastriesList } from './data/pastryData';
import { PastryItem } from './types';

export default function App() {
  const [selectedPastry, setSelectedPastry] = useState<PastryItem | null>(null);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D2422]">
      {/* 1. Fixed Navigation System */}
      <Navbar onOpenCodeModal={() => setIsCodeModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onExploreStar={() => {
          const el = document.getElementById('galeria');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />

        {/* 3. Star Products Visual Gallery */}
        <StarGallery
          pastries={pastriesList}
          onSelectPastry={(pastry) => setSelectedPastry(pastry)}
        />

        {/* 4. Cake Menu Section */}
        <MenuSection
          pastries={pastriesList}
          onSelectPastry={(pastry) => setSelectedPastry(pastry)}
        />

        {/* 5. Schedule & Opening Hours */}
        <ScheduleSection />

        {/* 6. Contact & Custom Orders */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer onOpenCodeModal={() => setIsCodeModalOpen(true)} />

      {/* Interactive Modals */}
      <PastryModal
        pastry={selectedPastry}
        onClose={() => setSelectedPastry(null)}
      />

      <PureCodeModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />
    </div>
  );
}
