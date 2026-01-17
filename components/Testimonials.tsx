import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-lg opacity-30" />
            <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-[4/3]">
              <img 
                src="https://picsum.photos/800/600?grayscale" 
                alt="Workspace" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div>
                  <p className="text-white font-medium">"This platform revolutionized our workflow."</p>
                  <p className="text-gray-400 text-sm mt-1">Acme Corp HQ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Trusted by builders</h2>
            
            <div className="space-y-6">
              <blockquote className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-lg text-gray-300 italic mb-4">
                  "I was skeptical at first, but the speed at which we can now deploy features is frankly ridiculous. It's the integrated toolchain we've always dreamed of."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://picsum.photos/50/50?random=1" 
                    alt="User" 
                    className="w-10 h-10 rounded-full border border-white/20"
                  />
                  <div>
                    <div className="text-white font-semibold">Sarah Jenkins</div>
                    <div className="text-sm text-gray-500">CTO, TechFlow</div>
                  </div>
                </div>
              </blockquote>

              <blockquote className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-lg text-gray-300 italic mb-4">
                  "The ROI was visible in the first week. The analytics dashboard alone is worth the subscription price."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="https://picsum.photos/50/50?random=2" 
                    alt="User" 
                    className="w-10 h-10 rounded-full border border-white/20"
                  />
                  <div>
                    <div className="text-white font-semibold">Marcus Chen</div>
                    <div className="text-sm text-gray-500">Product Lead, Horizon</div>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;