import React from 'react';

const AlcoveReplica: React.FC = () => {
  return (
    <div className="relative w-full min-h-[90vh] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden font-sans text-white">
      
      {/* Background Star Field (Simulated with CSS shadows/gradients for simplicity) */}
      <div className="absolute inset-0 z-0">
        {/* We use a few scattered elements to simulate the stars from the design */}
        <div className="absolute top-[20%] left-[15%] w-0.5 h-0.5 bg-white opacity-40 rounded-full shadow-[0_0_2px_1px_rgba(255,255,255,0.2)]"></div>
        <div className="absolute top-[30%] left-[85%] w-0.5 h-0.5 bg-white opacity-30 rounded-full"></div>
        <div className="absolute top-[15%] right-[25%] w-1 h-1 bg-white opacity-20 rounded-full"></div>
        <div className="absolute bottom-[40%] left-[10%] w-0.5 h-0.5 bg-white opacity-25 rounded-full"></div>
        <div className="absolute top-[50%] right-[10%] w-0.5 h-0.5 bg-white opacity-30 rounded-full"></div>
        <div className="absolute top-[10%] left-[50%] w-0.5 h-0.5 bg-white opacity-20 rounded-full"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-2xl text-center mt-[-60px]">
        
        {/* The Glowing Icon */}
        <div className="mb-8 relative group cursor-pointer">
          <div className="w-[100px] h-[100px] bg-[#1a1a1a] rounded-[24px] border border-white/5 flex items-center justify-center shadow-2xl relative z-10 overflow-hidden">
             {/* Inner gradient/glow representing the arch */}
             <div className="w-12 h-16 bg-gradient-to-t from-[#ffb36b] to-[#ffe2b5] rounded-t-full shadow-[0_0_30px_5px_rgba(255,179,107,0.4)] opacity-90"></div>
             {/* Glass reflection effect */}
             <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
          </div>
          {/* Outer glow behind the icon */}
          <div className="absolute inset-0 bg-[#3b2d5f] blur-[50px] opacity-40 rounded-full z-0 transform translate-y-4"></div>
        </div>

        {/* Heading */}
        <h1 className="text-[42px] md:text-[60px] leading-[1.0] md:leading-[0.95] tracking-tight mb-6">
          <span className="font-[400]">A quiet place to</span><br/>
          <span className="font-serif italic font-[400] text-[44px] md:text-[64px]">see what's new.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[15px] md:text-[16px] text-[rgba(255,255,255,0.56)] max-w-[460px] leading-[1.5] mb-10 tracking-tight">
          Alcove is the best way to keep up with your favourite websites, newsletters, and subscriptions, without the noise.
        </p>

        {/* Subscription Form */}
        <div className="w-full max-w-[440px] h-[58px] bg-white rounded-[8px] flex items-center p-1.5 shadow-lg mb-8 transition-transform hover:scale-[1.01]">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 bg-transparent border-none outline-none text-black px-3 text-[15px] placeholder-gray-400 font-normal h-full"
          />
          <button className="bg-black text-white h-full px-6 rounded-[6px] text-[14px] font-medium hover:bg-gray-900 transition-colors">
            Subscribe
          </button>
        </div>

        {/* Footer Note */}
        <p className="text-[14px] text-[rgba(255,255,255,0.56)] tracking-tight">
          Sign up for early access. No spam. No jibberjabber.
        </p>
      </div>

      {/* Atmospheric Horizon Glow at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none z-0">
         {/* The curve of the planet/horizon */}
         <div className="absolute -bottom-[80%] left-[-50%] right-[-50%] h-[100%] bg-[#0a0a0a] rounded-[100%] shadow-[0_-40px_100px_-20px_rgba(255,255,255,0.1)] z-10"></div>
         {/* The glow behind it */}
         <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#1a1a2e] to-transparent opacity-60 z-0"></div>
      </div>

      {/* Bottom Copyright */}
      <div className="absolute bottom-8 z-20 flex gap-2 text-[12px] font-medium text-[#454547]">
        <span>© 2025</span>
        <span>—</span>
        <a href="#" className="hover:text-[#fecc86] transition-colors duration-300">@AlcoveNews</a>
      </div>

    </div>
  );
};

export default AlcoveReplica;