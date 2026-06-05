import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const baseStats = [
  { label: 'Services Provided', value: 12571, prefix: '+', suffix: '' },
  { label: 'Active Customers', value: 11567, prefix: '', suffix: '' },
  { label: 'Service Providers', value: 1568, prefix: '', suffix: '' },
  { label: 'App Downloads', value: 10600, prefix: '', suffix: '+' },
];

export default function SafeSyncStats() {
  const [stats, setStats] = useState(baseStats);

  useEffect(() => {
    const interval = setInterval(() => {
        setStats(prevStats => prevStats.map((stat, i) => {
            return {
                ...stat,
                value: stat.value + Math.floor(Math.random() * 3)
            };
        }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-6 -mt-24 relative z-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-4xl font-black text-red-900 mb-2 font-display tracking-tight">
                {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
