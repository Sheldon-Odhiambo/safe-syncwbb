import { ShieldCheck, Mail, Phone, MessageSquare, Play } from 'lucide-react';

export default function SafeSyncFooter() {
  return (
    <footer className="bg-primary-container text-white/80 py-16 px-6 md:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex items-center text-white cursor-pointer">
  <img
    src="/assets/logo2.png"
    alt="SafeSync Logo"
    className="w-16 h-16 object-contain"
  />
</div>
          <p className="text-sm max-w-xs">Mission-critical reliability for modern organizations.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
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
          <div className="flex flex-col gap-3">
             <span className="font-bold text-white font-display">Get the App</span>
             <a href="https://play.google.com/store/apps/details?id=com.safesync" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                 <Play className="w-4 h-4" /> Google Play
             </a>
             <a href="https://apps.apple.com/app/safesync" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                 <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.58-3.13C2.39 15.5 1.77 11.23 3.54 8.35 4.5 6.78 6.13 5.82 7.82 5.82c1.33 0 2.5.89 3.29.89.8 0 2.22-1.12 3.73-1.12 2.6.03 3.51 1.76 3.51 1.76l-.02.01c-.96.58-1.55 1.63-1.55 2.76 0 1.83 1.55 2.68 1.61 2.71-.08.2-.56 1.95-1.99 4.05zM12.01 4.54c.66-.79 1.1-1.89.98-2.99-1.01.04-2.24.67-2.97 1.55-.63.74-1.13 1.86-.98 2.96 1.14.09 2.31-.53 2.97-1.52z"/></svg>
                 App Store
             </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-xs text-center">
        &copy; 2026 SafeSync Operations. All rights reserved.
      </div>
    </footer>
  );
}
