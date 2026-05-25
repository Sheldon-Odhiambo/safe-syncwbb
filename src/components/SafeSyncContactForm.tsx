import { useState } from 'react';

export default function SafeSyncContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
  const isFormValid = formData.name && isValidEmail(formData.email) && formData.message;

  return (
    <section id="contact" className="py-24 px-6 md:px-32 bg-surface-container-low">
      <div className="max-w-xl mx-auto bg-white p-12 shadow-sm border border-outline/20">
        <h2 className="font-display text-4xl text-primary font-bold mb-6">Send an Inquiry</h2>
        <div className="h-1.5 bg-secondary w-20 mb-8 rounded-full" />
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Sent!'); }}>
          <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full p-4 border border-outline/30 text-sm" />
          <input type="email" placeholder="Work Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-4 border border-outline/30 text-sm" />
          <textarea placeholder="Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full p-4 border border-outline/30 text-sm h-32" />
          <button type="submit" disabled={!isFormValid} className="w-full py-4 bg-primary text-on-primary font-bold font-display hover:opacity-90 disabled:bg-opacity-50">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
}
