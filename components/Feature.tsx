import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: '🔍', title: 'Real-Time Monitoring', description: 'Monitor large transactions in real-time on Solana.' },
  { icon: '⚙️', title: 'Custom Alerts', description: 'Set transaction thresholds and track specific accounts.' },
  { icon: '🔒', title: 'Secure & Reliable', description: 'Your data and alerts are safe with our secure platform.' },
  // { icon: '🔍', title: 'Transaction Analysis', description: ' Gain a deeper understanding, helping you to assess risks.' },
  // { icon: '⚙️', title: 'Automated Reporting', description: 'Save time with automated insights, keeping you informed.' },
  // { icon: '🔒', title: 'Seamless Integration', description: 'Enhance your existing systems with powerful monitoring.' },

];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
    <section className="features px-0.25	py-20 bg-black-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-50">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card p-6 bg-black rounded-lg shadow-lg text-center">
            
              <h3 className="text-2xl font-bold mb-2 text-slate-50">{feature.title}</h3>
              <p className="text-slate-50">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
};

export default FeaturesSection;
