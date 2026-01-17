import React from 'react';
import AlcoveReplica from './components/AlcoveReplica';
import ClickPilotSections from './components/ClickPilotSections';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      {/* Hero Section - The "Quiet Place" Replica */}
      <section className="relative z-20">
        <AlcoveReplica />
      </section>

      {/* The Rest of the Content - ClickPilot Replica */}
      <main className="relative z-10 bg-[#0a0a0a]">
        <ClickPilotSections />
      </main>
    </div>
  );
};

export default App;