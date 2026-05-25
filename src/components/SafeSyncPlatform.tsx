import { Smartphone, Monitor, Headset } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const tabs = [
  { id: 'employee', icon: Smartphone, title: 'Employee App', desc: 'Instant panic button and safety tools for field and office staff.', img: 'https://images.unsplash.com/photo-1512428559087-565fa5ce5e26?auto=format&fit=crop&q=80&w=800' },
  { id: 'dashboard', icon: Monitor, title: 'Company Dashboard', desc: 'Centralized monitoring for security and HR teams.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { id: 'responder', icon: Headset, title: 'Responder Panel', desc: 'Live incident management for emergency response teams.', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
];

export default function SafeSyncPlatform() {
  const [active, setActive] = useState('employee');
  const activeTab = tabs.find(t => t.id === active)!;

  return (
    <section id="platform" className="py-24 px-6 md:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl text-primary mb-2 font-bold">The Unified Platform</h2>
        <div className="h-1.5 bg-secondary w-20 mb-16 rounded-full" />
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 flex flex-col gap-4">
            {tabs.map(tab => (
              <button key={tab.id} onClick={() => setActive(tab.id)} 
                      className={`p-6 text-left rounded-none transition-all ${active === tab.id ? 'bg-primary-container text-white' : 'hover:bg-surface-container'}`}>
                <div className="flex items-center gap-3 mb-2 font-display font-bold text-lg">
                  <tab.icon />
                  {tab.title}
                </div>
                <p className="text-sm opacity-80">{tab.desc}</p>
              </button>
            ))}
          </div>
          <div className="md:w-2/3 border border-outline/20 rounded-none p-12 bg-surface-container/50">
            <AnimatePresence mode="wait">
              <motion.div 
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <img src={activeTab.img} alt={activeTab.title} className="w-full h-80 object-cover shadow-lg" />
                <div className="space-y-4">
                  <h3 className="font-display text-3xl font-bold text-primary">{activeTab.title}</h3>
                  <p className="text-on-surface-variant font-medium text-lg">{activeTab.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
