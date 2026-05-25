/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import SafeSyncNavbar from './components/SafeSyncNavbar';
import SafeSyncHero from './components/SafeSyncHero';
import SafeSyncHowItWorks from './components/SafeSyncHowItWorks';
import SafeSyncPlatform from './components/SafeSyncPlatform';
import SafeSyncIndustries from './components/SafeSyncIndustries';
import SafeSyncAbout from './components/SafeSyncAbout';
import SafeSyncFAQ from './components/SafeSyncFAQ';
import SafeSyncContactForm from './components/SafeSyncContactForm';
import SafeSyncFooter from './components/SafeSyncFooter';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="font-sans text-on-background">
      <ScrollProgressBar />
      <WhatsAppButton />
      <SafeSyncNavbar />
      <SafeSyncHero />
      <SafeSyncHowItWorks />
      <SafeSyncPlatform />
      <SafeSyncIndustries />
      <SafeSyncAbout />
      <SafeSyncFAQ />
      <SafeSyncContactForm />
      <SafeSyncFooter />
      <ScrollToTop />
    </div>
  );
}
