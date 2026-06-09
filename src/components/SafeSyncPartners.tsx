import { useState } from 'react';
import { motion } from 'motion/react';

const partners = [
  { name: 'RedCross', logo: '/assets/redcross.jpeg' },
  { name: 'Ambulance', logo: '' },
  { name: 'Insurance', logo: '' },
  { name: 'SafetyCouncil', logo: '/assets/council.png' },
];

const PartnerLogo = ({ partner }: { partner: typeof partners[0] }) => {
  const [isError, setIsError] = useState(false);

  if (isError || !partner.logo) {
    return (
      <motion.div
        className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center relative overflow-hidden"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] animate-shimmer" />
      </motion.div>
    );
  }

  return (
    <motion.img 
      src={partner.logo} 
      alt={partner.name} 
      onError={() => setIsError(true)}
      className="w-20 h-20 object-cover rounded-full border-2 border-white shadow-lg grayscale group-hover:grayscale-0 transition-all duration-300"
      whileHover={{ scale: 1.1, rotate: 5 }}
    />
  );
};

export default function SafeSyncPartners() {
  return (
    <section className="py-24 px-6 md:px-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our Trusted Partners</h2>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" role="region" aria-label="Partner carousel">
          <motion.div
            className="flex gap-24 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            role="list"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center min-w-[180px] p-6 bg-white rounded-2xl shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all"
                role="listitem"
                aria-label={`Partner: ${partner.name}`}
              >
                <PartnerLogo partner={partner} />
                <span className="font-bold text-gray-900 text-sm whitespace-nowrap group-hover:text-pink-600 transition-colors mt-4">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="text-center mt-16">
          <a href="#contact" className="inline-block px-10 py-4 bg-black text-white font-bold hover:scale-105 transition-transform rounded-xl shadow-lg">
            Join Our Partnership Network
          </a>
        </div>
      </div>
    </section>
  );
}
