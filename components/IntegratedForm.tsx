import React from 'react';

const IntegratedForm: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-gray-400 mb-10">
          Join 10,000+ developers building the future. No credit card required for the free tier.
        </p>

        <form className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
              <input 
                type="text" 
                placeholder="Jane"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
            </div>
            <div className="text-left">
              <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
              <input 
                type="text" 
                placeholder="Doe"
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
            </div>
          </div>
          
          <div className="text-left mb-8">
            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="jane@company.com"
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
            />
          </div>

          <button className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
            Create Account
          </button>
          
          <p className="text-xs text-gray-500 mt-4">
            By clicking "Create Account", you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
};

export default IntegratedForm;