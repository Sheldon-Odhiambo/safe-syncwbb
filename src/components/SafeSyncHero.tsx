import { CheckCircle2 } from 'lucide-react';

export default function SafeSyncHero() {
  return (
    <section className="pt-32 pb-24 px-6 md:px-32 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-secondary/10 text-secondary font-semibold text-sm mb-6">
            <CheckCircle2 className="w-4 h-4" />
            <span>MISSION CRITICAL RELIABILITY</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-primary mb-6 leading-tight font-bold tracking-tighter">
            Real-Time Emergency Response for Modern Organizations
          </h1>
          <p className="text-lg text-on-surface-variant mb-10 max-w-xl">
            SafeSync helps companies respond faster to fire and medical emergencies through real-time alerts, GPS tracking, and seamless emergency coordination.
          </p>
          <div className="flex gap-4">
            <a href="#benefits" className="px-8 py-4 rounded-none bg-primary text-on-primary font-semibold text-lg hover:bg-opacity-90 transition-all text-center">Request Demo</a>
            <a href="#contact" className="px-8 py-4 rounded-none border-2 border-primary text-primary font-semibold text-lg hover:bg-surface-container transition-all text-center">Contact Us</a>
          </div>
        </div>
        <div className="relative">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJP1k3taGxww_EtSPBVF2i6wQEeAkpmGdZpJELXcI0fbts9wfrmexXSXD2g0Apx9o0H6uacVaKGeSwqfOEkhvWn3LXbjUJwPdU7MM5Ra3YTLOcyEjZORtM6ByD2HQ1uy_J_vIGAHnySxDIMjvIhNRqaWAwkjQM-ec-CXMB1_5TIStdd3-XkvL3iMPmcREjk0-EKXn-hrC3-saooXFXchl-l9wRAZj62m14A1Hd1nncB01fbeGe4sbJZCa_DD0jqArXU5nEr_kPs1Ej"
               alt="Emergency Dashboard"
               className="rounded-none shadow-2xl border border-outline/30 w-full"
          />
        </div>
      </div>
    </section>
  );
}
