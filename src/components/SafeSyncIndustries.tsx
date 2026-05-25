import { School, Hospital, Building2, Building, Factory, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const industries = [
  { icon: School, title: 'Schools', desc: 'Rapid response for campus safety.', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400' },
  { icon: Hospital, title: 'Hospitals', desc: 'Critical coordination.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400' },
  { icon: Building2, title: 'Real Estate', desc: 'Smart security.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400' },
  { icon: Building, title: 'Corporates', desc: 'Enterprise-grade safety.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400' },
  { icon: Factory, title: 'Factories', desc: 'Occupational safety.', img: 'https://images.unsplash.com/photo-1565515020117-6404396860d5?auto=format&fit=crop&q=80&w=400' },
  { icon: Calendar, title: 'Events', desc: 'High-density safety.', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=400' },
];

export default function SafeSyncIndustries() {
  return (
    <section id="industries" className="py-24 px-6 md:px-32 bg-surface-container-high">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl text-primary text-center mb-16 font-bold">Built for Every Environment</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-white rounded-none border border-outline/20 overflow-hidden transition-transform"
            >
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-8">
                <item.icon className="text-secondary mb-6 w-10 h-10" />
                <h4 className="font-display font-bold text-xl text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-on-surface-variant font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
