import React from 'react';
import { Zap, Shield, Globe } from 'lucide-react';

const ValueProps: React.FC = () => {
  const props = [
    {
      title: "Instant Analytics",
      description: "Get real-time insights into your performance metrics without complex setups. Decisions made easy.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      color: "from-yellow-500/20 to-orange-500/5"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance standards built-in. Your data safety is our top priority.",
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/5"
    },
    {
      title: "Global Scale",
      description: "Deploy to edge networks worldwide in seconds. Low latency for everyone, everywhere.",
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      color: "from-blue-500/20 to-indigo-500/5"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We've distilled complex infrastructure into three core pillars that drive success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.map((prop, idx) => (
            <div key={idx} className={`relative p-8 rounded-3xl bg-gradient-to-b ${prop.color} border border-white/5 hover:border-white/10 transition-colors group`}>
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {prop.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{prop.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;