import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-indigo-300 mb-4 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          v2.0 is now live
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
          Orchestrate your entire <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            digital ecosystem
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Stop juggling disconnected tools. Unify your team, data, and workflows in one beautiful, intuitive interface designed for growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2">
            Start Building Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold rounded-full hover:bg-white/10 transition-all">
            View Documentation
          </button>
        </div>
      </div>
      
      {/* Abstract Dashboard Preview */}
      <div className="mt-16 md:mt-24 w-full max-w-6xl mx-auto relative rounded-xl border border-white/10 bg-[#111] shadow-2xl overflow-hidden aspect-video">
         <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10" />
         <div className="w-full h-full flex items-center justify-center text-white/20 font-mono text-sm">
            [ Interactive Dashboard Preview ]
         </div>
      </div>
    </section>
  );
};

export default Hero;