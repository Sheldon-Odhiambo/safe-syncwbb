/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import SafeSyncNavbar from './components/SafeSyncNavbar';
import SafeSyncHero from './components/SafeSyncHero';
import SafeSyncStats from './components/SafeSyncStats';
import { motion } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';

import SafeSyncHowItWorks from './components/SafeSyncHowItWorks';
import SafeSyncPlatform from './components/SafeSyncPlatform';
import SafeSyncIndustries from './components/SafeSyncIndustries';
import SafeSyncPartners from './components/SafeSyncPartners';
import InsurancePackages from './components/InsurancePackages';
import SafeSyncAbout from './components/SafeSyncAbout';
import SafeSyncFAQ from './components/SafeSyncFAQ';
import SafeSyncContactForm from './components/SafeSyncContactForm';
import SafeSyncFooter from './components/SafeSyncFooter';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import WhatsAppButton from './components/WhatsAppButton';
import ChatBot from './components/ChatBot';

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <LanguageProvider>
      <div className="font-sans text-on-background">
        <ScrollProgressBar />
        <WhatsAppButton />
        <ChatBot />
        <SafeSyncNavbar />
        <SafeSyncHero />
        <AnimationWrapper><SafeSyncStats /></AnimationWrapper>

        <AnimationWrapper><SafeSyncHowItWorks /></AnimationWrapper>
        <AnimationWrapper><SafeSyncPlatform /></AnimationWrapper>
        <AnimationWrapper><SafeSyncIndustries /></AnimationWrapper>
        <AnimationWrapper><SafeSyncPartners /></AnimationWrapper>
        <AnimationWrapper><InsurancePackages /></AnimationWrapper>
        <AnimationWrapper><SafeSyncAbout /></AnimationWrapper>
        <AnimationWrapper><SafeSyncFAQ /></AnimationWrapper>
        <AnimationWrapper><SafeSyncContactForm /></AnimationWrapper>
        <SafeSyncFooter />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}
