import { ShieldCheck, Award, ClipboardCheck, HeartPulse } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: 'Ohio Dept of Health' },
  { icon: Award, label: 'CPI Certified' },
  { icon: ClipboardCheck, label: 'DODD Accredited' },
  { icon: HeartPulse, label: 'CANS Assessment' },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-border py-6">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6">
          Recognized By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {badges.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-foreground/60">
              <Icon size={20} className="text-brand-green" />
              <span className="text-sm font-semibold tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
