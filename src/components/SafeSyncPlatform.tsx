import { Shield } from 'lucide-react';
import { useState, useEffect } from 'react';


const sections = [
  { title: 'Employee App', features: ['Panic button', 'GPS location sharing', 'Alert confirmation', 'Emergency status updates'], image: 'https://images.unsplash.com/photo-1512428559087-565fa5ce5e26?auto=format&fit=crop&q=80&w=800' },
  { title: 'Company Dashboard', features: ['Incident monitoring', 'Branch management', 'Reports', 'Emergency contacts'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { title: 'Responder Dashboard', features: ['Incoming emergency alerts', 'Live map location', 'Accept/reject incidents', 'Mark incidents resolved'], image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800' },
  { title: 'Super Admin Panel', features: ['Company onboarding', 'Analytics', 'Responder management', 'Incident oversight'], image: 'https://images.unsplash.com/photo-1573164713715-17761005a30e?auto=format&fit=crop&q=80&w=800' },
];

export default function SafeSyncPlatform() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    setIsImageLoading(true);
  }, [activeIdx]);

  return (
    <section id="platform" className="py-24 px-6 md:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-16">
            <span className="absolute -top-12 left-0 text-8xl font-black text-gray-100 z-0 select-none">PLATFORM OVERVIEW</span>
            <h2 className="relative z-10 font-display text-4xl text-primary font-bold mb-4">Platform Overview</h2>
            <div className="relative z-10 h-1.5 bg-secondary w-20 rounded-full" />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {sections.map((s, i) => (
                    <button key={i} onClick={() => setActiveIdx(i)} className={`p-6 border text-left shadow-sm transition-all rounded-2xl ${activeIdx === i ? 'bg-primary-container border-primary' : 'bg-white border-outline/20 hover:border-primary'}`}>
                        <h3 className={`text-xl font-bold mb-4 ${activeIdx === i ? 'text-white' : 'text-primary'}`}>{s.title}</h3>
                        <ul className="space-y-3">
                             {s.features.map(f => (
                                 <li key={f} className={`flex items-center gap-2 font-medium text-sm ${activeIdx === i ? 'text-white/90' : 'text-on-surface-variant'}`}>
                                     <span className={`w-2 h-2 rounded-full flex-shrink-0 ${activeIdx === i ? 'bg-white' : 'bg-red-600'}`} />
                                     {f}
                                 </li>
                             ))}
                        </ul>
                    </button>
                ))}
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6 items-center justify-center">
                <div className="relative w-full h-[400px] overflow-hidden shadow-xl bg-gray-100">
                  {isImageLoading && <div className="absolute inset-0 animate-pulse bg-gray-200" />}
                  <img 
                    src={sections[activeIdx].image} 
                    alt={sections[activeIdx].title} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsImageLoading(false)}
                  />
                </div>

            </div>
        </div>

      </div>
    </section>
  );
}
