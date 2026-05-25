import { MousePointerClick, MapPin, BellRing, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: MousePointerClick, title: 'Trigger', desc: 'Employees trigger an alert instantly via the app or hardware button.' },
  { icon: MapPin, title: 'GPS Share', desc: 'Automatic precise location sharing for immediate responder dispatch.' },
  { icon: BellRing, title: 'Notify', desc: 'Operations and nearby responders receive multi-channel alerts.' },
  { icon: CheckCircle2, title: 'Resolve', desc: 'Real-time tracking of resolution with detailed incident reporting.' },
];

export default function SafeSyncHowItWorks() {
  return (
    <section id="benefits" className="py-24 px-6 md:px-32 bg-surface-container">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl text-primary font-bold mb-2">How it Works</h2>
        <div className="h-1.5 bg-secondary w-20 mb-16 rounded-full" />
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-none shadow-sm border border-outline/20">
              <div className="w-16 h-16 rounded-none bg-secondary/10 text-secondary flex items-center justify-center mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">{i + 1}. {step.title}</h3>
              <p className="text-sm text-on-surface-variant font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
