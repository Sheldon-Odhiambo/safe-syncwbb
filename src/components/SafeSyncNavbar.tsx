import { ShieldCheck, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { languages } from '../i18n';

export default function SafeSyncNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-outline-variant">
      <div className="flex items-center justify-between px-6 md:px-32 h-16">
    <a href="#" className="flex items-center ml-2">
  <img
    src="/assets/safesync-logo.png"
    alt="SafeSync Logo"
    className="w-18 h-18 object-contain a"
  />
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
          <div className="relative">
            <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 hover:bg-gray-200 transition-colors">
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-semibold uppercase">{language}</span>
              <ChevronDown className={`w-3 h-3 text-gray-600 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-outline-variant flex flex-col py-2 min-w-[120px]">
                {languages.map((lang) => (
                  <button key={lang} onClick={() => { setLanguage(lang); setIsLangMenuOpen(false); }} className={`px-4 py-2 text-sm font-semibold uppercase hover:bg-gray-50 text-left ${language === lang ? 'text-primary' : 'text-gray-700'}`}>
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a href="#benefits" className="hidden md:block px-6 py-2 rounded-full bg-primary text-on-primary font-semibold hover:bg-opacity-90">Demo</a>
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
          <a href="#benefits" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-2 rounded-full bg-primary text-on-primary font-semibold text-center hover:bg-opacity-90">Demo</a>
        </div>
      )}
    </nav>
  );
}
