import React, { useState } from 'react';

const ClickPilotSections: React.FC = () => {
  // Accordion state for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How will this help me make better thumbnails?",
      answer: "Thumbnails don't live in a vacuum. They are seen by viewers surrounded by tons of other videos. Previewing your thumbnails within YouTube's UI is the best way to see if your video is clickable and fix any issues early on."
    },
    {
      question: "Do you have an affiliate program?",
      answer: "Yes! You can apply to be an affiliate and you'll receive lifetime commissions on every subscription you help secure."
    },
    {
      question: "What can collaborators do?",
      answer: "Collaborators can preview any thumbnail/title in your project on the Preview page and comment on any of your thumbnails on the Comments page."
    },
    {
      question: "What's the difference in the Solo and Business plans?",
      answer: "Both plans allow you to preview all your thumbnails and titles. The Business plan allows you to share your project with other collaborators through the Comments page."
    }
  ];

  return (
    <div className="bg-black text-white font-sans w-full overflow-hidden">
      
      {/* Social Proof / Orbit Section */}
      <section className="text-center overflow-hidden pb-32 sm:pb-0 pt-20">
        <h3 className="text-3xl font-semibold sm:font-medium mb-36 sm:mb-8 px-4 mx-auto max-w-4xl">
          Powering the biggest channels in the world
        </h3>
        <div className="relative flex justify-center items-center h-[500px]">
          {/* Orbit Circles (Simulated) */}
          <div className="absolute w-[320px] h-[320px] rounded-full border border-white/5 animate-spin-slow" style={{animationDuration: '30s'}}></div>
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5 animate-spin-slow" style={{animationDuration: '45s'}}></div>

          {/* Floating Elements - Positioned absolutely to mimic the original design */}
          {/* MrBeast */}
          <div className="absolute top-[20%] left-[20%] md:left-[35%] flex gap-4 items-center rounded-full p-2.5 backdrop-blur-sm bg-gray-800/40 border border-white/10 transform hover:scale-105 transition-transform">
            <img src="https://ui-avatars.com/api/?name=Mr+Beast&background=random" alt="MrBeast" className="w-10 h-10 rounded-full" />
            <div className="text-left pr-3">
              <div className="font-semibold text-base flex items-center gap-2">
                MrBeast
                <i className="fa-solid fa-circle-check text-blue-400 text-xs"></i>
              </div>
              <div className="text-sm opacity-50">336M subscribers</div>
            </div>
          </div>

          {/* Red Bull */}
          <div className="absolute bottom-[20%] right-[10%] md:right-[30%] flex gap-4 items-center rounded-full p-2.5 backdrop-blur-sm bg-gray-800/40 border border-white/10 transform hover:scale-105 transition-transform">
             <img src="https://ui-avatars.com/api/?name=Red+Bull&background=random" alt="RedBull" className="w-10 h-10 rounded-full" />
            <div className="text-left pr-3">
              <div className="font-semibold text-base flex items-center gap-2">
                Red Bull
                <i className="fa-solid fa-circle-check text-blue-400 text-xs"></i>
              </div>
              <div className="text-sm opacity-50">17.6M subscribers</div>
            </div>
          </div>

          {/* Dude Perfect */}
          <div className="absolute bottom-[10%] left-[10%] md:left-[30%] flex gap-4 items-center rounded-full p-2.5 backdrop-blur-sm bg-gray-800/40 border border-white/10 transform hover:scale-105 transition-transform">
             <img src="https://ui-avatars.com/api/?name=Dude+Perfect&background=random" alt="DP" className="w-10 h-10 rounded-full" />
            <div className="text-left pr-3">
              <div className="font-semibold text-base flex items-center gap-2">
                Dude Perfect
                <i className="fa-solid fa-circle-check text-blue-400 text-xs"></i>
              </div>
              <div className="text-sm opacity-50">60.1M subscribers</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Insights Section */}
      <div id="features" className="mb-30 sm:mb-40 pt-24 sm:pt-40">
        <section className="px-4 text-center mb-30 sm:mb-40">
          <div className="text-center mb-6">
            <div className="inline-block bg-success/30 font-bold px-4 py-1.5 rounded-full text-[#48FF7F]">
              New
            </div>
          </div>
          <h3 className="text-center text-[2.5rem] leading-[1] font-semibold mx-auto max-w-[600px] mb-4 text-white">
            AI insights into strengths and flaws
          </h3>
          <p className="text-lg opacity-60 mb-10 max-w-lg mx-auto text-white">
            Discover potential problems with your thumbnails before they go live
          </p>
          <div className="relative text-left flex flex-col gap-4 justify-center items-center">
             {/* Mockup Image */}
            <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
               <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" alt="AI Insights" className="w-full h-auto opacity-80" />
            </div>

            {/* Floating Cards */}
            <div className="static lg:absolute top-16 left-[calc(50%-350px)] w-full max-w-md lg:max-w-[300px] flex gap-4 border-2 border-success bg-gray-900 rounded-2xl p-4 items-center text-gray-100 shadow-xl shadow-black/50">
              <i className="fa-solid fa-circle-check text-success text-2xl"></i>
              <span className="text-sm">High contrast between the subject and background creates a dramatic effect.</span>
            </div>
            
            <div className="static lg:absolute top-32 right-[calc(50%-350px)] w-full max-w-md lg:max-w-[300px] flex gap-4 border-2 border-error bg-gray-900 rounded-2xl p-4 items-center text-gray-100 shadow-xl shadow-black/50">
               <i className="fa-solid fa-circle-exclamation text-error text-2xl"></i>
               <span className="text-sm">The image compositing appears artificial, which could detract from impact.</span>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section id="preview" className="max-w-5xl mx-auto px-6 mb-32">
          <div className="flex gap-4 lg:gap-8">
            <div className="w-px bg-white/10 self-stretch overflow-hidden relative">
              <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-transparent to-primary-400/50 animate-pulse"></div>
            </div>
            <div className="flex-1">
              <div className="inline-block rounded-full font-bold px-3 py-1 bg-primary-400/20 text-primary-300 mb-4">
                Preview
              </div>
              <h3 className="text-[2.5rem] leading-[1] font-semibold max-w-[500px] mb-4 pr-4 text-white">
                Quickly preview thumbnails and titles.
              </h3>
              <p className="text-lg opacity-60 max-w-[516px] mb-10 pr-4 text-white">
                See what your thumbnail and titles will look like on Youtube
              </p>
              
              <div className="bg-gradient-to-r from-primary-500 to-primary-800 h-80 sm:h-[400px] md:h-140 rounded-tl-3xl rounded-bl-3xl lg:rounded-3xl relative overflow-hidden mb-5">
                <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop" alt="Preview Main" className="absolute top-12 left-12 rounded-2xl shadow-2xl max-w-2xl transform scale-90 origin-top-left border border-white/10" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-1000 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center">
                   <h4 className="text-lg font-medium mb-4 text-white">Shortcuts for lightning fast previewing</h4>
                   <div className="bg-gray-800 p-4 rounded-xl w-full h-32 flex items-center justify-center text-gray-500">
                      [Keyboard SVG Placeholder]
                   </div>
                </div>
                <div className="bg-gray-1000 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center">
                   <h4 className="text-lg font-medium mb-4 text-white">See your thumbnails in all their forms</h4>
                    <div className="bg-gray-800 p-4 rounded-xl w-full h-32 flex items-center justify-center text-gray-500">
                      [Views SVG Placeholder]
                   </div>
                </div>
                <div className="bg-gray-1000 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center">
                   <h4 className="text-lg font-medium mb-4 text-white">Preview directly on a mobile phone</h4>
                    <div className="bg-gray-800 p-4 rounded-xl w-full h-32 flex items-center justify-center text-gray-500">
                      [Mobile SVG Placeholder]
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section id="feedback" className="max-w-5xl mx-auto px-6 mb-32">
          <div className="flex gap-4 lg:gap-8">
            <div className="w-px bg-white/10 self-stretch overflow-hidden relative">
               <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-transparent to-yellow-400/50 animate-pulse"></div>
            </div>
            <div className="flex-1">
              <div className="inline-block rounded-full font-bold px-3 py-1 bg-yellow-400/20 text-yellow-400 mb-4">
                Feedback
              </div>
              <h3 className="text-[2.5rem] leading-[1] font-semibold max-w-[400px] mb-4 pr-4 text-white">
                Collaborate with your team.
              </h3>
              <p className="text-lg opacity-60 max-w-[600px] mb-10 pr-6 text-white">
                Invite your team or clients to view and comment on your thumbnails
              </p>
              
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-80 sm:h-[400px] rounded-tl-3xl rounded-bl-3xl lg:rounded-3xl relative overflow-hidden mb-5">
                 <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop" alt="Collaborate" className="absolute top-12 left-12 rounded-2xl shadow-2xl max-w-2xl transform scale-90 origin-top-left border border-white/10" />
              </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-1000 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center">
                   <h4 className="text-lg font-medium mb-4 text-white">Annotate directly on thumbnails</h4>
                   <div className="w-full h-20 bg-gray-800 rounded-lg opacity-50"></div>
                </div>
                <div className="bg-gray-1000 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center">
                   <h4 className="text-lg font-medium mb-4 text-white">Attach files and documents</h4>
                   <div className="w-full h-20 bg-gray-800 rounded-lg opacity-50"></div>
                </div>
                <div className="bg-gray-1000 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center">
                   <h4 className="text-lg font-medium mb-4 text-white">Organize work into projects</h4>
                   <div className="w-full h-20 bg-gray-800 rounded-lg opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gather Section */}
        <section id="gather" className="max-w-5xl mx-auto px-6 mb-32">
          <div className="flex gap-4 lg:gap-8">
            <div className="w-px bg-white/10 self-stretch overflow-hidden relative">
              <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-transparent to-pink-400/50 animate-pulse"></div>
            </div>
            <div className="flex-1">
              <div className="inline-block rounded-full font-bold px-3 py-1 bg-pink-400/20 text-pink-400 mb-4">
                Gather
              </div>
              <h3 className="text-[2.5rem] leading-[1] font-semibold max-w-[500px] mb-4 pr-4 text-white">
                Collect inspiration from proven success
              </h3>
              <p className="text-lg opacity-60 max-w-[600px] mb-10 pr-6 text-white">
                Save videos that inspire you from our library or directly from YouTube
              </p>
              
              <div className="bg-gradient-to-r from-pink-300 to-pink-500 h-80 sm:h-[400px] rounded-tl-3xl rounded-bl-3xl lg:rounded-3xl relative overflow-hidden mb-5">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" alt="Gather" className="absolute top-12 left-12 rounded-2xl shadow-2xl max-w-2xl transform scale-90 origin-top-left border border-white/10" />
              </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-1000 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center">
                   <h4 className="text-lg font-medium mb-4 text-white">Library of 40k+ viral thumbnails</h4>
                   <div className="w-full h-20 bg-gray-800 rounded-lg opacity-50"></div>
                </div>
                <div className="bg-gray-1000 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center">
                   <h4 className="text-lg font-medium mb-4 text-white">Find thumbnails with specific objects</h4>
                   <div className="w-full h-20 bg-gray-800 rounded-lg opacity-50"></div>
                </div>
                <div className="bg-gray-1000 border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center">
                   <h4 className="text-lg font-medium mb-4 text-white">Find visually similar thumbnails</h4>
                   <div className="w-full h-20 bg-gray-800 rounded-lg opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Reviews / Wall of Love */}
      <section className="px-4 mx-auto max-w-7xl mb-32">
        <h3 className="text-center font-bold text-[2.5rem] leading-[1] mb-6 relative flex justify-center pt-10 pb-10 text-white">
           <svg className="absolute -top-8 w-full max-w-72 text-gray-800" viewBox="0 0 283 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.03613 84.3388C1.03613 38.8766 36.4669 1.42627 80.9921 1.42627C105.222 1.42627 126.828 12.5983 141.436 30.0519C156.044 12.5983 177.65 1.42627 201.88 1.42627C246.405 1.42627 281.836 38.8766 281.836 84.3388C281.836 136.624 246.04 175.234 212.488 200.048C195.521 212.596 178.611 222.014 165.97 228.291C159.638 231.435 154.347 233.806 150.617 235.399C148.751 236.195 147.274 236.799 146.249 237.208L140.864 238.788C140.317 238.582 137.166 237.425 136.623 237.208C135.598 236.799 134.121 236.195 132.255 235.399C128.525 233.806 123.235 231.435 116.902 228.291C104.261 222.014 87.3509 212.596 70.3845 200.048C36.8324 175.234 1.03613 136.624 1.03613 84.3388Z" stroke="currentColor" strokeWidth="2" className="text-gray-800 opacity-30"></path>
           </svg>
           <span className="relative z-10">People love ClickPilot</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
           {/* Reviews mapping simulation */}
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <div key={i} className="bg-gray-1000 border border-white/5 rounded-3xl p-6 flex flex-col mb-4">
               <div className="flex items-center gap-4 mb-4">
                  <img src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} alt="User" className="w-12 h-12 rounded-full" />
                  <div>
                    <p className="font-semibold text-base text-white">Creator {i}</p>
                    <p className="font-semibold text-sm text-primary-400">@handle{i}</p>
                  </div>
               </div>
               <p className="opacity-60 mb-4 flex-1 text-gray-300">
                 "This tool completely changed how I approach thumbnails. It's an essential part of my workflow now."
               </p>
               <div className="flex text-yellow-400 gap-1 text-xs">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 text-center mb-32">
         <h3 className="text-center font-bold text-[2.5rem] leading-[1] mb-4 px-4 text-white">
            Choose your plan
         </h3>
         <p className="text-lg opacity-60 mb-10 max-w-xs mx-auto text-gray-400">
            Unlock the best thumbnail tool on the planet.
         </p>

         {/* Pricing Cards */}
         <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Solo Plan */}
            <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 max-w-sm w-full mx-auto md:mx-0 text-left relative overflow-hidden group hover:border-primary-500/50 transition-colors">
               <div className="text-primary-500 font-semibold text-2xl mb-4">Solo</div>
               <p className="opacity-60 mb-6 text-gray-400 text-sm">For solo youtubers who want the best previewing experience.</p>
               <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-primary-500 font-semibold text-2xl">$</span>
                  <span className="font-bold text-6xl text-white">5</span>
                  <span className="text-gray-500 text-lg">/month</span>
               </div>

               <div className="space-y-4 mb-8">
                  {['Compare Against Competitors', '40k+ Viral Video Library', 'Save Thumbnails to Boards', 'Create Multiple Projects'].map((item, idx) => (
                    <div key={idx} className="flex gap-3 text-sm text-gray-300">
                       <i className="fa-solid fa-check text-primary-500 mt-1"></i>
                       <span>{item}</span>
                    </div>
                  ))}
               </div>
               <button className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                  Get Started
               </button>
            </div>

            {/* Business Plan */}
             <div className="bg-gray-900 border border-white/10 rounded-3xl p-8 max-w-sm w-full mx-auto md:mx-0 text-left relative overflow-hidden group hover:border-yellow-400/50 transition-colors">
               <div className="text-yellow-400 font-semibold text-2xl mb-4">Business</div>
               <p className="opacity-60 mb-6 text-gray-400 text-sm">For youtube teams and professional thumbnail artists.</p>
               <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-yellow-400 font-semibold text-2xl">$</span>
                  <span className="font-bold text-6xl text-white">7</span>
                  <span className="text-gray-500 text-lg">/month</span>
               </div>

               <div className="space-y-4 mb-8">
                  {['Everything in Solo', 'Invite Unlimited Commenters', '3 Additional Editors', 'Download Full-Res'].map((item, idx) => (
                    <div key={idx} className="flex gap-3 text-sm text-gray-300">
                       <i className="fa-solid fa-check text-yellow-400 mt-1"></i>
                       <span>{item}</span>
                    </div>
                  ))}
               </div>
               <button className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                  Get Started
               </button>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 mx-auto max-w-2xl mb-32">
         <h3 className="font-bold text-[2.5rem] mb-8 text-center md:text-left text-white">FAQs</h3>
         <div className="space-y-4">
            {faqs.map((faq, idx) => (
               <div key={idx} className="bg-gray-1000 border border-white/10 rounded-2xl overflow-hidden">
                  <button onClick={() => toggleFaq(idx)} className="flex justify-between items-center w-full py-4 px-5 text-left text-white hover:bg-white/5 transition-colors">
                     <span className="font-semibold text-lg opacity-90">{faq.question}</span>
                     <i className={`fa-solid fa-caret-down transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}></i>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-40 py-4' : 'max-h-0'}`}>
                     <p className="px-5 text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-1000 border-t border-gray-800/50 px-8 py-16 text-gray-300 text-sm">
         <div className="max-w-6xl mx-auto flex flex-wrap gap-12 justify-center sm:justify-between">
            <div className="max-w-xs text-center sm:text-left">
               <h4 className="font-semibold text-base mb-2 text-white">ClickPilot</h4>
               <p className="opacity-50">Thumbnail previewing, inspiration, and collaboration built to create phenomenal YouTube thumbnails.</p>
            </div>
            
            <div className="flex gap-4 items-center">
               <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"><i className="fa-brands fa-youtube"></i></a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"><i className="fa-brands fa-twitter"></i></a>
               <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"><i className="fa-brands fa-instagram"></i></a>
            </div>

            <div className="text-center sm:text-right">
               <p className="opacity-30 mb-2">© 2025 ClickPilot</p>
               <div className="flex gap-4 opacity-50 justify-center sm:justify-end">
                  <a href="#" className="hover:underline">Privacy</a>
                  <a href="#" className="hover:underline">Terms</a>
               </div>
            </div>
         </div>
      </footer>

    </div>
  );
};

export default ClickPilotSections;