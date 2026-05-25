import { ShieldCheck, Mail, Phone, MessageSquare } from 'lucide-react';

export default function SafeSyncFooter() {
  return (
    <footer className="bg-primary-container text-white/80 py-16 px-6 md:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-white">
            <ShieldCheck className="w-8 h-8" />
            <span className="text-xl font-bold font-display">SafeSync</span>
          </div>
          <p className="text-sm max-w-xs">Mission-critical reliability for modern organizations.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
          <div className="flex flex-col gap-3">
             <span className="font-bold text-white font-display">Platform</span>
             <a href="#platform" className="hover:text-white">Overview</a>
             <a href="#benefits" className="hover:text-white">Benefits</a>
          </div>
          <div className="flex flex-col gap-3">
             <span className="font-bold text-white font-display">Legal</span>
             <a href="#" className="hover:text-white">Privacy</a>
             <a href="#" className="hover:text-white">Terms</a>
          </div>
          <div className="flex flex-col gap-3">
             <span className="font-bold text-white font-display">Support</span>
             <a href="#contact" className="hover:text-white">Contact Us</a>
             <a href="#" className="hover:text-white">Support Portal</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-xs text-center">
        &copy; 2026 SafeSync Operations. All rights reserved.
      </div>
    </footer>
  );
}
