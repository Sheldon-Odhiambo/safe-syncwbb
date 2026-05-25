import { motion } from 'motion/react';

export default function SafeSyncAbout() {
  return (
    <section id="about" className="py-24 px-6 md:px-32 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl text-primary font-bold mb-4">Our Mission</h2>
          <div className="h-1.5 bg-secondary w-20 mb-6 rounded-full" />
          <p className="text-lg text-on-surface-variant font-medium mb-6">
            SafeSync was founded on a simple premise: in an emergency, every second counts. We build technologies that bridge the gap between panic and resolution, empowering organizations with real-time visibility, automated alerts, and seamless coordination.
          </p>
          <p className="text-lg text-on-surface-variant font-medium">
            We are dedicated to building a safer future for workplaces, schools, and cities across the globe through relentless innovation and mission-critical reliability.
          </p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-none overflow-hidden shadow-xl"
        >
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" alt="Team" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
}
