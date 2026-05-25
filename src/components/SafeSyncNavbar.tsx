import { ShieldCheck, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function SafeSyncNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-outline-variant">
      <div className="flex items-center justify-between px-6 md:px-32 h-16">
        <a href="#" className="flex items-center gap-2">
            <ShieldCheck className="text-primary w-8 h-8" />
            <span className="text-2xl font-display font-bold text-primary tracking-tight">SafeSync</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Platform', href: '#platform' },
            { name: 'Industries', href: '#industries' },
            { name: 'Benefits', href: '#benefits' },
            { name: 'About', href: '#about' },
          ].map(item => (
            <a key={item.name} href={item.href} className="text-on-surface-variant font-medium hover:text-secondary transition-colors">
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <a href="#benefits" className="hidden md:block px-6 py-2 rounded-none bg-primary text-on-primary font-semibold hover:bg-opacity-90">Demo</a>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant p-6 flex flex-col gap-4">
          {[
            { name: 'Platform', href: '#platform' },
            { name: 'Industries', href: '#industries' },
            { name: 'Benefits', href: '#benefits' },
            { name: 'About', href: '#about' },
          ].map(item => (
            <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface-variant font-medium hover:text-secondary transition-colors">
              {item.name}
            </a>
          ))}
          <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2 rounded-none bg-primary text-on-primary font-semibold text-center hover:bg-opacity-90">Demo</a>
        </div>
      )}
    </nav>
  );
}
