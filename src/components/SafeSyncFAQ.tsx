import { useState } from 'react';

const faq = [
  { q: 'How do I book a service on SafeSync?', a: 'Simply sign in to your SafeSync account, select the service you need, share your location, provide the necessary details, and submit your request. SafeSync will instantly connect you with the nearest available responder and provide real-time updates until assistance arrives.' },
  { q: 'Where is SafeSync App Available?', a: 'We are currently operating in Nairobi and expanding to other major cities.' },
  { q: 'Can I leave my House Key with my Service Provider?', a: 'No. Please note that our Terms of Service require you to be present when the service is being provided. Any exceptions to this rule are made at your own risk.' },
];

export default function SafeSyncFAQ() {
  
  return (
    <section className="py-24 px-6 md:px-32 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-display text-primary">
            Frequently Asked Questions
            <div className="h-1 bg-pink-500 w-40 mx-auto mt-2" />
        </h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-6">
          {faq.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">{item.q}</h3>
              <p className="text-gray-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
    </section>
  );
}
