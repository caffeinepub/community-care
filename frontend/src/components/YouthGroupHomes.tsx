import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const bullets = [
  'Certified CANS Assessments',
  'Safe, Structured Living Environments',
  'Crisis-Intervention Trained Staff',
];

export default function YouthGroupHomes() {
  return (
    <section id="youth" className="bg-brand-green-banner overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[420px]">
          {/* Left text */}
          <div className="py-14 lg:py-20 pr-0 lg:pr-12 flex flex-col justify-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/60 mb-4">
              New Expansion 2025
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Youth Group Homes &{' '}
              <br className="hidden lg:block" />
              Emergency Respite
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-md">
              We've launched dedicated group home services for children, focusing on individual growth and social stability. Our emergency respite placement offers immediate, nurturing support during family crises.
            </p>
            <ul className="space-y-2 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-white/90 text-sm">
                  <CheckCircle2 size={16} className="text-white/70 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="rounded-pill bg-brand-highlight hover:bg-brand-highlight/90 text-white w-fit px-7 text-sm font-semibold"
            >
              <a href="#contact">Learn About Youth Care</a>
            </Button>
          </div>

          {/* Right image */}
          <div className="relative hidden lg:block">
            <img
              src="/assets/generated/youth-group-home.dim_800x500.png"
              alt="Youth group home environment"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green-banner/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
