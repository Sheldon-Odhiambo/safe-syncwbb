import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faq = [
  { q: 'How does SafeSync integrate with my current system?', a: 'SafeSync works as an overlay, integrating via API and mobile app.' },
  { q: 'Is user data encrypted?', a: 'Yes, we use AES-256 encryption for all data transmission and storage.' },
  { q: 'Can we customize the panic button actions?', a: 'Absolutely, you can tailor incident response protocols in the Company Dashboard.' },
];

export default function SafeSyncFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  
  const filteredFaq = faq.filter(item => item.q.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="py-24 px-6 md:px-32 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-4xl text-primary mb-2 font-bold">Frequently Asked Questions</h2>
        <div className="h-1.5 bg-secondary w-20 mb-8 rounded-full" />
        <input type="text" placeholder="Search questions..." value={search} onChange={(e) => setSearch(e.target.value)} 
               className="w-full p-4 mb-8 border border-outline/30 rounded-none text-sm" />
        <div className="space-y-4">
          {filteredFaq.map((item, i) => (
            <div key={i} className="border border-outline/20 rounded-none p-4">
              <button className="flex w-full justify-between items-center font-bold text-primary" onClick={() => setOpen(open === i ? null : i)}>
                {item.q}
                {open === i ? <ChevronUp /> : <ChevronDown />}
              </button>
              {open === i && <p className="mt-4 text-sm text-on-surface-variant font-medium">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
