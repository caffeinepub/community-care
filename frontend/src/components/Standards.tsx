import { ShieldCheck, Award, ClipboardList, Stethoscope } from 'lucide-react';

const standards = [
  {
    icon: ShieldCheck,
    title: 'CPI Training',
    description: 'All staff are certified in Crisis Prevention Institute techniques for safe, trauma-informed support.',
  },
  {
    icon: Award,
    title: 'PPE Certified',
    description: 'Fully equipped with personal protective equipment and trained in immediate care and biosafety support.',
  },
  {
    icon: ClipboardList,
    title: 'CANS Assessment',
    description: 'Utilizing the Child and Adolescent Needs and Strengths tool to guide individualized care planning.',
  },
  {
    icon: Stethoscope,
    title: 'Medical Oversight',
    description: 'Licensed nursing staff provide ongoing health monitoring and clinical leadership across all programs.',
  },
];

export default function Standards() {
  return (
    <section id="standards" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Uncompromising Standards
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We don't just provide care, we provide specialized safety that families can trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-white border border-border shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-brand-green" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
